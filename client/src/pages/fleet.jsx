import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Briefcase,
  Snowflake,
  Wifi,
  Music,
  MapPin,
  Shield,
  Check,
  Phone,
} from "lucide-react";

const Fleet = () => {
  const vehicles = [
    {
      id: 1,
      name: "Force Urbania (14 Seater)",
      tag: "Premium Corporate Choice",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop", // Replace with real Urbania photo
      price: "Best for Executives",
      seats: 14,
      features: [
        "Individual AC Vents",
        "Reclining Captain Seats",
        "Laptop Charging Points",
        "Ample Luggage Space",
      ],
      description:
        "The latest addition to our fleet. The Force Urbania offers a car-like comfort with superior suspension, making it perfect for senior management transport and long-distance outstation trips.",
    },
    {
      id: 2,
      name: "Luxury Tempo Traveller (12 Seater)",
      tag: "Most Popular",
      image:
        "https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?q=80&w=2070&auto=format&fit=crop", // Replace with real exterior photo
      price: "Best for Teams",
      seats: 12,
      features: [
        "2x1 Seating Configuration",
        "High Headroom (Stand easily)",
        "LED Mood Lighting",
        "First Aid Kit & Fire Extinguisher",
      ],
      description:
        "Our standard workhorse for corporate staff movement and wedding guests. Spacious aisle, push-back seats, and immaculate white interiors sanitized before every trip.",
    },
  ];

  return (
    <div className="bg-brand-light min-h-screen font-sans text-brand-dark">
      {/* 1. HERO HEADER */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our Premium Fleet
          </h1>
          <p className="text-xl text-brand-light/90 max-w-2xl mx-auto font-light">
            We don't aggregate. We own. <br />
            Every vehicle listed here is maintained, cleaned, and managed
            directly by us.
          </p>
        </div>
      </section>

      {/* 2. FLEET LISTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20 relative z-20">
        <div className="grid gap-12">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col lg:flex-row group hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
                  {vehicle.tag}
                </div>
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover h-64 lg:h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-brand-blue">
                      {vehicle.name}
                    </h2>
                    <div className="flex items-center gap-1 text-gray-500 bg-brand-light px-3 py-1 rounded-lg">
                      <Users size={16} />
                      <span className="text-sm font-bold">
                        {vehicle.seats} Seats
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {vehicle.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <Check
                          size={16}
                          className="text-brand-accent flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <a
                    href="https://wa.me/919876543210"
                    className="flex-1 bg-brand-dark text-white text-center py-3 rounded-lg font-bold hover:bg-brand-accent transition-colors"
                  >
                    Book via WhatsApp
                  </a>
                  <Link
                    to="/contact"
                    className="flex-1 border-2 border-brand-blue text-brand-blue text-center py-3 rounded-lg font-bold hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AMENITIES STRIP */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue">
              Standard In All Vehicles
            </h2>
            <p className="text-gray-500 mt-2">
              No matter which vehicle you choose, these standards apply.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AmenityCard
              icon={<Snowflake />}
              title="Powerful AC"
              desc="Climate control for Indian summers"
            />
            <AmenityCard
              icon={<Music />}
              title="Music System"
              desc="Bluetooth & Aux support"
            />
            <AmenityCard
              icon={<MapPin />}
              title="GPS Tracking"
              desc="Live location sharing available"
            />
            <AmenityCard
              icon={<Shield />}
              title="Safety Kit"
              desc="First aid & Fire extinguisher"
            />
          </div>
        </div>
      </section>

      {/* 4. MAINTENANCE NOTE */}
      <section className="bg-brand-dark text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Strict Maintenance Protocol
          </h3>
          <p className="text-gray-400 mb-6">
            Unlike aggregators who can't control vehicle quality, we service our
            engines every 5,000 KMs and deep clean interiors after every single
            trip.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-brand-accent font-bold hover:text-white transition"
            >
              <Phone size={20} /> Schedule a Physical Inspection
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Sub Components ---

const AmenityCard = ({ icon, title, desc }) => (
  <div className="text-center p-4">
    <div className="w-12 h-12 bg-brand-light text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h4 className="font-bold text-brand-dark mb-1">{title}</h4>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);

export default Fleet;
