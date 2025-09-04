// // src/components/widgets/PremiumChatbot.jsx
// import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa';
// // import './widget.css';

// const getInitialMessages = () => ([
//   { id: 'm1', role: 'bot', text: 'Hello! I\'m your Acordan Forex Assistant 👋' },
//   { id: 'm2', role: 'bot', text: 'How can I help today? Try: "course price", "risk", "account types", "strategy", or "contact".' },
// ]);

// // Very simple premium-like intent router (you can later swap with your backend)
// const botReply = async (userText) => {
//   const t = userText.toLowerCase();

//   // Example intents
//   if (/\brisk\b|risk management|loss|risk disclaimer/.test(t)) {
//     return "Forex involves substantial risk and may not be suitable for all investors. Only trade money you can afford to lose. We teach strict risk management: 1–2% per trade, position sizing, and stop-loss discipline.";
//   }
//   if (/course|price|fees|training|class/.test(t)) {
//     return "We offer Beginner  Advanced, Intermediate Forex Programs. Beginner: $149, Advanced: $499 Intermediate: $799. Both include live Q&A, strategy modules, risk management, and community access. Want the curriculum?";
//   }
//   if (/strategy|strategies|system|setup/.test(t)) {
//     return "We focus on price action + confluence: S/R, market structure, FVG/imbalance, liquidity sweeps, and session timing. We also cover journaling and backtesting with rules-based entries.";
//   }
//   if (/account|broker|types|ecn|standard/.test(t)) {
//     return "Common account types: Standard (wider spread, no commission) and ECN (raw spread + commission). We’ll help you choose based on your style and capital. Need broker guidance?";
//   }
//   if (/timing|session|market hours|london|ny|asia/.test(t)) {
//     return "Popular sessions: London (12:30–16:30 IST) and NY (18:00–22:30 IST). Many traders prefer London open & NY overlap for volatility. Always match timing to your strategy.";
//   }
//   if (/contact|human|talk|call|whatsapp/.test(t)) {
//     return "You can reach us on WhatsApp (bottom-right) or share your number/email. We’ll connect you with a mentor.";
//   }
//   if (/refund|policy|guarantee/.test(t)) {
//     return "We offer a transparent policy: pre-course orientation and module previews. Since content is digital/live, refunds are limited—ask us for the full policy details.";
//   }
//   if (/signal|100%|guarantee|sure shot|fixed/.test(t)) {
//     return "No 100% guarantees in trading. Anyone promising fixed returns is misleading. We teach skill, discipline, and risk control for long-term consistency.";
//   }

//   // Fallback: “search-like” answer or handoff
//   return "Got it. I can answer about our courses, strategies, risk, sessions, accounts, and support. For detailed questions or live help, say “contact”.";
// };

// const PremiumChatbot = ({ title = 'Premium Chat', subtitle, brandColor = '#333' }) => {
//   const [open, setOpen] = useState(false);
//   const [msgs, setMsgs] = useState(() => {
//     const saved = localStorage.getItem('acordan_chat');
//     return saved ? JSON.parse(saved) : getInitialMessages();
//   });
//   const [input, setInput] = useState('');
//   const [typing, setTyping] = useState(false);
//   const listRef = useRef(null);

//   const pri = useMemo(() => brandColor, [brandColor]);

//   const scrollToBottom = () => {
//     if (listRef.current) {
//       listRef.current.scrollTop = listRef.current.scrollHeight;
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem('acordan_chat', JSON.stringify(msgs));
//     scrollToBottom();
//   }, [msgs, open]);

//   const send = async () => {
//     const text = input.trim();
//     if (!text) return;

//     const userMsg = { id: `u-${Date.now()}`, role: 'user', text };
//     setMsgs((m) => [...m, userMsg]);
//     setInput('');
//     setTyping(true);

//     // If you have a backend, call it here instead of botReply:
//     // const res = await fetch('/api/chat', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ message: text }) });
//     // const data = await res.json(); const reply = data.reply;

//     const reply = await botReply(text);

//     setTyping(false);
//     setMsgs((m) => [...m, { id: `b-${Date.now()}`, role: 'bot', text: reply }]);
//   };

//   const handleKey = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       send();
//     }
//   };

//   return (
//     <>
//       {/* Launcher (left-bottom) */}
//       {!open && (
//         <button
//           className="chatbot-launcher"
//           style={{ background: pri }}
//           aria-label="Open Premium Chatbot"
//           onClick={() => setOpen(true)}
//         >
//           <FaComments size={20} />
//         </button>
//       )}

//       {/* Panel */}
//       {open && (
//         <div className="chatbot-panel">
//           <div className="chatbot-header" style={{ background: pri }}>
//             <div className="chatbot-headings">
//               <strong>{title}</strong>
//               {subtitle && <span>{subtitle}</span>}
//             </div>
//             <button className="chatbot-close" aria-label="Close" onClick={() => setOpen(false)}>
//               <FaTimes />
//             </button>
//           </div>

//           <div className="chatbot-body" ref={listRef}>
//             {msgs.map((m) => (
//               <div key={m.id} className={`chat-msg ${m.role}`}>
//                 <div className="bubble">{m.text}</div>
//               </div>
//             ))}
//             {typing && (
//               <div className="chat-msg bot">
//                 <div className="bubble bubble-typing">
//                   <span className="dot" />
//                   <span className="dot" />
//                   <span className="dot" />
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="chatbot-input">
//             <textarea
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKey}
//               placeholder="Type your question…"
//               rows={1}
//             />
//             <button className="send-btn" onClick={send} aria-label="Send">
//               <FaPaperPlane size={16} />
//             </button>
//           </div>

