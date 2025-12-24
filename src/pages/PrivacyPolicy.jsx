import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { FaShieldAlt, FaEye, FaLock, FaUserShield } from "react-icons/fa";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Section = ({ title, icon, children }) => (
    <div className="mb-12 group">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-amber-500 text-xl">{icon}</span>
        <h2 className="text-xl font-bold text-slate-100 uppercase tracking-wider">
          {title}
        </h2>
      </div>
      <div className="text-slate-400 leading-relaxed space-y-4 pl-8 border-l border-slate-800 group-hover:border-amber-900/50 transition-colors">
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-[#09090b] min-h-screen text-slate-300 selection:bg-amber-500/30">
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-amber-500/20 to-transparent blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            Privacy <span className="text-amber-500 italic">Policy</span>
          </h1>
          <p className="text-amber-600 font-bold uppercase tracking-[0.3em] text-sm">
            Khajuraho Heritage Documentation
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-[#121214] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl shadow-black/50">
          
          <p className="text-lg text-slate-400 mb-12 italic border-b border-white/5 pb-8">
            This policy describes how Khajuraho Heritage ("we", "our") manages the personal 
            information of our visitors and digital archive users.
          </p>

          <Section title="Data Collection" icon={<FaEye />}>
            <p>
              We collect information that identifies you, such as your name and email address, 
              only when you voluntarily subscribe to our heritage updates or request 
              access to premium documentation.
            </p>
            <p>
              Technological data (IP addresses, browser types) is collected automatically 
              via cookies to optimize the rendering of high-resolution architectural imagery.
            </p>
          </Section>

          <Section title="Information Usage" icon={<FaShieldAlt />}>
            <p>Your data allows us to:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Authenticate access to specialized historical archives.</li>
              <li>Provide personalized cultural recommendations.</li>
              <li>Maintain the security of our digital asset management systems.</li>
            </ul>
          </Section>

          <Section title="Physical Presence" icon={<FaLock />}>
            <p>
              While our digital reach is global, our administrative headquarters and 
              legal nexus are located in India:
            </p>
            <div className="bg-amber-950/20 border border-amber-900/30 p-6 rounded-2xl my-6">
              <address className="not-italic text-amber-200 leading-loose">
                <span className="text-white font-bold">Khajuraho Heritage HQ</span><br />
                Apt No. 4, 1st Floor, Achyut Prasad Apartment 11,<br />
                Kishor Bhagirath Tapadia Road, Erandwane,<br />
                Pune, Maharashtra – 411004
              </address>
            </div>
          </Section>

          <Section title="Your Legal Rights" icon={<FaUserShield />}>
            <p>
              Under global data protection laws, you have the right to access, rectify, or 
              request the erasure of your personal data. To exercise these rights 
              regarding your heritage profile, please contact our data officer.
            </p>
            <p className="text-sm bg-white/5 p-4 rounded-lg italic">
              Note: We do not sell, trade, or rent user personal identification 
              information to third-party marketing agencies.
            </p>
          </Section>

          <div className="mt-20 pt-10 border-t border-white/5 text-center">
            <p className="text-slate-500 text-sm">
              Questions about this policy? Reach out to <br />
              <span className="text-amber-500 font-bold">info@microintegrated.in</span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;