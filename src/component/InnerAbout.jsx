import React from "react";
import { FaGlobe, FaShieldAlt, FaDatabase, FaBolt, FaCloud } from "react-icons/fa";
import usedcaselogo from "../assets/usecase/usecaselogo.png"; // Replace with your cloud logo

const InnerAbout = () => {
  const useCases = [
    {
      title: "FinTech Platforms",
      desc: "Secure, low-latency infrastructure for high-frequency trading.",
      icon: <FaShieldAlt />,
      color: "border-blue-500",
      bg: "bg-blue-500",
      text: "text-blue-600",
    },
    {
      title: "AI & Machine Learning",
      desc: "GPU-accelerated compute instances for heavy model training.",
      icon: <FaBolt />,
      color: "border-indigo-500",
      bg: "bg-indigo-500",
      text: "text-indigo-600",
    },
    {
      title: "E-commerce Global",
      desc: "Auto-scaling web clusters that handle massive holiday traffic.",
      icon: <FaGlobe />,
      color: "border-cyan-500",
      bg: "bg-cyan-500",
      text: "text-cyan-600",
    },
    {
      title: "Data Analytics",
      desc: "Scalable data lakes and real-time processing pipelines.",
      icon: <FaDatabase />,
      color: "border-emerald-500",
      bg: "bg-emerald-500",
      text: "text-emerald-600",
    },
  ];

  return (
    <section className="w-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* HUB SECTION */}
        <div className="relative shrink-0">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-dashed border-blue-500/30 flex items-center justify-center animate-[spin_20s_linear_infinite] absolute inset-0" />
          <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-slate-900 flex flex-col items-center justify-center text-center shadow-xl border border-white/10">
            <img src={usedcaselogo} alt="logo" className="w-20 mb-2 brightness-125" />
            <div className="w-10 h-1 bg-blue-500 my-1 rounded-full"></div>
            <p className="text-blue-400 text-[9px] uppercase font-black tracking-widest">Industry Solutions</p>
          </div>
        </div>

        {/* LIST SECTION */}
        <div className="flex flex-col gap-4 w-full">
          {useCases.map((item, index) => (
            <div key={index} className="flex items-center group">
              <div className={`w-12 h-12 rounded-xl border ${item.color} bg-slate-900 flex items-center justify-center text-xl ${item.text} shadow-lg transition-all group-hover:scale-110 z-10`}>
                {item.icon}
              </div>
              <div className="flex-1 bg-slate-800/50 border border-white/5 rounded-r-2xl py-3 pl-6 pr-4 -ml-2 transition-colors group-hover:bg-slate-800">
                <h4 className="text-white text-xs sm:text-sm font-bold uppercase">{item.title}</h4>
                <p className="text-slate-400 text-[10px] sm:text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnerAbout;