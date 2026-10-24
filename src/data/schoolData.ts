import type {
  ContactInfo,
  TrusteeLeader,
  StudentTopper,
  AlumniPride,
  FacultyMember,
  Facility,
  AcademicProgram,
  SchoolAchievement,
  Testimonial,
  GalleryItem,
} from '../types';

export const SCHOOL_INFO = {
  name: 'National English Medium School, Sangamner',
  shortName: 'NEMS Sangamner',
  trustName: 'Allied Education Society, Sangamner',
  tagline: 'Bonded to Build the Nation',
  secondaryMotto: 'Knowledge comes but wisdom lingers.',
  faithMotto: 'We Trust Al-Mighty',
  missionStatement:
    'Upliftment of rural masses through appropriate education. Gives true excellence of modern education with social Principles.',
  establishedYear: 2002,
  yearsOfExcellence: '23+ Years of Educational Excellence',
  curriculum: 'Pre-Primary to Class X · English Medium',
  affiliation: 'Affiliated to Maharashtra State Board of Secondary & Higher Secondary Education, Pune',
  affiliationShort: 'MSBSHSE, Pune',
};

export const CONTACT_INFO: ContactInfo = {
  phone: '+91 9767008294',
  altPhone: '+91 8793561215',
  landline: '(02425) 220020',
  email: 'cleverlogicin@gmail.com',
  address: 'Kolhewadi Road, Sangamner – 422605, Dist. Ahmednagar, Maharashtra',
  landmark: 'Near Kolhewadi Bypass, Sangamner',
  officeHours: 'Monday – Saturday: 8:00 AM – 5:00 PM',
};

export const KEY_STATS = [
  { label: 'SSC Board Pass Rate', value: '100%' },
  { label: 'Years of Excellence', value: '23+' },
  { label: 'Enrolled Students', value: '1,200+' },
  { label: 'Experienced Faculty', value: '50+' },
  { label: 'Scholarship Success', value: 'Top Ranks' },
];

export const SOCIETY_GOALS = [
  {
    num: '01',
    title: 'Academic Excellence',
    desc: 'To achieve academic excellence.',
  },
  {
    num: '02',
    title: 'Education for Rural Women',
    desc: 'To promote education for rural women.',
  },
  {
    num: '03',
    title: 'Avenues for Needy Classes',
    desc: 'To provide education avenues to needy and economically backward classes.',
  },
  {
    num: '04',
    title: 'Value-Based Education in Youth',
    desc: 'To inculcate value based education in youth.',
  },
  {
    num: '05',
    title: 'Socio-Economic & Cultural Transformation',
    desc: 'To achieve socio-economic and cultural transformation through education.',
  },
];

