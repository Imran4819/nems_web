import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { SCHOOL_INFO, CONTACT_INFO } from '../../data/schoolData';
import { FOOTER_QUICK_LINKS, FOOTER_POLICY_LINKS } from '../../data/navigation';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-navy-dark)',
        color: '#FFFFFF',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        borderTop: '3px solid var(--color-gold-base)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
          className="footer-grid"
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid var(--color-gold-base)',
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
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                  NEMS SANGAMNER
                </div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--color-gold-light)', textTransform: 'uppercase' }}>
                  Allied Education Society
                </div>
              </div>
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              {SCHOOL_INFO.tagline} · {SCHOOL_INFO.secondaryMotto}. {SCHOOL_INFO.missionStatement}
            </p>

            <div className="badge badge-gold-dark" style={{ fontSize: '0.72rem' }}>
              {SCHOOL_INFO.affiliation}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.25rem', position: 'relative', display: 'inline-block' }}>
              Explore
              <span style={{ position: 'absolute', bottom: '-6px', left: 0, width: '28px', height: '2px', backgroundColor: 'var(--color-gold-base)' }} />
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.5rem' }}>
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Institutional */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.25rem', position: 'relative', display: 'inline-block' }}>
              Institutional
              <span style={{ position: 'absolute', bottom: '-6px', left: 0, width: '28px', height: '2px', backgroundColor: 'var(--color-gold-base)' }} />
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.5rem' }}>
              {FOOTER_POLICY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={13} opacity={0.6} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.25rem', position: 'relative', display: 'inline-block' }}>
              Contact Campus
              <span style={{ position: 'absolute', bottom: '-6px', left: 0, width: '28px', height: '2px', backgroundColor: 'var(--color-gold-base)' }} />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={18} color="var(--color-gold-base)" style={{ flexShrink: 0 }} />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={18} color="var(--color-gold-base)" style={{ flexShrink: 0 }} />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Clock size={18} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{CONTACT_INFO.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Allied Education Society's National English Medium School (NEMS), Sangamner.
          </div>
          <div>
            100% SSC Results · Affiliated to MSBSHSE Pune · Kolhewadi Road, Sangamner
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
