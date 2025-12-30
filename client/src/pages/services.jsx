import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Users,
  Plane,
  Calendar,
  Map,
  FileText,
  CheckCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "corporate",
      icon: <Briefcase size={32} />,
      title: "Corporate Employee Transport (ETS)",
      tag: "Core Service",
      description:
        "Comprehensive pick-up and drop solutions for your workforce. We handle route planning, roster management, and ensure employees reach the office safely and on time.",
      features: [
        "Monthly fixed contracts",
        "24/7 Shift coverage",
        "GPS-tracked vehicles",
        "GST compliant billing",
      ],
    },
    {
      id: "adhoc",
      icon: <FileText size={32} />,
      title: "Ad-Hoc & Monthly Rentals",
      tag: "Flexible",
      description:
        "Need a vehicle for a month or just a few days? Our flexible rental plans allow corporate admins to book vehicles for site visits, client meetings, or temporary projects.",
      features: [
        "Dedicated vehicle & driver",
        "Maintenance included",
        "Replacement vehicle guarantee",
        "Driver allowance included",
      ],
    },
    {
      id: "airport",
      icon: <Plane size={32} />,
      title: "Airport Group Transfers",
      tag: "24/7 Available",
      description:
        "Reliable transfers to and from IGI Airport (T1/T3). We monitor flight timings to handle delays proactively. Perfect for visiting delegations and leadership teams.",
      features: [
        "Paging service (Placard)",
        "Luggage assistance",
        "Flight tracking",
        "Premium waiting lounge access",
      ],
    },
    {
      id: "events",
      icon: <Calendar size={32} />,
      title: "Events & MICE Transport",
      tag: "Bulk Booking",
      description:
        "Handling logistics for large corporate events, exhibitions at Pragati Maidan/Yashobhoomi, or company offsites. We manage the entire fleet coordination.",
      features: [
        "On-site coordinator provided",
        "Shuttle service management",
        "Branding on vehicles available",
        "Bulk invoice processing",
      ],
    },
    {
      id: "outstation",
      icon: <Map size={32} />,
      title: "Outstation Retreats & Tours",
      tag: "Luxury Travel",
      description:
        "Premium Tempo Travellers for team-building trips to Jaipur, Shimla, Rishikesh, or Agra. Reclining seats and ample legroom ensure the journey is as comfortable as the destination.",
      features: [
        "Experienced hill drivers",
        "Clean blankets & water",
        "Transparent state-tax billing",
        "24/7 Breakdown assistance",
      ],
    },
    {
      id: "staff",
      icon: <Users size={32} />,
      title: "Late Night Staff Drops",
      tag: "Safety First",
      description:
        "Specialized transport for BPOs and MNCs operating night shifts. We adhere to strict safety protocols for female employees, including escort guards if required.",
      features: [
        "Route optimization",
        "Panic button enabled",
        "Driver background verification",
        "Doorstep drop confirmation",
      ],
    },
  ];

  return (
    <div className="bg-brand-light font-sans text-brand-dark">
      {/* 1. HERO SECTION */}
      <section className="relative h-[400px] flex items-center justify-center bg-brand-blue text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-brand-blue opacity-90 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop")',
          }}
        ></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Corporate Mobility Solutions
          </h1>
          <p className="text-lg text-brand-light/90 max-w-2xl mx-auto font-light">
            From daily employee transport to executive airport transfers, we
            keep your business moving with precision and safety.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Icon & Tag */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-brand-light text-brand-blue rounded-xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-brand-accent transition-colors">
                  {service.icon}
                </div>
                <span className="bg-brand-light text-brand-dark/70 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-brand-blue mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle
                      size={16}
                      className="text-brand-accent flex-shrink-0 mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:text-brand-accent transition-colors"
              >
                Request Proposal <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROCESS SECTION (How We Work) */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-blue">
              Onboarding Process
            </h2>
            <p className="mt-4 text-gray-600">
              Simple, transparent steps to get your fleet running.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-light -z-0"></div>

            <ProcessStep
              number="01"
              title="Requirement"
              desc="Share your route details, shift timings, and vehicle preferences."
            />
            <ProcessStep
              number="02"
              title="Route Planning"
              desc="We optimize routes to reduce travel time and operational costs."
            />
            <ProcessStep
              number="03"
              title="Contracting"
              desc="Transparent SLA signing with clear pricing and compliance checks."
            />
            <ProcessStep
              number="04"
              title="Deployment"
              desc="Vehicles are deployed with dedicated drivers and supervisors."
            />
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE & SAFETY STRIP */}
      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={32} className="text-brand-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">100% Compliant Fleet</h3>
              <p className="text-gray-400 max-w-xl">
                We strictly adhere to statutory requirements including
                Commercial Registration, Insurance, Fitness Certificates,
                Pollution Checks, and Police Verification of drivers.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://wa.me/919876543210"
              className="bg-brand-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-brand-dark transition shadow-lg inline-flex items-center gap-2"
            >
              <FileText size={18} /> Download Compliance Checklist
            </a>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-brand-blue mb-6">
          Ready to optimize your transport?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get a customized quote tailored to your specific corporate needs
          within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-dark transition"
          >
            <Phone size={20} /> Call Now
          </a>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue px-8 py-3 rounded-lg font-bold hover:bg-brand-blue hover:text-white transition"
          >
            Request Online Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

// --- Sub Components ---

const ProcessStep = ({ number, title, desc }) => (
  <div className="relative z-10 bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
    <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-md">
      {number}
    </div>
    <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default Services;