export const LEADERSHIP_DESKS: TrusteeLeader[] = [
  {
    id: 'chairman',
    name: 'Late. Haji Abdul Karim Tamboli',
    role: 'chairman',
    title: 'Chairman, Allied Education Society',
    designation: 'Visionary Founder & Educational Leader',
    message:
      'Our prime focus has always been the upliftment of rural masses through high-standard, character-building education. At National English Medium School, we nurture our children with modern scientific temper while keeping them bonded to the service of the nation.',
    image: '/assets/images/Dignified%20Elder%20in%20White%20and%20Cream.png',
  },
  {
    id: 'secretary',
    name: 'Dr. Wasim Tamboli',
    role: 'secretary',
    title: 'Secretary, Allied Education Society',
    designation: 'Managing Director & Academic Administrator',
    message:
      'We believe education must empower every child with confidence, critical skills, and empathetic values. Our 100% SSC board result track record and specialized competitive coaching reflect our dedicated commitment to every single student.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'principal',
    name: 'Principal Desk',
    role: 'principal',
    title: 'Head of Institution',
    designation: 'National English Medium School, Sangamner',
    message:
      'Welcome to NEMS Sangamner. We strive to bring out the natural genius in every child through digital smart classrooms, personal mentoring, spoken English fluency, and vibrant extracurricular pursuits.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
];

export const PRINCIPAL_INFO = {
  name: 'Principal Desk',
  qualifications: 'M.A., M.Ed. · Educational Leadership',
  experience: '20+ Years in Progressive School Pedagogy',
  quote:
    'Education is not merely the memorizing of facts, but the training of the mind to think, question, and serve society with integrity.',
  welcomeMessage:
    'Under the stewardship of Allied Education Society, NEMS Sangamner has consistently achieved 100% SSC board results while developing well-rounded personalities through Scout & Guide, sports, and competitive scholarship coaching.',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
};

export const INSTITUTIONAL_HIGHLIGHTS = [
  {
    title: '100% SSC Passing Legacy',
    description: 'Unbroken 100% SSC Board Exam passing rate maintained since the very first graduating batch.',
    icon: 'Trophy',
  },
  {
    title: 'Value-Based Moral Education',
    description: 'Cultivating strong ethical values, civic discipline, and patriotic responsibility.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Govt. Scholarship & Talent Coaching',
    description: 'Systematic coaching for State Scholarships, Olympiads, and inter-school Talent Search tests.',
    icon: 'GraduationCap',
  },
  {
    title: 'Digital Projector & AV Hall',
    description: 'Interactive smart projection and audiovisual modules making scientific concepts intuitive.',
    icon: 'MonitorPlay',
  },
  {
    title: 'Personalized Student Mentoring',
    description: 'Individual remedial clinics, doubt-clearance, and continuous formative mentoring.',
    icon: 'UserCheck',
  },
  {
    title: 'English Grammar & Oratory Seminars',
    description: 'Advanced English grammar workshops, elocution clubs, and confident public speaking.',
    icon: 'BookOpen',
  },
  {
    title: 'Scout-Guide & MCC Training',
    description: 'Maharashtra Cadet Corps leadership drills, parade excellence, and community service.',
    icon: 'Compass',
  },
  {
    title: 'Govt. Drawing Grade Exam Centre',
    description: 'Dedicated coaching and accredited examination centre for Elementary and Intermediate Drawing grades.',
    icon: 'Palette',
  },
];

export const BILINGUAL_SPECIALTIES = INSTITUTIONAL_HIGHLIGHTS;

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'pre-primary',
    level: 'Pre-Primary Wing',
    grades: 'Nursery, Jr. KG & Sr. KG',
    description:
      'A joyful, playful early-childhood sanctuary instilling foundational phonics, motor skills, social etiquette, and English conversation.',
    subjects: ['English Phonics & Rhymes', 'Number Play & Numeracy', 'Environmental Awareness', 'Drawing & Colouring', 'Storytelling & Roleplay'],
    focusPoints: [
      'Activity-based play-way learning methodology',
      'English handwriting & recitation focus',
      'Fancy dress competitions & cultural festivals',
      'Tree plantation & nature appreciation drives',
    ],
  },
  {
    id: 'primary',
    level: 'Primary Wing',
    grades: 'Classes I – V',
    description:
      'Building strong scholastic fundamentals in languages, mathematics, and environmental sciences with concept-led application.',
    subjects: ['English Language & Literature', 'Mathematics', 'General Science', 'Social Studies', 'Marathi & Hindi', 'Computer Literacy', 'Art & Craft'],
    focusPoints: [
      'Bilingual clarity with strong English medium fluency',
      'Foundation for Primary & Middle School Scholarship exams',
      'Four Unit Tests and Terminal & Annual 100-mark examinations',
      'Drawing grade foundation and mental mathematics',
    ],
  },
  {
    id: 'secondary',
    level: 'Middle & Secondary Wing',
    grades: 'Classes VI – X (SSC Board)',
    description:
      'Rigorous academic mastery designed for peak performance in the Maharashtra State Board (MSBSHSE) SSC examination with 100% first-class success.',
    subjects: ['English First Language', 'Mathematics (Algebra & Geometry)', 'Science & Technology (Physics, Chemistry, Biology)', 'Social Sciences (History, Civics, Geography)', 'Second & Third Languages (Marathi, Hindi)', 'ICT & Computer Studies'],
    focusPoints: [
      'Unbroken 100% SSC Board Exam passing legacy',
      'Continuous mock board prelims & individual doubt clearance',
      'Scout & Guide and Maharashtra Cadet Corps (MCC) discipline',
      'Guidance for competitive exams & science exhibitions',
    ],
  },
];

