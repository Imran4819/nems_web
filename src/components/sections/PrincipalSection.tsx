import React, { useState } from 'react';
import { Quote, Award, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const PrincipalSection: React.FC = () => {
  const [activeLeaderId, setActiveLeaderId] = useState<'chairman' | 'secretary' | 'principal'>('chairman');
  const { t } = useLanguage();

  const leaders = [
    {
      id: 'chairman',
      name: t.leadership.tabChairman,
      tabTitle: t.leadership.tabChairman.split(',')[0],
      title: t.leadership.roleChairman,
      designation: t.leadership.desigChairman,
      message: t.leadership.msgChairman,
      image: '/assets/images/Dignified%20Elder%20in%20White%20and%20Cream.png',
    },
    {
      id: 'secretary',
      name: t.leadership.tabSecretary,
      tabTitle: t.leadership.tabSecretary.split(',')[0],
      title: t.leadership.roleSecretary,
      designation: t.leadership.desigSecretary,
      message: t.leadership.msgSecretary,
      image: '/assets/images/Professional%20Office%20Headshot.png',
    },
    {
      id: 'principal',
      name: t.leadership.tabPrincipal,
      tabTitle: t.leadership.tabPrincipal,
      title: t.leadership.rolePrincipal,
      designation: t.leadership.desigPrincipal,
      message: t.leadership.msgPrincipal,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const activeLeader = leaders.find((l) => l.id === activeLeaderId) || leaders[0];

  return (
    <section id="leadership" className="section">
      <span id="principal" style={{ display: 'block', position: 'relative', top: '-100px', visibility: 'hidden' }} />
      <div className="container">
        <SectionHeader
          eyebrow={t.leadership.eyebrow}
          title={t.leadership.title}
          highlightWord={t.leadership.highlightWord}
          description={t.leadership.subtitle}
        />

        {/* Tab Selection */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {leaders.map((leader) => (
            <button
              key={leader.id}
              onClick={() => setActiveLeaderId(leader.id as any)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: activeLeaderId === leader.id ? 'var(--color-navy-base)' : '#FFFFFF',
                color: activeLeaderId === leader.id ? '#FFFFFF' : 'var(--color-text-body)',
                border: activeLeaderId === leader.id ? '1px solid var(--color-navy-base)' : '1px solid var(--color-border-subtle)',
                boxShadow: activeLeaderId === leader.id ? 'var(--shadow-md)' : 'none',
              }}
            >
              {leader.tabTitle}
            </button>
          ))}
        </div>

        <div
          style={{
            backgroundColor: 'var(--color-navy-base)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            color: '#FFFFFF',
          }}
          className="principal-card"
        >
          {/* Leader Image & Credentials */}
          <div style={{ position: 'relative', minHeight: '380px', backgroundColor: '#F8FAFC' }}>
            <img
              src={activeLeader.image}
              alt={activeLeader.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 21, 39, 0.9) 0%, transparent 60%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
              }}
            >
              <span className="badge badge-gold-dark" style={{ marginBottom: '0.4rem' }}>
                <Award size={13} />
                <span>{activeLeader.title}</span>
              </span>
              <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', margin: 0 }}>
                {activeLeader.name}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-gold-light)', margin: 0 }}>
                {activeLeader.designation}
              </p>
            </div>
          </div>

          {/* Leader Quote & Message */}
          <div
            style={{
              padding: '3rem 3.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            className="principal-content"
          >
            <div
              style={{
                display: 'inline-flex',
                color: 'var(--color-gold-base)',
                marginBottom: '1rem',
                opacity: 0.8,
              }}
            >
              <Quote size={40} />
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                lineHeight: '1.7',
                fontStyle: 'italic',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                borderLeft: '3px solid var(--color-gold-base)',
                paddingLeft: '1.25rem',
              }}
            >
              "{activeLeader.message}"
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-gold-light)', fontSize: '0.88rem' }}>
              <Sparkles size={16} color="var(--color-gold-base)" />
              <span>{t.leadership.leadershipBadge}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .principal-card {
            grid-template-columns: 1fr !important;
          }
          .principal-content {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
