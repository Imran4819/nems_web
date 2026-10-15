import type {
  ContactInfo,
  StudentTopper,
  FacultyMember,
  Facility,
  AcademicProgram,
  SchoolAchievement,
  Testimonial,
  GalleryItem,
} from '../types';

export const SCHOOL_INFO = {
  name: 'Nation English Medium School Sangamner',
  tagline: 'Learning with discipline. Growing with confidence.',
  establishedYear: 2002,
  yearsOfExcellence: '23 Years of Education',
  curriculum: 'Classes I to X · English Medium',
  affiliation: 'Affiliated to Secondary Education Board',
};

export const CONTACT_INFO: ContactInfo = {
  phone: '+91 2425 223456',
  email: 'info@nationschoolsangamner.edu',
  address: 'Nation Campus, Akole Road, Sangamner, Maharashtra 422605',
  officeHours: 'Monday – Saturday: 8:00 AM – 4:00 PM',
};

export const KEY_STATS = [
  { label: 'Years of Excellence', value: '23+' },
  { label: 'Active Students', value: '1,500+' },
  { label: 'Board Pass Rate', value: '100%' },
  { label: 'Qualified Educators', value: '65+' },
  { label: 'Student-Teacher Ratio', value: '22:1' },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'primary',
    level: 'Primary Wing',
    grades: 'Classes I – V',
    description: 'Nurturing foundational literacy, numeracy, creative expression, and social development in an engaging activity-led environment.',
    subjects: ['English Language & Literature', 'Mathematics', 'Environmental Studies', 'Second Language', 'Art & Craft', 'Computer Basics'],
    focusPoints: [
      'Inquiry-based foundational learning',
      'Phonics, expressive reading, and storytelling',
      'Kinesthetic math & science kits',
      'Values, discipline, and daily assembly conduct',
    ],
  },
  {
    id: 'middle',
    level: 'Middle School',
    grades: 'Classes VI – VIII',
    description: 'Transitioning into rigorous inquiry, critical thinking, conceptual science, and interdisciplinary problem solving.',
    subjects: ['Advanced English', 'Mathematics & Algebra', 'General Science (Physics, Chem, Bio)', 'Social Sciences', 'Third Language', 'Coding & Robotics'],
    focusPoints: [
      'Hands-on experimental science labs',
      'Analytical reasoning and olympiad training',
      'Debate, elocution, and public speaking clubs',
      'Leadership and collaborative team projects',
    ],
  },
  {
    id: 'secondary',
    level: 'Secondary Wing',
    grades: 'Classes IX – X',
    description: 'Intensive academic mastery and personality development designed for peak performance in Secondary Board Examinations.',
    subjects: ['English Core', 'Pure Mathematics', 'Physics, Chemistry & Biology', 'History, Civics & Geography', 'Computer Applications', 'Commercial Studies'],
    focusPoints: [
      'Regular board simulation mock exams',
      'Dedicated remedial & doubt-clearing clinics',
      'Comprehensive career counseling seminars',
      'Stress management and mental wellness workshops',
    ],
  },
];

export const PRINCIPAL_INFO = {
  name: 'Dr. Meera Kapoor',
  qualifications: 'M.Sc., M.Ed., Ph.D. in Educational Pedagogy',
  experience: '28+ Years in Academic Administration',
  quote:
    'A good school gives children habits and the confidence to take responsibility for their future. At Nation English Medium School, we believe that academic brilliance shines brightest when rooted in integrity and empathetic leadership.',
  welcomeMessage:
    'For over two decades, our institution has been a sanctuary of curiosity, character, and discipline. We welcome each student into an environment where questions are celebrated and potential is realized.',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
};

