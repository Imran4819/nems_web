import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Bot,
  Send,
  X,
  RotateCcw,
  Minimize2,
  ExternalLink,
} from 'lucide-react';
import {
  SCHOOL_INFO,
  CONTACT_INFO,
  LEADERSHIP_DESKS,
  STUDENT_TOPPERS,
  ALUMNI_PRIDE,
  ADMISSION_REQUIREMENTS,
} from '../../data/schoolData';
import type { StudentTopper, AlumniPride, TrusteeLeader } from '../../types';

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  suggestions?: string[];
  actionBtn?: {
    label: string;
    action: 'openAdmission' | 'callSchool' | 'scrollTo';
    target?: string;
  };
}

interface NemsAiChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenAdmissionModal: () => void;
}

const INITIAL_SUGGESTIONS = [
  '🎓 Admissions 2026-27',
  '📄 Required Documents',
  '🏆 100% SSC Results',
  '🩺 Doctor & Engineer Alumni',
  '🚌 Facilities & Transport',
  '📞 School Contact & Timings',
];

export const NemsAiChatbot: React.FC<NemsAiChatbotProps> = ({
  isOpen,
  onToggle,
  onOpenAdmissionModal,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with a welcoming message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome-1',
          sender: 'bot',
          text: `Hello and welcome to **National English Medium School (NEMS), Sangamner**! 🏫✨\n\nI am **NEMS AI**, your 24/7 intelligent campus assistant. How can I help you today? You can ask me anything about admissions, our unbroken 100% SSC board legacy, doctors & engineers alumni, school facilities, or fees.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestions: INITIAL_SUGGESTIONS,
        },
      ]);
    }
  }, []);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setShowTooltip(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isTyping]);

  // Auto hide tooltip after 9 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  // AI Knowledge Answer Engine
  const generateAiResponse = (query: string): Omit<ChatMessage, 'id' | 'sender' | 'timestamp'> => {
    const q = query.toLowerCase().trim();

    // 1. ADMISSION PROCESS & CRITERIA
    if (
      q.includes('admission') ||
      q.includes('apply') ||
      q.includes('enroll') ||
      q.includes('seat') ||
      q.includes('form') ||
      q.includes('nursery') ||
      q.includes('kg') ||
      q.includes('standards') ||
      q.includes('eligib')
    ) {
      return {
        text: `🎓 **Admissions 2026–2027 are currently open!**\n\n• **Levels Offered**: Pre-Primary (Nursery, Jr. KG, Sr. KG), Primary (1st to 4th), and Secondary (5th to 10th SSC State Board).\n• **Process**: 4 simple steps — 1) Online/Campus Inquiry, 2) Form Submission & Document Verification, 3) Student & Parent Mentoring Session, 4) Admission Confirmation.\n• **Early Registration Advantage**: Limited batch capacity to maintain an optimal student-to-teacher ratio for personalized mentoring.\n\nWould you like to initiate your admission application right now?`,
        suggestions: [
          '📄 What documents are needed?',
          '🚌 Do you offer school bus transport?',
          '📞 What is the school phone number?',
        ],
        actionBtn: {
          label: 'Open Admission Inquiry Form',
          action: 'openAdmission',
        },
      };
    }

    // 2. REQUIRED DOCUMENTS
    if (
      q.includes('document') ||
      q.includes('birth certificate') ||
      q.includes('aadhaar') ||
      q.includes('photo') ||
      q.includes('proof') ||
      q.includes('require') ||
      q.includes('paper')
    ) {
      const docsList = ADMISSION_REQUIREMENTS.map((r) => `• **${r.doc}**: ${r.desc}`).join('\n');
      return {
        text: `📄 **Mandatory Documents for Admission:**\n\n${docsList}\n\n*Note: The student must be accompanied by at least one parent/guardian during physical verification.*`,
        suggestions: ['🎓 Apply for Admission', '🏆 Show 100% SSC Results', '📞 Contact Administration'],
        actionBtn: {
          label: 'Start Online Application',
          action: 'openAdmission',
        },
      };
    }

    // 3. SSC RESULTS & TOPPERS
    if (
      q.includes('result') ||
      q.includes('ssc') ||
      q.includes('100%') ||
      q.includes('topper') ||
      q.includes('board') ||
      q.includes('percentage') ||
      q.includes('exam') ||
      q.includes('rank')
    ) {
      const top3 = (STUDENT_TOPPERS as StudentTopper[])
        .slice(0, 3)
        .map((t) => `• **${t.name}**: **${t.percentage}%** (${t.standard})`)
        .join('\n');
      return {
        text: `🏆 **Unbroken 100% SSC Passing Legacy!**\n\nNational English Medium School has maintained a **flawless 100% passing record** in the Maharashtra State Board SSC Examinations since its very first batch.\n\n🌟 **Recent Board Exam Toppers:**\n${top3}\n\nOur students consistently secure distinctions through structured revision clinics, preliminary board test series, and dedicated teacher mentoring.`,
        suggestions: ['🩺 View Doctor & Engineer Alumni', '📚 Tell me about academic programs', '🎓 Apply for Admission'],
        actionBtn: {
          label: 'View Toppers Section',
          action: 'scrollTo',
          target: 'toppers',
        },
      };
    }

    // 4. OUR PRIDE: DOCTORS & ENGINEERS ALUMNI
    if (
      q.includes('pride') ||
      q.includes('doctor') ||
      q.includes('engineer') ||
      q.includes('alumni') ||
      q.includes('medical') ||
      q.includes('mbbs') ||
      q.includes('iit') ||
      q.includes('b.tech') ||
      q.includes('graduate') ||
      q.includes('past student')
    ) {
      const docs = (ALUMNI_PRIDE as AlumniPride[])
        .filter((a) => a.profession === 'doctor')
        .slice(0, 2)
        .map((d) => `• **${d.name}** (${d.degree}) — ${d.currentRole} at *${d.institutionOrCompany}*`)
        .join('\n');
      const engs = (ALUMNI_PRIDE as AlumniPride[])
        .filter((a) => a.profession === 'engineer')
        .slice(0, 2)
        .map((e) => `• **${e.name}** (${e.degree}) — ${e.currentRole} at *${e.institutionOrCompany}*`)
        .join('\n');

      return {
        text: `🌟 **Our Pride: NEMS Alumni in Medicine & Engineering**\n\nNEMS graduates have gone on to premier medical colleges and tech institutes across India and globally:\n\n🩺 **Doctors & Medical Specialists:**\n${docs}\n\n⚙️ **Engineers & Tech Leaders:**\n${engs}\n\nTheir journey started right here in our classrooms and science laboratories in Sangamner!`,
        suggestions: ['🏆 SSC Board Results', '🎓 Admission Form', '🚌 Campus Facilities'],
        actionBtn: {
          label: 'Explore Our Pride Section',
          action: 'scrollTo',
          target: 'pride',
        },
      };
    }

    // 5. FACILITIES & CAMPUS INFRASTRUCTURE
    if (
      q.includes('facilit') ||
      q.includes('bus') ||
      q.includes('transport') ||
      q.includes('lab') ||
      q.includes('computer') ||
      q.includes('science') ||
      q.includes('library') ||
      q.includes('ground') ||
      q.includes('sport') ||
      q.includes('classroom') ||
      q.includes('av hall') ||
      q.includes('projector')
    ) {
      return {
        text: `🏫 **Campus Infrastructure & Facilities at NEMS:**\n\n• 🔬 **Composite Science Labs**: Hands-on practical experimentation in Physics, Chemistry & Biology.\n• 💻 **Hi-Tech Computer Lab**: Dedicated workstations with digital literacy and foundational coding.\n• 📽️ **Digital AV & Smart Classroom**: Interactive projection modules for complex scientific concepts.\n• 📚 **Library & Reading Haven**: Thousands of reference books, encyclopedias, and literature in English.\n• 🚌 **School Transport**: Safe, punctual bus & van fleet covering Sangamner town and suburban routes.\n• ⚽ **Sports & Playgrounds**: Kho-kho, kabaddi, badminton, athletics, and annual sports meets.\n• 🎨 **Govt. Drawing Exam Center**: Accredited center for Elementary & Intermediate Drawing exams.`,
        suggestions: ['🚌 Tell me about bus routes', '🎓 Admissions 2026-27', '📞 Contact the School'],
        actionBtn: {
          label: 'View Campus Facilities',
          action: 'scrollTo',
          target: 'facilities',
        },
      };
    }

    // 6. ALLIED EDUCATION SOCIETY & HISTORY / LEADERSHIP
    if (
      q.includes('society') ||
      q.includes('trust') ||
      q.includes('allied') ||
      q.includes('founder') ||
      q.includes('chairman') ||
      q.includes('secretary') ||
      q.includes('tamboli') ||
      q.includes('history') ||
      q.includes('established') ||
      q.includes('who runs')
    ) {
      const chairman = (LEADERSHIP_DESKS as TrusteeLeader[]).find((m) => m.role.toLowerCase().includes('chairman'));
      const secretary = (LEADERSHIP_DESKS as TrusteeLeader[]).find((m) => m.role.toLowerCase().includes('secretary'));
      return {
        text: `🏛️ **Allied Education Society, Sangamner**\n\n• **Trust**: Allied Education Society, Sangamner (Over 23+ years of educational service).\n• **Vision**: Upliftment of rural masses through high-standard, character-building English education with deep-rooted ethical principles.\n• **Board Leadership**:\n  - **Chairman**: ${chairman?.name || 'Hon. Haji Abdul Karim Tamboli'}\n  - **Secretary**: ${secretary?.name || 'Dr. Wasim Tamboli'}\n\nThe Trust is committed to progressive pedagogy, ethical moral character, and accessible academic excellence.`,
        suggestions: ['🏆 SSC Track Record', '🎓 Apply for Admission', '📞 Contact Leadership Office'],
        actionBtn: {
          label: 'View Leadership Team',
          action: 'scrollTo',
          target: 'leadership',
        },
      };
    }

    // 6.5. 23 YEARS MILESTONE & OFFICIAL BROCHURE ACHIEVEMENTS
    if (
      q.includes('23') ||
      q.includes('year') ||
      q.includes('brochure') ||
      q.includes('achievement') ||
      q.includes('milestone') ||
      q.includes('cctv') ||
      q.includes('practice paper') ||
      q.includes('neet') ||
      q.includes('jee') ||
      q.includes('cet')
    ) {
      return {
        text: `🏅 **Successful Completion of 23 Years!**\n\nNational English Medium School proudly marks **23 glorious years** of educational service in Sangamner under Allied Education Society.\n\n🌟 **Core Institutional Highlights from our Brochure:**\n• **Value-Based Education**: Inculcating moral principles and civic pride.\n• **Experienced & Dedicated Faculty**: 15+ years average pedagogy experience.\n• **Regular Test Series (Six Practice Papers)**: Continuous board examination simulations.\n• **E-Learning & Smart Projectors**: Audiovisual instruction across science and maths.\n• **Multilingual Learning**: Fluency across English, Hindi, and Marathi.\n• **Safety First**: Full campus under 24/7 CCTV surveillance.\n• **Competitive Exam Success**: Proven achievements in **NEET, JEE, CET**, and state talent scholarship tests!`,
        suggestions: ['🏆 View Accolades Section', '🎓 Admissions 2026-27', '🩺 Doctor & Engineer Alumni'],
        actionBtn: {
          label: 'View 23-Year Milestone Section',
          action: 'scrollTo',
          target: 'achievements',
        },
      };
    }

    // 6.6. MISSION & OFFICIAL MOTTO (From School Handbook)
    if (
      q.includes('mission') ||
      q.includes('goal') ||
      q.includes('motto') ||
      q.includes('wisdom lingers') ||
      q.includes('knowledge comes') ||
      q.includes('aim') ||
      q.includes('vision')
    ) {
      return {
        text: `📜 **Official Mission & Guiding Principles:**\n\n*"${SCHOOL_INFO.missionStatement}"*\n\n🌟 **Guiding Motto**: *"Knowledge comes but wisdom lingers."*\n\n🎯 **5 Core Institutional Goals:**\n1. To achieve academic excellence.\n2. To promote education for rural women.\n3. To provide education avenues to needy and economically backward classes.\n4. To inculcate value based education in youth.\n5. To achieve socio-economic and cultural transformation through education.`,
        suggestions: ['🏛️ About the School', '🏆 23 Years Milestone', '🎓 Apply for Admission'],
        actionBtn: {
          label: 'View Mission & Goals',
          action: 'scrollTo',
          target: 'about',
        },
      };
    }

    // 7. FEES & SCHOLARSHIPS
    if (
      q.includes('fee') ||
      q.includes('cost') ||
      q.includes('scholarship') ||
      q.includes('discount') ||
      q.includes('installment') ||
      q.includes('concession')
    ) {
      return {
        text: `💰 **Fee Structure & Merit Scholarships:**\n\n• Allied Education Society believes that **quality English medium education must remain transparent, fair, and accessible** to all deserving students.\n• **Merit & Need-Based Concessions**: Special scholarship considerations are offered for high academic achievers, state talent examination qualifiers, and economically deserving families.\n• **Installment Options**: Convenient and flexible installment plans are available for parents.\n\nPlease contact our administrative office or submit an inquiry to receive the exact fee breakdown for your child’s standard.`,
        suggestions: ['🎓 Open Admission Form', '📞 Call Accounts Office', '📄 Required Documents'],
        actionBtn: {
          label: 'Submit Fee Inquiry',
          action: 'openAdmission',
        },
      };
    }

    // 8. CONTACT, ADDRESS, TIMINGS
    if (
      q.includes('contact') ||
      q.includes('phone') ||
      q.includes('address') ||
      q.includes('location') ||
      q.includes('where') ||
      q.includes('email') ||
      q.includes('time') ||
      q.includes('timing') ||
      q.includes('open') ||
      q.includes('hour')
    ) {
      return {
        text: `📍 **Contact & Campus Location:**\n\n• **Campus Address**: ${CONTACT_INFO.address}\n• **Phone Helpline**: [${CONTACT_INFO.phone}](tel:${CONTACT_INFO.phone})\n• **Email**: [${CONTACT_INFO.email}](mailto:${CONTACT_INFO.email})\n• **Office Working Hours**: ${CONTACT_INFO.officeHours}\n• **Visiting Days**: Monday through Saturday (Closed on Sundays & Public Holidays)\n\nYou are always welcome to schedule a campus walk-through and meet our faculty!`,
        suggestions: ['🎓 Apply for Admission', '🚌 Bus Routes', '🏆 SSC Board Results'],
        actionBtn: {
          label: 'Call Office Helpline',
          action: 'callSchool',
        },
      };
    }

    // 9. DRAWING, SCOUT-GUIDE, MCC, EXTRACURRICULAR
    if (
      q.includes('drawing') ||
      q.includes('scout') ||
      q.includes('guide') ||
      q.includes('mcc') ||
      q.includes('extra') ||
      q.includes('curricul') ||
      q.includes('activity') ||
      q.includes('dance') ||
      q.includes('gathering')
    ) {
      return {
        text: `🎨 **Co-Curricular & Special Accreditations:**\n\n• 🎖️ **Scout & Guide / MCC**: Maharashtra Cadet Corps leadership training, annual camps, parade drills, and civic discipline.\n• 🖌️ **Govt. Drawing Grade Exams**: NEMS is an official accredited center for Elementary and Intermediate Drawing exams with a 100% pass rate.\n• 🎤 **Elocution & Grammar Clubs**: English debate, essay writing, and public speaking clubs.\n• 🎭 **Annual Social Gathering**: Grand cultural celebrations featuring music, drama, folk dances, and award ceremonies.`,
        suggestions: ['🏆 Academic Achievements', '🏫 Campus Facilities', '🎓 Admissions 2026-27'],
      };
    }

    // 10. GREETINGS & CASUAL
    if (
      q === 'hi' ||
      q === 'hello' ||
      q === 'hey' ||
      q.includes('good morning') ||
      q.includes('good afternoon') ||
      q.includes('good evening') ||
      q.includes('namaste')
    ) {
      return {
        text: `Hello! 😊 Welcome to National English Medium School, Sangamner.\n\nI'm ready to answer any questions about our curriculum, 2026-27 admissions, 100% board results, or distinguished alumni. What would you like to know?`,
        suggestions: INITIAL_SUGGESTIONS,
      };
    }

    // 11. GENERAL FALLBACK
    return {
      text: `Thank you for your question! 😊\n\nRegarding "${query}", our academic admissions team at National English Medium School, Sangamner would be delighted to provide in-depth assistance.\n\nFeel free to explore our quick topics below, submit an admission inquiry, or call our school helpline directly at **${CONTACT_INFO.phone}**.`,
      suggestions: [
        '🎓 Admissions 2026-27',
        '📄 Required Documents',
        '🏆 100% SSC Results',
        '🩺 Doctor & Engineer Alumni',
        '📞 School Contact Info',
      ],
      actionBtn: {
        label: 'Open Admission Inquiry',
        action: 'openAdmission',
      },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Realistic typing delay (450ms)
    setTimeout(() => {
      const response = generateAiResponse(query);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: response.suggestions,
        actionBtn: response.actionBtn,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: `Chat restarted. How can I assist you today regarding National English Medium School, Sangamner?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: INITIAL_SUGGESTIONS,
      },
    ]);
  };

  const handleAction = (btn: ChatMessage['actionBtn']) => {
    if (!btn) return;
    if (btn.action === 'openAdmission') {
      onOpenAdmissionModal();
    } else if (btn.action === 'callSchool') {
      window.open(`tel:${CONTACT_INFO.phone}`, '_self');
    } else if (btn.action === 'scrollTo' && btn.target) {
      const el = document.getElementById(btn.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Render markdown bold and bullets cleanly
  const renderFormattedText = (rawText: string) => {
    return rawText.split('\n').map((line, idx) => {
      if (!line) return <div key={idx} style={{ height: '0.45rem' }} />;

      // Parse bold **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} style={{ color: 'var(--color-navy-base)', fontWeight: 700 }}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={pIdx}>{part.slice(1, -1)}</em>;
        }
        return part;
      });

      return (
        <div
          key={idx}
          style={{
            lineHeight: 1.5,
            marginBottom: line.startsWith('•') ? '0.35rem' : '0.2rem',
            paddingLeft: line.startsWith('•') ? '0.2rem' : '0',
          }}
        >
          {formattedParts}
        </div>
      );
    });
  };

  return (
    <>
      {/* 1. FLOATING CHATBOT LAUNCHER BUTTON (Bottom Right) */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px',
        }}
      >
        {/* Floating Speech Bubble Tooltip for First-time visitors */}
        {showTooltip && !isOpen && (
          <div
            style={{
              backgroundColor: '#0B2545',
              color: '#FFFFFF',
              padding: '10px 16px',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(11, 37, 69, 0.25)',
              border: '1px solid var(--color-gold-base)',
              fontSize: '0.84rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '280px',
              animation: 'fadeInUp 0.3s ease-out',
            }}
          >
            <Sparkles size={16} color="var(--color-gold-light)" style={{ flexShrink: 0 }} />
            <span>
              Have questions? Ask <strong>NEMS AI</strong> for instant answers!
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                padding: '2px',
                display: 'flex',
              }}
              aria-label="Dismiss message"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Trigger Button with Pulsing Gold Glow */}
        <button
          onClick={onToggle}
          aria-label={isOpen ? 'Close NEMS AI Chat' : 'Open Ask NEMS AI Chatbot'}
          style={{
            height: '56px',
            borderRadius: '9999px',
            padding: isOpen ? '0 18px' : '0 22px 0 16px',
            backgroundColor: 'var(--color-navy-base)',
            color: '#FFFFFF',
            border: '2px solid var(--color-gold-base)',
            boxShadow: '0 8px 25px rgba(11, 37, 69, 0.35), 0 0 15px rgba(197, 160, 89, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {isOpen ? (
            <>
              <X size={20} color="#FFFFFF" />
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Close Chat</span>
            </>
          ) : (
            <>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold-base)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-navy-base)',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                <Bot size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Ask NEMS AI</span>
                  <Sparkles size={13} color="var(--color-gold-light)" />
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--color-gold-light)', fontWeight: 500 }}>
                  Instant School Answers
                </div>
              </div>
              {hasUnread && (
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    border: '2px solid #FFFFFF',
                    marginLeft: '2px',
                  }}
                />
              )}
            </>
          )}
        </button>
      </div>

      {/* 2. CHATBOT WINDOW DOCK */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '92px',
            right: '24px',
            width: 'min(410px, calc(100vw - 36px))',
            height: 'min(620px, calc(100vh - 120px))',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            boxShadow: '0 16px 45px -8px rgba(11, 37, 69, 0.3), 0 0 0 1px rgba(11, 37, 69, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 9998,
            overflow: 'hidden',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            animation: 'fadeInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          role="dialog"
          aria-label="NEMS AI Chatbot Window"
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: 'var(--color-navy-base)',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid var(--color-gold-base)',
              color: '#FFFFFF',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1.5px solid var(--color-gold-base)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/assets/images/nems-logo.png"
                  alt="NEMS Logo"
                  style={{ width: '28px', height: '28px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '2px',
                    right: '2px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    border: '1.5px solid var(--color-navy-base)',
                  }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF' }}>
                    NEMS AI Assistant
                  </h4>
                  <span
                    style={{
                      fontSize: '0.62rem',
                      backgroundColor: 'rgba(197, 160, 89, 0.25)',
                      color: 'var(--color-gold-light)',
                      padding: '1px 6px',
                      borderRadius: '10px',
                      fontWeight: 600,
                    }}
                  >
                    ONLINE
                  </span>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  {SCHOOL_INFO.trustName}
                </div>
              </div>
            </div>

            {/* Header Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                onClick={handleResetChat}
                title="Restart conversation"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.8)',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={onToggle}
                title="Minimize chat"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.8)',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <Minimize2 size={16} />
              </button>
            </div>
          </div>

          {/* Conversation Area */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              backgroundColor: '#F8FAFC',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {/* Bubble */}
                <div
                  style={{
                    maxWidth: '86%',
                    padding: '12px 14px',
                    borderRadius:
                      msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                    backgroundColor: msg.sender === 'user' ? 'var(--color-navy-base)' : '#FFFFFF',
                    color: msg.sender === 'user' ? '#FFFFFF' : 'var(--color-text-body)',
                    boxShadow:
                      msg.sender === 'user'
                        ? '0 3px 10px rgba(11, 37, 69, 0.2)'
                        : '0 2px 8px rgba(11, 37, 69, 0.05)',
                    border: msg.sender === 'user' ? 'none' : '1px solid #E2E8F0',
                    fontSize: '0.86rem',
                  }}
                >
                  {msg.sender === 'bot' ? (
                    <div>{renderFormattedText(msg.text)}</div>
                  ) : (
                    <div>{msg.text}</div>
                  )}

                  {/* Optional Action Button inside bot response */}
                  {msg.actionBtn && (
                    <button
                      onClick={() => handleAction(msg.actionBtn)}
                      style={{
                        marginTop: '10px',
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--color-gold-base)',
                        color: 'var(--color-navy-dark)',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 6px rgba(197, 160, 89, 0.3)',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      <span>{msg.actionBtn.label}</span>
                      <ExternalLink size={14} />
                    </button>
                  )}
                </div>

                {/* Timestamp */}
                <span
                  style={{
                    fontSize: '0.65rem',
                    color: '#94A3B8',
                    marginTop: '3px',
                    padding: '0 4px',
                  }}
                >
                  {msg.timestamp}
                </span>

                {/* Suggestions Chips (shown under bot messages if present) */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginTop: '8px',
                      maxWidth: '100%',
                    }}
                  >
                    {msg.suggestions.map((suggestion, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSendMessage(suggestion)}
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid rgba(197, 160, 89, 0.5)',
                          borderRadius: '14px',
                          padding: '5px 10px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--color-navy-base)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--color-navy-base)';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#FFFFFF';
                          e.currentTarget.style.color = 'var(--color-navy-base)';
                        }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 0' }}>
                <div
                  style={{
                    padding: '8px 12px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'var(--color-navy-base)',
                      borderRadius: '50%',
                      animation: 'bounce 1s infinite',
                    }}
                  />
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'var(--color-gold-base)',
                      borderRadius: '50%',
                      animation: 'bounce 1s infinite 0.2s',
                    }}
                  />
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'var(--color-navy-base)',
                      borderRadius: '50%',
                      animation: 'bounce 1s infinite 0.4s',
                    }}
                  />
                </div>
                <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>NEMS AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <div
            style={{
              padding: '10px 14px',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              placeholder="Ask NEMS AI anything (e.g. admissions, fees, results)..."
              style={{
                flex: 1,
                border: '1px solid #CBD5E1',
                borderRadius: '9999px',
                padding: '9px 14px',
                fontSize: '0.86rem',
                outline: 'none',
                fontFamily: 'inherit',
                color: 'var(--color-text-title)',
                backgroundColor: '#F8FAFC',
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: inputValue.trim() ? 'var(--color-navy-base)' : '#E2E8F0',
                color: inputValue.trim() ? 'var(--color-gold-light)' : '#94A3B8',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputValue.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s',
                flexShrink: 0,
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
