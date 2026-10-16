export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Society', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Academics', href: '#academics' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'SSC Results', href: '#toppers' },
  { label: 'Our Pride', href: '#pride' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: 'Maharashtra State Board Curriculum', href: '#academics' },
  { label: 'SSC 100% Result Track Record', href: '#toppers' },
  { label: 'Our Pride: Doctors & Engineers', href: '#pride' },
  { label: 'Admission Documents & Criteria', href: '#admissions' },
  { label: 'Digital AV Hall & Science Labs', href: '#facilities' },
  { label: 'Scout-Guide & MCC Activities', href: '#achievements' },
  { label: 'Experienced Faculty Mentors', href: '#faculty' },
];

export const FOOTER_POLICY_LINKS: NavLink[] = [
  { label: 'Allied Education Society Charter', href: '#about' },
  { label: 'Code of Student Discipline & Values', href: '#' },
  { label: 'Scholarship Exam Cell', href: '#academics' },
  { label: 'Campus Transport Routes', href: '#facilities' },
  { label: 'Government Approvals & Affiliation', href: '#about' },
];
