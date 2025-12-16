export type Achievement = {
  id: string;
  category: "award" | "publication" | "certification" | "milestone";
  title: string;
  organization: string;
  year: string;
  description: string;
  image: string;
};

export const achievements: Achievement[] = [
  {
    id: "top-10-doctors",
    category: "award",
    title: "Top 10 Doctors of India",
    organization: "Medgate Today Magazine",
    year: "2011",
    description: "Selected amongst top 10 Doctors of India with cover photograph feature",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dos-president",
    category: "milestone",
    title: "President of Delhi Ophthalmological Society",
    organization: "Delhi Ophthalmological Society",
    year: "2009-2010",
    description: "Led organization comprising of 10,000 eye surgeons across the country",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gold-medal",
    category: "award",
    title: "International Conference Gold Medal",
    organization: "Intraocular Implant & Refractive Society",
    year: "2011",
    description: "Awarded for exceptional contribution to ophthalmology field",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "femtosecond-book",
    category: "publication",
    title: "Guest Editor - Femtosecond Laser Techniques",
    organization: "International Medical Publication",
    year: "2015",
    description: "Joint author of world's finest book on Femtosecond laser with international faculty",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "best-ophthalmologist",
    category: "award",
    title: "Best Ophthalmologist in Delhi/NCR",
    organization: "Medgate",
    year: "2014",
    description: "Recognized as the leading ophthalmologist in the Delhi NCR region",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dma-vice-president",
    category: "milestone",
    title: "Vice President - Delhi Medical Association",
    organization: "Delhi Medical Association",
    year: "2001-2002",
    description: "Elected Vice President representing 25,000 doctors of Delhi",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "saarc-chairman",
    category: "milestone",
    title: "Chairman International Relations",
    organization: "SAARC Academy of Ophthalmology",
    year: "2008",
    description: "Led international relations for South Asian eye care collaboration",
    image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "eminent-doctor",
    category: "award",
    title: "Eminent Doctors Award",
    organization: "Delhi Medical Association",
    year: "2011",
    description: "Honored for outstanding contribution to medical profession",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
  },
];
