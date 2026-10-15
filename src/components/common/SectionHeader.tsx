import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  highlightWord,
  description,
  centered = true,
  dark = false,
  className = '',
}) => {
  const alignStyle = centered ? { textAlign: 'center' as const, margin: '0 auto 3rem auto' } : { textAlign: 'left' as const, marginBottom: '2.5rem' };

  let formattedTitle: React.ReactNode = title;
  if (highlightWord && title.includes(highlightWord)) {
    const parts = title.split(highlightWord);
    formattedTitle = (
      <>
        {parts[0]}
        <span style={{ color: 'var(--color-gold-base)' }}>{highlightWord}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div className={`section-header ${className}`} style={alignStyle}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 style={{ color: dark ? '#FFFFFF' : 'var(--color-text-title)' }}>
        {formattedTitle}
      </h2>
      <div className="accent-bar" style={centered ? {} : { margin: '0 0 1rem 0' }} />
      {description && (
        <p style={{ color: dark ? 'rgba(255, 255, 255, 0.8)' : 'var(--color-text-muted)' }}>
          {description}
        </p>
      )}
    </div>
  );
};
