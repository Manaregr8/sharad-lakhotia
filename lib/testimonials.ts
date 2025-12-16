export type Testimonial = {
  quote: string;
  patient: string;
  treatment: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dr. Lakhotia performed my bladeless LASIK surgery and the results are phenomenal. I can see perfectly without glasses after 15 years! The entire process was comfortable and professional.",
    patient: "Rajesh Kumar",
    treatment: "Bladeless LASIK"
  },
  {
    quote:
      "I had cataract surgery with premium multifocal IOL at Lakhotia Eye Centre. Dr. Lakhotia's expertise and the advanced technology made all the difference. I can now see clearly at all distances without glasses.",
    patient: "Sunita Sharma",
    treatment: "Cataract Surgery with Premium IOL"
  },
  {
    quote:
      "Dr. Lakhotia has been treating my diabetic retinopathy for years. His careful monitoring and timely interventions have preserved my vision. I'm grateful for his expertise and caring approach.",
    patient: "Anil Verma",
    treatment: "Retina Care"
  }
];