export const EXAM_PATTERN = {
  title: 'Maharashtra State Board Continuous Comprehensive Evaluation',
  structure: [
    { exam: 'Unit Test 1', marks: '20 Marks', timing: 'July / August' },
    { exam: 'Unit Test 2', marks: '20 Marks', timing: 'September' },
    { exam: 'Terminal Examination', marks: '100 Marks', timing: 'October / November' },
    { exam: 'Unit Test 3', marks: '20 Marks', timing: 'December / January' },
    { exam: 'Unit Test 4', marks: '20 Marks', timing: 'February' },
    { exam: 'Annual Examination', marks: '100 Marks', timing: 'March / April' },
  ],
  boardGrade: 'Class X: Maharashtra State Board SSC Public Examination',
};

export const FACILITIES: Facility[] = [
  {
    id: 'smart-classrooms',
    title: 'Projector & Smart Digital AV Hall',
    badge: 'Technology Enabled',
    description: 'Equipped with digital projectors, audio-visual educational modules, and interactive multimedia learning for complex scientific concepts.',
    iconName: 'MonitorPlay',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    features: ['High-resolution digital projection', 'Educational video curriculum', 'Interactive audio-visual seminars'],
  },
  {
    id: 'science-labs',
    title: 'Comprehensive Science Laboratory',
    badge: 'Hands-on Experiments',
    description: 'Fully equipped practical laboratory for Physics, Chemistry, and Biology experiments, nurturing curiosity and application-based knowledge.',
    iconName: 'FlaskConical',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    features: ['Modern microscopes & optical apparatus', 'Chemistry reagent safety counters', 'Hands-on science exhibition projects'],
  },
  {
    id: 'computer-lab',
    title: 'Computer Lab with High-Speed Internet',
    badge: 'Digital Literacy',
    description: 'Dedicated computer lab providing every student hands-on keyboard literacy, basic programming, internet research skills, and MS Office modules.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    features: ['Dedicated terminals per student', 'Supervised internet browsing', 'Practical IT curriculum aligned with State Board'],
  },
  {
    id: 'library',
    title: 'Reading Room & Central Library',
    badge: 'Knowledge Treasury',
    description: 'Extensive collection of English, Marathi, and Hindi literary works, reference books, encyclopedias, and scholarship exam guides.',
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    features: ['Scholarship & competitive exam guides', 'Bilingual reference encyclopedias', 'Quiet student reading area'],
  },
  {
    id: 'sports',
    title: 'Sports Grounds, Scout-Guide & MCC',
    badge: 'Physical Discipline',
    description: 'Expansive outdoor grounds for athletics, cricket, volleyball, kho-kho, kabaddi, alongside drill parades, Scout-Guide, and MCC drills.',
    iconName: 'Trophy',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    features: ['Scout & Guide discipline troops', 'Maharashtra Cadet Corps (MCC) training', 'Annual sports festival & athletic meets'],
  },
  {
    id: 'transport',
    title: 'Campus Transport & Student Safety',
    badge: 'Secure Commute',
    description: 'Safe and dependable school transport vans and buses covering Sangamner city and surrounding rural/suburban localities.',
    iconName: 'Bus',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    features: ['Comprehensive Sangamner routes', 'Experienced drivers & staff attendants', 'Strict safety protocols and gate security'],
  },
];

export const ADMISSION_REQUIREMENTS = [
  {
    doc: 'Original Birth Certificate',
    desc: 'Original Birth Certificate issued by Municipal Council / Gram Panchayat.',
  },
  {
    doc: 'Passport Size Photographs (3 Copies)',
    desc: 'Recent color passport-sized photographs of the student.',
  },
  {
    doc: 'Student Aadhaar Card (Photocopy)',
    desc: 'Self-attested photocopy of the student’s valid Aadhaar Card.',
  },
  {
    doc: 'Parent Aadhaar & WhatsApp Contact',
    desc: 'Photocopy of Parent/Guardian Aadhaar and active WhatsApp contact for official school circulars.',
  },
  {
    doc: 'Personal Candidate Presence Mandatory',
    desc: 'The student seeking admission must be personally present along with parents at the time of form submission.',
  },
];

