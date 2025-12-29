import { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom"; // Import for standard page links
import logo from "../assets/Khajuraho/khajuraho-logo-removebg-preview (1).png";

const sections = ["home", "about", "usecases", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 150;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "/#home", id: "home", type: "hash" },
    { name: "About", href: "/#about", id: "about", type: "hash" },
    { name: "Use Cases", href: "/#usecases", id: "usecases", type: "hash" },
    { name: "Contact", href: "/#contact", id: "contact", type: "hash" },
    { name: "Privacy", href: "/privacy-policy", id: "privacy", type: "link" }, // New Link
  ];

  // Helper to render links consistently
  const renderNavLink = (link, isMobile = false) => {
    const commonClass = isMobile 
      ? `text-xl font-black transition-all ${active === link.id ? "text-orange-500 translate-x-4" : "text-slate-300"}`
      : `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          active === link.id
            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
            : "text-white hover:bg-white/10"
        }`;

    if (link.type === "hash") {
      return (
        <NavHashLink
          smooth
          key={link.id}
          to={link.href}
          onClick={() => setOpen(false)}
          className={commonClass}
        >
          {link.name}
        </NavHashLink>
      );
    }

    return (
      <NavLink
        key={link.id}
        to={link.href}
        onClick={() => {
          setOpen(false);
          setActive(link.id); // Set active state manually for non-hash pages
        }}
        className={({ isActive }) => `${commonClass} ${isActive ? "text-orange-500" : ""}`}
      >
        {link.name}
      </NavLink>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-blue-900/20"
            : "py-4"
        }`}
      >
        <div className="max-w-full px-2 md:px-10 mx-auto flex justify-between items-center">
          {/* LOGO */}
          <NavLink to="/" className={`flex items-center gap-2 ${scrolled ? "bg-transparent" : "bg-[#0f172a]/90 rounded-xl py-1 px-3"}`}>
            <img src={logo} alt="Khajuraho" className="w-12 h-12 rounded-lg" />
            <h1 className="text-lg md:text-2xl font-bold text-white tracking-wider">Khajuraho</h1>
          </NavLink>

          {/* NAV LINKS (DESKTOP) */}
          <nav className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-lg shadow-lg">
            {links.map((link) => renderNavLink(link))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg text-white bg-white/10">
            <span className="text-xl">☰</span>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <aside className={`fixed top-0 left-0 h-full w-[80%] bg-[#0f172a] z-50 transform transition-transform duration-500 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 flex justify-between items-center border-b border-white/10 bg-[#1e293b]">
          <span className="font-bold text-xl text-white">Khajuraho</span>
          <button onClick={() => setOpen(false)} className="text-xl text-orange-500">✕</button>
        </div>
        <nav className="flex flex-col p-5 space-y-4">
          {links.map((link) => renderNavLink(link, true))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;