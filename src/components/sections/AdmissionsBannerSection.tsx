import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface AdmissionsBannerSectionProps {
  onOpenAdmissionModal: () => void;
}

export const AdmissionsBannerSection: React.FC<AdmissionsBannerSectionProps> = ({ onOpenAdmissionModal }) => {
  const { t } = useLanguage();

  return (
    <section id="admissions" className="section" style={{ backgroundColor: 'var(--color-navy-base)', color: '#FFFFFF' }}>
      <div className="container">
        <div
          style={{
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto 3.5rem auto',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(197, 160, 89, 0.2)',
              color: 'var(--color-gold-light)',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}
          >
            <Calendar size={14} color="var(--color-gold-base)" />
            <span>{t.admissionsBanner.badge}</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
            {t.admissionsBanner.title}
          </h2>

          <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.05rem', lineHeight: '1.65' }}>
            {t.admissionsBanner.subtitle}
          </p>
        </div>

        {/* Required Documents Checklist */}
        <div
          style={{
            backgroundColor: 'rgba(7, 21, 39, 0.8)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            marginBottom: '3rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
            <AlertCircle size={22} color="var(--color-gold-base)" />
            <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: 0 }}>
              {t.admissionsBanner.reqTitle}
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
            }}
          >
            {t.admissionsBanner.requirements.map((req, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <CheckCircle2 size={18} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--color-gold-light)' }}>
                    {req.doc}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '2px' }}>
                    {req.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div
          style={{
            textAlign: 'center',
            backgroundColor: 'rgba(7, 21, 39, 0.6)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-gold-light)' }}>
            {t.nav.brandTagline} · {t.nav.officeHours}
          </div>
          <button
            onClick={onOpenAdmissionModal}
            className="btn btn-primary btn-lg"
          >
            <span>{t.admissionsBanner.btnApply}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
