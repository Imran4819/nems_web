import React, { useState } from 'react';
import { Award, Star, BookOpen, Trophy } from 'lucide-react';
import { STUDENT_TOPPERS } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';

export const StudentToppersSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'board' | 'stem' | 'sports'>('all');

  const filteredStudents = filter === 'all'
    ? STUDENT_TOPPERS
    : STUDENT_TOPPERS.filter((s) => s.category === filter);

  return (
    <section id="toppers" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Maharashtra State Board Excellence"
          title="100% SSC Results & Merit Achievers"
          highlightWord="100% SSC Results"
          description="Honoring our continuous 100% SSC board passing track record, taluka scholarship rankers, Scout-Guide contingents, and drawing grade distinction holders."
        />

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Achievers' },
            { id: 'board', label: 'SSC & Scholarships' },
            { id: 'sports', label: 'Scout, Guide & Sports' },
            { id: 'arts', label: 'Art & Drawing Grade' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: filter === item.id ? 'var(--color-navy-base)' : '#FFFFFF',
                color: filter === item.id ? '#FFFFFF' : 'var(--color-text-body)',
                border: filter === item.id ? '1px solid var(--color-navy-base)' : '1px solid var(--color-border-subtle)',
                boxShadow: filter === item.id ? 'var(--shadow-md)' : 'none',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Student Cards Grid */}
        <div className="grid-4">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Image & Score Pill */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={student.image}
                  alt={student.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7, 21, 39, 0.85) 0%, transparent 60%)',
                  }}
                />

                {/* Score Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'var(--color-gold-base)',
                    color: '#071527',
                    fontWeight: 800,
                    fontSize: '1rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: 'var(--shadow-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Star size={14} fill="#071527" />
                  <span>{student.percentage}%</span>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1.25rem',
                    right: '1.25rem',
                  }}
                >
                  <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: 0 }}>
                    {student.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-light)', fontWeight: 600 }}>
                    {student.batch}
                  </div>
                </div>
              </div>

              {/* Details & Highlights */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--color-navy-base)',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Award size={16} color="var(--color-gold-base)" />
                  <span>{student.standard}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {student.highlights.map((hl) => (
                    <span
                      key={hl}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: '#F1F5F9',
                        color: 'var(--color-text-body)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        border: '1px solid #E2E8F0',
                      }}
                    >
                      {hl}
                    </span>
                  ))}
                </div>

                {student.quote && (
                  <p
                    style={{
                      marginTop: 'auto',
                      fontSize: '0.84rem',
                      fontStyle: 'italic',
                      color: 'var(--color-text-muted)',
                      borderLeft: '2px solid var(--color-gold-base)',
                      paddingLeft: '0.75rem',
                      lineHeight: '1.5',
                      marginBottom: 0,
                    }}
                  >
                    "{student.quote}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Merit Highlights Banner */}
        <div
          className="toppers-banner"
          style={{
            marginTop: '3.5rem',
            backgroundColor: 'var(--color-navy-base)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 2.5rem',
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'rgba(197, 160, 89, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1.5px solid var(--color-gold-base)',
                flexShrink: 0,
              }}
            >
              <Trophy size={28} color="var(--color-gold-light)" />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', margin: 0 }}>
                100% Board Pass Rate for 7 Consecutive Years
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', margin: '4px 0 0 0' }}>
                Over 72% of our secondary batch secured distinction with 90%+ aggregate marks in 2024.
              </p>
            </div>
          </div>

          <a href="#academics" className="btn btn-primary btn-sm toppers-banner-cta">
            <BookOpen size={16} />
            <span>View Board Curriculum</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .toppers-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 1.5rem !important;
          }
          .toppers-banner-cta {
            width: 100% !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};
