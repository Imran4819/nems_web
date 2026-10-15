import React from 'react';
import { Trophy, Calendar, Medal } from 'lucide-react';
import { ACHIEVEMENTS } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Milestones & Excellence"
          title="Institutional Accolades & Trophies"
          highlightWord="Accolades"
          description="A testament to the consistent dedication of our students, teachers, and sporting coaches in regional and national arenas."
        />

        <div className="grid-2">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="card"
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
                borderLeft: '4px solid var(--color-gold-base)',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(197, 160, 89, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--color-gold-deep)',
                }}
              >
                <Trophy size={26} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.45rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-navy" style={{ fontSize: '0.7rem' }}>{ach.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    <Calendar size={13} />
                    <span>{ach.date}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy-base)', marginBottom: '0.5rem' }}>
                  {ach.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: '1.6', marginBottom: '0.85rem' }}>
                  {ach.description}
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--color-gold-deep)',
                    backgroundColor: 'var(--color-gold-soft)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <Medal size={14} />
                  <span>{ach.award}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
