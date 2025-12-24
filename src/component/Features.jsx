import React from "react";
import service from "../assets/images/handshake-removebg-preview.png";
import {
  FaCloud,
  FaShieldAlt,
  FaServer,
  FaSync,
  FaDatabase,
  FaTerminal,
  FaCogs,
  FaNetworkWired,
} from "react-icons/fa";
import { 
  MdCloudQueue, 
  MdOutlineSecurity, 
  MdSettingsSuggest 
} from "react-icons/md"; // Using Material Design as a stable fallback

const featuresData = [
  {
    id: 1,
    title: "AWS Infrastructure",
    points: ["EC2, S3 & Lambda", "VPC Architecture"],
    icon: <FaServer />, // Stable alternative
    gradient: "from-[#FF9900] to-[#FFB347]",
  },
  {
    id: 2,
    title: "Azure Enterprise",
    points: ["Active Directory", "SQL Managed Instance"],
    icon: <MdCloudQueue />, // Stable alternative
    gradient: "from-[#0089D6] to-[#00BCFF]",
  },
  {
    id: 3,
    title: "IaC Automation",
    points: ["Terraform Modules", "CloudFormation"],
    icon: <FaTerminal />, 
    gradient: "from-[#8449BF] to-[#A466E0]",
  },
  {
    id: 4,
    title: "K8s Management",
    points: ["EKS/AKS Clusters", "Containerization"],
    icon: <FaCogs />, 
    gradient: "from-[#326CE5] to-[#719AF4]",
  },
  {
    id: 5,
    title: "Cloud Security",
    points: ["IAM Policy Audit", "Encryption at Rest"],
    icon: <FaShieldAlt />,
    gradient: "from-[#EF4444] to-[#F87171]",
  },
  {
    id: 6,
    title: "DevOps CI/CD",
    points: ["Jenkins & Pipelines", "Automated Testing"],
    icon: <FaSync />,
    gradient: "from-[#10B981] to-[#34D399]",
  },
  {
    id: 7,
    title: "Database Admin",
    points: ["Multi-Region RDS", "NoSQL Scaling"],
    icon: <FaDatabase />,
    gradient: "from-[#F59E0B] to-[#FBBF24]",
  },
  {
    id: 8,
    title: "Network Setup",
    points: ["Cloud DNS & CDN", "Direct Connect"],
    icon: <FaNetworkWired />,
    gradient: "from-[#EC4899] to-[#F472B6]",
  },
];

const Features = () => {
  const leftFeatures = featuresData.slice(0, 4);
  const rightFeatures = featuresData.slice(4, 8);

  const ServiceItem = ({ feature, isRight }) => (
    <div
      className={`group flex items-center gap-4 mb-8
        rounded-2xl
        bg-white/40 backdrop-blur-md
        px-4 py-3 border border-white/50
        shadow-lg shadow-black/5
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
        transition-all duration-500
        ${isRight ? "flex-row" : "flex-row-reverse text-right"}
      `}
    >
      <div className="flex-1">
        <h4
          className="text-xs font-black uppercase tracking-wider mb-1"
          style={{
            color: feature.gradient.split(' ')[0].replace('from-[', '').replace(']', '')
          }}
        >
          {feature.title}
        </h4>
        <div className={`flex flex-col ${isRight ? "items-start" : "items-end"}`}>
          {feature.points.map((point, idx) => (
            <span key={idx} className="text-[11px] text-slate-700 font-bold leading-tight">
              {point}
            </span>
          ))}
        </div>
      </div>

      <div className={`relative w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl border-2 border-white/40
          transition-all duration-500 group-hover:scale-110 group-hover:rotate-360
          bg-linear-to-br ${feature.gradient}
          text-white shadow-lg`}
      >
        <div className="text-2xl">{feature.icon}</div>
      </div>
    </div>
  );

  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="hidden lg:block lg:w-1/3">
            {leftFeatures.map((f) => <ServiceItem key={f.id} feature={f} isRight={false} />)}
          </div>

          <div className="relative w-72 h-72 shrink-0">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-5 rounded-full bg-linear-to-br from-blue-600 via-indigo-700 to-slate-900
              flex flex-col items-center justify-center text-center p-6 shadow-2xl border border-white/20">
              <img src={service} alt="Cloud Services" className="w-20 h-20 object-contain mb-2" />
              <h3 className="text-white font-black text-xl tracking-tight">Cloud Hub</h3>
              <p className="text-[10px] text-cyan-200 tracking-widest font-bold uppercase mt-1">Managed Services</p>
            </div>
          </div>

          <div className="lg:w-1/3 w-full">
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuresData.map((f) => <ServiceItem key={f.id} feature={f} isRight={true} />)}
            </div>
            <div className="hidden lg:block">
              {rightFeatures.map((f) => <ServiceItem key={f.id} feature={f} isRight={true} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;