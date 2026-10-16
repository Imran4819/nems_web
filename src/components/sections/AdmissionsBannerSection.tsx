import React from 'react';
import { Calendar, FileCheck, Users, GraduationCap, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { ADMISSION_REQUIREMENTS } from '../../data/schoolData';

interface AdmissionsBannerSectionProps {
  onOpenAdmissionModal: () => void;
}

export const AdmissionsBannerSection: React.FC<AdmissionsBannerSectionProps> = ({ onOpenAdmissionModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Online Inquiry / Registration',
      desc: 'Submit the admission inquiry form online or obtain the prospectus from our campus office.',
      icon: <FileCheck size={20} />,
    },
    {
      num: '02',
      title: 'Campus Interaction & Verification',
      desc: 'Mandatory in-person meeting of candidate with parents; review of original certificates.',
      icon: <Users size={20} />,
    },
    {
      num: '03',
      title: 'Seat Confirmation & Welcome Kit',
      desc: 'Confirmation of admission, division allotment, school diary, and uniform guidance.',
      icon: <GraduationCap size={20} />,
    },
  ];

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
            <span>Admissions Open for Academic Year 2025–26</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Give Your Child the Foundation for a{' '}
            <span style={{ color: 'var(--color-gold-base)' }}>Brilliant Tomorrow</span>
          </h2>

          <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Admissions open for Pre-Primary (Nursery, Jr. KG, Sr. KG) up to Secondary Classes. Limited intake per classroom to guarantee individual teacher mentoring and 100% board success.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '3rem',
          }}
          className="steps-grid"
        >
          {steps.map((st) => (
            <div
              key={st.num}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'rgba(197, 160, 89, 0.35)',
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.5rem',
                  lineHeight: 1,
                }}
              >
                {st.num}
              </div>

              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-gold-base)',
                  color: '#071527',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                {st.icon}
              </div>

              <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                {st.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.55', margin: 0 }}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Required Documents Checklist from Wix Notice */}
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
              Mandatory Admission Documents Checklist
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
            }}
          >
            {ADMISSION_REQUIREMENTS.map((req, i) => (
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
            Admissions Office at Kolhewadi Road Campus open Monday to Saturday, 8:00 AM – 5:00 PM
          </div>
          <button
            onClick={onOpenAdmissionModal}
            className="btn btn-primary btn-lg"
          >
            <span>Start Online Application Form</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
