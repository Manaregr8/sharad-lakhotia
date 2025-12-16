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
    before: "https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "multifocal-iol",
    title: "Multifocal IOL Success",
    description: "Restored vibrant vision at all distances with premium multifocal lens implant.",
    before: "https://images.unsplash.com/photo-1467676789621-714d61ac04a7?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "phaco-surgery",
    title: "Advanced Phaco Surgery",
    description: "Precision cataract removal with micro-incision phacoemulsification technique.",
    before: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80"
  }
];
