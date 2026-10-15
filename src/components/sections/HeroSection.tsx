import React from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { KEY_STATS } from '../../data/schoolData';

interface HeroSectionProps {
  onOpenAdmissionModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAdmissionModal }) => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-navy-dark)',
        backgroundImage: `linear-gradient(to right, rgba(7, 21, 39, 0.94) 0%, rgba(11, 37, 69, 0.85) 60%, rgba(11, 37, 69, 0.72) 100%), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '6rem',
        paddingBottom: '5.5rem',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Accent Gold Badge matching Figma Make: | 23 YEARS OF EDUCATION · CLASSES I TO X */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              marginBottom: '1.75rem',
            }}
          >
            <span
              style={{
                width: '3px',
                height: '14px',
                backgroundColor: 'var(--color-gold-base)',
                borderRadius: '2px',
              }}
            />
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-gold-light)',
              }}
            >
              23 Years of Education · Classes I to X
            </span>
          </div>

          {/* Heading matching Figma Make typography */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            Learning with discipline.{' '}
            <span style={{ color: 'var(--color-gold-base)', display: 'inline-block' }}>
              Growing with confidence.
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: 1.65,
              maxWidth: '680px',
              marginBottom: '2.5rem',
            }}
          >
            Empowering curious young minds through academic excellence, character building, modern STEM laboratories, and dedicated educators committed to every child's success.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button
              onClick={onOpenAdmissionModal}
              className="btn btn-primary btn-lg hero-btn"
            >
              <span>Apply for Admission</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#about"
              className="btn btn-outline-white btn-lg hero-btn"
            >
              <Compass size={18} />
              <span>Explore Campus</span>
            </a>
          </div>

          {/* Quick Credibility Features */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', opacity: 0.9 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
              <ShieldCheck size={18} color="var(--color-gold-base)" />
              <span>100% Board Pass Track Record</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
              <ShieldCheck size={18} color="var(--color-gold-base)" />
              <span>Safe GPS School Transport</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
              <ShieldCheck size={18} color="var(--color-gold-base)" />
              <span>Modern STEM & AI Labs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Key Metrics Ribbon */}
      <div
        style={{
          marginTop: '3.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: 'rgba(7, 21, 39, 0.7)',
          backdropFilter: 'blur(10px)',
          padding: '1.5rem 0',
        }}
      >
        <div className="container">
          <div
            className="hero-stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1.25rem',
              textAlign: 'center',
            }}
          >
            {KEY_STATS.map((stat) => (
              <div key={stat.label} style={{ padding: '0.5rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.2rem)',
                    fontWeight: 800,
                    color: 'var(--color-gold-light)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .hero-cta-group {
            flex-direction: column !important;
          }
          .hero-btn {
            width: 100% !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};
