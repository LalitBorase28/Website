import React from "react";
import vocoverify from "../assets/images/vocoverify.png";
import { FaLock, FaCheckCircle, FaGlobe, FaServer, FaShieldAlt, FaKey } from "react-icons/fa";

const IdCard = ({ title, icon }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-slate-800/80 border border-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:border-blue-500/50 transition-all w-full h-32 text-center group">
    <div className="text-3xl text-blue-400 mb-2 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <p className="text-[10px] font-bold uppercase text-slate-300 tracking-tighter">
      {title}
    </p>
  </div>
);

const AboutVocoInfo = () => {
  const securityFeatures = [
    { title: "SOC2 Type II", icon: <FaShieldAlt /> },
    { title: "ISO 27001", icon: <FaCheckCircle /> },
    { title: "GDPR Compliant", icon: <FaGlobe /> },
    { title: "HIPAA Ready", icon: <FaLock /> },
    { title: "Multi-Region", icon: <FaServer /> },
    { title: "KMS Encryption", icon: <FaKey /> },
  ];

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="text-center lg:text-left">
        <h3 className="text-2xl font-bold text-white mb-4">Enterprise Compliance</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Our infrastructure adheres to the world's strictest security protocols, 
          ensuring your data remains private and protected.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {securityFeatures.map((item, index) => (
          <IdCard key={index} title={item.title} icon={item.icon} />
        ))}
      </div>

    </div>
  );
};

export default AboutVocoInfo;