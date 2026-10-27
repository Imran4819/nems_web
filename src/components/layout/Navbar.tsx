import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, Sparkles, Images } from 'lucide-react';
import { CONTACT_INFO, GALLERY_ITEMS } from '../../data/schoolData';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSelector } from '../common/LanguageSelector';

interface NavbarProps {
  activeSection: string;
  onOpenAdmissionModal: () => void;
  onOpenChatbot?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenAdmissionModal,
  onOpenChatbot,
}) => {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '#home', key: 'home' },
    { label: t.nav.about, href: '#about', key: 'about' },
    { label: t.nav.leadership, href: '#leadership', key: 'leadership' },
    { label: t.nav.academics, href: '#academics', key: 'academics' },
    { label: t.nav.facilities, href: '#facilities', key: 'facilities' },
    { label: t.nav.toppers, href: '#toppers', key: 'toppers' },
    { label: t.nav.pride, href: '#pride', key: 'pride' },
    { label: t.nav.faculty, href: '#faculty', key: 'faculty' },
    { label: t.nav.achievements, href: '#achievements', key: 'achievements' },
    { label: t.nav.gallery, href: '#gallery', key: 'gallery' },
    { label: t.nav.admissions, href: '#admissions', key: 'admissions' },
    { label: t.nav.contact, href: '#contact', key: 'contact' },
  ];

  // Prevent background scroll when sidebar drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          backgroundColor: isScrolled
            ? 'rgba(7, 21, 39, 0.94)'
            : 'rgba(7, 21, 39, 0.45)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled
            ? '1px solid rgba(197, 160, 89, 0.25)'
            : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isScrolled ? '0 6px 24px rgba(0, 0, 0, 0.35)' : 'none',
          transition: 'all 0.35s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
          }}
        >
          {/* Brand Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--color-gold-base)',
                flexShrink: 0,
                overflow: 'hidden',
                padding: '2px',
              }}
            >
              <img
                src="/assets/images/nems-logo.png"
                alt="NEMS Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 3.5vw, 1.55rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                  lineHeight: 1.1,
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                N.E.M.S.
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.58rem, 1.6vw, 0.68rem)',
                  fontWeight: 700,
                  color: 'var(--color-gold-light)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                {t.nav.brandTagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
            }}
            className="desktop-nav"
          >
            {navLinks.slice(0, 7).map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.key}
                  href={link.href}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-gold-light)' : 'rgba(255, 255, 255, 0.9)',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: 'var(--color-gold-base)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(197, 160, 89, 0.8)',
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* Language Selector Dropdown */}
            <LanguageSelector variant="navbar" />

            {onOpenChatbot && (
              <button
                onClick={onOpenChatbot}
                className="btn btn-sm"
                style={{
                  backgroundColor: 'rgba(197, 160, 89, 0.18)',
                  color: 'var(--color-gold-light)',
                  border: '1px solid var(--color-gold-base)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  padding: '0.42rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-gold-base)';
                  e.currentTarget.style.color = 'var(--color-navy-dark)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(197, 160, 89, 0.18)';
                  e.currentTarget.style.color = 'var(--color-gold-light)';
                }}
              >
                <Sparkles size={14} />
                <span>{t.nav.askAi}</span>
              </button>
            )}

            <button
              onClick={onOpenAdmissionModal}
              className="btn btn-primary btn-sm"
            >
              {t.nav.applyNow}
            </button>
          </nav>

          {/* Mobile Right Controls: Language Selector + Hamburger Menu */}
          <div className="mobile-actions" style={{ display: 'none', alignItems: 'center', gap: '0.6rem' }}>
            <LanguageSelector variant="navbar" />
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Sidebar Menu from Left"
              style={{
                display: 'flex',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '42px',
                minHeight: '42px',
                cursor: 'pointer',
              }}
            >
              <Menu size={22} color="#FFFFFF" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay for Left Sidebar */}
      <div
        className={`sidebar-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Left-Side Off-Canvas Drawer (Slides in from Left) */}
      <aside
        className={`sidebar-drawer-left ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Sidebar"
      >
        {/* Sidebar Header */}
        <div
          style={{
            padding: '1.25rem 1.25rem 1rem 1.25rem',
            borderBottom: '1px solid var(--color-border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-gold-base)',
                overflow: 'hidden',
                padding: '2px',
              }}
            >
              <img
                src="/assets/images/nems-logo.png"
                alt="NEMS Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--color-navy-base)',
                  lineHeight: 1,
                }}
              >
                NEMS SANGAMNER
              </div>
              <div
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginTop: '2px',
                }}
              >
                {t.nav.alliedSociety}
              </div>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Sidebar"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={20} color="var(--color-navy-base)" />
          </button>
        </div>

        {/* Language Switcher in Drawer */}
        <div style={{ padding: '0.85rem 1rem 0.35rem 1rem' }}>
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Language / भाषा निवडा:
          </div>
          <LanguageSelector variant="drawer" />
        </div>

        {/* Sidebar Navigation Links */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0.5rem 0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '0.96rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--color-navy-base)' : 'var(--color-text-body)',
                  backgroundColor: isActive ? 'rgba(197, 160, 89, 0.15)' : 'transparent',
                  borderLeft: isActive ? '3px solid var(--color-gold-base)' : '3px solid transparent',
                  padding: '0.75rem 1rem',
                  borderRadius: '0 8px 8px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'background-color 0.15s ease',
                }}
              >
                <span>{link.label}</span>
                <ChevronRight
                  size={16}
                  color={isActive ? 'var(--color-gold-base)' : '#94A3B8'}
                />
              </a>
            );
          })}

          {/* Sidebar Campus Gallery Showcase */}
          <div
            style={{
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
              padding: '0.85rem',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.65rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Images size={15} color="var(--color-gold-dark)" />
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--color-navy-base)',
                  }}
                >
                  {t.nav.gallery}
                </span>
              </div>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: 'var(--color-gold-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  textDecoration: 'none',
                }}
              >
                <span>{language === 'mr' ? 'सर्व पहा' : language === 'hi' ? 'सभी देखें' : 'View all'}</span>
                <ChevronRight size={12} />
              </a>
            </div>

            {/* 2x2 Photo Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.45rem',
              }}
            >
              {GALLERY_ITEMS.slice(0, 4).map((item) => {
                const localizedTitle =
                  t.gallery.items.find((gi) => gi.id === item.id)?.title || item.title;
                return (
                  <a
                    key={item.id}
                    href="#gallery"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      position: 'relative',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      aspectRatio: '4 / 3',
                      display: 'block',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      backgroundColor: 'var(--color-navy-dark)',
                    }}
                    title={localizedTitle}
                  >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(7, 21, 39, 0.7) 0%, transparent 60%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '4px 6px',
                    }}
                  >
                    <span
                      style={{
                        color: '#FFFFFF',
                        fontSize: '0.62rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: 'block',
                        width: '100%',
                      }}
                    >
                      {localizedTitle}
                    </span>
                  </div>
                </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar Footer with CTA and Quick Contact */}
        <div
          style={{
            padding: '1.25rem',
            borderTop: '1px solid var(--color-border-subtle)',
            backgroundColor: '#F8FAFC',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {onOpenChatbot && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChatbot();
              }}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-navy-base)',
                color: '#FFFFFF',
                border: '1.5px solid var(--color-gold-base)',
                fontWeight: 700,
                fontSize: '0.86rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
            >
              <Sparkles size={16} color="var(--color-gold-base)" />
              <span>{t.nav.askAi}</span>
            </button>
          )}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAdmissionModal();
            }}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem' }}
          >
            {t.nav.applyNow}
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-navy-base)' }}
            >
              <Phone size={14} color="var(--color-gold-base)" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-navy-base)' }}
            >
              <Mail size={14} color="var(--color-gold-base)" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </aside>

      <style>{`
        /* Desktop vs Mobile Toggle */
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-actions {
            display: flex !important;
          }
        }

        /* Left-Slide Sidebar Drawer Styles */
        .sidebar-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(7, 21, 39, 0.65);
          backdrop-filter: blur(4px);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .sidebar-backdrop.active {
          opacity: 1;
          visibility: visible;
        }

        .sidebar-drawer-left {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          width: 320px;
          max-width: 85vw;
          background-color: #FFFFFF;
          z-index: 999;
          box-shadow: 6px 0 30px rgba(7, 21, 39, 0.25);
          display: flex;
          flex-direction: column;
          transform: translateX(-100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sidebar-drawer-left.open {
          transform: translateX(0);
        }
      `}</style>
    </>
  );
};
