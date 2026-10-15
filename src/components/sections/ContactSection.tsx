import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../../data/schoolData';
import { SectionHeader } from '../common/SectionHeader';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Admission Query');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Connect With Us"
          title="Campus Visit & Inquiries"
          highlightWord="Campus Visit"
          description="We welcome prospective parents and guardians to visit our campus during office hours for an escorted walkthrough."
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
              Campus Information
            </span>

            <h3 style={{ fontSize: '1.65rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              Visit Nation English Medium School
            </h3>

            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              Our administration reception is located in the Central Academic Wing. Prior appointment is appreciated for meeting the Principal or Academic Coordinators.
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
                    Campus Location
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
                    Admissions Desk
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', marginTop: '2px' }}>
                    {CONTACT_INFO.phone}
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
                  <Mail size={20} color="var(--color-gold-base)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Official Email
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', marginTop: '2px' }}>
                    {CONTACT_INFO.email}
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
                    Visiting Hours
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', marginTop: '2px' }}>
                    {CONTACT_INFO.officeHours}
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
                  Send an Inquiry
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                  Have questions about fees, transport routes, or curriculum? Reach out directly.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Sen"
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98300 00000"
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
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
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
                      Inquiry Category
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
                      <option value="Admission Query">Admission Query (2025–26)</option>
                      <option value="Transport Route">School Bus & Transport Route</option>
                      <option value="Fee Structure">Fee Structure & Scholarships</option>
                      <option value="Campus Tour">Campus Tour Booking</option>
                      <option value="General Information">General Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your questions or requested appointment dates..."
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
                  <span>Send Message to Admissions Office</span>
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
                  Message Received!
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                  Thank you, {name}. Our admissions desk will review your inquiry regarding <strong>{subject}</strong> and reach out to you via {email || phone} within 1 business day.
                </p>
                <button
                  className="btn btn-outline-navy btn-sm"
                  onClick={() => {
                    setFormSubmitted(false);
                    setMessage('');
                  }}
                >
                  Send Another Message
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
