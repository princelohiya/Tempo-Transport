import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import About from "./pages/About";
import Fleet from "./pages/fleet";
import Services from "./pages/services";
import Contact from "./pages/Contact";

// --- Placeholder Components (So the app doesn't crash on click) ---
const Placeholder = ({ title }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-light">
    <h1 className="text-4xl font-bold text-brand-blue mb-4">{title}</h1>
    <p className="text-gray-600">This page is under construction.</p>
    <Link to="/" className="mt-6 text-brand-accent hover:underline font-bold">
      Back to Home
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Corporate Footer */}
        <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-brand-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Column 1: Company Info */}
              <div>
                <Link
                  to="/"
                  className="text-2xl font-bold text-white mb-6 block"
                >
                  Tempo<span className="text-gray-400">Transport</span>
                  <span className="text-brand-accent">.</span>
                </Link>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Premium fleet owners in Gurgaon providing reliable corporate
                  transport and luxury outstation tours since 2015.
                </p>
                <div className="flex space-x-4">
                  <SocialIcon icon={<Facebook size={20} />} />
                  <SocialIcon icon={<Instagram size={20} />} />
                  <SocialIcon icon={<Twitter size={20} />} />
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">
                  Quick Links
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-brand-accent transition"
                    >
                      About Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/fleet"
                      className="hover:text-brand-accent transition"
                    >
                      Our Fleet Photos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="hover:text-brand-accent transition"
                    >
                      Corporate Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="hover:text-brand-accent transition"
                    >
                      Get a Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="hover:text-brand-accent transition"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div>
                <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">
                  Contact Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <MapPin
                      className="text-brand-accent mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>
                      Sector 18, Udyog Vihar,
                      <br />
                      Gurgaon, Haryana 122001
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <Phone
                      className="text-brand-accent flex-shrink-0"
                      size={20}
                    />
                    <a
                      href="tel:+919876543210"
                      className="hover:text-white transition"
                    >
                      +91 98765 43210
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <Mail
                      className="text-brand-accent flex-shrink-0"
                      size={20}
                    />
                    <a
                      href="mailto:info@tempotransport.com"
                      className="hover:text-white transition"
                    >
                      info@tempotransport.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright Strip */}
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
              <p>
                &copy; {new Date().getFullYear()} TempoTransport Gurgaon. All
                rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// Helper for Social Icons
const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all duration-300 text-gray-400"
  >
    {icon}
  </a>
);

export default App;
