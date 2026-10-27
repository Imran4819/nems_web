import React from 'react';
import { MonitorPlay, FlaskConical, Cpu, BookOpen, Trophy, Bus, Check } from 'lucide-react';
import { FACILITIES } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const FacilitiesSection: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'smart-classrooms':
        return <MonitorPlay size={22} />;
      case 'science-labs':
        return <FlaskConical size={22} />;
      case 'computer-lab':
        return <Cpu size={22} />;
      case 'library':
        return <BookOpen size={22} />;
      case 'sports':
        return <Trophy size={22} />;
      case 'transport':
        return <Bus size={22} />;
      default:
        return <Check size={22} />;
    }
  };

  // Merge images from schoolData with localized texts
  const facilities = t.facilities.items.map((item) => {
    const original = FACILITIES.find((f) => f.id === item.id) || FACILITIES[0];
    return {
      ...item,
      image: original.image,
    };
  });

  return (
    <section id="facilities" className="section">
      <div className="container">
        <SectionHeader
          eyebrow={t.facilities.eyebrow}
          title={t.facilities.title}
          highlightWord={t.facilities.highlightWord}
          description={t.facilities.description}
        />

        <div className="grid-3">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                <img
                  src={facility.image}
                  alt={facility.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                  }}
                >
                  <span className="badge badge-gold" style={{ boxShadow: 'var(--shadow-sm)' }}>
                    {facility.badge}
                  </span>
                </div>
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 37, 69, 0.08)',
                      color: 'var(--color-navy-base)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {getIcon(facility.id)}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy-base)', margin: 0 }}>
                    {facility.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {facility.description}
                </p>

                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--color-border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                  }}
                >
                  {facility.features.map((feat) => (
                    <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      <Check size={14} color="var(--color-gold-base)" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
