import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full h-[67px] z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 1. LOGO: Clean & Bold */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link
              to="/"
              className="text-2xl font-black text-brand-blue tracking-tighter"
            >
              Tempo<span className="text-brand-dark">Transport</span>
              <span className="text-brand-accent">.</span>
            </Link>
          </div>

          {/* 2. CENTER LINKS: The "Modern" Touch */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/fleet">Fleet</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* 3. RIGHT ACTIONS: Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Phone Number (Subtle) */}
            <a
              href="tel:+919876543210"
              className="hidden lg:flex flex-col items-end text-right mr-2 group"
            >
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                24/7 Support
              </span>
              <span className="text-sm font-bold text-brand-dark group-hover:text-brand-blue transition font-mono">
                +91 98765 43210
              </span>
            </a>

            {/* Modern Gradient Button */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-gradient-to-r from-brand-blue to-blue-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              <span>Book Now</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-dark hover:bg-brand-light transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU: Full width slide down */}
      <div
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <MobileLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileLink>
          <MobileLink to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </MobileLink>
          <MobileLink to="/fleet" onClick={() => setIsOpen(false)}>
            Our Fleet
          </MobileLink>
          <MobileLink to="/services" onClick={() => setIsOpen(false)}>
            Services
          </MobileLink>
          <MobileLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </MobileLink>

          <div className="pt-4 mt-4 border-t border-gray-100">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 w-full bg-brand-accent text-white py-3 rounded-xl font-bold shadow-md active:scale-95 transition"
            >
              <Phone size={18} /> Call +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- MODERN SUB-COMPONENTS ---

// Desktop Link: Subtle "Pill" Hover Effect
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-brand-blue hover:bg-brand-light/80 transition-all duration-200"
  >
    {children}
  </Link>
);

// Mobile Link: Large tap targets
const MobileLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-lg font-medium text-brand-dark hover:text-brand-blue hover:pl-2 transition-all"
  >
    {children}
  </Link>
);

export default Navbar;