export const FACILITIES: Facility[] = [
  {
    id: 'smart-classrooms',
    title: 'Interactive Smart Classrooms',
    badge: 'Technology Enabled',
    description: 'Digitally equipped classrooms with interactive LED smartboards, audio-visual immersion, and ergonomic seating.',
    iconName: 'MonitorPlay',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    features: ['High-speed connectivity', 'Digital courseware library', 'Climate controlled comfort'],
  },
  {
    id: 'science-labs',
    title: 'Advanced Science Laboratories',
    badge: 'Hands-on STEM',
    description: 'Dedicated modern laboratories for Physics, Chemistry, and Biology compliant with national safety norms.',
    iconName: 'FlaskConical',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    features: ['Individual experiment workstations', 'Safety showers & eye-wash stations', 'Specimen microscopes & digital balances'],
  },
  {
    id: 'computer-lab',
    title: 'AI & Computer Learning Centre',
    badge: 'Future Skills',
    description: 'Dual computer laboratories equipped with 80+ modern systems, coding environments, and robotics kits.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    features: ['Python, Scratch & Web Development', 'Gigabit fibre internet with firewall', 'Maker-space robotics kits'],
  },
  {
    id: 'library',
    title: 'The Central Heritage Library',
    badge: 'Knowledge Hub',
    description: 'A serene sanctuary housing over 14,000 titles, reference encyclopedias, international journals, and e-readers.',
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    features: ['Automated book circulation', 'Quiet study cubicles', 'Digital journal access portals'],
  },
  {
    id: 'sports',
    title: 'Athletics & Sports Pavilion',
    badge: 'Physical Wellness',
    description: 'Sprawling outdoor grounds for football, cricket, basketball courts, and an indoor table tennis hall.',
    iconName: 'Trophy',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    features: ['Certified sports coaches', 'Annual athletic track meet', 'Yoga & martial arts studio'],
  },
  {
    id: 'transport',
    title: 'GPS-Enabled Safe Transport',
    badge: 'Student Safety',
    description: 'A fleet of modern school buses covering all major city routes with live GPS tracking and onboard female attendants.',
    iconName: 'Bus',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    features: ['Real-time app bus tracking', 'First-aid and speed governors', 'CCTV monitoring in every vehicle'],
  },
];

