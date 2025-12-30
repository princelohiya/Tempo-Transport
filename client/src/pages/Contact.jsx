import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Corporate Contract",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Connects to your Express Backend
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "Corporate Contract",
        message: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-brand-light min-h-screen font-sans text-brand-dark pt-20">
      {/* 1. HEADER */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl text-brand-light/90 font-light max-w-2xl mx-auto">
            Get a quote for your corporate transport needs within 15 minutes.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT: Contact Info & Map */}
          <div className="space-y-10">
            {/* Contact Cards Grid */}
            <div className="grid gap-6">
              {/* REQUIREMENT: Clickable Phone Number */}
              <ContactCard
                icon={<Phone className="text-brand-accent" />}
                title="Call Us Directly"
                content="+91 98765 43210"
                sub="Available 24/7 for Clients"
                link="tel:+919876543210"
              />

              {/* REQUIREMENT: WhatsApp Button */}
              <ContactCard
                icon={<MessageCircle className="text-green-500" />}
                title="WhatsApp Us"
                content="Chat for Quick Quote"
                sub="Response < 15 Mins"
                link="https://wa.me/919876543210"
              />

              {/* REQUIREMENT: Email */}
              <ContactCard
                icon={<Mail className="text-brand-accent" />}
                title="Email Us"
                content="info@tempotransport.com"
                sub="For RFPs & Contracts"
                link="mailto:info@tempotransport.com"
              />
            </div>

            {/* REQUIREMENT: Google Map Location */}
            <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">
                Our Location
              </h3>
              <div className="rounded-xl overflow-hidden h-64 w-full bg-gray-200">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.656515668637!2d77.0853528483279!3d28.519728560124935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193766601445%3A0x644265551988e001!2sUdyog%20Vihar%20Phase%20V%2C%20Sector%2019%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT: REQUIREMENT: Simple Inquiry Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold text-brand-blue mb-6">
              Send Inquiry
            </h2>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-green-700">
                  Thanks {formData.name}, we will call you shortly on{" "}
                  {formData.phone}.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-bold text-green-800 underline"
                >
                  Send New Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none transition"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none transition"
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none transition"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option>Corporate Contract (Monthly)</option>
                    <option>Airport Transfer</option>
                    <option>Outstation Tour</option>
                    <option>Event Booking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none resize-none"
                    placeholder="Pickup location, dates, or specific requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-brand-accent text-white font-bold py-4 rounded-lg hover:brightness-110 transition shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Inquiry <Send size={18} />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                    <AlertCircle size={16} />
                    <span>Error sending. Please call us directly.</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Reusable Contact Card Component ---
const ContactCard = ({ icon, title, content, sub, link }) => (
  <a
    href={link}
    className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-brand-blue/40 hover:shadow-md transition duration-300 group"
  >
    <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
      <p className="text-lg font-bold text-brand-blue group-hover:text-brand-accent transition-colors">
        {content}
      </p>
      <p className="text-xs text-gray-400">{sub}</p>
    </div>
  </a>
);

export default Contact;
