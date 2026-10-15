import React from 'react';
import { Target, BookOpenCheck, Award, HeartHandshake } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Target size={28} color="var(--color-navy-base)" />,
      title: 'Discipline as Foundation',
      description: 'Cultivating time consciousness, self-reliance, respectful conduct, and focused study routines from Class I onwards.',
    },
    {
      icon: <BookOpenCheck size={28} color="var(--color-navy-base)" />,
      title: 'Inquiry-Led Academics',
      description: 'Moving beyond rote memorization to concept clarity, scientific inquiry, and board exam analytical proficiency.',
    },
    {
      icon: <Award size={28} color="var(--color-navy-base)" />,
      title: 'Holistic Excellence',
      description: 'Equal encouragement for athletics, debate, robotic clubs, and visual arts alongside scholastic excellence.',
    },
    {
      icon: <HeartHandshake size={28} color="var(--color-navy-base)" />,
      title: 'Compassionate Community',
      description: 'Fostering an inclusive, warm ecosystem where every child feels seen, protected, and inspired by dedicated mentors.',
    },
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Our Heritage & Ethos"
          title="Nurturing Generations Since 2002"
          highlightWord="2002"
          description="Nation English Medium School was founded with a singular mission: providing world-class, value-based education accessible to families in Sangamner."
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3.5rem', alignItems: 'center', marginBottom: '4rem' }} className="about-grid">
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
              23 Years of Academic Leadership
            </span>
            <h3 style={{ fontSize: '1.95rem', marginBottom: '1.25rem', color: 'var(--color-navy-base)' }}>
              Where traditional values meet contemporary pedagogy.
            </h3>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--color-text-body)', marginBottom: '1.25rem' }}>
              At Nation English Medium School, education is not simply the imparting of textbooks—it is the ignition of character, resilience, and curiosity. Over 23 years, our alumni have matriculated into premier colleges, medical and engineering institutes, and leadership roles across the globe.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--color-text-body)', marginBottom: '1.75rem' }}>
              Our faculty comprises seasoned educationists with decades of combined pedagogical experience. We maintain an optimal student-to-educator ratio to guarantee individualized care and continuous formative feedback.
            </p>

            <div style={{ display: 'flex', gap: '2rem', borderLeft: '3px solid var(--color-gold-base)', paddingLeft: '1.25rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--color-navy-base)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Class X Board Success</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--color-navy-base)' }}>
                  1:22
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Teacher-Student Ratio</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--color-navy-base)' }}>
                  25+
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Co-curricular Clubs</div>
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
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
                alt="Students collaborating in modern classroom at Nation School"
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
                maxWidth: '280px',
              }}
              className="about-accent-card"
            >
              <div style={{ color: 'var(--color-gold-light)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Safe & Verified Campus
              </div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: '4px' }}>
                CCTV coverage, verified female bus attendants & 24/7 security.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid-4" style={{ marginTop: '2.5rem' }}>
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
          }
          .about-accent-card {
            position: static !important;
            margin-top: 1rem;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
