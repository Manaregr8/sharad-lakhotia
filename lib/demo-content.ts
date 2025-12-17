import { type BlogWithAuthor } from "@/components/cards/BlogCard";

export const demoBlogs: BlogWithAuthor[] = [
  {
    id: "demo-1",
    title: "Understanding LASIK: Is It Right for You?",
    banner: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    tags: ["vision", "surgery", "lasik"],
    published: true,
    excerpt: "A comprehensive guide to laser-assisted vision correction and what to expect before, during, and after the procedure.",
    content: `<h2>What is LASIK?</h2><p>LASIK is a safe and effective laser eye surgery designed to correct vision problems such as nearsightedness, farsightedness, and astigmatism.</p>`,
    createdAt: new Date("2025-12-15").toISOString(),
    slug: "understanding-lasik-is-it-right-for-you",
    author: { name: "Dr. Sharad Lakhotia" }
  },
  {
    id: "demo-2",
    title: "Modern Cataract Care: From Diagnosis to Recovery",
    banner: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1600&q=80",
    tags: ["cataract", "surgery", "eye health"],
    published: true,
    excerpt: "Discover how our cataract specialists use the latest technology to restore clarity and protect your long-term vision.",
    content: `<h2>Advanced cataract solutions</h2><p>Cataracts develop gradually and cause clouding of the eye's natural lens.</p>`,
    createdAt: new Date("2025-12-14").toISOString(),
    slug: "modern-cataract-care-from-diagnosis-to-recovery",
    author: { name: "Dr. Sharad Lakhotia" }
  },
  {
    id: "demo-3",
    title: "Why Routine Pediatric Eye Exams Matter",
    banner: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?auto=format&fit=crop&w=1600&q=80",
    tags: ["pediatrics", "vision", "prevention"],
    published: true,
    excerpt: "Early detection of vision challenges keeps children learning confidently and prevents long-term complications.",
    content: `<h2>Protecting young eyes</h2><p>Children's vision develops rapidly. Routine exams help us monitor eye alignment.</p>`,
    createdAt: new Date("2025-12-13").toISOString(),
    slug: "why-routine-pediatric-eye-exams-matter",
    author: { name: "Dr. Sharad Lakhotia" }
  }
];