export const STUDENT_TOPPERS: StudentTopper[] = [
  {
    id: 'topper-1',
    name: 'SSC Board Distinction Batch',
    batch: 'Class X · Maharashtra State Board',
    standard: '100% School Result',
    percentage: 97.4,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    category: 'board',
    highlights: ['100% Pass Percentage', 'Highest distinction count in taluka', 'Mathematics & Science centum scores'],
    quote: 'Our teachers in NEMS gave special individual doubt sessions and regular test practice that made board exams stress-free.',
  },
  {
    id: 'topper-2',
    name: 'State Scholarship Merit Scholars',
    batch: 'Middle School Merit Batch',
    standard: 'Taluka & District Rankers',
    percentage: 96.8,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    category: 'board',
    highlights: ['Govt. Scholarship Qualified', 'State Talent Search Medals', 'English & Marathi Grammar Excellence'],
    quote: 'The special scholarship exam coaching from Class IV and VII prepared our analytical mindset early.',
  },
  {
    id: 'topper-3',
    name: 'Scout & Guide / MCC Squad',
    batch: 'Leadership & Parade Honors',
    standard: 'State Level Drill Contingent',
    percentage: 95.5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    category: 'sports',
    highlights: ['Republic Day Parade Honors', 'Best Disciplined Cadet Unit', 'Social Service & Tree Plantation Leads'],
    quote: 'Discipline and pride in our country are the greatest values we learned at NEMS Sangamner.',
  },
  {
    id: 'topper-4',
    name: 'Govt. Drawing Grade Achievers',
    batch: 'Elementary & Intermediate Merit',
    standard: 'A-Grade Distinction Holders',
    percentage: 94.6,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    category: 'arts',
    highlights: ['Elementary Grade "A"', 'Intermediate Grade "A"', 'State-level Art Exhibition awards'],
    quote: 'NEMS encourages creative arts alongside studies, giving our artistic talents equal importance.',
  },
];

