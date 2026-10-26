import React, { useState } from 'react';
import { Stethoscope, Cpu, GraduationCap, MapPin, Building2 } from 'lucide-react';
import { ALUMNI_PRIDE } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';

export const OurPrideSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'doctor' | 'engineer'>('all');

  const filteredAlumni = filter === 'all'
    ? ALUMNI_PRIDE
    : ALUMNI_PRIDE.filter((a) => a.profession === filter);

  const doctorCount = ALUMNI_PRIDE.filter((a) => a.profession === 'doctor').length;
  const engineerCount = ALUMNI_PRIDE.filter((a) => a.profession === 'engineer').length;

  return (
    <section id="pride" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Alumni In Medicine & Engineering · Distinguished Alumni Network"
          title="Our Pride: Doctors & Engineers"
          highlightWord="Our Pride"
          description="Honoring our distinguished alumni who laid their academic and ethical foundation at National English Medium School, Sangamner and now serve the nation in premier hospitals, research centres, and global technology organizations."
        />

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: `All Achievers (${ALUMNI_PRIDE.length})` },
            { id: 'doctor', label: `🩺 Doctors & Medical Specialists (${doctorCount})` },
            { id: 'engineer', label: `⚙️ Engineers & Tech Leaders (${engineerCount})` },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: filter === item.id ? 'var(--color-navy-base)' : '#FFFFFF',
                color: filter === item.id ? '#FFFFFF' : 'var(--color-text-body)',
                border: filter === item.id ? '1px solid var(--color-navy-base)' : '1px solid var(--color-border-subtle)',
                boxShadow: filter === item.id ? 'var(--shadow-md)' : 'none',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Alumni Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem',
          }}
          className="alumni-grid"
        >
          {filteredAlumni.map((alumnus) => {
            const isDoc = alumnus.profession === 'doctor';
            return (
              <div
                key={alumnus.id}
                className="card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: isDoc ? '4px solid #10B981' : '4px solid var(--color-gold-base)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                {/* Photo & Badge Banner */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(7, 21, 39, 0.9) 0%, rgba(7, 21, 39, 0.2) 60%, transparent 100%)',
                    }}
                  />

                  {/* Profession Floating Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: isDoc ? '#065F46' : 'var(--color-navy-base)',
                      color: isDoc ? '#A7F3D0' : 'var(--color-gold-light)',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      border: isDoc ? '1px solid #10B981' : '1px solid rgba(197, 160, 89, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {isDoc ? <Stethoscope size={13} /> : <Cpu size={13} />}
                    <span>{isDoc ? 'Doctor' : 'Engineer'}</span>
                  </div>

                  {/* Name & Degree over photo bottom */}
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
                      {alumnus.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: isDoc ? '#A7F3D0' : 'var(--color-gold-light)', fontWeight: 600, marginTop: '2px' }}>
                      {alumnus.degree}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    {/* Role & Institution */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', marginBottom: '0.85rem' }}>
                      <Building2 size={16} color="var(--color-navy-base)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--color-navy-base)' }}>
                          {alumnus.currentRole}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                          {alumnus.institutionOrCompany}
                        </div>
                      </div>
                    </div>

                    {/* Batch & Field */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.55rem 0.85rem',
                        backgroundColor: '#F8FAFC',
                        borderRadius: '6px',
                        border: '1px solid #E2E8F0',
                        fontSize: '0.78rem',
                        marginBottom: '1rem',
                        color: 'var(--color-text-body)',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                        <GraduationCap size={14} color="var(--color-gold-base)" />
                        <span>{alumnus.batchYear}</span>
                      </span>
                      {alumnus.location && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-text-muted)' }}>
                          <MapPin size={12} />
                          <span>{alumnus.location}</span>
                        </span>
                      )}
                    </div>

                    {/* Quote */}
                    {alumnus.quote && (
                      <p
                        style={{
                          fontSize: '0.86rem',
                          lineHeight: '1.55',
                          color: 'var(--color-text-muted)',
                          fontStyle: 'italic',
                          position: 'relative',
                          margin: 0,
                          paddingLeft: '1rem',
                          borderLeft: '2px solid rgba(197, 160, 89, 0.5)',
                        }}
                      >
                        "{alumnus.quote}"
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Callout Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-navy-base)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(197, 160, 89, 0.3)',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <span className="badge badge-gold-dark" style={{ marginBottom: '0.5rem' }}>
              Inspirational Legacy
            </span>
            <h3 style={{ fontSize: '1.55rem', color: '#FFFFFF', margin: '0 0 0.5rem 0' }}>
              Are you an alumnus of NEMS Sangamner practicing in Healthcare, Technology, or Civil Services?
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.8)', margin: 0, lineHeight: 1.55 }}>
              We would love to celebrate your journey and feature your accomplishments on our official institute portal to inspire current students.
            </p>
          </div>

          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.6rem' }}
          >
            Connect With Alumni Cell
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .alumni-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
