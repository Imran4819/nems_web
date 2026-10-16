import React, { useState } from 'react';
import { BookOpen, CheckCircle2, GraduationCap, ClipboardCheck } from 'lucide-react';
import { ACADEMIC_PROGRAMS, EXAM_PATTERN } from '../../data/schoolData';
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
          eyebrow="Maharashtra State Board Curriculum"
          title="Structured Excellence: Pre-Primary to Class X"
          highlightWord="Pre-Primary to Class X"
          description="Affiliated to MSBSHSE Pune. An intensive academic pathway engineered to cultivate foundational mastery, spoken English fluency, and 100% board examination distinction."
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
            marginBottom: '3.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="badge badge-gold">{activeProgram.grades}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                English Medium · Maharashtra State Board
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
              <span>Apply for {activeProgram.grades}</span>
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
              Includes continuous unit tests, drawing grade prep, handwriting, and digital audio-visual lessons.
            </div>
          </div>
        </div>

        {/* Examination & Evaluation Pattern */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            border: '1px solid var(--color-border-subtle)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <ClipboardCheck size={24} color="var(--color-navy-base)" />
            <div>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--color-navy-base)', margin: 0 }}>
                {EXAM_PATTERN.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Standard evaluation schedule for Std. I to IX leading into Class X SSC Board Examinations.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
            }}
          >
            {EXAM_PATTERN.structure.map((item) => (
              <div
                key={item.exam}
                style={{
                  backgroundColor: 'var(--color-bg-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {item.timing}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy-base)', marginTop: '4px' }}>
                  {item.exam}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gold-base)', fontWeight: 700, marginTop: '4px' }}>
                  {item.marks}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.85rem 1.25rem',
              backgroundColor: 'rgba(11, 37, 69, 0.04)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.85rem',
              color: 'var(--color-navy-base)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span>{EXAM_PATTERN.boardGrade}</span>
            <span style={{ color: 'var(--color-gold-base)' }}>100% Pass Percentage Record</span>
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
