export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "computerized-eye-checkup",
    name: "Computerized Eye Check-up",
    shortDescription: "Routine eye examination with advanced diagnostic equipment for accurate refraction.",
    longDescription:
      "Comprehensive eye examination using Autorefractometer (Japan) and accurate refraction techniques. Autolensometer determines correct power of glasses. Includes cycloplegic refraction and photomultiplier testing.",
    highlights: [
      "Autorefractometer (Japan)",
      "Non-Contact Tonometry, Corneal Thickness Measurement and angle measurement by HUVITZ",
      "Cycloplegic refraction & PMT"
    ],
    image: "/images/siteImages/services/Computerized-Spectacle-Power-Testing-4-768x504.webp"
  },
  {
    slug: "dry-eye-vision-care",
    name: "Dry Eye & Vision Care",
    shortDescription: "Specialized investigation and treatment of dry eye syndrome with advanced facilities.",
    longDescription:
      "Comprehensive dry eye management including meibomian expression, professional cleaning, and shampooing. Electronic heating and massage services available for enhanced comfort and healing.",
    highlights: [
      "Thermal Pulsation",
      "Meibomian expression",
      "Professional cleaning & shampooing"
    ],
    image: "/images/siteImages/services/treating-dry-eyes-at-icon-eyecare.jpg"
  },
  {
    slug: "cataract-surgery",
    name: "Cataract Clinic & Surgery",
    shortDescription: "World-class cataract surgery with latest stitchless phaco techniques, bladefree Femtosecond Laser assisted cataract surgery and premium IOL options.",
    longDescription:
      "Cataract surgery using world's latest stitchless phacoemulsification technique with square edge foldable lenses. Monofocal, multifocal, trifocal, and EDOF intraocular lens options. Eye scanning biometry and blade-free cataract surgery using femto-laser technology available.",
    highlights: [
      "Stitchless phacoemulsification, blade free Femtosecond Laser assisted cataract surgery",
      "Monofocal, Toric, Multifocal, Trifocal, EDOF IOLs",
      "Eye scanning biometry",
      "Blade-free femto-laser surgery"
    ],
    image: "/images/siteImages/services/cataract%20surgery.jfif"
  },
{
    slug: "lasik-surgery",
    name: "LASIK Surgery",
    shortDescription: "Blade-free LASIK, C-LASIK, Contoura Vision, Wavelight plus, SMILE and ICL for vision correction with world-class technology.",
    longDescription:
      "Advanced vision correction options including LASIK, C-LASIK, blade-free LASIK, SMILE, and Implantable Contact Lens (ICL). Partnership with world's best six machines in Delhi for optimal outcomes and latest technology access.",
    highlights: [
      "Blade-free LASIK available",
      "C-LASIK & SMILE options",
      "Implantable Contact Lens (ICL)",
      "Access to world-class machines"
    ],
    image: "/images/siteImages/services/lasik%20surgery.jpg"
  },
  {
    slug: "glaucoma-clinic",
    name: "Glaucoma Clinic",
    shortDescription: "Comprehensive glaucoma screening and management with advanced diagnostic tools.",
    longDescription:
      "Glaucoma screening using non-contact tonometer (Japan) and applanation tonometry. Gonioscopy, Humphrey's computerized field analyzer (USA), and OCT facilities available for complete glaucoma evaluation and monitoring.",
    highlights: [
      "Non-contact tonometer (Japan)",
      "Applanation tonometry",
      "Humphrey's field analyzer (USA)",
      "OCT facilities"
    ],
    image: "/images/siteImages/services/glucomia.png"
  },
  {
    slug: "retina-clinic",
    name: "Retina & Vitreous Clinic",
    shortDescription: "Advanced retinal diagnostics and treatment with cutting-edge imaging technology.",
    longDescription:
      "Expert retinal care using indirect ophthalmoscopy (Germany), laser treatment, and high-resolution fundus camera (Japan) for fluorescein angiography. Vitrectomy surgery and intravitreal injections available. OCT facilities included.",
    highlights: [
      "Indirect ophthalmoscopy (Germany)",
      "Laser treatment capabilities",
      "OCT imaging & intravitreal injections",
      "Diabetic and Hypertensive Retinopathy Investigation and treatement"
    ],
    image: "/images/siteImages/services/retina.jpg"
  },
  {
    slug: "squint-clinic",
    name: "Squint Clinic",
    shortDescription: "Specialized treatment for eye alignment disorders with exercises and surgery.",
    longDescription:
      "Expert evaluation and management of squint (strabismus) conditions. Eye exercises performed on SYNOPTO-PHORE (Clement Clarke, UK) with surgical options available for optimal eye alignment.",
    highlights: [
      "Synopto-phore equipment (UK)",
      "Eye exercise programs",
      "Surgical correction available"
    ],
    image: "/images/siteImages/services/squint-eye-1.jpg"
  },
  
  
  
  
  {
    slug: "contact-lens-clinic",
    name: "Contact Lens Clinic",
    shortDescription: "Wide variety of contact lens options including hard, soft, and disposable lenses.",
    longDescription:
      "Comprehensive contact lens fitting with multiple brands available. Options include hard, semisoft, extended wear, and disposable lenses. Brands: Bausch & Lomb, Acuvue Oasys, Acuvue Moist, Acuvue-2, Alcon, daily disposables, and yearly lenses.",
    highlights: [
      "Multiple lens types available",
      "Premium brands (Bausch & Lomb, Acuvue, Alcon)",
      "Daily disposable options",
      "Expert fitting services"
    ],
    image: "/images/siteImages/services/contact%20lens%20clinic.jfif"
  },
  
  {
    slug: "opticals",
    name: "Opticals & Eyewear",
    shortDescription: "State-of-the-art glasses with latest Indian & international frame varieties.",
    longDescription:
      "Largest selection of premium eyewear with finest coating lenses. Brands include Crizal, Varilux, Transition, and UV-protected options. Largest variety of progressive lenses (no-line bifocals), Crizal Prevencia, ultra-thin lenses for high power, and UV-protected sunglasses. Guaranteed accurate scientific dispensing.",
    highlights: [
      "Crizal, Varilux, Transition coatings",
      "Progressive lens variety",
      "Myocare lenses(ZEISS) to stop progression of Myopia",
      "Ultra-thin & UV protection options",
      "Accurate scientific dispensing"
    ],
    image: "/images/siteImages/services/glasses.avif"
  }
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
