export type Achievement = {
  id: string;
  category: "award" | "publication" | "certification" | "milestone";
  title: string;
  organization: string;
  year: string;
  description: string;
  image: string;
  /** CSS object-position, e.g. "center", "top", "50% 20%" */
  objectPosition?: string;
};

export const achievements: Achievement[] = [
  {
    id: "top-10-doctors",
    category: "award",
    title: "Top 10 Doctors of India",
    organization: "Medgate Today Magazine",
    year: "2011",
    description: "Selected amongst top 10 Doctors of India with cover photograph feature",
    image: "/sharadSirImages/Dr.-Lakhotia-adjudged-amongst-top-10-doctors-of-India-in-2011..jpg",
  },
  {
    id: "dos-president",
    category: "milestone",
    title: "President of Delhi Ophthalmological Society",
    organization: "Delhi Ophthalmological Society",
    year: "2009-2010",
    description: "Led organization comprising of 10,000 eye surgeons across the country",
    image: "/images/professional%201/IMG20230903092632.webp",
  },
  {
    id: "gold-medal",
    category: "award",
    title: "International Conference Gold Medal",
    organization: "Intraocular Implant & Refractive Society",
    year: "2011",
    description: "Awarded for exceptional contribution to ophthalmology field",
    image: "/sharadSirImages/Dr. Lakhotia receiving Gold Medal from international Conference.jpg",
  },
  {
    id: "femtosecond-book",
    category: "publication",
    title: "Guest Editor - Femtosecond Laser Techniques",
    organization: "International Medical Publication",
    year: "2015",
    description: "Joint author of world's finest book on Femtosecond laser with international faculty",
    image: "/ilovepdf_images-extracted (2)/Adobe-Scan-21-Dec-2025/femtosecond laser refractive surgery.jpg",
  },
  {
    id: "best-ophthalmologist",
    category: "award",
    title: "Best Ophthalmologist in Delhi/NCR",
    organization: "Medgate",
    year: "2014",
    description: "Recognized as the leading ophthalmologist in the Delhi NCR region",
    image: "/sharadSirImages/Dr.Lakhotia receiving Best Ophthalmologist of Delhi NCR for yr 2014 by Medgate..jpg",
  },
  {
    id: "dma-vice-president",
    category: "milestone",
    title: "Vice President - Delhi Medical Association",
    organization: "Delhi Medical Association",
    year: "2001-2002",
    description: "Elected Vice President representing 25,000 doctors of Delhi",
    image: "/ilovepdf_images-extracted (2)/Adobe-Scan-28-Dec-2025/Dma awards.jpg",
  },
  {
    id: "saarc-chairman",
    category: "milestone",
    title: "Chairman International Relations",
    organization: "SAARC Academy of Ophthalmology",
    year: "2008",
    objectPosition:"top",
    description: "Led international relations for South Asian eye care collaboration",
    image: "/ilovepdf_images-extracted (2)/Adobe-Scan-28-Dec-2025/international conference.jpg",
  },
  {
    id: "eminent-doctor",
    category: "award",
    title: "Eminent Doctors Award",
    organization: "Delhi Medical Association",
    year: "2011",
    description: "Honored for outstanding contribution to medical profession",
    image: "/ilovepdf_images-extracted (2)/Adobe-Scan-28-Dec-2025/eminent doctors awards.jpg",
  },
  {
    id: "mt-india-healthcare-2013",
    category: "award",
    title: "9th MT India Health Care Awards",
    organization: "MT India",
    year: "2013",
    description: "Recipient of the 3rd MT India Health Care Awards 2013 for excellence in eye care.",
    image: "/ilovepdf_images-extracted (2)/Adobe-Scan-28-Dec-2025/9th mt award.jpg", // Placeholder, replace with actual image if available
  },
];
