import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const localizedTestimonials = t.testimonials.items.map((item) => {
    const original = TESTIMONIALS.find((test) => test.id === item.id) || TESTIMONIALS[0];
    return {
      ...item,
      rating: original.rating,
      avatar: original.avatar,
    };
  });

  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          highlightWord={t.testimonials.highlightWord}
          description={t.testimonials.description}
        />

        <div className="grid-3">
          {localizedTestimonials.map((test) => (
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
