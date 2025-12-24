import React from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  RefreshCcw,
  Cpu,
  Globe
} from "lucide-react";

const CLOUD_SERVICES = [
  {
    name: "AWS Architecture",
    provider: "Amazon Web Services",
    accent: "text-orange-500",
    dot: "bg-orange-500",
    border: "border-orange-500/20",
    description: "Scalable cloud computing solutions including EC2, Lambda, and optimized S3 storage buckets.",
    features: ["Serverless Computing", "Data Lakes", "Auto-scaling"],
    icon: <Zap className="w-6 h-6 text-orange-500" />
  },
  {
    name: "Azure Strategy",
    provider: "Microsoft Azure",
    accent: "text-blue-500",
    dot: "bg-blue-500",
    border: "border-blue-500/20",
    description: "Enterprise-level hybrid cloud, Entra ID integration, and seamless .NET stack migration.",
    features: ["Active Directory", "Hybrid Cloud", "Azure DevOps"],
    icon: <Cloud className="w-6 h-6 text-blue-500" />
  },
  {
    name: "GCP Engineering",
    provider: "Google Cloud",
    accent: "text-emerald-500",
    dot: "bg-emerald-500",
    border: "border-emerald-500/20",
    description: "Advanced data analytics, machine learning tools, and Kubernetes (GKE) orchestration.",
    features: ["BigQuery", "AI/ML Models", "GKE Clusters"],
    icon: <Cpu className="w-6 h-6 text-emerald-500" />
  },
  {
    name: "DevOps & IaC",
    provider: "Platform Automation",
    accent: "text-indigo-500",
    dot: "bg-indigo-500",
    border: "border-indigo-500/20",
    description: "Infrastructure as Code using Terraform, Jenkins, and GitHub Actions for continuous delivery.",
    features: ["CI/CD Pipelines", "Terraform", "Kubernetes"],
    icon: <RefreshCcw className="w-6 h-6 text-indigo-500" />
  }
];

const ModernLightCloud = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-cyan-500/30 font-sans overflow-hidden py-25 relative">
      {/* Background Grid Pattern - Kept as requested */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Decorative Glows for depth */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-cyan-400 font-bold text-xs uppercase tracking-[0.3em] mb-6"
            >
              <div className="w-10 h-px bg-cyan-400" /> Infrastructure Partner
            </motion.div>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white">
              Cloud <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Architecture</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-md lg:mb-2 font-light leading-relaxed">
            Scalable, secure, and high-availability systems engineered for the world's most demanding enterprises.
          </p>
        </div>

        {/* --- MAIN SERVICES BENTO --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLOUD_SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-white/3 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20`}
            >
              <div className="relative z-10">
                {/* Icon Box with soft glow */}
                <div className={`w-14 h-14 rounded-2xl bg-slate-900 border ${service.border} flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest block mb-6 ${service.accent}`}>
                  {service.provider}
                </span>
                
                <p className="text-sm text-slate-400 leading-relaxed mb-8 min-h-20">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-medium text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.dot}`} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Subtle Icon */}
              <div className="absolute bottom-6 right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <Globe className="w-24 h-24 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- TRUST & COMPLIANCE BAR --- */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Main CTA Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-linear-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center gap-10 overflow-hidden relative shadow-2xl shadow-blue-900/20"
          >
            <div className="relative z-10 flex flex-col gap-6">
              <h3 className="text-3xl font-bold leading-tight">Ready to modernize <br/> your tech stack?</h3>
              <p className="text-blue-100 text-sm max-w-md font-light">
                Our certified engineers handle migration and cost-optimization so you can focus on building your product.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-blue-700 rounded-2xl font-bold text-sm hover:bg-cyan-50 transition-all flex items-center gap-3 group shadow-xl">
                  Get a Free Audit <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Terminal Mockup - Light version for contrast */}
            <div className="hidden md:block bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 font-mono text-[11px] text-cyan-300 w-72 rotate-2 opacity-80 shadow-2xl">
               <div className="flex gap-1.5 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                  <div className="w-2 h-2 rounded-full bg-green-400/50" />
               </div>
               <p className="mb-1">$ nimbus deploy --prod</p>
               <p className="text-slate-400 mb-1">{"//"} analysis started...</p>
               <p className="text-emerald-400">✓ Security Layer Verified</p>
               <p className="text-emerald-400">✓ 12 Nodes Provisioned</p>
               <p className="text-white mt-2 animate-pulse">_ System Online</p>
            </div>
          </motion.div>

          {/* Side Info Card */}
          <div className="bg-white/3 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center gap-6 backdrop-blur-sm group hover:border-blue-500/30 transition-colors">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-inner">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-2">Security-First</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Every architecture we build is compliant with SOC2 and ISO 27001 standards as baseline.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModernLightCloud;