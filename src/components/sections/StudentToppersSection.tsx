import React, { useState } from 'react';
import { Award, Star } from 'lucide-react';
import { STUDENT_TOPPERS } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const StudentToppersSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'board' | 'sports' | 'arts'>('all');
  const { t } = useLanguage();

  const filterTabs = [
    { id: 'all', label: t.toppers.filters.all },
    { id: 'board', label: t.toppers.filters.board },
    { id: 'sports', label: t.toppers.filters.sports },
    { id: 'arts', label: t.toppers.filters.arts },
  ];

  // Merge original image & category with localized items
  const localizedToppers = t.toppers.items.map((item) => {
    const original = STUDENT_TOPPERS.find((s) => s.id === item.id) || STUDENT_TOPPERS[0];
    return {
      ...item,
      category: original.category,
      image: original.image,
    };
  });

  const filteredStudents = filter === 'all'
    ? localizedToppers
    : localizedToppers.filter((s) => s.category === filter);

  return (
    <section id="toppers" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow={t.toppers.eyebrow}
          title={t.toppers.title}
          highlightWord={t.toppers.highlightWord}
          description={t.toppers.description}
        />

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {filterTabs.map((item) => (
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
                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
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
                        fontSize: '0.74rem',
                        backgroundColor: 'var(--color-bg-elevated)',
                        color: 'var(--color-text-body)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 600,
                      }}
                    >
                      {hl}
                    </span>
                  ))}
                </div>

                {student.quote && (
                  <div
                    style={{
                      marginTop: 'auto',
                      fontStyle: 'italic',
                      fontSize: '0.84rem',
                      color: 'var(--color-text-muted)',
                      borderLeft: '2px solid var(--color-gold-base)',
                      paddingLeft: '0.75rem',
                      lineHeight: '1.5',
                    }}
                  >
                    "{student.quote}"
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
