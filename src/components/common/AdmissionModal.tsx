import React, { useState } from 'react';
import { X, CheckCircle, Send, GraduationCap } from 'lucide-react';
import type { AdmissionFormData } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<AdmissionFormData>({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    targetGrade: 'Nursery',
    academicYear: '2026–27',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const gradeOptions = [
    'Nursery',
    'Jr. KG',
    'Sr. KG',
    'Class I',
    'Class II',
    'Class III',
    'Class IV',
    'Class V',
    'Class VI',
    'Class VII',
    'Class VIII',
    'Class IX',
    'Class X',
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: '#F1F5F9',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label={t.modal.btnClose}
        >
          <X size={18} color="#0F172A" />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  background: 'var(--color-navy-base)',
                  color: 'var(--color-gold-base)',
                  padding: '8px',
                  borderRadius: '10px',
                  display: 'flex',
                }}
              >
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{t.modal.badge}</span>
                <h3 style={{ fontSize: '1.45rem', marginTop: '0.2rem' }}>{t.modal.title}</h3>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              {t.modal.desc}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {t.modal.lblStudentName} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.lblStudentName}
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                  }}
                />
              </div>

              <div className="modal-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    {t.modal.lblParentName} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.modal.lblParentName}
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
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
                    {t.modal.lblGrade} *
                  </label>
                  <select
                    value={formData.targetGrade}
                    onChange={(e) => setFormData({ ...formData, targetGrade: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      background: '#FFFFFF',
                    }}
                  >
                    {gradeOptions.map((cls) => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    {t.modal.lblPhone} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9767008294"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                    {t.modal.lblEmail} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {t.modal.lblMessage}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.modal.lblMessage}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    resize: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem' }}
              >
                <Send size={18} />
                <span>{t.modal.btnSubmit}</span>
              </button>

              <div style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                {t.modal.privacyNote}
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                display: 'inline-flex',
                background: 'var(--color-success-bg)',
                color: 'var(--color-success)',
                padding: '1.25rem',
                borderRadius: '50%',
                marginBottom: '1.25rem',
              }}
            >
              <CheckCircle size={48} />
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{t.modal.successTitle}</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {t.modal.successDesc}
            </p>
            <button className="btn btn-navy" onClick={handleReset}>
              {t.modal.btnClose}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
