/**
 * ImgBB Image Upload Service
 * Handles image uploads to ImgBB API
 */

const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
const IMGBB_API_URL = "https://api.imgbb.com/1/upload";

export interface ImgBBResponse {
  success: boolean;
  message?: string;
  error?: {
    message: string;
    code: number;
  };
  image?: {
    filename: string;
    name: string;
    mime: string;
    extension: string;
    url: string;
    display_url: string;
    size: number;
    time: number;
    expiration: number;
    image: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
      display_url: string;
      size: number;
      time: number;
      expiration: number;
    };
    thumb: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
      display_url: string;
      size: number;
      time: number;
      expiration: number;
    };
    medium: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
      display_url: string;
      size: number;
      time: number;
      expiration: number;
    };
    delete_url: string;
  };
  status: number;
}

/**
 * Upload image file to ImgBB
 * @param file - Image file to upload
 * @returns Promise with ImgBB response containing image URL
 */
export async function uploadToImgBB(file: File): Promise<string> {
  if (!IMGBB_API_KEY) {
    throw new Error("ImgBB API key is not configured");
  }

  // Validate file size (max 32MB for ImgBB)
  const MAX_FILE_SIZE = 32 * 1024 * 1024;
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File size must be less than 32MB");
  }

  // Validate file type
  const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error("Only JPEG, PNG, GIF, and WebP images are allowed");
  }

  const formData = new FormData();
  formData.append("image", file);
  formData.append("expiration", "15552000"); // 6 months

  try {
    console.log("Starting upload to ImgBB...");
    console.log("File:", file.name, file.type, file.size);
    console.log("API URL:", `${IMGBB_API_URL}?key=${IMGBB_API_KEY.substring(0, 5)}...`);

    const response = await fetch(`${IMGBB_API_URL}?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData,
    });

    const text = await response.text();
    console.log("Raw Response:", text);

    let data: any;
    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error(`Invalid JSON response: ${text.substring(0, 100)}`);
    }

    console.log("ImgBB Response Status:", response.status);
    console.log("ImgBB Response Data:", data);

    if (!response.ok) {
      const errorMsg = data?.error?.message || data?.message || "Upload failed";
      throw new Error(`ImgBB Error (${response.status}): ${errorMsg}`);
    }

    if (!data?.success) {
      throw new Error(`Upload failed: success=${data?.success}`);
    }

    // Try to get URL from different possible response structures
    const imageUrl = data?.data?.url || data?.image?.url || data?.url;

    if (!imageUrl) {
      console.error("ImgBB Full Response:", JSON.stringify(data, null, 2));
      throw new Error(`No image URL in response. Response keys: ${Object.keys(data || {}).join(", ")}`);
    }

    console.log("Upload successful:", imageUrl);
    return imageUrl;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Image upload error: ${error.message}`);
    }
    throw new Error("Failed to upload image to ImgBB");
  }
}

/**
 * Handle file selection and upload
 * @param event - File input change event
 * @param onSuccess - Callback with image URL
 * @param onError - Error callback
 */
export async function handleImageUpload(
  event: React.ChangeEvent<HTMLInputElement>,
  onSuccess: (url: string) => void,
  onError: (error: string) => void
): Promise<void> {
  const file = event.target.files?.[0];

  if (!file) {
    onError("No file selected");
    return;
  }

  try {
    const imageUrl = await uploadToImgBB(file);
    onSuccess(imageUrl);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    onError(errorMessage);
  }
}
