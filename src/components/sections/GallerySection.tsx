import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { t } = useLanguage();

  const categories = [
    { id: 'All', label: t.gallery.filters.all },
    { id: 'National', label: t.gallery.filters.National },
    { id: 'RepublicDay', label: t.gallery.filters.RepublicDay },
    { id: 'IndependenceDay', label: t.gallery.filters.IndependenceDay },
    { id: 'Campus', label: t.gallery.filters.Campus },
    { id: 'Events', label: t.gallery.filters.Events },
    { id: 'Sports', label: t.gallery.filters.Sports },
    { id: 'Batches', label: t.gallery.filters.Batches },
  ];

  const localizedGallery = t.gallery.items.map((item) => {
    const original = GALLERY_ITEMS.find((g) => g.id === item.id) || GALLERY_ITEMS[0];
    return {
      ...item,
      category: original.category,
      year: original.year,
      image: original.image,
    };
  });

  const filteredItems = activeCategory === 'All'
    ? localizedGallery
    : activeCategory === 'National'
    ? localizedGallery.filter(
        (item) =>
          item.category === 'National' ||
          item.category === 'RepublicDay' ||
          item.category === 'IndependenceDay'
      )
    : localizedGallery.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <SectionHeader
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          highlightWord={t.gallery.highlightWord}
          description={t.gallery.description}
        />

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.55rem 1.3rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: activeCategory === cat.id ? 'var(--color-navy-base)' : '#FFFFFF',
                color: activeCategory === cat.id ? '#FFFFFF' : 'var(--color-text-body)',
                border: activeCategory === cat.id ? '1px solid var(--color-navy-base)' : '1px solid var(--color-border-subtle)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7, 21, 39, 0.85) 0%, transparent 50%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                  }}
                >
                  <span className="badge badge-gold-dark" style={{ background: 'rgba(7, 21, 39, 0.75)', color: '#FFFFFF' }}>
                    {(t.gallery.filters as Record<string, string>)[item.category] || item.category} · {item.year}
                  </span>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    color: '#FFFFFF',
                  }}
                >
                  <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', margin: 0, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Camera size={16} color="var(--color-gold-base)" />
                    <span>{item.title}</span>
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.85)', margin: '4px 0 0 0', lineHeight: '1.4' }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