export const STUDENT_TOPPERS: StudentTopper[] = [
  {
    id: 'aarav-sharma',
    name: 'Aarav Sharma',
    batch: 'Class X · Batch of 2024',
    standard: 'Class X Board Topper',
    percentage: 98.4,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    category: 'board',
    highlights: ['Maths: 100/100', 'Science: 99/100', 'English: 98/100'],
    quote: 'The teachers at Nation School made every concept intuitive and supported us with continuous mock reviews.',
  },
  {
    id: 'ananya-sen',
    name: 'Ananya Sen',
    batch: 'Class X · Batch of 2024',
    standard: 'Class X Second Rank',
    percentage: 97.6,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    category: 'board',
    highlights: ['Social Science: 99/100', 'English: 98/100', 'Maths: 97/100'],
    quote: 'Discipline in daily revision and our interactive library helped me remain calm and focused.',
  },
  {
    id: 'rohan-mehta',
    name: 'Rohan Mehta',
    batch: 'Class IX · 2024',
    standard: 'National Science Olympiad Rank 14',
    percentage: 96.2,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    category: 'stem',
    highlights: ['State STEM Gold Medalist', 'Robotics Club Captain', 'Maths: 98/100'],
    quote: 'Our robotics and computer labs gave me the freedom to experiment and compete nationally.',
  },
  {
    id: 'priya-ghosh',
    name: 'Priya Ghosh',
    batch: 'Class X · Batch of 2024',
    standard: 'State Athletics Gold & Academic Honor',
    percentage: 95.8,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    category: 'sports',
    highlights: ['State 400m Champion', 'Class Valedictorian', 'Science: 96/100'],
    quote: 'Nation School taught me that academics and athletics do not compete; they empower each other.',
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'rajiv-menon',
    name: 'Mr. Rajiv Menon',
    role: 'Head of Mathematics & Physics',
    experience: '16+ Years Experience',
    qualifications: 'M.Sc. in Applied Physics, B.Ed.',
    subjects: ['Physics', 'Higher Mathematics'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Dedicated to demystifying mathematical proofs and guiding students to achieve perfect centum scores in board examinations.',
  },
  {
    id: 'ananya-sharma',
    name: 'Ms. Ananya Sharma',
    role: 'Senior Coordinator & English Lead',
    experience: '12+ Years Experience',
    qualifications: 'M.A. English Literature, B.Ed.',
    subjects: ['English Language', 'World Literature'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bio: 'Passionate about nurturing expressive oratory, analytical essay writing, and critical engagement with classic and modern texts.',
  },
  {
    id: 'sunita-roy',
    name: 'Mrs. Sunita Roy',
    role: 'Head of Life Sciences',
    experience: '14+ Years Experience',
    qualifications: 'M.Sc. in Botany, B.Ed.',
    subjects: ['Biology', 'Environmental Science'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Championing hands-on biological experiments, botanical field tours, and environmental conservation projects.',
  },
  {
    id: 'alok-mukherjee',
    name: 'Dr. Alok Mukherjee',
    role: 'Computer Science & ICT Mentor',
    experience: '10+ Years Experience',
    qualifications: 'M.Tech, Ph.D. in Computer Science',
    subjects: ['Computer Applications', 'Artificial Intelligence'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bio: 'Guiding students through computational thinking, algorithms, modern web development, and ethical artificial intelligence.',
  },
];

export const ACHIEVEMENTS: SchoolAchievement[] = [
  {
    id: 'ach-1',
    title: '100% Board Exam First Class Result',
    date: 'Academic Year 2023–24',
    category: 'Academics',
    description: 'Every student in Class X secured distinction and first-division honors in the Secondary State Board exams.',
    award: 'Consecutive 7-Year Academic Citation',
  },
  {
    id: 'ach-2',
    title: 'Champions: Inter-School Science Conclave',
    date: 'November 2024',
    category: 'Innovation & STEM',
    description: 'Our junior robotics team secured 1st prize among 42 participating regional schools for an automated flood early-warning model.',
    award: 'Gold Trophy & Innovation Grant',
  },
  {
    id: 'ach-3',
    title: 'State Championship in Athletic Relay',
    date: 'January 2025',
    category: 'Athletics',
    description: 'Our senior girls 4x100m relay squad clinched the state gold medal setting a new regional meet record.',
    award: 'State Gold Medal & Banner',
  },
  {
    id: 'ach-4',
    title: 'Clean & Green Eco-School Award',
    date: 'August 2024',
    category: 'Sustainability',
    description: 'Recognized for achieving 100% solar water heating, zero single-use plastics, and organic terrace herb cultivation.',
    award: 'City Civic Environmental Honor',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Annual Sports Day 2024',
    category: 'Sports',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    caption: 'March past by the four school houses at the annual athletics meet.',
  },
  {
    id: 'gal-2',
    title: 'STEM Innovation Fair',
    category: 'Academics',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    caption: 'Students demonstrating renewable energy models to visiting dignitaries.',
  },
  {
    id: 'gal-3',
    title: 'Batch of 2024 Valedictory',
    category: 'Batches',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    caption: 'Celebrating our graduating Class X cohort on their farewell day.',
  },
  {
    id: 'gal-4',
    title: 'Campus Central Quadrangle',
    category: 'Campus',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    caption: 'Morning sunshine over the central red-brick academic pavilion.',
  },
  {
    id: 'gal-5',
    title: 'Annual Cultural Festival',
    category: 'Events',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    caption: 'Classical Indian dance performance by middle school students.',
  },
  {
    id: 'gal-6',
    title: 'Batch of 2022 Alumni Reunion',
    category: 'Batches',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    caption: 'Alumni sharing insights with current students during career week.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    parentName: 'Sanjay & Poulomi Bannerjee',
    childGrade: 'Parents of Rohan (Class VIII)',
    rating: 5,
    comment:
      'Nation English Medium School balances disciplined academic habits with warm encouragement. Rohan used to be hesitant in public speaking, but thanks to the elocution club, he now leads debates with confidence!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-2',
    parentName: 'Vikramaditya Sengupta',
    childGrade: 'Parent of Riya (Class X - 2024)',
    rating: 5,
    comment:
      'The faculty’s commitment during board exam preparation is exceptional. Mock tests, doubt-clearing sessions on Saturdays, and personal mentorship ensured my daughter scored 97.4% without undue stress.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-3',
    parentName: 'Debasmita Chakraborty',
    childGrade: 'Parent of Aarohi (Class III)',
    rating: 5,
    comment:
      'The primary wing teachers are caring and attentive. The safe GPS-tracked bus service and hygienic cafeteria give working parents complete peace of mind every single day.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
];
