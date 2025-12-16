"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogWriteSchema, type BlogWriteInput } from "@/lib/validators";
import { createSlug } from "@/lib/utils";
import { uploadToImgBB } from "@/lib/imgbb";
import styles from "./BlogEditor.module.scss";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface BlogEditorProps {
  blogId?: string;
  initialData?: Partial<BlogWriteInput>;
  mode: "create" | "edit";
}

export default function BlogEditor({ blogId, initialData, mode }: BlogEditorProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [tagsInput, setTagsInput] = useState(initialData?.tags?.join(", ") ?? "");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [uploadProgress, setUploadProgress] = useState<{ uploading: boolean; fileName?: string }>({ uploading: false });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<BlogWriteInput>({
    resolver: zodResolver(blogWriteSchema),
    defaultValues: {
      id: initialData?.id,
      title: initialData?.title ?? "",
      slug: initialData?.slug ?? "",
      banner: initialData?.banner ?? "",
      excerpt: initialData?.excerpt ?? "",
      tags: initialData?.tags ?? [],
      content: initialData?.content ?? "",
      published: initialData?.published ?? false
    }
  });

  const titleValue = watch("title");
  const contentValue = watch("content");

  useEffect(() => {
    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    setValue("tags", tags, { shouldValidate: true, shouldDirty: true });
  }, [tagsInput, setValue]);

  const handleGenerateSlug = () => {
    if (!titleValue) return;
    const slug = createSlug(titleValue);
    setValue("slug", slug, { shouldValidate: true, shouldDirty: true });
  };

  const handleBannerImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadProgress({ uploading: true, fileName: file.name });
    setMessage(null);

    try {
      const imageUrl = await uploadToImgBB(file);
      setValue("banner", imageUrl, { shouldValidate: true, shouldDirty: true });
      setMessage({ type: "success", text: "Banner image uploaded successfully" });
      setUploadProgress({ uploading: false });
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Failed to upload banner image";
      console.error("Image upload error:", error);
      setMessage({ type: "error", text: errorMsg });
      setUploadProgress({ uploading: false });
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit: SubmitHandler<BlogWriteInput> = async (values) => {
    setMessage(null);

    const url = blogId ? `/api/admin/blogs/${blogId}` : "/api/admin/blogs";
    const method = blogId ? "PATCH" : "POST";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (response.ok) {
      setMessage({ type: "success", text: `Blog ${mode === "create" ? "created" : "updated"} successfully.` });
      router.refresh();
      if (mode === "create") {
        router.push("/admin/blogs");
      }
    } else {
      const error = await response.json().catch(() => ({ message: "Unexpected error" }));
      setMessage({ type: "error", text: error.message ?? "Failed to save blog" });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.headerRow}>
        <h1>{mode === "create" ? "Create blog" : "Edit blog"}</h1>
        <label className={styles.switch}>
          <input type="checkbox" {...register("published")}
          />
          <span className={styles.slider} />
          <span className={styles.switchLabel}>Published</span>
        </label>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" {...register("title")}
        />
        {errors.title && <span className={styles.error}>{errors.title.message}</span>}
      </div>

      <div className={styles.slugRow}>
        <div className={styles.fieldGroup}>
          <label htmlFor="slug">Slug</label>
          <input id="slug" type="text" {...register("slug")}
          />
          {errors.slug && <span className={styles.error}>{errors.slug.message}</span>}
        </div>
        <button type="button" className={styles.secondaryButton} onClick={handleGenerateSlug}>
          Generate from title
        </button>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="banner">Banner image</label>
        <div className={styles.imageUploadGroup}>
          <input
            id="banner"
            type="url"
            {...register("banner")}
            placeholder="Image URL (auto-filled by upload)"
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleBannerImageUpload}
            disabled={uploadProgress.uploading}
            className={styles.fileInput}
            aria-label="Upload banner image"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploadProgress.uploading}
            className={styles.secondaryButton}
          >
            {uploadProgress.uploading ? `Uploading ${uploadProgress.fileName}...` : "Upload Image"}
          </button>
        </div>
        {errors.banner && <span className={styles.error}>{errors.banner.message}</span>}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="excerpt">Excerpt</label>
        <textarea id="excerpt" rows={3} {...register("excerpt")}
        />
        {errors.excerpt && <span className={styles.error}>{errors.excerpt.message}</span>}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="tags">Tags</label>
        <input
          id="tags"
          type="text"
          value={tagsInput}
          onChange={(event) => setTagsInput(event.target.value)}
          placeholder="Example: lasik, surgery, vision"
        />
        {errors.tags && <span className={styles.error}>{errors.tags.message}</span>}
        <small className={styles.helper}>Separate tags with commas.</small>
      </div>

      <div className={styles.fieldGroup}>
        <label>Content</label>
        <ReactQuill
          value={contentValue}
          onChange={(value) => setValue("content", value, { shouldValidate: true, shouldDirty: true })}
          className={styles.editor}
          theme="snow"
        />
        {errors.content && <span className={styles.error}>{errors.content.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting} className={styles.primaryButton}>
        {isSubmitting ? "Saving..." : mode === "create" ? "Publish blog" : "Update blog"}
      </button>

      {message && <p className={message.type === "success" ? styles.success : styles.error}>{message.text}</p>}
    </form>
  );
}
