export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "bladeless-lasik",
    title: "Bladeless LASIK Transformation",
    description: "Complete vision correction with femtosecond laser - crystal clear results in 24 hours.",
    before: "/beforeAfter/after lasik.jpg",
    after: "/beforeAfter/before lasik.jpg"
  },
  {
    id: "cataract-surgery-success",
    title: "Cataract Surgery Success",
    description: "Restored vibrant vision after advanced cataract surgery.",
    before: "/beforeAfter/after cataract surgery.jpg",
    after: "/beforeAfter/before cataract surgery.jpg"
  },
  {
    id: "dry-eyes-treatment",
    title: "Dry Eyes Treatment",
    description: "Relief and improved comfort after advanced dry eyes treatment.",
    before: "/beforeAfter/after dry eye correction.png",
    after: "/beforeAfter/before dry eyes correction.png"
  }
];
