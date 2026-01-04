import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import slugify from "slugify";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.SEED_ADMIN_EMAIL || "admin@lakhotiaeyecentre.com";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || "Admin@123";
  const adminName = process.env.SEED_ADMIN_NAME || "Dr. Sharad Lakhotia";

  const passwordHash = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      name: adminName,
      passwordHash,
    },
    create: {
      email: adminEmail,
      name: adminName,
      passwordHash
    }
  });

  const blogDrafts = [
    {
      title: "Understanding LASIK: Is It Right for You?",
      banner:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      tags: ["vision", "surgery", "lasik"],
      published: true,
      excerpt:
        "A comprehensive guide to laser-assisted vision correction and what to expect before, during, and after the procedure.",
      content: `
        <h2>What is LASIK?</h2>
        <p>LASIK is a safe and effective laser eye surgery designed to correct vision problems such as nearsightedness, farsightedness, and astigmatism.</p>
        <p>During the procedure, a precise laser reshapes your cornea, enabling light to focus more accurately on the retina. Most patients experience an immediate improvement in vision and resume everyday activities within 24 hours.</p>
        <h3>Who is an ideal candidate?</h3>
        <ul>
          <li>Adults over 18 with stable prescriptions</li>
          <li>Healthy corneal tissue thickness</li>
          <li>No active eye infections</li>
        </ul>
        <p>Schedule a consultation with our refractive specialists to determine if LASIK is right for your eyes.</p>
      `
    },
    {
      title: "Modern Cataract Care: From Diagnosis to Recovery",
      banner:
        "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1600&q=80",
      tags: ["cataract", "surgery", "eye health"],
      published: true,
      excerpt:
        "Discover how our cataract specialists use the latest technology to restore clarity and protect your long-term vision.",
      content: `
        <h2>Advanced cataract solutions</h2>
        <p>Cataracts develop gradually and cause clouding of the eye's natural lens. Our clinic offers bladeless cataract surgery combined with premium intraocular lenses for personalized outcomes.</p>
        <p>Recovery is typically quick, with patients noticing improved brightness and color within days.</p>
        <h3>Post-operative tips</h3>
        <ol>
          <li>Use prescribed eye drops consistently</li>
          <li>Avoid rubbing your eyes</li>
          <li>Attend follow-up appointments</li>
        </ol>
      `
    },
    {
      title: "Why Routine Pediatric Eye Exams Matter",
      banner:
        "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?auto=format&fit=crop&w=1600&q=80",
      tags: ["pediatrics", "vision", "prevention"],
      published: false,
      excerpt:
        "Early detection of vision challenges keeps children learning confidently and prevents long-term complications.",
      content: `
        <h2>Protecting young eyes</h2>
        <p>Children's vision develops rapidly. Routine exams help us monitor eye alignment, depth perception, and overall eye health.</p>
        <p>We create welcoming experiences so kids feel comfortable during their visits.</p>
      `
    }
  ];

  for (const blog of blogDrafts) {
    const slug = slugify(blog.title, { lower: true, strict: true });

    await prisma.blog.upsert({
      where: { slug },
      update: {
  title: blog.title,
  banner: blog.banner,
  tags: blog.tags,
  published: blog.published,
  content: blog.content,
  excerpt: blog.excerpt
      },
      create: {
        title: blog.title,
        slug,
        banner: blog.banner,
  excerpt: blog.excerpt,
        tags: blog.tags,
        published: blog.published,
        content: blog.content,
        authorId: admin.id
      }
    });
  }

  console.log("Seed data has been applied.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
