import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ChevronRight, Phone, Mail } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { CONTACT_INFO } from '../../data/schoolData';
import { useScrollPosition } from '../../hooks/useScrollPosition';

interface NavbarProps {
  activeSection: string;
  onOpenAdmissionModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenAdmissionModal }) => {
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
          backgroundColor: '#FFFFFF',
          boxShadow: isScrolled ? '0 4px 20px rgba(11, 37, 69, 0.08)' : '0 1px 3px rgba(11, 37, 69, 0.04)',
          transition: 'all 0.3s ease',
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
          {/* Brand Logo matching Figma Make */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                backgroundColor: 'var(--color-navy-base)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 3px 8px rgba(11, 37, 69, 0.2)',
                border: '1.5px solid var(--color-gold-base)',
                flexShrink: 0,
              }}
            >
              <GraduationCap size={26} color="var(--color-gold-base)" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 3.5vw, 1.55rem)',
                  fontWeight: 800,
                  color: 'var(--color-navy-base)',
                  letterSpacing: '0.02em',
                  lineHeight: 1.1,
                }}
              >
                NATION
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.6rem, 1.8vw, 0.68rem)',
                  fontWeight: 700,
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                English Medium School · Sangamner
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
                    color: isActive ? 'var(--color-navy-base)' : 'var(--color-text-body)',
                    position: 'relative',
                    padding: '0.4rem 0',
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
                      }}
                    />
                  )}
                </a>
              );
            })}

            <button
              onClick={onOpenAdmissionModal}
              className="btn btn-primary btn-sm"
              style={{ marginLeft: '0.25rem' }}
            >
              Apply Now
            </button>
          </nav>

          {/* Mobile Hamburger Button to trigger Left Sidebar */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Sidebar Menu from Left"
            style={{
              display: 'none',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: '#F1F5F9',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '44px',
              minHeight: '44px',
              cursor: 'pointer',
            }}
          >
            <Menu size={22} color="var(--color-navy-base)" />
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
                width: '38px',
                height: '38px',
                backgroundColor: 'var(--color-navy-base)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--color-gold-base)',
              }}
            >
              <GraduationCap size={22} color="var(--color-gold-base)" />
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
                NATION
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
                Sangamner Campus
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
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAdmissionModal();
            }}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem' }}
          >
            Apply for Admission 2025–26
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
