"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
  ArrowRight,
} from "lucide-react";

import SectionLayout from "@/components/client/Layout/SectionLayout";
import Container from "@/components/client/Layout/Container";
import CustomButton from "@/components/ui/custom/CustomButton";

import {
  createWhatsAppLink,
  createCallLink,
} from "@/lib";

export default function ContactPage() {
  return (
    <div className="bg-[#fffcf5] overflow-hidden">
      {/* HERO */}
      <section
        className="relative pt-15 pb-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('/images/white-patternchakra.png')",
          backgroundRepeat: "repeat",
         
        }}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <MessageCircle
                size={14}
                className="text-primary"
              />

              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                Contact Vastu Expert
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Get Expert
              <span className="text-primary italic font-serif">
                {" "}Vastu Consultation
              </span>
            </h1>

            <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
              Consult Acharya Shivkumar Sharma for Home,
              Office, Plot, Factory & Commercial Vastu
              guidance with practical remedies and online
              floor plan analysis.
            </p>
          </div>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <SectionLayout
        title="Connect With Us"
        subtitle="Talk directly with our Vastu expert for consultation, guidance or online analysis."
        variant="center"
        bgColor="bg-transparent"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT INFO */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8">
              <h3 className="text-2xl font-black text-slate-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-7">
                {/* Phone */}
                <a
                  href={createCallLink()}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Phone className="text-primary group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-[0.15em] font-bold mb-1">
                      Call Us
                    </p>

                    <h4 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">
                      +91 98118 93069
                    </h4>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@shivkumarsharma.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                    <Mail className="text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-[0.15em] font-bold mb-1">
                      Email Address
                    </p>

                    <h4 className="text-base md:text-lg font-bold text-slate-900 break-all">
                      contact@shivkumarsharma.com
                    </h4>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-[0.15em] font-bold mb-1">
                      Office Address
                    </p>

                    <p className="text-slate-700 leading-relaxed">
                      Ghaziabad, Uttar Pradesh,
                      India
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Clock3 className="text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-[0.15em] font-bold mb-1">
                      Consultation Timing
                    </p>

                    <p className="text-slate-700 leading-relaxed">
                      Monday - Sunday
                      <br />
                      8:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-[2rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4 leading-tight">
                  Need Quick
                  <br />
                  Vastu Guidance?
                </h3>

                <p className="text-white/80 leading-relaxed mb-8">
                  Connect instantly on WhatsApp for fast
                  consultation and online floor plan analysis.
                </p>

                <Link
                  href={createWhatsAppLink(
                    "Vastu Consultation"
                  )}
                  target="_blank"
                >
                  <CustomButton
                    variant="secondary"
                    className="rounded-full w-full pointer-events-none"
                    icon={ArrowRight}
                    iconSide="right"
                  >
                    Chat on WhatsApp
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 md:p-10">
              <div className="mb-8">
                <h3 className="text-3xl font-black text-slate-900 mb-3">
                  Book Consultation
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  Fill out the form and our team will
                  connect with you shortly.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter your number"
                      className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Property Type
                  </label>

                  <select className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-primary transition-colors bg-white">
                    <option>Home / Residence</option>
                    <option>Office / Workplace</option>
                    <option>Plot / Land</option>
                    <option>Factory / Industry</option>
                    <option>Shop / Showroom</option>
                    <option>Hospital / Clinic</option>
                    <option>School / Institution</option>
                    <option>Online Analysis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Your Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Describe your requirement..."
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <CustomButton
                  variant="primary"
                  className="w-full h-14 rounded-2xl justify-center"
                  icon={ArrowRight}
                  iconSide="right"
                >
                  Submit Consultation Request
                </CustomButton>
              </form>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
