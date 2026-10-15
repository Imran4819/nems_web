import React from 'react';
import { Quote, Award, Sparkles } from 'lucide-react';
import { PRINCIPAL_INFO } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';

export const PrincipalSection: React.FC = () => {
  return (
    <section id="principal" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Leadership & Direction"
          title="From The Principal's Desk"
          highlightWord="Principal's Desk"
          description="A message of stewardship, student empowerment, and academic vision."
        />

        <div
          style={{
            backgroundColor: 'var(--color-navy-base)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            color: '#FFFFFF',
          }}
          className="principal-card"
        >
          {/* Principal Image & Credentials */}
          <div style={{ position: 'relative', minHeight: '380px' }}>
            <img
              src={PRINCIPAL_INFO.image}
              alt={PRINCIPAL_INFO.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 21, 39, 0.85) 0%, transparent 60%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
              }}
            >
              <span className="badge badge-gold-dark" style={{ marginBottom: '0.4rem' }}>
                <Award size={13} />
                <span>{PRINCIPAL_INFO.experience}</span>
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', margin: 0 }}>
                {PRINCIPAL_INFO.name}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-gold-light)', margin: 0 }}>
                {PRINCIPAL_INFO.qualifications}
              </p>
            </div>
          </div>

          {/* Principal Quote & Address */}
          <div
            style={{
              padding: '3rem 3.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            className="principal-content"
          >
            <div
              style={{
                display: 'inline-flex',
                color: 'var(--color-gold-base)',
                marginBottom: '1rem',
                opacity: 0.8,
              }}
            >
              <Quote size={42} />
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                lineHeight: '1.6',
                fontStyle: 'italic',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                borderLeft: '3px solid var(--color-gold-base)',
                paddingLeft: '1.25rem',
              }}
            >
              "{PRINCIPAL_INFO.quote}"
            </blockquote>

            <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              {PRINCIPAL_INFO.welcomeMessage}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: 'auto' }}>
              <Sparkles size={20} color="var(--color-gold-base)" />
              <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                <strong>Office hours for parent appointments:</strong> Tuesday & Thursday, 10:00 AM – 1:00 PM.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .principal-card {
            grid-template-columns: 1fr !important;
          }
          .principal-content {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
