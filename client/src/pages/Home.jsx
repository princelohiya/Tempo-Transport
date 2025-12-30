import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Calendar,
  Plane,
  Map,
  ShieldCheck,
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const Home = () => {
  return (
    <div className="bg-brand-light font-sans text-brand-dark">
      {/* 1. HERO SECTION */}
      <section className="relative h-[650px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?q=80&w=2070&auto=format&fit=crop")',
          }}
        ></div>

        {/* Brand Blue Overlay */}
        <div className="absolute inset-0 bg-brand-blue/90 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-dark/50 border border-brand-accent/30 backdrop-blur-sm text-brand-accent text-sm font-bold tracking-wide uppercase mb-8">
            <Star size={14} fill="currentColor" /> Premium Fleet Owner • Gurgaon
            Based
          </div>

          {/* HEADLINE: Updated per requirements */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Reliable Tempo Traveller <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-light/80">
              Services in Gurgaon & NCR
            </span>
          </h1>

          {/* SUB-TEXT: Updated per requirements */}
          <p className="text-lg md:text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed border-l-4 border-brand-accent pl-4 md:pl-0 md:border-l-0 md:border-b-2 md:pb-2 md:inline-block">
            Monthly Corporate Contracts | Airport Transfers | Tours & Events
          </p>

          {/* 3 CTA BUTTONS */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            {/* 1. Get Monthly Quote */}
            <Link
              to="/contact"
              className="bg-brand-accent text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:brightness-110 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              Get Monthly Quote <ArrowRight size={20} />
            </Link>

            {/* 2. Call Now */}
            <a
              href="tel:+919876543210"
              className="bg-white text-brand-blue font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call Now
            </a>

            {/* 3. WhatsApp Us */}
            <a
              href="https://wa.me/919876543210"
              className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:brightness-110 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK SERVICES ICONS (Replaced Stats Strip) */}
      <section className="relative z-30 -mt-16 px-4">
        <div className="bg-white border-b border-brand-light shadow-xl rounded-xl max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-light/20">
            <QuickServiceItem
              icon={<Briefcase size={28} />}
              label="Corporate Transport"
            />
            <QuickServiceItem
              icon={<Calendar size={28} />}
              label="Monthly Rentals"
            />
            <QuickServiceItem
              icon={<Plane size={28} />}
              label="Airport Transfers"
            />
            <QuickServiceItem icon={<Map size={28} />} label="Tours & Events" />
          </div>
        </div>
      </section>

      {/* 3. DETAILED SERVICES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-2">
              Our Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue">
              Tailored Transport Solutions
            </h3>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Briefcase size={28} />}
              title="Corporate Contracts"
              desc="Monthly rentals for office staff movement with compliant GST billing."
            />
            <ServiceCard
              icon={<Calendar size={28} />}
              title="Events & Weddings"
              desc="Seamless bulk booking management for large events and guest transfers."
            />
            <ServiceCard
              icon={<Plane size={28} />}
              title="Airport Transfers"
              desc="Punctual pickups and drops to IGI Airport T3/T1. Never miss a flight."
            />
            <ServiceCard
              icon={<Map size={28} />}
              title="Outstation Tours"
              desc="Luxury travel for Shimla, Manali, Jaipur, and Agra. Clean & Comfortable."
            />
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Background Pattern Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-blue rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Corporate HRs <br /> & Admins{" "}
                <span className="text-brand-accent">Trust Us</span>
              </h2>
              <p className="text-brand-light/70 mb-8 text-lg">
                We understand that corporate transport isn't just about driving;
                it's about reliability, compliance, and employee safety.
              </p>

              <div className="space-y-8">
                <FeatureRow
                  title="Direct Owners, No Commission"
                  desc="We own our fleet. You deal directly with the owners, ensuring better rates and immediate accountability."
                />
                <FeatureRow
                  title="Punctuality Guaranteed"
                  desc="Our drivers report 15 minutes before scheduled time. Real-time location sharing available."
                />
                <FeatureRow
                  title="Immaculate Interiors"
                  desc="Deep-cleaned before every trip. Fresh seat covers, curtains, and sanitized handles."
                />
              </div>
            </div>

            {/* Right Side: Abstract Representation */}
            <div className="mt-12 lg:mt-0 relative">
              <div className="bg-brand-blue/90 p-8 rounded-2xl border border-brand-blue/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-brand-accent" /> Fleet Standards
                </h3>
                <ul className="space-y-4">
                  {[
                    "12 Seater Luxury Recliners",
                    "14 Seater Force Urbania",
                    "GPS Enabled Tracking",
                    "Verified Uniformed Drivers",
                    "Emergency Backup Vehicle",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-brand-light"
                    >
                      <CheckCircle size={18} className="text-brand-accent" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    to="/fleet"
                    className="w-full block text-center bg-white text-brand-blue font-bold py-3 rounded hover:bg-brand-accent hover:text-white transition-colors"
                  >
                    View Vehicle Photos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Footer Strip */}
      <section className="bg-brand-accent py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Need a quote for your upcoming trip?
            </h2>
            <p className="text-white/90">Get a response within 15 minutes.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://wa.me/919876543210"
              className="bg-white text-brand-dark px-6 py-3 rounded-lg font-bold hover:bg-brand-dark hover:text-white transition flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <Link
              to="/contact"
              className="bg-brand-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-dark transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Sub Components ---

// NEW: Quick Service Item for the Strip
const QuickServiceItem = ({ icon, label }) => (
  <div className="p-6 text-center flex flex-col items-center justify-center hover:bg-brand-light transition group cursor-pointer">
    <div className="text-brand-blue mb-3 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="text-sm font-bold text-brand-dark uppercase tracking-wide group-hover:text-brand-accent transition-colors">
      {label}
    </div>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-brand-light/30 p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-brand-light group">
    <div className="w-14 h-14 bg-brand-light text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-accent rounded-lg flex items-center justify-center mb-6 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
    <p className="text-brand-dark/70 leading-relaxed text-sm">{desc}</p>
  </div>
);

const FeatureRow = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1">
      <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
        <CheckCircle size={16} />
      </div>
    </div>
    <div>
      <h4 className="text-lg font-bold text-white">{title}</h4>
      <p className="text-brand-light/70 mt-1 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Home;