export const ALUMNI_PRIDE: AlumniPride[] = [
  {
    id: 'pride-1',
    name: 'Dr. Sneha Tamboli',
    profession: 'doctor',
    degree: 'MBBS, MD (General Medicine)',
    field: 'Internal Medicine & Critical Care',
    currentRole: 'Consultant Physician',
    institutionOrCompany: 'KEM Hospital & Research Centre, Pune',
    batchYear: 'Batch of 2012',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    quote: 'The scientific curiosity and daily discipline inculcated at NEMS Sangamner formed the bedrock of my medical career.',
    location: 'Pune',
  },
  {
    id: 'pride-2',
    name: 'Er. Sanket Patil',
    profession: 'engineer',
    degree: 'B.Tech (Computer Engineering) · COEP',
    field: 'Distributed Cloud Systems & AI',
    currentRole: 'Staff Software Engineer',
    institutionOrCompany: 'Google Cloud',
    batchYear: 'Batch of 2013',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    quote: 'Our computer laboratory and dedicated mathematics faculty at NEMS ignited my journey into big tech.',
    location: 'Bengaluru',
  },
  {
    id: 'pride-3',
    name: 'Dr. Prathamesh Joshi',
    profession: 'doctor',
    degree: 'MBBS, MS (Orthopaedic Surgery)',
    field: 'Joint Reconstruction & Trauma',
    currentRole: 'Senior Orthopaedic Surgeon',
    institutionOrCompany: 'Government Medical College & Hospital',
    batchYear: 'Batch of 2014',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    quote: 'Teachers at NEMS believed in our aspirations and gave us the conceptual foundation to secure top merit in medical entrance exams.',
    location: 'Mumbai',
  },
  {
    id: 'pride-4',
    name: 'Er. Rohit Gaikwad',
    profession: 'engineer',
    degree: 'B.Tech (Mechanical Engineering) · IIT Bombay',
    field: 'Robotics & Electric Powertrains',
    currentRole: 'Lead Robotics Systems Engineer',
    institutionOrCompany: 'Tata Motors R&D European Technical Centre',
    batchYear: 'Batch of 2015',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    quote: 'Hands-on practicals and science exhibitions at NEMS inspired my passion for automated machines and mechanical engineering.',
    location: 'Pune',
  },
  {
    id: 'pride-5',
    name: 'Dr. Ayesha Sayyed',
    profession: 'doctor',
    degree: 'BDS, MDS (Oral & Maxillofacial)',
    field: 'Maxillofacial & Dental Aesthetics',
    currentRole: 'Head of Dental Surgery',
    institutionOrCompany: 'Apex Multispeciality Hospital',
    batchYear: 'Batch of 2015',
    image: 'https://images.unsplash.com/photo-1594824813511-209e992b86f8?auto=format&fit=crop&w=600&q=80',
    quote: 'Values of empathy, discipline, and patient care were seeded right during our morning assembly speeches.',
    location: 'Nashik',
  },
  {
    id: 'pride-6',
    name: 'Er. Snehal Kulkarni',
    profession: 'engineer',
    degree: 'B.E. (Information Technology) · VJTI Mumbai',
    field: 'Enterprise Cloud Architecture',
    currentRole: 'Principal Cloud Solution Architect',
    institutionOrCompany: 'Microsoft',
    batchYear: 'Batch of 2016',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    quote: 'English grammar seminars and elocution competitions gave me the public speaking confidence to present to international clients.',
    location: 'Hyderabad',
  },
  {
    id: 'pride-7',
    name: 'Er. Wasim Pathan',
    profession: 'engineer',
    degree: 'B.Tech (Civil & Structural Engineering)',
    field: 'Public Mass Transit Infrastructure',
    currentRole: 'Executive Project Engineer',
    institutionOrCompany: 'Maharashtra Metro Rail Corporation (MahaMetro)',
    batchYear: 'Batch of 2014',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    quote: 'Allied Education Society’s motto "Bonded to Build the Nation" continues to be my guide in nation-building civil projects.',
    location: 'Pune / Sangamner',
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Senior Secondary Faculty',
    role: 'Mathematics & Science Department',
    experience: '18+ Years Experience',
    qualifications: 'M.Sc., B.Ed. (State Board Specialists)',
    subjects: ['Algebra & Geometry', 'General Science'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Dedicated to simplifying mathematical logic, scientific derivations, and board examination patterns with personal student mentoring.',
  },
  {
    id: 'fac-2',
    name: 'Languages & Grammar Faculty',
    role: 'English, Marathi & Hindi Leads',
    experience: '15+ Years Experience',
    qualifications: 'M.A. English / Marathi, B.Ed.',
    subjects: ['English Grammar Seminars', 'Spoken English', 'Regional Languages'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bio: 'Conducting special English grammar workshops, elocution competitions, and developing strong communication skills across all student batches.',
  },
  {
    id: 'fac-3',
    name: 'Competitive Exam & Scholarship Lead',
    role: 'Scholarship & Talent Search Mentors',
    experience: '14+ Years Experience',
    qualifications: 'B.Sc., D.T.Ed., B.Ed.',
    subjects: ['Scholarship Coaching', 'Mental Ability', 'Social Sciences'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Specialist in grooming young primary and middle school students for government scholarship examinations and inter-school talent search tests.',
  },
  {
    id: 'fac-4',
    name: 'Physical Education & Scout Lead',
    role: 'Sports, Scout-Guide & MCC In-charge',
    experience: '12+ Years Experience',
    qualifications: 'B.P.Ed., Certified Scout Master',
    subjects: ['Physical Training', 'Scout & Guide', 'MCC Drills', 'Athletics'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bio: 'Instilling physical stamina, parade discipline, leadership, and national pride through year-round athletic programs and scout activities.',
  },
];

export const ACHIEVEMENTS: SchoolAchievement[] = [
  {
    id: 'ach-1',
    title: '100% SSC Board Passing Track Record',
    date: 'Consecutive Years Since Batch 1',
    category: 'Academics',
    description: 'Maintaining an unblemished 100% passing record in the Maharashtra State Board Class X examination with outstanding distinctions in Sangamner taluka.',
    award: 'Excellence in Secondary Education',
  },
  {
    id: 'ach-2',
    title: 'Taluka & District Scholarship Ranks',
    date: 'Annual Achievement',
    category: 'Scholarships',
    description: 'Students consistently qualify and earn merit scholarships in Maharashtra State Primary and Middle School Scholarship Examinations.',
    award: 'State Govt. Merit Scholar Awards',
  },
  {
    id: 'ach-3',
    title: 'Scout, Guide & MCC District Honors',
    date: 'Annual Parade & Camps',
    category: 'Discipline & Leadership',
    description: 'Our Scout, Guide, and MCC units have earned high praise and first positions during taluka-level Independence Day and Republic Day parades.',
    award: 'Best Disciplined Contingent Award',
  },
  {
    id: 'ach-4',
    title: 'Govt. Drawing Grade Exam Distinctions',
    date: 'Every Academic Year',
    category: 'Fine Arts',
    description: 'Over 95% of our candidates secure "A" and "B" grades in the official Maharashtra Elementary and Intermediate Drawing Grade Examinations.',
    award: 'Directorate of Art Recognition',
  },
];

export const MILESTONE_23_YEARS = {
  years: 23,
  badgeText: 'Successful Completion of 23 Years',
  headline: '23 Years of Educational Excellence',
  tagline: 'Bonded to Build the Nation · A Legacy of Character, Discipline & Academic Distinction',
  summary:
    'From our humble founding under Allied Education Society to becoming a flagship institution in Sangamner, National English Medium School celebrates 23 years of transforming students into doctors, engineers, scholars, and responsible citizens.',
  achievements: [
    {
      title: 'Value Based Education',
      desc: 'Inculcating deep moral values, ethical conduct, and civic duty alongside academic learning.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Well-Experienced & Dedicated Staff',
      desc: 'Committed, caring, and highly qualified educators providing expert subject mentorship.',
      icon: 'GraduationCap',
    },
    {
      title: 'Regular Test Series (Six Practice Papers)',
      desc: 'Continuous board-pattern practice tests preparing students thoroughly for final examinations.',
      icon: 'FileCheck2',
    },
    {
      title: 'All-Round Pupil Development',
      desc: 'Balanced nurturing of cognitive intellect, physical vigor, emotional maturity, and social skills.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Application-Based Education',
      desc: 'Hands-on experiential learning moving far beyond rote memory towards true conceptual clarity.',
      icon: 'Lightbulb',
    },
    {
      title: 'Personal Guidance to Students',
      desc: 'Individual counseling, remedial attention, and customized mentoring for every learner.',
      icon: 'UserCheck',
    },
    {
      title: 'E-Learning & Projector-Based Teaching',
      desc: 'State-of-the-art audiovisual modules making science, mathematics, and social studies intuitive.',
      icon: 'MonitorPlay',
    },
    {
      title: 'Multilingual Curriculum',
      desc: 'Comprehensive language proficiency across English, Marathi, and Hindi from early grades.',
      icon: 'Languages',
    },
    {
      title: 'Co-Curricular & Sports Engagement',
      desc: 'Vibrant participation in athletics, inter-school tournaments, speech, drama, and fine arts.',
      icon: 'Trophy',
    },
    {
      title: 'Preparation for Talent-Based Exams',
      desc: 'Specialized coaching for State Scholarships, Olympiads, and regional talent search examinations.',
      icon: 'Sparkles',
    },
    {
      title: 'Campus Under 24/7 CCTV Surveillance',
      desc: 'Full-perimeter and classroom security surveillance guaranteeing complete child safety.',
      icon: 'Eye',
    },
    {
      title: 'NEET, JEE, CET & Competitive Success',
      desc: 'Proven foundation enabling generations of alumni to crack top entrance examinations nationwide.',
      icon: 'Target',
    },
  ],
  journeyPillars: [
    {
      title: 'Scholastic & Academic Quality',
      subtitle: 'Academic Excellence',
      desc: 'Maintaining the highest academic standards and an unbroken 100% SSC board passing track record.',
    },
    {
      title: 'Structured Co-Curricular Planning',
      subtitle: 'Diverse Co-Curriculars',
      desc: 'Year-round calendar of annual gatherings, exhibitions, sports meets, and national celebrations.',
    },
    {
      title: 'Higher Education in JEE, NEET & CET',
      subtitle: 'Higher Ed via JEE / NEET / CET',
      desc: 'Scores of alumni pursuing prestigious medical, engineering, and technology careers across India.',
    },
    {
      title: 'Strong Parent-School Collaboration',
      subtitle: 'Parent-School Harmony',
      desc: 'Transparent, proactive communication ensuring parents and teachers work hand-in-hand.',
    },
    {
      title: 'Outstanding Alumni Distinctions',
      subtitle: 'Distinguished Alumni',
      desc: 'NEMS graduates serving with distinction as doctors, software architects, and civil leaders.',
    },
    {
      title: 'Exemplary Discipline & Culture',
      subtitle: 'Exemplary Discipline',
      desc: 'Scout-Guide, MCC drills, and time-tested institutional values fostering lifelong discipline.',
    },
  ],
  pathwayToSuccess: [
    'Proper guidance & motivation provided for higher education & career aspirations',
    'Core emphasis on value-based moral education',
    'Highly experienced & dedicated teaching faculty',
    'Comprehensive focus on all-round child development',
    'Practical application-oriented conceptual knowledge',
    'Individual mentoring and personalized attention for every learner',
    'Active participation in outdoor athletics and sporting games',
    'Modern e-learning instruction via smart digital projectors',
    'Personality grooming, stage courage, and confidence building',
    'Rigorous preparation for Talent Search & Government Scholarship exams',
    'Dedicated foundation coaching for competitive entrance tests',
    'Multilingual mastery across English, Hindi, and regional languages',
  ],
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'NEMS Main Campus & Academic Wing',
    category: 'Campus',
    year: '2024',
    image: '/assets/images/nems-campus.jpg',
    caption: 'Official school building and premises situated at Kolhewadi Road, Sangamner.',
  },
  {
    id: 'gal-2',
    title: 'Annual School Gathering & Cultural Assembly',
    category: 'Events',
    year: '2024',
    image: '/assets/images/National%20English%20Medium%20School%20Gathering.png',
    caption: 'Students and faculty celebrating the annual gathering and cultural programs.',
  },
  {
    id: 'gal-3',
    title: 'Annual Day Celebrations & Welcome Banner',
    category: 'Events',
    year: '2024',
    image: '/assets/images/nems-banner-1.jpg',
    caption: 'Allied Education Society annual day festival showcasing student cultural performances.',
  },
  {
    id: 'gal-4',
    title: 'Academic Honors & Gathering Stage',
    category: 'Batches',
    year: '2024',
    image: '/assets/images/nems-banner-2.jpg',
    caption: 'Commemorating 100% SSC board examination toppers and academic achievers.',
  },
  {
    id: 'gal-5',
    title: 'Tree Plantation & Environmental Drive',
    category: 'Events',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    caption: 'Students and staff planting saplings to foster ecological stewardship in Sangamner.',
  },
  {
    id: 'gal-6',
    title: 'Annual Sports & Athletic Meet',
    category: 'Sports',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    caption: 'Inter-house races, relays, and march-past display by Scout & Guide contingents.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    parentName: 'Sangamner Resident Parent',
    childGrade: 'Parent of Class X SSC Student',
    rating: 5,
    comment:
      'National English Medium School has consistently kept its 100% board result promise. The dedication of teachers, weekend extra classes, and personal guidance gave our child immense confidence.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-2',
    parentName: 'Rural Sangamner Parent',
    childGrade: 'Parent of Class VII Student',
    rating: 5,
    comment:
      'The values and discipline instilled by Allied Education Society are commendable. Along with English fluency, my daughter is learning moral culture, scout training, and preparing for competitive scholarship exams.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-3',
    parentName: 'Primary Wing Parent',
    childGrade: 'Parent of Class III Student',
    rating: 5,
    comment:
      'The audio-visual digital hall and caring faculty make learning fun for little children. The school bus facility from Kolhewadi road is reliable and secure.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
];
