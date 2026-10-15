import React from 'react';
import { Calendar, FileCheck, Users, GraduationCap, ArrowRight } from 'lucide-react';

interface AdmissionsBannerSectionProps {
  onOpenAdmissionModal: () => void;
}

export const AdmissionsBannerSection: React.FC<AdmissionsBannerSectionProps> = ({ onOpenAdmissionModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Online Inquiry / Registration',
      desc: 'Submit the registration form or visit our campus admissions office.',
      icon: <FileCheck size={20} />,
    },
    {
      num: '02',
      title: 'Campus Tour & Interaction',
      desc: 'Meet our academic coordinators and tour classrooms and STEM laboratories.',
      icon: <Users size={20} />,
    },
    {
      num: '03',
      title: 'Seat Confirmation & Welcome',
      desc: 'Complete documentation, uniform & textbook kit allotment for Session 2025–26.',
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
            Limited seats available across Classes I to X. Early application is advised as sections are strictly capped at 25 students per class to ensure personalized faculty attention.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '3.5rem',
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
            Last Date for Phase-1 Online Applications: <strong>31 July 2025</strong>
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
