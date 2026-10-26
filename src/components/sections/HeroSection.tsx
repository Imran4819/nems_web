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
        backgroundImage: `linear-gradient(to right, rgba(7, 21, 39, 0.92) 0%, rgba(11, 37, 69, 0.82) 55%, rgba(11, 37, 69, 0.65) 100%), url('/assets/images/Indian%20School%20Assembly%20Ceremony.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '-72px',
        paddingTop: 'calc(5.5rem + 72px)',
        paddingBottom: '5.5rem',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Accent Gold Badge: Allied Education Society */}
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
              Allied Education Society · NEMS Sangamner
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.1rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            Bonded to Build the Nation.{' '}
            <span style={{ color: 'var(--color-gold-base)', display: 'inline-block' }}>
              100% SSC Board Results.
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: 1.65,
              maxWidth: '720px',
              marginBottom: '2.5rem',
            }}
          >
            Uplifting students through appropriate modern education, moral values, digital audio-visual classrooms, and dedicated scholarship exam coaching affiliated with the Maharashtra State Board (Pune).
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
              <span>About Society & School</span>
            </a>
          </div>

          {/* Quick Credibility Features */}
          <div className="hero-credibility" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', opacity: 0.9 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
              <ShieldCheck size={18} color="var(--color-gold-base)" />
              <span>100% SSC Passing Legacy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
              <ShieldCheck size={18} color="var(--color-gold-base)" />
              <span>Govt. Scholarship & Talent Coaching</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
              <ShieldCheck size={18} color="var(--color-gold-base)" />
              <span>Scout-Guide & MCC Training</span>
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
        @media (max-width: 600px) {
          #home {
            margin-top: -68px !important;
            padding-top: calc(4rem + 68px) !important;
            padding-bottom: 3rem !important;
          }
        }
        @media (max-width: 576px) {
          .hero-cta-group {
            flex-direction: column !important;
          }
          .hero-btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.85rem !important;
          }
          .hero-credibility {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
        }
        @media (max-width: 375px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
