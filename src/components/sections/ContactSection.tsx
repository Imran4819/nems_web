import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Admission');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          highlightWord={t.contact.highlightWord}
          description={t.contact.description}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1.5fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Contact Details Card */}
          <div
            className="card"
            style={{
              backgroundColor: 'var(--color-navy-base)',
              color: '#FFFFFF',
              padding: '2.5rem',
              border: 'none',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <span className="badge badge-gold-dark" style={{ marginBottom: '1.25rem' }}>
              {t.contact.campusCardSub}
            </span>

            <h3 style={{ fontSize: '1.65rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              {t.contact.campusCardTitle}
            </h3>

            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              {t.contact.campusCardDesc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(197, 160, 89, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} color="var(--color-gold-base)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {t.contact.addressLabel}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', marginTop: '2px' }}>
                    {CONTACT_INFO.address}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(197, 160, 89, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} color="var(--color-gold-base)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {t.contact.phoneLabel}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', marginTop: '2px' }}>
                    <a href={`tel:${CONTACT_INFO.phone}`} style={{ color: '#FFFFFF' }}>{CONTACT_INFO.phone}</a>
                    {CONTACT_INFO.altPhone && (
                      <span> · <a href={`tel:${CONTACT_INFO.altPhone}`} style={{ color: '#FFFFFF' }}>{CONTACT_INFO.altPhone}</a></span>
                    )}
                  </div>
                  {CONTACT_INFO.landline && (
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '2px' }}>
                      {t.contact.landlineLabel}: {CONTACT_INFO.landline}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(197, 160, 89, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} color="var(--color-gold-base)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {t.contact.emailLabel}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', marginTop: '2px' }}>
                    <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: '#FFFFFF' }}>{CONTACT_INFO.email}</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(197, 160, 89, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={20} color="var(--color-gold-base)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {t.contact.timingsLabel}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', marginTop: '2px' }}>
                    {t.nav.officeHours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.45rem', color: 'var(--color-navy-base)', marginBottom: '0.25rem' }}>
                  {t.contact.formTitle}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                  {t.contact.formDesc}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      {t.contact.fieldName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.fieldName}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: 'var(--radius-md)',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      {t.contact.fieldPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9767008294"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: 'var(--radius-md)',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      {t.contact.fieldEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: 'var(--radius-md)',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      {t.contact.fieldSubject}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        background: '#FFFFFF',
                      }}
                    >
                      <option value="Admission">{t.contact.optAdmission}</option>
                      <option value="Fee">{t.contact.optFee}</option>
                      <option value="Curriculum">{t.contact.optCurriculum}</option>
                      <option value="General">{t.contact.optGeneral}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    {t.contact.fieldMessage} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t.contact.fieldMessage}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      resize: 'none',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-navy" style={{ padding: '0.85rem', marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>{t.contact.btnSubmit}</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    background: 'var(--color-success-bg)',
                    color: 'var(--color-success)',
                    padding: '1.25rem',
                    borderRadius: '50%',
                    marginBottom: '1rem',
                  }}
                >
                  <CheckCircle2 size={44} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy-base)', marginBottom: '0.5rem' }}>
                  {t.contact.successMsg}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                  {name} ({phone || email})
                </p>
                <button
                  className="btn btn-outline-navy btn-sm"
                  onClick={() => {
                    setFormSubmitted(false);
                    setMessage('');
                  }}
                >
                  {t.contact.btnReset}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
