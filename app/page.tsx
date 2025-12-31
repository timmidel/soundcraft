"use client";
import React, { useState } from "react";
import { Music, Sliders, User, Sparkles, Menu, X } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "./components/motion";

const Home = () => {
  const N8N_URL =
    process.env.NEXT_PUBLIC_N8N_URL ||
    "https://meowy.app.n8n.cloud/webhook/920eece5-ed91-45e4-b16c-a8603d4ac80e";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setSubmitStatus("sending");

    try {
      const response = await fetch(N8N_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(""), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    }
  };

  const services = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Production",
      description:
        "Full-track production, arrangement, and sound design tailored to your style.",
    },
    {
      icon: <Sliders className="w-8 h-8" />,
      title: "Mixing & Mastering",
      description:
        "Industry-standard mixing and mastering for streaming and commercial release.",
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Artist Development",
      description:
        "Guidance on branding, sound direction, and release strategy for emerging artists.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Custom Beats & Scores",
      description:
        "Original compositions for artists, content creators, and media projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white ">
      {/* Navigation */}
      <Image
        src="/bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover opacity-10 pointer-events-none select-none "
      />
      <nav className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              Sound<span className="text-purple-500">Craft</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-purple-400 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-purple-400 transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-purple-400 transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left hover:text-purple-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left hover:text-purple-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-purple-400 transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <MotionDiv
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Sound<span className="text-purple-500">Craft</span> Studios
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          </div>

          <p className="text-2xl md:text-3xl font-light mb-4 text-zinc-100">
            Professional music production and artist support for creators ready
            to level up their sound.
          </p>

          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            We help independent musicians turn ideas into polished,
            release-ready tracks.
          </p>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg shadow-purple-500/20 cursor-pointer"
          >
            Get in Touch
          </button>

          {/* Decorative waveform */}
          <div className="mt-16 opacity-20">
            <svg viewBox="0 0 1200 100" className="w-full h-24">
              <path
                d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </MotionDiv>

      {/* Services Section */}
      <MotionDiv id="services" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="text-purple-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionDiv>

      {/* Contact Section */}
      <MotionDiv id="contact" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start the Conversation
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg">
              Have a project in mind? Tell us about it and we&apos;ll get back
              to you within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-zinc-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-zinc-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitStatus === "sending"}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg shadow-purple-500/20 cursor-pointer"
            >
              {submitStatus === "sending"
                ? "Sending..."
                : "Let's Work Together"}
            </button>

            {submitStatus === "success" && (
              <div className="text-center text-green-400 font-medium">
                Message sent successfully! We&apos;ll be in touch soon.
              </div>
            )}
          </div>
        </div>
      </MotionDiv>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-zinc-500">
          <p>© 2025 SoundCraft Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
