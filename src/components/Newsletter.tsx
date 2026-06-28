import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, CheckSquare, Sparkles, Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="train-track-bg py-16 text-white relative overflow-hidden bg-[#6B1A1A]">
      {/* Absolute top/bottom boundaries in Gold */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9922B] to-transparent opacity-80" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9922B] to-transparent opacity-80" />

      <div className="max-w-[1100px] mx-auto px-6 relative">
        {!submitted ? (
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Heading & Vintage Steam Train SVG Icon */}
            <div className="lg:col-span-6 space-y-4 text-left relative pl-0 md:pl-28">
              {/* Train Image absolute positioned on the left side */}
              <div className="absolute -left-60 top-1/2 -translate-y-1/2 opacity-50 hidden md:block w-90 h-90">
                <img
                  src="/assets/train_logofree-removebg-preview.png"
                  alt="Train Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-3.5xl leading-tight text-white uppercase tracking-wider">
                GET NEXT WEEK'S MENU DELIVERED TO YOUR INBOX
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#FAF6EE]/80 tracking-wide">
                New menus every Thursday evening!
              </p>
            </div>

            {/* Right Column: Input & Actions */}
            <div className="lg:col-span-6 space-y-4">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="relative grow">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-4 pr-4 py-3.5 rounded-sm bg-white text-[#2C1810] placeholder-[#5C3D2E]/60 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#C9922B]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#C9922B] hover:bg-[#D4A017] text-[#2C1810] font-sans font-bold text-xs uppercase tracking-[1.5px] px-8 py-3.5 rounded-sm transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span>GET MENU</span>
                </button>
              </form>

              {/* Checked options below */}
              <div className="flex flex-wrap gap-4 pt-1 justify-start">
                {[
                  "Lunch Club Updates",
                  "Corporate Offers",
                  "New Menu Alerts",
                ].map((option, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2 text-xs text-white/90 select-none font-sans font-semibold cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      defaultChecked
                      className="accent-[#C9922B] w-4 h-4 rounded border-[#C9922B] bg-[#C9922B]/20 text-[#C9922B]"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-6 space-y-4 max-w-lg mx-auto"
          >
            <div className="w-12 h-12 bg-[#C9922B]/10 rounded-full flex items-center justify-center mx-auto text-[#C9922B]">
              <Sparkles
                className="w-6 h-6 animate-spin"
                style={{ animationDuration: "6s" }}
              />
            </div>
            <h4 className="font-display font-black text-2xl text-[#C9922B] uppercase">
              WELCOME ABBOARD THE EXPRESS MAILING LIST!
            </h4>
            <p className="text-xs text-white/80">
              Your ticket is punched! We have successfully registered{" "}
              <strong className="text-white font-semibold font-mono">
                {email}
              </strong>{" "}
              to our VIP list. Expect a piping hot menu dispatch in your inbox
              next Thursday!
            </p>
            <div className="inline-block p-2 bg-[#FAF6EE]/5 rounded text-[10px] font-mono text-[#C9922B] tracking-widest uppercase border border-[#C9922B]/20">
              BOARDING CODE: TRJ-NEWS-{Math.floor(1000 + Math.random() * 9000)}
            </div>
            <div>
              <button
                onClick={() => {
                  setEmail("");
                  setSubmitted(false);
                }}
                className="text-xs text-[#C9922B] underline font-semibold uppercase hover:text-white transition-colors"
              >
                Register another email
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
