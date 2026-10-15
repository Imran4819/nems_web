import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Parent Testimonials"
          title="Voices of Our School Community"
          highlightWord="Community"
          description="Read how Nation English Medium School has nurtured confidence, academic rigor, and character in our students."
        />

        <div className="grid-3">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  color: 'rgba(197, 160, 89, 0.25)',
                }}
              >
                <Quote size={38} />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-gold-base)" color="var(--color-gold-base)" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '0.96rem',
                    lineHeight: '1.65',
                    color: 'var(--color-text-body)',
                    fontStyle: 'italic',
                    marginBottom: '1.5rem',
                  }}
                >
                  "{test.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-subtle)' }}>
                <img
                  src={test.avatar}
                  alt={test.parentName}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-navy-base)', margin: 0 }}>
                    {test.parentName}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    {test.childGrade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
