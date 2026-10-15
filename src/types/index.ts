export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  officeHours: string;
}

export interface StudentTopper {
  id: string;
  name: string;
  batch: string;
  standard: string;
  percentage: number;
  image: string;
  highlights: string[];
  quote?: string;
  category: 'board' | 'stem' | 'sports' | 'arts';
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  qualifications: string;
  subjects: string[];
  image: string;
  bio: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  image: string;
  features: string[];
}

export interface AcademicProgram {
  id: string;
  level: string;
  grades: string;
  description: string;
  subjects: string[];
  focusPoints: string[];
}

export interface SchoolAchievement {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  award: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childGrade: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Sports' | 'Academics' | 'Events' | 'Batches';
  year: string;
  image: string;
  caption: string;
}

export interface AdmissionFormData {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  targetGrade: string;
  academicYear: string;
  message?: string;
}
