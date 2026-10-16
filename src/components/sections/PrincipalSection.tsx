import React, { useState } from 'react';
import { Quote, Award, Sparkles } from 'lucide-react';
import { LEADERSHIP_DESKS } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';

export const PrincipalSection: React.FC = () => {
  const [activeLeaderId, setActiveLeaderId] = useState<'chairman' | 'secretary' | 'principal'>('chairman');

  const activeLeader = LEADERSHIP_DESKS.find((l) => l.id === activeLeaderId) || LEADERSHIP_DESKS[0];

  return (
    <section id="leadership" className="section">
      <span id="principal" style={{ display: 'block', position: 'relative', top: '-100px', visibility: 'hidden' }} />
      <div className="container">
        <SectionHeader
          eyebrow="Visionary Leadership & Governance"
          title="From The Leadership Desks"
          highlightWord="Leadership Desks"
          description="The guiding vision of Allied Education Society and school administration steering NEMS Sangamner."
        />

        {/* Tab Selection */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {LEADERSHIP_DESKS.map((leader) => (
            <button
              key={leader.id}
              onClick={() => setActiveLeaderId(leader.id as any)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: activeLeaderId === leader.id ? 'var(--color-navy-base)' : '#FFFFFF',
                color: activeLeaderId === leader.id ? '#FFFFFF' : 'var(--color-text-body)',
                border: activeLeaderId === leader.id ? '1px solid var(--color-navy-base)' : '1px solid var(--color-border-subtle)',
                boxShadow: activeLeaderId === leader.id ? 'var(--shadow-md)' : 'none',
              }}
            >
              {leader.title.split(',')[0]}
            </button>
          ))}
        </div>

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
          {/* Leader Image & Credentials */}
          <div style={{ position: 'relative', minHeight: '380px' }}>
            <img
              src={activeLeader.image || 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'}
              alt={activeLeader.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 21, 39, 0.9) 0%, transparent 60%)',
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
                <span>{activeLeader.title}</span>
              </span>
              <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', margin: 0 }}>
                {activeLeader.name}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-gold-light)', margin: 0 }}>
                {activeLeader.designation}
              </p>
            </div>
          </div>

          {/* Leader Quote & Message */}
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
              <Quote size={40} />
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.28rem',
                lineHeight: '1.65',
                fontStyle: 'italic',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                borderLeft: '3px solid var(--color-gold-base)',
                paddingLeft: '1.25rem',
              }}
            >
              "{activeLeader.message}"
            </blockquote>

            <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              Under Allied Education Society, National English Medium School has remained dedicated to providing accessible, top-quality English Medium education in Sangamner with an unblemished 100% SSC board result record.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-gold-light)', fontSize: '0.88rem' }}>
              <Sparkles size={16} color="var(--color-gold-base)" />
              <span>Allied Education Society · Bonded to Build the Nation</span>
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
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
