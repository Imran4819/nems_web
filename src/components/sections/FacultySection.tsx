import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { FACULTY_MEMBERS } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const FacultySection: React.FC = () => {
  const { t } = useLanguage();

  const localizedFaculty = t.faculty.items.map((item) => {
    const original = FACULTY_MEMBERS.find((f) => f.id === item.id) || FACULTY_MEMBERS[0];
    return {
      ...item,
      image: original.image,
    };
  });

  return (
    <section id="faculty" className="section">
      <div className="container">
        <SectionHeader
          eyebrow={t.faculty.eyebrow}
          title={t.faculty.title}
          highlightWord={t.faculty.highlightWord}
          description={t.faculty.description}
        />

        <div className="grid-4">
          {localizedFaculty.map((member) => (
            <div
              key={member.id}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                  }}
                >
                  <span className="badge badge-gold-dark" style={{ background: 'rgba(7, 21, 39, 0.85)', color: '#FFFFFF' }}>
                    <Award size={12} color="var(--color-gold-base)" />
                    <span>{member.experience}</span>
                  </span>
                </div>
              </div>

              <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy-base)', marginBottom: '0.25rem' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-gold-deep)', marginBottom: '0.65rem' }}>
                  {member.role}
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.85rem' }}>
                  <GraduationCap size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} />
                  {member.qualifications}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', lineHeight: '1.55', marginBottom: '1.25rem' }}>
                  {member.bio}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {member.subjects.map((sub) => (
                    <span
                      key={sub}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        backgroundColor: '#F1F5F9',
                        color: 'var(--color-navy-base)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
