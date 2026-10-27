import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../types/i18n';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'compact' | 'drawer' | 'chatbot';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  const { language, setLanguage, supportedLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const currentOption = supportedLanguages.find((l) => l.code === language) || supportedLanguages[0];

  // Drawer / Mobile pill segment variant
  if (variant === 'drawer') {
    return (
      <div
        className={`language-selector-drawer ${className}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F1F5F9',
          padding: '4px',
          borderRadius: 'var(--radius-full)',
          width: '100%',
          border: '1px solid var(--color-border-subtle)',
        }}
      >
        {supportedLanguages.map((lang) => {
          const isSelected = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              style={{
                flex: 1,
                padding: '0.45rem 0.5rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: isSelected ? 700 : 500,
                backgroundColor: isSelected ? 'var(--color-navy-base)' : 'transparent',
                color: isSelected ? '#FFFFFF' : 'var(--color-navy-base)',
                boxShadow: isSelected ? '0 2px 6px rgba(11, 37, 69, 0.2)' : 'none',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                cursor: 'pointer',
              }}
            >
              <span>{lang.nativeName}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Chatbot compact variant
  if (variant === 'chatbot') {
    return (
      <div
        ref={dropdownRef}
        style={{ position: 'relative' }}
        className={`language-selector-chatbot ${className}`}
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          title="Change language / भाषा बदला"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: 'var(--radius-full)',
            padding: '3px 8px',
            color: '#FFFFFF',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          <Globe size={12} color="var(--color-gold-light)" />
          <span>{currentOption.nativeName}</span>
          <ChevronDown size={12} />
        </button>

        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 6px)',
              right: 0,
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              border: '1px solid var(--color-border-subtle)',
              zIndex: 1000,
              minWidth: '110px',
              overflow: 'hidden',
              padding: '4px',
            }}
          >
            {supportedLanguages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: language === lang.code ? 700 : 500,
                  backgroundColor: language === lang.code ? 'rgba(197, 160, 89, 0.12)' : 'transparent',
                  color: language === lang.code ? 'var(--color-navy-base)' : '#334155',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>{lang.nativeName}</span>
                {language === lang.code && <Check size={12} color="var(--color-gold-base)" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default navbar dropdown variant
  return (
    <div
      ref={dropdownRef}
      className={`language-selector-wrapper ${className}`}
      style={{ position: 'relative' }}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select Language"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(8px)',
          border: '1.5px solid var(--color-gold-base)',
          color: '#FFFFFF',
          padding: '0.42rem 0.85rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.84rem',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(197, 160, 89, 0.22)';
          e.currentTarget.style.borderColor = 'var(--color-gold-light)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.borderColor = 'var(--color-gold-base)';
        }}
      >
        <Globe size={15} color="var(--color-gold-light)" />
        <span style={{ letterSpacing: '0.02em', color: 'var(--color-gold-light)' }}>
          {currentOption.nativeName}
        </span>
        <ChevronDown
          size={14}
          color="rgba(255, 255, 255, 0.8)"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        />
      </button>

      {/* Floating Dropdown */}
      {isOpen && (
        <div
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            backgroundColor: '#0F2540',
            border: '1.5px solid var(--color-gold-base)',
            borderRadius: '12px',
            boxShadow: '0 12px 30px rgba(7, 21, 39, 0.65)',
            zIndex: 1000,
            minWidth: '150px',
            padding: '6px',
            backdropFilter: 'blur(16px)',
            animation: 'fadeInSlide 0.2s ease-out forwards',
          }}
        >
          {supportedLanguages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                type="button"
                onClick={() => {
                  setLanguage(lang.code as Language);
                  setIsOpen(false);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '0.86rem',
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected ? 'rgba(197, 160, 89, 0.2)' : 'transparent',
                  color: isSelected ? 'var(--color-gold-light)' : 'rgba(255, 255, 255, 0.9)',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-gold-base)', fontWeight: 800 }}>
                    {lang.shortLabel}
                  </span>
                  <span>{lang.nativeName}</span>
                </div>
                {isSelected && <Check size={14} color="var(--color-gold-light)" />}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
