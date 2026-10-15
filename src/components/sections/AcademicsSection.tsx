import React, { useState } from 'react';
import { BookOpen, CheckCircle2, GraduationCap } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';

interface AcademicsSectionProps {
  onOpenAdmissionModal: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenAdmissionModal }) => {
  const [activeTab, setActiveTab] = useState(ACADEMIC_PROGRAMS[0].id);
  const activeProgram = ACADEMIC_PROGRAMS.find((p) => p.id === activeTab) || ACADEMIC_PROGRAMS[0];

  return (
    <section id="academics" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Curriculum & Pedagogy"
          title="Structured Excellence: Classes I to X"
          highlightWord="Classes I to X"
          description="A progressive, continuous academic pathway engineered to cultivate foundational mastery, analytical thought, and board examination distinction."
        />

        {/* Level Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {ACADEMIC_PROGRAMS.map((program) => {
            const isSelected = activeTab === program.id;
            return (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                style={{
                  padding: '0.8rem 1.6rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: isSelected ? 'var(--color-navy-base)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--color-text-body)',
                  border: isSelected ? '1px solid var(--color-navy-base)' : '1px solid var(--color-border-subtle)',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                }}
              >
                {program.level} ({program.grades})
              </button>
            );
          })}
        </div>

        {/* Selected Program Showcase */}
        <div
          className="card academics-card-grid"
          style={{
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '2.5rem',
            borderTop: '4px solid var(--color-gold-base)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="badge badge-gold">{activeProgram.grades}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                English Medium Curriculum
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', color: 'var(--color-navy-base)', marginBottom: '1rem' }}>
              {activeProgram.level}
            </h3>

            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--color-text-body)', marginBottom: '1.75rem' }}>
              {activeProgram.description}
            </p>

            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy-base)', marginBottom: '0.85rem' }}>
              Key Pedagogical Focus Areas:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
              {activeProgram.focusPoints.map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="var(--color-gold-base)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--color-text-body)' }}>{point}</span>
                </div>
              ))}
            </div>

            <button onClick={onOpenAdmissionModal} className="btn btn-primary" style={{ width: 'auto' }}>
              <GraduationCap size={18} />
              <span>Enroll for {activeProgram.grades}</span>
            </button>
          </div>

          {/* Subjects Card */}
          <div
            style={{
              backgroundColor: 'var(--color-bg-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              border: '1px solid var(--color-border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <BookOpen size={20} color="var(--color-navy-base)" />
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-navy-base)', margin: 0 }}>
                  Curriculum & Subjects
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {activeProgram.subjects.map((subject, idx) => (
                  <div
                    key={subject}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: '#FFFFFF',
                      padding: '0.7rem 0.95rem',
                      borderRadius: '8px',
                      border: '1px solid var(--color-border-subtle)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--color-text-title)',
                    }}
                  >
                    <span>{subject}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>0{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--color-border-subtle)',
                fontSize: '0.82rem',
                color: 'var(--color-text-muted)',
              }}
            >
              Continuous formative assessment (CFA) conducted every quarter alongside laboratory practicals and mental arithmetic tests.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .academics-card-grid {
            grid-template-columns: 1fr !important;
            padding: 1.75rem !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 576px) {
          .academics-card-grid {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
