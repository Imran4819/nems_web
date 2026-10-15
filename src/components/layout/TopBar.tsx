import React from 'react';
import { Phone, Mail, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../../data/schoolData';

interface TopBarProps {
  onOpenAdmissionModal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenAdmissionModal }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-navy-dark)',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '0.82rem',
        padding: '0.55rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container topbar-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.65rem' }}>
        <div className="topbar-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'rgba(255, 255, 255, 0.85)' }}
          >
            <Phone size={14} color="var(--color-gold-base)" />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'rgba(255, 255, 255, 0.85)' }}
          >
            <Mail size={14} color="var(--color-gold-base)" />
            <span>{CONTACT_INFO.email}</span>
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            onClick={onOpenAdmissionModal}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-gold-light)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
          >
            <Sparkles size={14} color="var(--color-gold-base)" />
            <span>Admissions open for 2025–26</span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .topbar-content {
            justify-content: center !important;
            text-align: center;
          }
          .topbar-links {
            justify-content: center !important;
            gap: 1rem !important;
            font-size: 0.76rem;
          }
        }
      `}</style>
    </div>
  );
};