//           <div className="chatbot-footer">
//             <small>
//               Educational purposes only. Trading forex involves risk. No guaranteed returns.
//             </small>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default PremiumChatbot;
// src/components/widgets/PremiumChatbot.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa';

// Initial greeting
const getInitialMessages = () => ([
  { id: 'm1', role: 'bot', text: 'Hello! I\'m your Acordan Forex Assistant 👋' },
  { id: 'm2', role: 'bot', text: 'Before we start, can I know your *Name*?' },
]);

// Forex bot intent replies
const botReply = async (userText) => {
  const t = userText.toLowerCase();

  if (/\brisk\b|risk management|loss|risk disclaimer/.test(t)) {
    return "Forex involves substantial risk and may not be suitable for all investors. Only trade money you can afford to lose. We teach strict risk management: 1–2% per trade, position sizing, and stop-loss discipline.";
  }
  if (/course|price|fees|training|class/.test(t)) {
    return "We offer Beginner $149, Intermediate $499, Advanced $799 programs. Includes live Q&A, strategy modules, risk management, and community access.";
  }
  if (/strategy|strategies|system|setup/.test(t)) {
    return "We focus on price action + confluence: S/R, market structure, imbalance, liquidity sweeps, and session timing. Also journaling + backtesting.";
  }
  if (/account|broker|types|ecn|standard/.test(t)) {
    return "Standard (spread, no commission) vs ECN (raw spread + commission). We guide you based on style and capital. Need broker help?";
  }
  if (/timing|session|market hours|london|ny|asia/.test(t)) {
    return "Popular sessions: London (12:30–16:30 IST) and NY (18:00–22:30 IST). Many trade London open & NY overlap for volatility.";
  }
  if (/contact|human|talk|call|whatsapp/.test(t)) {
    return "You can reach us on WhatsApp (bottom-right) or share your number/email. We’ll connect you with a mentor.";
  }
  if (/refund|policy|guarantee/.test(t)) {
    return "We offer a transparent policy: pre-course orientation and module previews. Digital/live content refunds are limited. Ask us for full policy.";
  }
  if (/signal|100%|guarantee|sure shot|fixed/.test(t)) {
    return "⚠️ No 100% guarantees in trading. Anyone promising fixed returns is misleading. We teach skill + discipline for consistency.";
  }

  return "Got it ✅ I can answer about our courses, strategies, risk, sessions, accounts, and support. For live help, type “contact”.";
};

const PremiumChatbot = ({ title = 'Premium Chat', subtitle, brandColor = '#333' }) => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState(() => {
    const saved = localStorage.getItem('acordan_chat');
    return saved ? JSON.parse(saved) : getInitialMessages();
  });
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  // Lead capture state
  const [userInfo, setUserInfo] = useState({ name: '', email: '', whatsapp: '' });
  const [collectStep, setCollectStep] = useState('name'); // name → email → whatsapp → done

  const listRef = useRef(null);
  const pri = useMemo(() => brandColor, [brandColor]);

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    localStorage.setItem('acordan_chat', JSON.stringify(msgs));
    scrollToBottom();
  }, [msgs, open]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg = { id: `u-${Date.now()}`, role: 'user', text };
    setMsgs((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);

    let reply;

    // Lead collection flow
    if (collectStep === 'name') {
      setUserInfo((u) => ({ ...u, name: text }));
      setCollectStep('email');
      reply = "Thanks 🙏 Please share your *Email* 📧";
    } else if (collectStep === 'Names') {
      setUserInfo((u) => ({ ...u,   Names: text }));
      setCollectStep('whatsapp');
      reply = "Great! Now please enter your *WhatsApp number* 📱";
    } else if (collectStep === 'email') {
      setUserInfo((u) => ({ ...u, email: text }));
      setCollectStep('whatsapp');
      reply = "Great! Now please enter your *WhatsApp number* 📱";
    } else if (collectStep === 'whatsapp') {
      const updatedInfo = { ...userInfo, whatsapp: text };
      setUserInfo(updatedInfo);
      setCollectStep('done');
      reply = "Perfect ✅ Thanks for sharing your details! You can now ask me about forex courses, risk, strategy, etc.";

      // Send lead to backend API
      try {
        await fetch("http://localhost:3000/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedInfo),
        });
      } catch (err) {
        console.error("Error saving lead:", err);
      }
    } else {
      // Normal chatbot mode
      reply = await botReply(text);
    }

    setTyping(false);
    setMsgs((m) => [...m, { id: `b-${Date.now()}`, role: 'bot', text: reply }]);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Launcher (left-bottom) */}
      {!open && (
        <button
          className="chatbot-launcher"
          style={{ background: pri }}
          aria-label="Open Premium Chatbot"
          onClick={() => setOpen(true)}
        >
          <FaComments size={20} />
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header" style={{ background: pri }}>
            <div className="chatbot-headings">
              <strong>{title}</strong>
              {subtitle && <span>{subtitle}</span>}
            </div>
            <button className="chatbot-close" aria-label="Close" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-body" ref={listRef}>
            {msgs.map((m) => (
              <div key={m.id} className={`chat-msg ${m.role}`}>
                <div className="bubble">{m.text}</div>
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <div className="bubble bubble-typing">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your answer…"
              rows={1}
            />
            <button className="send-btn" onClick={send} aria-label="Send">
              <FaPaperPlane size={16} />
            </button>
          </div>

          <div className="chatbot-footer">
            <small>
              Educational purposes only. Trading forex involves risk. No guaranteed returns.
            </small>
          </div>
        </div>
      )}
    </>
  );
};

export default PremiumChatbot;
