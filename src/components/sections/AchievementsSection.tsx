import React, { useState } from 'react';
import {
  Trophy,
  Calendar,
  Medal,
  ShieldCheck,
  GraduationCap,
  FileCheck2,
  HeartHandshake,
  Lightbulb,
  UserCheck,
  MonitorPlay,
  Languages,
  Sparkles,
  Eye,
  Target,
  CheckCircle2,
  School,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const AchievementsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'journey' | 'pathway'>('achievements');
  const { t } = useLanguage();

  const iconList = [
    <ShieldCheck size={22} key="shield" />,
    <GraduationCap size={22} key="grad" />,
    <FileCheck2 size={22} key="file" />,
    <HeartHandshake size={22} key="heart" />,
    <Lightbulb size={22} key="bulb" />,
    <UserCheck size={22} key="user" />,
    <MonitorPlay size={22} key="monitor" />,
    <Languages size={22} key="lang" />,
    <Trophy size={22} key="trophy" />,
    <Sparkles size={22} key="sparkle" />,
    <Eye size={22} key="eye" />,
    <Target size={22} key="target" />,
  ];

  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow={t.achievements.eyebrow}
          title={t.achievements.title}
          highlightWord={t.achievements.highlightWord}
          description={t.achievements.description}
        />

        {/* 23 Years Commemorative Milestone Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #071527 0%, #0B2545 60%, #133966 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            color: '#FFFFFF',
            border: '2px solid var(--color-gold-base)',
            boxShadow: '0 20px 45px -10px rgba(11, 37, 69, 0.35)',
            marginBottom: '3.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Background Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              right: '-10%',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(197, 160, 89, 0.22) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2.5rem',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Left Content */}
            <div style={{ flex: '1 1 500px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(197, 160, 89, 0.2)',
                  border: '1px solid var(--color-gold-base)',
                  padding: '0.35rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '1rem',
                  color: 'var(--color-gold-light)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <Sparkles size={14} />
                <span>{t.achievements.milestoneBadge}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.65rem, 3.2vw, 2.35rem)',
                  color: '#FFFFFF',
                  margin: '0 0 0.85rem 0',
                  lineHeight: 1.2,
                }}
              >
                {t.achievements.milestoneTitle}
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.88)',
                  lineHeight: '1.65',
                  margin: '0 0 1.5rem 0',
                  maxWidth: '680px',
                }}
              >
                {t.achievements.milestoneSummary}
              </p>

              {/* Quick Stat Pills */}
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.65rem 1.15rem',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-gold-light)', lineHeight: 1 }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '3px' }}>
                    SSC Passing Legacy
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.65rem 1.15rem',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-gold-light)', lineHeight: 1 }}>
                    6 Papers
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '3px' }}>
                    Practice Test Series
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.65rem 1.15rem',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-gold-light)', lineHeight: 1 }}>
                    NEET & JEE
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '3px' }}>
                    Alumni Success
                  </div>
                </div>
              </div>
            </div>

            {/* Right Emblem: 23 Years Gold Crest */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'linear-gradient(145deg, #DFC285 0%, #C5A059 50%, #A37E36 100%)',
                  padding: '6px',
                  boxShadow: '0 10px 30px rgba(197, 160, 89, 0.45), 0 0 0 4px rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px dashed #C5A059',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '3rem',
                      fontWeight: 900,
                      color: '#B91C1C',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    23
                  </span>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      color: '#0B2545',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginTop: '2px',
                    }}
                  >
                    Years
                  </span>
                </div>
              </div>

              {/* Decorative Ribbon below seal */}
              <div
                style={{
                  backgroundColor: 'var(--color-gold-base)',
                  color: 'var(--color-navy-dark)',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '4px 16px',
                  borderRadius: '12px',
                  marginTop: '-12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                  border: '1.5px solid #FFFFFF',
                  zIndex: 3,
                }}
              >
                {t.achievements.milestoneBadge}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveTab('achievements')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              border: activeTab === 'achievements' ? '2px solid var(--color-gold-base)' : '1px solid #CBD5E1',
              backgroundColor: activeTab === 'achievements' ? 'var(--color-navy-base)' : '#FFFFFF',
              color: activeTab === 'achievements' ? '#FFFFFF' : 'var(--color-navy-base)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: activeTab === 'achievements' ? 'var(--shadow-md)' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <Trophy size={16} color={activeTab === 'achievements' ? 'var(--color-gold-light)' : 'var(--color-gold-base)'} />
            <span>{t.achievements.tabs.achievements}</span>
          </button>

          <button
            onClick={() => setActiveTab('journey')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              border: activeTab === 'journey' ? '2px solid var(--color-gold-base)' : '1px solid #CBD5E1',
              backgroundColor: activeTab === 'journey' ? 'var(--color-navy-base)' : '#FFFFFF',
              color: activeTab === 'journey' ? '#FFFFFF' : 'var(--color-navy-base)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: activeTab === 'journey' ? 'var(--shadow-md)' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <School size={16} color={activeTab === 'journey' ? 'var(--color-gold-light)' : 'var(--color-gold-base)'} />
            <span>{t.achievements.tabs.journey}</span>
          </button>

          <button
            onClick={() => setActiveTab('pathway')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              border: activeTab === 'pathway' ? '2px solid var(--color-gold-base)' : '1px solid #CBD5E1',
              backgroundColor: activeTab === 'pathway' ? 'var(--color-navy-base)' : '#FFFFFF',
              color: activeTab === 'pathway' ? '#FFFFFF' : 'var(--color-navy-base)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: activeTab === 'pathway' ? 'var(--shadow-md)' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <Target size={16} color={activeTab === 'pathway' ? 'var(--color-gold-light)' : 'var(--color-gold-base)'} />
            <span>{t.achievements.tabs.pathway}</span>
          </button>
        </div>

        {/* TAB 1: 12 CORE ACHIEVEMENTS */}
        {activeTab === 'achievements' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.25rem',
              marginBottom: '4.5rem',
            }}
          >
            {t.achievements.milestones12.map((item, index) => (
              <div
                key={index}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  borderTop: '3px solid var(--color-gold-base)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(11, 37, 69, 0.08)',
                    color: 'var(--color-navy-base)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {iconList[index % iconList.length]}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-navy-base)', margin: '0 0 0.35rem 0', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: OUR 23-YEAR SUCCESSFUL JOURNEY */}
        {activeTab === 'journey' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
              marginBottom: '4.5rem',
            }}
          >
            {t.achievements.milestones12.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  borderLeft: '4px solid var(--color-gold-base)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: 'var(--color-gold-base)',
                      opacity: 0.9,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--color-text-muted)',
                      backgroundColor: '#F1F5F9',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    NEMS Sangamner
                  </span>
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-navy-base)', margin: 0, fontWeight: 700 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: PATHWAY TO STUDENT SUCCESS */}
        {activeTab === 'pathway' && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '4.5rem',
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2rem auto' }}>
              <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>
                NEMS Sangamner
              </span>
              <h3 style={{ fontSize: '1.65rem', color: 'var(--color-navy-base)', margin: '0 0 0.5rem 0' }}>
                {t.achievements.tabs.pathway}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0 }}>
                {t.achievements.description}
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
              }}
            >
              {t.achievements.milestones12.map((item, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <CheckCircle2 size={18} color="var(--color-gold-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-navy-base)', fontWeight: 600, lineHeight: 1.45 }}>
                    {item.title}: {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Institutional Accolades & Trophies Grid */}
        <div style={{ marginTop: '1rem' }}>
          <div className="grid-2">
            {t.achievements.items.map((ach) => (
              <div
                key={ach.id}
                className="card"
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  borderLeft: '4px solid var(--color-gold-base)',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(197, 160, 89, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-gold-deep)',
                  }}
                >
                  <Trophy size={26} />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.45rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-navy" style={{ fontSize: '0.7rem' }}>{ach.category}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                      <Calendar size={13} />
                      <span>{ach.date}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy-base)', marginBottom: '0.5rem' }}>
                    {ach.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: '1.6', marginBottom: '0.85rem' }}>
                    {ach.description}
                  </p>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--color-gold-deep)',
                      backgroundColor: 'var(--color-gold-soft)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <Medal size={14} />
                    <span>{ach.award}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
