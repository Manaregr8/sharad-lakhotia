export type FAQ = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  // LASIK & Refractive Surgery
  {
    id: "lasik-1",
    category: "LASIK & Vision Correction",
    question: "Am I a good candidate for LASIK surgery?",
    answer:
      "Good LASIK candidates are typically over 18 years old with stable vision for at least 2 years. You should have adequate corneal thickness, no active eye infections, and generally good overall eye health. Common corrections include myopia (nearsightedness), hyperopia (farsightedness), and astigmatism. Dr. Lakhotia recommends a comprehensive evaluation to determine your candidacy."
  },
  {
    id: "lasik-2",
    category: "LASIK & Vision Correction",
    question: "How long does LASIK surgery take?",
    answer:
      "The actual laser treatment takes approximately 15-20 seconds per eye. However, the entire procedure appointment typically lasts 30-45 minutes, including preparation, measurements, and post-operative instructions. Most patients experience immediate vision improvement, with significant clarity achieved within 24 hours."
  },
  {
    id: "lasik-3",
    category: "LASIK & Vision Correction",
    question: "What is the difference between LASIK and blade-free LASIK?",
    answer:
      "Traditional LASIK uses a mechanical blade to create the corneal flap, while blade-free (femtosecond) LASIK uses a sophisticated laser to create a precise, custom flap. Blade-free LASIK offers greater precision, reduced complications, faster healing, and better visual outcomes. Dr. Lakhotia specializes in blade-free LASIK for superior results."
  },
  {
    id: "lasik-4",
    category: "LASIK & Vision Correction",
    question: "Is LASIK surgery painful?",
    answer:
      "No, LASIK is not painful. Numbing eye drops are applied before the procedure, so you'll experience pressure and sensation but no pain. Some patients report mild discomfort for a few hours after surgery, which can be managed with prescribed eye drops. Vision may be slightly blurred immediately after, but improves within 24 hours."
  },
  {
    id: "lasik-5",
    category: "LASIK & Vision Correction",
    question: "Can LASIK results be reversed if I'm not satisfied?",
    answer:
      "While LASIK cannot be completely reversed, enhancements can be performed if needed. Most patients achieve their desired vision, but some may require minor adjustments. About 90% of patients achieve 20/20 vision or better after LASIK. During your consultation, Dr. Lakhotia will discuss expectations and realistic outcomes."
  },

  // Cataract Surgery
  {
    id: "cataract-1",
    category: "Cataract Surgery",
    question: "What exactly is a cataract?",
    answer:
      "A cataract is a clouding of the eye's natural lens that develops gradually over time. It blocks light from reaching the retina, causing blurry vision, difficulty reading, and sensitivity to glare. Cataracts are age-related and eventually affect most people. The only effective treatment is surgical removal and replacement with an artificial intraocular lens (IOL)."
  },
  {
    id: "cataract-2",
    category: "Cataract Surgery",
    question: "How do I know if I need cataract surgery?",
    answer:
      "Signs include cloudy or blurry vision, difficulty driving at night, faded colors, halos around lights, and frequent changes in eyeglass prescription. Your eye doctor can diagnose cataracts during a comprehensive exam. Surgery is recommended when cataracts significantly impact your daily activities and quality of life. Not all cataracts require immediate surgery."
  },
  {
    id: "cataract-3",
    category: "Cataract Surgery",
    question: "What are the different types of intraocular lenses (IOLs)?",
    answer:
      "IOL options include: Monofocal lenses for distance vision, Multifocal lenses for distance, intermediate, and near vision without glasses, Trifocal lenses providing excellent vision at all distances, and EDOF (Extended Depth of Focus) lenses for enhanced intermediate vision. Dr. Lakhotia discusses which option best suits your lifestyle and visual needs."
  },
  {
    id: "cataract-4",
    category: "Cataract Surgery",
    question: "How long does cataract surgery take and what's the recovery time?",
    answer:
      "The surgery typically takes 15-20 minutes per eye. Using advanced phacoemulsification (stitchless) technique, most patients experience rapid recovery. Vision improves within days, and full healing takes about 4-6 weeks. You can resume light activities within a few days and most normal activities within 2-3 weeks with proper post-operative care."
  },
  {
    id: "cataract-5",
    category: "Cataract Surgery",
    question: "Will I need glasses after cataract surgery?",
    answer:
      "With premium multifocal or trifocal IOLs, many patients achieve excellent vision at all distances and require minimal or no glasses. With standard monofocal lenses, you may need reading glasses. The type of IOL chosen affects post-operative visual independence. Dr. Lakhotia helps you select the best option based on your lifestyle and expectations."
  },

  // Dry Eyes
  {
    id: "dryeye-1",
    category: "Dry Eye Care",
    question: "What causes dry eyes?",
    answer:
      "Dry eyes occur when tears lack sufficient quality or quantity to lubricate and nourish the cornea. Common causes include aging, screen time, dry climate, hormonal changes, autoimmune conditions, and certain medications. Environmental factors like air conditioning and wind can worsen dry eyes. Lakhotia Eye Centre provides comprehensive diagnosis and specialized treatment."
  },
  {
    id: "dryeye-2",
    category: "Dry Eye Care",
    question: "What treatments are available for dry eyes?",
    answer:
      "Treatment options include artificial tears, topical medications (like cyclosporine), warm compresses, meibomian gland expression, professional cleaning, and electronic heating/massage therapy. Lifestyle modifications like reducing screen time, increasing humidity, and staying hydrated also help. Our clinic offers specialized facilities including professional cleaning, shampooing, and electronic heating treatments."
  },
  {
    id: "dryeye-3",
    category: "Dry Eye Care",
    question: "Is dry eye permanent?",
    answer:
      "Dry eye severity varies. Some cases improve with treatment and lifestyle changes, while chronic dry eye may require ongoing management. Regular eye exams help monitor progression. Dr. Lakhotia's specialized clinic can provide targeted treatments including advanced therapies to improve tear production and ocular surface health."
  },

  // Glaucoma
  {
    id: "glaucoma-1",
    category: "Glaucoma Management",
    question: "What is glaucoma and why is it dangerous?",
    answer:
      "Glaucoma is a disease where elevated intraocular pressure damages the optic nerve, leading to permanent vision loss. Often called 'the silent thief of sight,' it typically has no early symptoms, making regular screening crucial. Early detection and treatment can prevent blindness. Risk factors include age, family history, high eye pressure, and thin corneas."
  },
  {
    id: "glaucoma-2",
    category: "Glaucoma Management",
    question: "How is glaucoma screened and diagnosed?",
    answer:
      "Glaucoma screening includes intraocular pressure measurement (tonometry), optic nerve evaluation, visual field testing (Humphrey's analyzer), and OCT imaging. Gonioscopy assesses the eye's drainage angle. Dr. Lakhotia uses comprehensive diagnostic tools to detect glaucoma early and monitor progression to prevent vision loss."
  },
  {
    id: "glaucoma-3",
    category: "Glaucoma Management",
    question: "Can glaucoma be cured?",
    answer:
      "Glaucoma cannot be cured, but it can be effectively managed to prevent progression and preserve vision. Treatment options include eye drops, oral medications, laser procedures, or surgery to lower intraocular pressure. Early detection and consistent treatment are key to maintaining vision and quality of life."
  },

  // Retina Care
  {
    id: "retina-1",
    category: "Retina & Vitreous Care",
    question: "What is diabetic retinopathy and how is it treated?",
    answer:
      "Diabetic retinopathy occurs when high blood sugar damages blood vessels in the retina, potentially causing vision loss. Treatment depends on severity and includes careful diabetes management, laser treatment, intravitreal injections, and vitrectomy surgery in advanced cases. Early detection through regular eye exams is critical for preventing significant vision loss."
  },
  {
    id: "retina-2",
    category: "Retina & Vitreous Care",
    question: "What is OCT imaging and why is it important?",
    answer:
      "OCT (Optical Coherence Tomography) is advanced imaging that captures detailed cross-sectional images of the retina and optic nerve. It detects subtle changes in retinal structure, helping diagnose and monitor conditions like macular degeneration, diabetic retinopathy, and glaucoma early. Lakhotia Eye Centre uses OCT for accurate diagnosis and treatment planning."
  },
  {
    id: "retina-3",
    category: "Retina & Vitreous Care",
    question: "What are intravitreal injections?",
    answer:
      "Intravitreal injections deliver medication directly into the vitreous (gel inside the eye) to treat retinal diseases like diabetic retinopathy, macular degeneration, and retinal vein occlusion. This targeted approach provides effective treatment with minimal side effects. The procedure is quick and relatively painless when performed by experienced specialists."
  },

  // General Eye Health
  {
    id: "general-1",
    category: "General Eye Health",
    question: "How often should I have eye exams?",
    answer:
      "Adults should have comprehensive eye exams every 1-2 years. People over 60, those with eye conditions, diabetes, or family history of eye disease should have annual exams. Children should have exams at birth, around 6 months, and before starting school. Regular exams detect problems early, including serious conditions like glaucoma and macular degeneration."
  },
  {
    id: "general-2",
    category: "General Eye Health",
    question: "What is the difference between an optometrist and an ophthalmologist?",
    answer:
      "Optometrists perform eye exams, prescribe glasses/contacts, and detect eye diseases. Ophthalmologists are medical doctors who do everything optometrists do plus perform eye surgery and treat complex eye diseases. Dr. Sharad Lakhotia is a highly qualified ophthalmologist with 36+ years of surgical expertise in advanced procedures."
  },
  {
    id: "general-3",
    category: "General Eye Health",
    question: "Can screen time damage my eyes?",
    answer:
      "Extended screen time can cause digital eye strain (blurred vision, dry eyes, headaches) but doesn't permanently damage eyes. To reduce strain, follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. Take breaks, adjust screen brightness, and maintain proper distance. If symptoms persist, consult an eye specialist."
  },
  {
    id: "general-4",
    category: "General Eye Health",
    question: "Can poor nutrition affect eye health?",
    answer:
      "Yes, nutrition significantly impacts eye health. Antioxidants (vitamins C, E), lutein, zeaxanthin, zinc, and omega-3 fatty acids protect against macular degeneration and cataracts. Foods like leafy greens, carrots, berries, fish, and nuts support eye health. A balanced diet with these nutrients reduces risk of age-related eye diseases."
  },
  {
    id: "general-5",
    category: "General Eye Health",
    question: "What should I do if I have an eye emergency?",
    answer:
      "Seek immediate care for sudden vision loss, eye pain, trauma, chemical exposure, or foreign objects. These require urgent evaluation to prevent permanent damage. Lakhotia Eye Centre provides comprehensive emergency eye care. Call our emergency number or visit immediately if you experience sudden symptoms."
  },

  // Contact Lens FAQ
  {
    id: "contact-1",
    category: "Contact Lenses",
    question: "Are contact lenses safe to wear daily?",
    answer:
      "Yes, when prescribed by an eye doctor and worn with proper care, contact lenses are safe. Daily disposable lenses are the safest option as they eliminate storage and handling issues. Extended wear lenses require meticulous cleaning. Follow your eye doctor's wearing schedule and replace lenses as directed to prevent infections and complications."
  },
  {
    id: "contact-2",
    category: "Contact Lenses",
    question: "How do I know which contact lens type is right for me?",
    answer:
      "Your eye doctor considers your prescription, lifestyle, work environment, and visual needs. Hard lenses offer clarity but require adaptation. Soft lenses are comfortable and popular. Extended wear and daily disposables offer convenience. Lakhotia Eye Centre stocks premium brands (Bausch & Lomb, Acuvue, Alcon) and provides expert fitting guidance."
  },
  {
    id: "contact-3",
    category: "Contact Lenses",
    question: "Can I sleep in contact lenses?",
    answer:
      "Only extended wear lenses approved for overnight use can be worn while sleeping. Regular daily contact lenses must be removed before bed. Sleeping in non-approved lenses increases infection risk and corneal complications. Always follow your eye doctor's guidelines for wearing schedules to maintain eye health."
  }
];

export const getFaqsByCategory = (category: string) =>
  faqs.filter((faq) => faq.category === category);

export const getFaqCategories = () => [...new Set(faqs.map((faq) => faq.category))];
