import { z } from "zod";

export const contactSchema = z
  .object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Please provide a valid email"),
    phone: z.string().trim().optional(),
    service: z.string().min(1, "Please select a service or problem"),
    message: z.string().min(20, "Please share at least 20 characters about your concerns")
  })
  .superRefine(({ phone }, ctx) => {
    if (phone && phone.length < 7) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Phone number looks too short"
      });
    }
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must contain at least 6 characters")
});

export const blogWriteSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(5, "Title should contain at least 5 characters"),
  slug: z
    .string()
    .min(3, "Slug should contain at least 3 characters")
    .regex(/^[a-z0-9-]+$/, "Slug may only include lowercase letters, numbers, and hyphens"),
  banner: z.string().url("Please provide a valid image URL"),
  excerpt: z.string().min(30, "Excerpt should contain at least 30 characters"),
  tags: z
    .array(
      z
        .string()
        .trim()
        .min(2, "Tags must have at least two characters")
        .max(20, "Tags must be 20 characters or fewer")
    )
    .min(1, "Please add at least one tag")
    .max(6, "You can add up to 6 tags"),
  content: z.string().min(100, "Content should contain at least 100 characters"),
  published: z.boolean()
});

export type ContactFormInput = z.infer<typeof contactSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type BlogWriteInput = z.infer<typeof blogWriteSchema>;
