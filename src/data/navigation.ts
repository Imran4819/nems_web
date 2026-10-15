export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Principal', href: '#principal' },
  { label: 'Academics', href: '#academics' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Toppers & Stars', href: '#toppers' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: 'Curriculum & Streams', href: '#academics' },
  { label: 'Admission Guidelines 2025–26', href: '#admissions' },
  { label: 'Board Examination Toppers', href: '#toppers' },
  { label: 'Campus Infrastructure', href: '#facilities' },
  { label: 'Faculty & Mentors', href: '#faculty' },
  { label: 'Annual Sports & Events', href: '#achievements' },
];

export const FOOTER_POLICY_LINKS: NavLink[] = [
  { label: 'Code of Student Conduct', href: '#' },
  { label: 'Transport Safety Protocol', href: '#' },
  { label: 'Anti-Bullying Cell', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Parent Portal Login', href: '#' },
];
