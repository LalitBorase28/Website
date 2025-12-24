import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f172a] text-slate-300 pt-16 pb-8 px-6 border-t border-white/10">
      {/* Subtle Glow Effect */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-2xl tracking-tighter">
              KHAJURAHO<span className="text-orange-500 italic">.</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading the digital transformation of heritage preservation. We document 
              the past to inspire the future of architectural excellence.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><HashLink smooth to="/#home" className="hover:text-orange-400 transition-colors">Architecture</HashLink></li>
              <li><HashLink smooth to="/#about" className="hover:text-orange-400 transition-colors">Our Legacy</HashLink></li>
              <li><HashLink smooth to="/#usecases" className="hover:text-orange-400 transition-colors">Digital Use Cases</HashLink></li>
              <li><HashLink smooth to="/#contact" className="hover:text-orange-400 transition-colors">Get in Touch</HashLink></li>
            </ul>
          </div>

          {/* Column 3: Legal Hub */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Compliance</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="hover:text-orange-400 transition-colors">Data Security</Link></li>
              <li><Link to="/cookies" className="hover:text-orange-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]">Pune Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="mt-1 text-orange-500 shrink-0" />
                <p className="leading-relaxed text-slate-400">
                  Apt No. 4, 1st Floor, Achyut Prasad Apartment 11, <br />
                  Erandwane, Pune, Maharashtra – 411004
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm group">
                <FaEnvelope className="text-orange-500" />
                <span className="group-hover:text-white transition-colors cursor-pointer">info@khajurahoheritage.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm group">
                <FaPhoneAlt className="text-orange-500" />
                <span className="group-hover:text-white transition-colors cursor-pointer">+91 9175545588</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} Khajuraho Heritage Documentation</p>
          <div className="flex gap-6">
            <span className="text-white/40">Registered in Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;