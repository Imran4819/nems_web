import React from 'react';
import { Target, BookOpenCheck, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { SCHOOL_INFO, SOCIETY_GOALS, INSTITUTIONAL_HIGHLIGHTS } from '../../data/schoolData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Target size={28} color="var(--color-navy-base)" />,
      title: 'Discipline as Foundation',
      description: 'Cultivating time consciousness, self-reliance, respectful conduct, and focused study routines from Pre-Primary onwards.',
    },
    {
      icon: <BookOpenCheck size={28} color="var(--color-navy-base)" />,
      title: 'Concept & Application',
      description: 'Moving beyond rote learning towards application-based knowledge and board analytical proficiency.',
    },
    {
      icon: <Award size={28} color="var(--color-navy-base)" />,
      title: '100% SSC Track Record',
      description: 'An unbroken legacy of 100% passing results in the Maharashtra State Board examinations since the first batch.',
    },
    {
      icon: <HeartHandshake size={28} color="var(--color-navy-base)" />,
      title: 'Compassionate Community',
      description: 'Fostering an inclusive, supportive ecosystem where students from all strata receive equal nurture and mentorship.',
    },
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Our Heritage & Vision"
          title="Allied Education Society's Legacy"
          highlightWord="Legacy"
          description={SCHOOL_INFO.missionStatement}
        />

        {/* Main Narrative Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3.5rem', alignItems: 'center', marginBottom: '4rem' }} className="about-grid">
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
              Allied Education Society · Estd. 2002
            </span>
            <h3 style={{ fontSize: '1.95rem', marginBottom: '1.25rem', color: 'var(--color-navy-base)', lineHeight: 1.25 }}>
              "Bonded to Build the Nation" with Quality, Modern & Value-Based Education.
            </h3>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--color-text-body)', marginBottom: '1.25rem' }}>
              Founded under the visionary leadership of <strong>Hon. Haji Abdul Karim Tamboli</strong> and <strong>Dr. Wasim Tamboli</strong>, Allied Education Society established National English Medium School (NEMS), Sangamner with a core motto: <em>"Bonded to Build the Nation"</em> and <em>"We Trust Al-Mighty"</em>.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--color-text-body)', marginBottom: '1.75rem' }}>
              Situated at Kolhewadi Road in Sangamner, our campus bridges the gap between rural aspirations and contemporary global competence. With projector-equipped digital teaching, specialized scholarship examination coaching, Scout & Guide, and English grammar seminars, we ensure every student achieves scholastic excellence with humility.
            </p>

            <div style={{ display: 'flex', gap: '2rem', borderLeft: '3px solid var(--color-gold-base)', paddingLeft: '1.25rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--color-navy-base)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>SSC Board Passing Record</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--color-navy-base)' }}>
                  23+
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Years of Excellence</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--color-navy-base)' }}>
                  1,200+
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Students Nurtured</div>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '4px solid #FFFFFF',
              }}
            >
              <img
                src="/assets/images/National%20English%20Medium%20School%20Gathering.png"
                alt="National English Medium School Gathering at Sangamner"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-20px',
                backgroundColor: 'var(--color-navy-base)',
                color: '#FFFFFF',
                padding: '1.25rem 1.75rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                borderLeft: '4px solid var(--color-gold-base)',
                maxWidth: '300px',
              }}
              className="about-accent-card"
            >
              <div style={{ color: 'var(--color-gold-light)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                MSBSHSE Pune Affiliated
              </div>
              <div style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: '4px' }}>
                Fully approved English Medium curriculum under Maharashtra Secondary State Board.
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Objectives of Allied Education Society */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
              Foundational Mission
            </span>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--color-navy-base)' }}>
              5 Core Goals of Allied Education Society
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {SOCIETY_GOALS.map((goal) => (
              <div
                key={goal.num}
                className="card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  borderTop: '3px solid var(--color-gold-base)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-gold-base)', opacity: 0.85 }}>
                  {goal.num}
                </div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-navy-base)', margin: 0 }}>
                  {goal.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.55', margin: 0 }}>
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Bilingual Highlights from Wix Site */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--color-border-subtle)',
            marginBottom: '4rem',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
            <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>
              Institutional Highlights
            </span>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--color-navy-base)', margin: 0 }}>
              Key Educational Features at NEMS Sangamner
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
              Directly aligned with our commitment to balanced cognitive and moral student development.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {INSTITUTIONAL_HIGHLIGHTS.map((spec) => (
              <div
                key={spec.title}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(11, 37, 69, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-navy-base)',
                  }}
                >
                  <CheckCircle2 size={20} color="var(--color-gold-base)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--color-navy-base)', lineHeight: 1.3 }}>
                    {spec.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '4px', lineHeight: 1.4 }}>
                    {spec.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(11, 37, 69, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {pillar.icon}
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--color-navy-base)' }}>{pillar.title}</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.55', margin: 0 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-accent-card {
            position: static !important;
            margin-top: 1rem !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
