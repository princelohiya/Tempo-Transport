import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Award,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-white font-sans text-brand-dark">
      {/* 1. HERO SECTION: Professional & Trust-Oriented */}
      <section className="relative h-[400px] flex items-center justify-center">
        {/* Abstract Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")',
          }}
        ></div>
        {/* Brand Blue Overlay */}
        <div className="absolute inset-0 bg-brand-blue/90 z-10"></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <span className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-4 block">
            Established in Gurgaon
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Gurgaon's Trusted <br /> Family-Owned Transport Partner
          </h1>
          <p className="text-lg text-brand-light/90 max-w-2xl mx-auto leading-relaxed font-light">
            We are a Gurgaon-based business with our own fleet of 7 premium
            Tempo Travellers. Focused on safety, punctuality, and personalized
            corporate service.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY: Highlighting "Family-Owned" & "Own Fleet" */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative mb-12 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                alt="Corporate Team Meeting"
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              {/* Decorative Accent Box */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent/10 rounded-2xl -z-0"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-blue/5 rounded-2xl -z-0"></div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">
                More Than Just a Transport Company
              </h2>
              <div className="space-y-6 text-brand-dark/80 leading-relaxed text-lg">
                <p>
                  We are a <strong>family-owned transport business</strong>{" "}
                  rooted in Gurgaon. Unlike impersonal aggregators, we take
                  personal responsibility for every passenger who steps into our
                  vehicles.
                </p>
                <p>
                  Our strength lies in our assets. We proudly own and operate a
                  fleet of
                  <strong> 7 Luxury Tempo Travellers</strong>. This ownership
                  allows us to maintain strict control over vehicle quality,
                  cleanliness, and maintenance schedules—something aggregators
                  simply cannot guarantee.
                </p>
                <p>
                  For us, transport is not just about moving people; it is about
                  building long-term relationships based on trust, transparency,
                  and consistency.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-4xl font-bold text-brand-accent mb-1">
                    7
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    Self-Owned Vehicles
                  </p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-brand-accent mb-1">
                    100%
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    Safety Record
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES: Highlighting "Safety" & "Punctuality" */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-blue">
              Our Core Commitments
            </h2>
            <p className="mt-4 text-gray-600">
              The pillars that define our service quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<ShieldCheck size={32} />}
              title="Uncompromised Safety"
              desc="Your safety is our priority. Our vehicles undergo weekly mechanical checks, and we adhere to strict safety protocols including first-aid kits and fire extinguishers in every vehicle."
            />
            <ValueCard
              icon={<Clock size={32} />}
              title="Strict Punctuality"
              desc="We value corporate time. Our drivers report 15 minutes prior to the scheduled pickup. We track every trip in real-time to ensure no delays."
            />
            <ValueCard
              icon={<Award size={32} />}
              title="Experienced Drivers"
              desc="Our fleet is driven by verified professionals with years of experience on NCR roads and hill terrain. Soft-spoken, uniformed, and reliable."
            />
          </div>
        </div>
      </section>

      {/* 4. DRIVER & TEAM SECTION */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Users className="mx-auto text-brand-accent mb-4" size={48} />
          <h2 className="text-3xl font-bold text-brand-blue mb-6">
            Meet Our Experienced Team
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            A vehicle is only as good as its driver. That's why we invest
            heavily in our staff. Our drivers are local to Gurgaon & NCR,
            familiar with every corporate hub in Cyber City and Udyog Vihar, and
            trained to provide a courteous experience.
          </p>
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 font-bold text-brand-blue hover:text-brand-accent transition"
          >
            See Our Fleet <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Partner with a Trustworthy Local Operator
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Visit our office in Gurgaon or schedule a vehicle inspection today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919876543210"
              className="bg-brand-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-brand-dark transition shadow-lg"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="border border-white/30 px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-brand-dark transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Helper Components ---

const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="w-16 h-16 bg-brand-light text-brand-blue rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export default About;
