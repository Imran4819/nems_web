import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, Sparkles } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { CONTACT_INFO } from '../../data/schoolData';
import { useScrollPosition } from '../../hooks/useScrollPosition';

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
            : 'rgba(7, 21, 39, 0.35)',
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
                National English Medium School · Sangamner
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.35rem',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.slice(0, 7).map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
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
                  marginLeft: '0.25rem',
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
                <span>Ask NEMS AI</span>
              </button>
            )}

            <button
              onClick={onOpenAdmissionModal}
              className="btn btn-primary btn-sm"
              style={{ marginLeft: '0.25rem' }}
            >
              Apply Now
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Sidebar Menu from Left"
            style={{
              display: 'none',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '44px',
              minHeight: '44px',
              cursor: 'pointer',
            }}
          >
            <Menu size={22} color="#FFFFFF" />
          </button>
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
                Allied Education Society
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

        {/* Sidebar Navigation Links */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1rem 0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
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
              <span>Ask NEMS AI Assistant</span>
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
            Apply for Admission 2026–27
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
          .mobile-toggle {
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
