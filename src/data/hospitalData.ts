/**
 * Hospital Data & Clinical Information for VisionSphere Eye Hospital
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'surgical' | 'retina' | 'pediatric' | 'cornea' | 'preventive';
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  keyTreatments: string[];
  diagnosticTech: string[];
  duration: string;
  recoveryTime: string;
  featured: boolean;
}

export interface Specialist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  degrees: string;
  fellowship: string;
  experienceYears: number;
  bio: string;
  image: string;
  clinicDays: string;
  languages: string[];
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  resolution: string;
  description: string;
  clinicalImpact: string;
  badge: string;
}

export interface AnatomyPart {
  id: string;
  name: string;
  latinName: string;
  location: string;
  opticalRole: string;
  description: string;
  clinicalConditions: string[];
  refractivePower?: string;
  x: number; // percentage in SVG coordinate
  y: number;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
}

export interface PatientStory {
  id: string;
  patientName: string;
  treatment: string;
  specialist: string;
  quote: string;
  story: string;
  outcome: string;
  year: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'comprehensive-exams',
    name: 'Comprehensive Eye Examinations',
    category: 'preventive',
    tagline: 'Precision sensory and optical baseline assessment',
    shortDesc: 'A rigorous 45-minute multi-stage diagnostic examination evaluating visual acuity, binocular coordination, intraocular pressure, and dilated fundus health.',
    fullDesc: 'Our comprehensive examinations go far beyond simple prescription testing. Utilizing high-resolution digital slit lamps, non-contact tonometry, and widefield retinal photography, our clinical consultants identify micro-vascular and structural anomalies long before symptoms manifest.',
    keyTreatments: ['Automated wavefront refraction', 'Goldmann applanation tonometry', 'Widefield non-mydriatic fundus mapping', 'Binocular motility and stereopsis testing'],
    diagnosticTech: ['Zeiss Cirrus HD-OCT', 'Nidek Automated Keratometer'],
    duration: '45–60 minutes',
    recoveryTime: 'Dilating drops wear off in 3–4 hours',
    featured: true
  },
  {
    id: 'cataract-care',
    name: 'Cataract Care & Premium IOLs',
    category: 'surgical',
    tagline: 'Micro-incisional restorative lens replacement',
    shortDesc: 'Bladeless femtosecond laser-assisted cataract surgery paired with advanced monofocal, toric, and extended depth of focus (EDOF) intraocular implants.',
    fullDesc: 'Through ultra-small sub-2.0mm micro-incisions, cloudy crystalline lenses are gently emulsified and replaced with bespoke biocompatible implants. Our computerized intraoperative aberrometry verifies optical centering in real time, delivering sharp uncorrected distance and intermediate clarity.',
    keyTreatments: ['Femtosecond laser lens fragmentation', 'Toric astigmatism correction', 'Trifocal and EDOF implant placement', 'YAG laser capsulotomy for secondary opacities'],
    diagnosticTech: ['IOLMaster 700 Biometry', 'Catalys Femtosecond Laser Suite'],
    duration: '15–20 minutes per eye',
    recoveryTime: 'Visual functional recovery within 24–48 hours',
    featured: true
  },
  {
    id: 'glaucoma-screening',
    name: 'Glaucoma Screening & MIGS',
    category: 'preventive',
    tagline: 'Neuroprotective monitoring and micro-invasive outflow therapy',
    shortDesc: 'Comprehensive aqueous humor dynamics analysis, ganglion cell complex tracking, and gentle micro-invasive glaucoma surgeries (MIGS).',
    fullDesc: 'Glaucoma often progresses painlessly without early warning. VisionSphere employs spectral-domain optical coherence tomography to quantify the retinal nerve fiber layer (RNFL) at micron precision, backed by gentle selective laser trabeculoplasty (SLT) and microscopic stent implants that stabilize pressure without lifelong multi-drop burdens.',
    keyTreatments: ['Selective Laser Trabeculoplasty (SLT)', 'iStent inject trabecular micro-bypass', 'Humphrey 24-2 and 10-2 visual field perimetry', 'Pachymetry-adjusted IOP calculation'],
    diagnosticTech: ['Heidelberg Spectralis RNFL tracking', 'Humphrey Field Analyzer 3'],
    duration: '30 minutes examination',
    recoveryTime: 'MIGS: rapid recovery in 2–3 days',
    featured: true
  },
  {
    id: 'retina-care',
    name: 'Retina & Macular Care',
    category: 'retina',
    tagline: 'Sub-micron neurosensory retinal diagnostics and microsurgery',
    shortDesc: 'Specialized management of macular degeneration, diabetic retinopathy, retinal vascular occlusions, and delicate vitrectomy procedures.',
    fullDesc: 'The retina is irreplaceable neural tissue. Our vitreoretinal unit delivers swept-source OCT angiography that reveals retinal capillary perfusion without intravenous dyes, complemented by targeted anti-VEGF micro-injections and 27-gauge sutureless vitrectomy systems.',
    keyTreatments: ['Swept-source OCT Angiography (OCT-A)', 'Targeted anti-VEGF therapy (Eylea, Vabysmo)', 'Small-gauge 27G vitrectomy', 'Painless retinal laser photocoagulation'],
    diagnosticTech: ['Swept-Source Plex Elite 9000', 'Constellation Vision Vitrectomy'],
    duration: '30–90 minutes depending on procedure',
    recoveryTime: 'Injections: zero downtime; Vitrectomy: 1–2 weeks',
    featured: true
  },
  {
    id: 'paediatric-eye-care',
    name: 'Paediatric Eye Care & Orthoptics',
    category: 'pediatric',
    tagline: 'Child-centered visual development and amblyopia therapy',
    shortDesc: 'Warm, low-stress examinations tailored for infants and children, detecting strabismus (squint), lazy eye, refractive errors, and tracking dysfunctions.',
    fullDesc: 'A child’s visual pathway develops rapidly during early childhood. Our fellowship-trained paediatric specialists combine play-based fixation assessments, photorefraction, and orthoptic therapy to correct amblyopia and binocular anomalies when neuroplasticity is at its highest.',
    keyTreatments: ['Pediatric cycloplegic refraction', 'Strabismus orthoptic exercises and alignment', 'Amblyopia patching and penalization therapy', 'Myopia progression control (orthokeratology, low-dose atropine)'],
    diagnosticTech: ['PlusoptiX Photoscreener', 'Titmus Stereo Fly Assessment'],
    duration: '45 minutes',
    recoveryTime: 'Non-invasive, immediate comfort',
    featured: false
  },
  {
    id: 'cornea-care',
    name: 'Cornea Care & Endothelial Therapy',
    category: 'cornea',
    tagline: 'Anterior segment reconstruction and transplant surgery',
    shortDesc: 'Precision corneal topography, collagen cross-linking for keratoconus, and partial-thickness endothelial keratoplasty (DMEK/DSAEK).',
    fullDesc: 'The cornea provides two-thirds of the eye’s optical focusing power. We diagnose and treat keratoconus, corneal dystrophies, and recurrent erosions with custom corneal wavefront aberrometry, riboflavin UV cross-linking, and micro-thin partial lamellar grafts.',
    keyTreatments: ['Corneal Collagen Cross-Linking (CXL)', 'DMEK partial-thickness transplants', 'Rigid gas-permeable and scleral contact lens fittings', 'Amniotic membrane grafting'],
    diagnosticTech: ['Oculus Pentacam HR', 'Tomey Specular Microscope EM-4000'],
    duration: 'Consultation: 45 min; Surgery: 45 min',
    recoveryTime: 'Cross-linking: 5–7 days; DMEK: 1–3 weeks',
    featured: false
  },
  {
    id: 'dry-eye-treatment',
    name: 'Dry Eye Treatment & Thermal Pulsation',
    category: 'preventive',
    tagline: 'Targeted meibomian gland rehabilitation and ocular surface relief',
    shortDesc: 'Quantitative tear film interferometry and LipiFlow thermal pulsation addressing the underlying causes of ocular irritation and screen fatigue.',
    fullDesc: 'Modern screen exposure and ambient HVAC systems frequently trigger evaporative dry eye through meibomian gland obstruction. Our dry eye clinic identifies tear lipid deficiency with non-invasive infrared meibography, followed by soothing thermal pulsation therapy that clears blocked glands from the inside out.',
    keyTreatments: ['LipiFlow vectored thermal pulsation', 'Intense Pulsed Light (IPL) for ocular rosacea', 'Autologous serum tears formulation', 'Punctal occlusion plugs'],
    diagnosticTech: ['LipiView II Ocular Surface Interferometer', 'Keratograph 5M'],
    duration: '12-minute thermal treatment',
    recoveryTime: 'Immediate return to activities',
    featured: false
  },
  {
    id: 'emergency-eye-care',
    name: 'Emergency Eye Care & Triage',
    category: 'surgical',
    tagline: 'Prompt urgent care for acute ophthalmic events',
    shortDesc: 'Rapid clinical triage for sudden vision loss, flashes and floaters, chemical ocular burns, severe trauma, and acute angle-closure symptoms.',
    fullDesc: 'Ophthalmic emergencies demand urgent consultant intervention to preserve sight. Our dedicated emergency suite provides rapid slit-lamp bio-microscopy, ultrasound B-scan, and immediate access to sterile ophthalmic procedure rooms 7 days a week.',
    keyTreatments: ['Emergency retinal tear barrier laser', 'Foreign body extraction with microscope', 'Intraocular pressure reduction for acute angle-closure', 'Ocular surface irrigation and chemical neutralization'],
    diagnosticTech: ['Compact High-Frequency Ultrasound B-Scan', 'Portable Slit Lamp'],
    duration: 'Immediate priority triage',
    recoveryTime: 'Condition-specific supervised monitoring',
    featured: false
  }
];

export const SPECIALISTS_DATA: Specialist[] = [
  {
    id: 'dr-elena-vance',
    name: 'Dr. Elena Vance',
    title: 'Chief of Ophthalmology & Anterior Segment',
    specialty: 'Cataract, Cornea & Complex Refractive Surgery',
    degrees: 'MBBS, FRCOphth, MD (Cantab)',
    fellowship: 'Moorfields Eye Hospital, London & Johns Hopkins Wilmer Eye Institute',
    experienceYears: 22,
    bio: 'Dr. Elena Vance is an internationally recognized ophthalmic surgeon specializing in premium intraocular lens design and complex anterior segment reconstruction. She has performed over 14,000 restorative microsurgical procedures and leads VisionSphere’s clinical research on customized toric wavefront optimization.',
    image: '/src/assets/images/specialist_dr_elena_1792834003349.jpg',
    clinicDays: 'Monday, Tuesday & Thursday',
    languages: ['English', 'French']
  },
  {
    id: 'dr-marcus-thorne',
    name: 'Dr. Marcus Thorne',
    title: 'Director of Vitreoretinal Microsurgery',
    specialty: 'Medical & Surgical Retina, Macular Disease',
    degrees: 'BM BCh (Oxon), FRANZCO, PhD',
    fellowship: 'Sydney Eye Hospital & Bascom Palmer Eye Institute, Miami',
    experienceYears: 18,
    bio: 'Dr. Marcus Thorne specializes in ultra-fine 27-gauge vitreoretinal surgery for retinal detachments, macular holes, and proliferative diabetic disease. His translational research on swept-source OCT vascular biomarkers has been published across major peer-reviewed journals.',
    image: '/src/assets/images/specialist_dr_marcus_1792834018970.jpg',
    clinicDays: 'Wednesday, Friday & Saturday Morning',
    languages: ['English', 'German']
  },
  {
    id: 'dr-aisha-patel',
    name: 'Dr. Aisha Patel',
    title: 'Consultant Paediatric Ophthalmologist',
    specialty: 'Pediatric Strabismus, Amblyopia & Neuro-Ophthalmology',
    degrees: 'MBChB, MRCPCH, FRCOphth',
    fellowship: 'Great Ormond Street Hospital for Children, London',
    experienceYears: 14,
    bio: 'Dr. Aisha Patel brings gentle, patient-centered expertise to children facing developmental vision challenges. She is a pioneer in play-based orthoptic assessment and early childhood binocular alignment therapy.',
    image: '/src/assets/images/specialist_dr_elena_1792834003349.jpg', // Safe fallback to verified doctor photo
    clinicDays: 'Tuesday, Wednesday & Friday',
    languages: ['English', 'Hindi', 'Gujarati']
  },
  {
    id: 'dr-julian-sterling',
    name: 'Dr. Julian Sterling',
    title: 'Consultant Glaucoma & Aqueous Dynamics Specialist',
    specialty: 'MIGS, Trabecular Filtration & Neuroprotection',
    degrees: 'MBBS, MS, FRCS (Ophth)',
    fellowship: 'Singapore National Eye Centre (SNEC) Glaucoma Fellowship',
    experienceYears: 16,
    bio: 'Dr. Julian Sterling focuses on early structural detection of glaucoma and micro-invasive surgical interventions that preserve patient visual fields with minimal postoperative restrictions.',
    image: '/src/assets/images/specialist_dr_marcus_1792834018970.jpg', // Safe fallback to verified doctor photo
    clinicDays: 'Monday, Thursday & Saturday',
    languages: ['English', 'Mandarin']
  }
];

export const TECH_DATA: TechItem[] = [
  {
    id: 'swept-source-oct',
    name: 'Swept-Source OCT & Angiography',
    category: 'Retinal & Choroidal Diagnostics',
    resolution: 'Sub-3.5 µm axial optical resolution',
    description: 'Emits a sweeping 1050nm infrared laser to penetrate deep through dense cataracts and choroidal layers, reconstructing 3D microvascular blood flow without intravenous contrast injections.',
    clinicalImpact: 'Enables sub-clinical detection of wet macular degeneration and choroidal neovascular membranes weeks before symptoms appear.',
    badge: '100,000 A-Scans/sec'
  },
  {
    id: 'femtosecond-laser',
    name: 'Catalys Precision Femtosecond Laser Suite',
    category: 'Anterior Segment Microsurgery',
    resolution: '0.1 mm surgical placement precision',
    description: 'Utilizes ultra-short infrared laser pulses to craft perfectly circular capsulotomies and pre-fragment cataractous lenses with zero mechanical blade trauma.',
    clinicalImpact: 'Reduces ultrasound energy delivered inside the anterior chamber by 92%, resulting in clearer post-operative corneas and rapid visual recovery.',
    badge: 'Bladeless Laser System'
  },
  {
    id: 'wavefront-aberrometry',
    name: 'Hartmann-Shack Corneal Wavefront Aberrometer',
    category: 'Optical Quality Mapping',
    resolution: '1,024 optical ray measuring points',
    description: 'Measures high-order optical aberrations (coma, trefoil, spherical distortion) across the entire human optical train from the corneal tear film to the foveal retina.',
    clinicalImpact: 'Guides custom intraocular lens selection to eliminate glare and halo symptoms during night driving.',
    badge: 'Micron Wavefront Map'
  },
  {
    id: 'specular-microscopy',
    name: 'Non-Contact Endothelial Specular Microscope',
    category: 'Corneal Cellular Health',
    resolution: 'Individual endothelial cell density counting',
    description: 'Automated digital photography of the hexagonal corneal endothelial cell monolayer, assessing cell density (cells/mm²) and polymorphism before any surgical intervention.',
    clinicalImpact: 'Guarantees that candidates possess adequate endothelial reserves to safely undergo lens and corneal procedures.',
    badge: 'Cellular Analysis'
  }
];

export const ANATOMY_DATA: AnatomyPart[] = [
  {
    id: 'cornea',
    name: 'Cornea',
    latinName: 'Cornea pellucida',
    location: 'Anterior ocular surface',
    opticalRole: 'Provides ~70% (+43 Diopters) of total optical refractive power',
    description: 'A completely transparent, avascular five-layered tissue dome that acts as the eye’s primary optical window. It refracts incoming light through the tear film and protects delicate internal intraocular structures.',
    clinicalConditions: ['Keratoconus', 'Fuchs endothelial dystrophy', 'Corneal abrasions and astigmatism'],
    refractivePower: '+43.0 D',
    x: 18,
    y: 50
  },
  {
    id: 'iris',
    name: 'Iris',
    latinName: 'Iris stroma & pigment epithelium',
    location: 'Directly in front of the crystalline lens',
    opticalRole: 'Modulates aperture diameter to regulate light flux into the eye',
    description: 'A thin, circular muscular structure containing pigmented melanin cells and connective stroma. Two antagonistic muscles (sphincter pupillae and dilator pupillae) adjust the central pupil diameter from 2mm in bright light to 8mm in darkness.',
    clinicalConditions: ['Iritis & anterior uveitis', 'Iris coloboma', 'Pigment dispersion syndrome'],
    x: 32,
    y: 35
  },
  {
    id: 'pupil',
    name: 'Pupil',
    latinName: 'Pupilla',
    location: 'Aperture at the optical center of the iris',
    opticalRole: 'Dynamic optical stop controlling focal depth and spherical aberration',
    description: 'The natural black central opening of the iris. By contracting or dilating, the pupil balances retinal illumination with optical depth of field, preventing retinal photoreceptor saturation in bright environments.',
    clinicalConditions: ['Anisocoria (asymmetric pupil size)', 'Horner syndrome', 'Adie tonic pupil'],
    x: 34,
    y: 50
  },
  {
    id: 'lens',
    name: 'Crystalline Lens',
    latinName: 'Lens crystallina',
    location: 'Suspended behind the iris by delicate ciliary zonules',
    opticalRole: 'Dynamic accommodation (+15 to +20 Diopters) for variable distance focusing',
    description: 'A transparent, biconvex flexible optic that alters its curvature when ciliary muscles contract. This dynamic accommodation enables the eye to shift sharp focus instantly between a distant mountain and a phone screen.',
    clinicalConditions: ['Cataract (nuclear, cortical, subcapsular opacification)', 'Presbyopia (age-related loss of accommodation)', 'Ectopia lentis'],
    refractivePower: '+15.0 to +20.0 D',
    x: 44,
    y: 50
  },
  {
    id: 'retina',
    name: 'Retina & Macula',
    latinName: 'Retina neurosensoria',
    location: 'Inner posterior lining of the eye globe',
    opticalRole: 'Converts optical photons into biochemical neural action potentials',
    description: 'A 10-layer neurosensory membrane containing over 120 million rod photoreceptors for peripheral and night vision, and 6 million cone photoreceptors concentrated at the central macula for 20/20 acuity and vivid color discrimination.',
    clinicalConditions: ['Age-related macular degeneration (AMD)', 'Diabetic retinopathy', 'Retinal tear and detachment'],
    x: 75,
    y: 42
  },
  {
    id: 'optic-nerve',
    name: 'Optic Nerve',
    latinName: 'Nervus opticus (Cranial Nerve II)',
    location: 'Exits posterior pole of the sclera towards the visual cortex',
    opticalRole: 'Transmits visual neural signals at ~10 Gb/s to the brain',
    description: 'A cable of over 1.2 million retinal ganglion cell axons shielded in myelin sheaths. It conveys the processed visual signal from the retina directly through the optic chiasm to the lateral geniculate nucleus and primary visual cortex.',
    clinicalConditions: ['Glaucomatous optic neuropathy', 'Optic neuritis', 'Ischemic optic neuropathy (AION)'],
    x: 88,
    y: 54
  }
];

export const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Book an eye consultation',
    description: 'Select your preferred clinical service and specialist through our serene digital booking portal or dedicated concierge desk. You receive clear pre-visit guidance regarding medication, dilating drops, and transportation.',
    keyAction: 'Online consultation request',
    milestones: ['Personalized medical intake questionnaire', 'Pre-appointment preparation checklist', 'Care concierge coordination']
  },
  {
    step: '02',
    title: 'Examine',
    tagline: 'Meet the specialist and undergo examinations',
    description: 'Arrive at our luminous clinical atrium. Your consultant performs advanced sub-micron diagnostic imaging—including swept-source OCT, corneal tomography, and visual field perimetry—in relaxed, unhurried examination suites.',
    keyAction: '45-minute consultant examination',
    milestones: ['High-resolution digital diagnostics', 'Direct one-on-one specialist discussion', 'Gentle non-contact ocular pressure assessment']
  },
  {
    step: '03',
    title: 'Understand',
    tagline: 'Learn about your eye health and options',
    description: 'Review interactive 3D cross-sections of your own ocular scans alongside your physician. Every finding is explained in plain, reassuring language with transparent clinical options, from preventive therapies to precision microsurgery.',
    keyAction: 'Collaborative treatment review',
    milestones: ['Interactive visual scan review', 'Comparative risk & recovery review', 'Transparent care pathway documentation']
  },
  {
    step: '04',
    title: 'Care',
    tagline: 'Receive a personalised care plan',
    description: 'Embark on your customized treatment plan—whether that involves customized spectacle optimization, thermal dry eye therapy, or bladeless intraocular surgery in our state-of-the-art cleanroom surgical suites, backed by continuous post-care support.',
    keyAction: 'Personalized treatment & follow-up',
    milestones: ['Sub-micron surgical precision or therapy', 'Dedicated recovery suite nursing', 'Scheduled post-operative milestone evaluations']
  }
];

export const PATIENT_STORIES: PatientStory[] = [
  {
    id: 'story-1',
    patientName: 'Eleanor Vance-Ross',
    treatment: 'Bilateral Toric Extended Depth of Focus Lens Surgery',
    specialist: 'Dr. Elena Vance',
    quote: 'For fifteen years, driving at dusk caused unbearable halo glares. Within forty-eight hours of Dr. Vance’s care, road signs and piano sheet music returned with crisp, natural brilliance.',
    story: 'Eleanor, an architectural historian and amateur pianist, struggled with advancing nuclear cataracts combined with 2.25 diopters of corneal astigmatism. Following biometry on the IOLMaster 700 and femtosecond laser-assisted lens replacement, she achieved 20/20 uncorrected distance vision and sharp intermediate clarity without reading glasses.',
    outcome: '20/20 uncorrected distance and J1 reading acuity at 6-month review',
    year: '2025'
  },
  {
    id: 'story-2',
    patientName: 'Marcus Thorne Jr.',
    treatment: 'Early Macular Diagnostic Care & Targeted Therapy',
    specialist: 'Dr. Marcus Thorne',
    quote: 'The calm, clinical clarity at VisionSphere eliminated the anxiety I had felt for months. Seeing my own retinal scans explained in detail made all the difference.',
    story: 'When subtle central distortion appeared while reviewing technical blueprints, Marcus was referred to VisionSphere’s vitreoretinal clinic. Non-invasive swept-source OCT-A identified early sub-retinal fluid. Prompt, targeted therapy stabilized his macula before irreversible photoreceptor loss occurred.',
    outcome: 'Complete resolution of sub-retinal fluid with preserved 20/20 acuity',
    year: '2025'
  },
  {
    id: 'story-3',
    patientName: 'Sophia Lin (parent of Leo, age 6)',
    treatment: 'Paediatric Amblyopia & Binocular Alignment',
    specialist: 'Dr. Aisha Patel',
    quote: 'Dr. Patel turned what could have been a terrifying hospital visit into a joyful game. Leo looked forward to his appointments, and his eye tracking improved dramatically.',
    story: 'Six-year-old Leo was diagnosed during a school screening with refractive amblyopia in his left eye. Dr. Patel prescribed tailored spectacle correction paired with daily digital perceptual training exercises. Within nine months, Leo’s binocular stereopsis reached age-appropriate normal levels.',
    outcome: 'Visual acuity restored from 20/70 to 20/25 in the affected eye',
    year: '2026'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'digital-eye-strain',
    title: 'Digital Eye Strain in the Remote Work Era: A Clinical Perspective',
    category: 'Preventive Care',
    readTime: '4 min read',
    date: 'February 2026',
    excerpt: 'How reduced blink frequency during prolonged monitor use destabilizes the tear film, and evidence-based clinical protocols to protect ocular surface health.',
    content: 'When looking at digital screens, human blink frequency drops by over 60%, from an average of 18 blinks per minute to fewer than 6. This incomplete blinking causes the protective oily lipid layer of the tear film to evaporate rapidly, exposing sensitive corneal nerve endings to ambient air. Adopting the 20-20-20 rule, maintaining proper monitor distance (20–24 inches), and scheduling regular meibography checks can prevent chronic ocular surface distress.',
    author: 'Dr. Elena Vance'
  },
  {
    id: 'understanding-glaucoma-early',
    title: 'The Silent Thief of Sight: Understanding Early Glaucoma Progression',
    category: 'Vision Science',
    readTime: '6 min read',
    date: 'January 2026',
    excerpt: 'Why normal eye pressure does not always rule out glaucoma, and how spectral-domain OCT detects ganglion cell thinning years before visual field loss.',
    content: 'Glaucoma is characterized by progressive optic neuropathy where retinal ganglion cells die prematurely. Over 30% of glaucoma patients have normal tension glaucoma with intraocular pressures consistently under 21 mmHg. Today, computerized OCT imaging of the ganglion cell complex and retinal nerve fiber layer allows ophthalmologists to identify cellular loss long before a patient perceives blind spots.',
    author: 'Dr. Julian Sterling'
  },
  {
    id: 'cataract-premium-iol-options',
    title: 'Monofocal, Toric, or Trifocal? Choosing Your Ideal Intraocular Lens',
    category: 'Surgical Guidance',
    readTime: '5 min read',
    date: 'March 2026',
    excerpt: 'An objective guide to modern intraocular implants, lifestyle considerations, and understanding optical trade-offs between depth of focus and night contrast.',
    content: 'Selecting an intraocular lens implant for cataract surgery is one of the most personal healthcare decisions an individual will make. Standard monofocal lenses provide immaculate optical clarity at distance, requiring reading glasses for close work. Toric lenses neutralize corneal astigmatism, while extended depth of focus (EDOF) and trifocal optics provide seamless intermediate vision for computer work with minimal contrast loss.',
    author: 'Dr. Elena Vance'
  }
];

export const FAQS_DATA = [
  {
    q: 'Do I need a general practitioner (GP) referral to book an eye consultation?',
    a: 'While formal medical referrals from your family physician or optometrist are welcomed, they are not mandatory for initial private consultations at VisionSphere. You can book an appointment directly through our online concierge or telephone line.'
  },
  {
    q: 'Will my pupils be dilated during my comprehensive eye examination?',
    a: 'In most comprehensive and retina examinations, dilating eye drops (mydriatics) are administered to allow your specialist an unobstructed view of the peripheral retina and optic nerve. Dilating drops cause light sensitivity and blurred near vision for approximately 3 to 4 hours. We recommend bringing sunglasses and arranging transport home.'
  },
  {
    q: 'How long does modern cataract surgery take, and is it painful?',
    a: 'Modern cataract surgery at VisionSphere is an outpatient procedure lasting only 15 to 20 minutes per eye. The procedure is performed under gentle topical anaesthetic drops and mild conscious sedation, ensuring complete ocular comfort. Most patients report feeling only light fluid sensations and colorful illumination patterns during the procedure.'
  },
  {
    q: 'How does VisionSphere maintain surgical safety and low infection rates?',
    a: 'Our surgical suites are built to ISO Class 7 cleanroom specifications with continuous HEPA positive-pressure laminar airflow, single-use micro-instrumentation, and strict pre-operative povidone-iodine protocols. Our surgical infection rate remains consistently under 0.01%.'
  },
  {
    q: 'What should I bring to my initial consultation?',
    a: 'Please bring your current prescription eyeglasses and contact lens boxes (if applicable), a list of any current systemic and eye medications, relevant medical history notes, your photo identification, and a pair of sunglasses for post-dilation comfort.'
  }
];
