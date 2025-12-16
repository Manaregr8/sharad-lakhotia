import BlogEditor from "@/components/forms/BlogEditor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create blog",
  description: "Create a new blog post"
};

export default function AdminCreateBlog() {
  return (
    <section>
      <div className="container">
        <BlogEditor mode="create" />
      </div>
    </section>
  );
}
