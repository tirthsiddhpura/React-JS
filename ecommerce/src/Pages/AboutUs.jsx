import React from "react";
import { Sparkles, Eye, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="bg-[#F8F5F2] text-[#1A1A1A] py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Floating Headline Section */}
        <div className="relative mb-32">
          <span className="text-[#D4C7C2] font-black text-[12vw] opacity-20 absolute -top-20 -left-10 leading-none select-none">
            EST. 2026
          </span>
          <div className="relative z-10 pl-4 md:pl-20 border-l-4 border-[#543610]">
            <h2 className="text-[#543610] font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              The Nexus Philosophy
            </h2>
            <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter">
              Where{" "}
              <span className="italic font-light text-[#8C7A73]">Elegance</span>{" "}
              <br />
              Meets <span className="text-[#543610]">Innovation.</span>
            </h1>
          </div>
        </div>

        {/* Dynamic Asymmetric Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-40">
          {/* Main Visual with Glass Card */}
          <div className="md:col-span-6 relative">
            <div className="aspect-[4/5] bg-[#D4C7C2] rounded-[40px] overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
                alt="Luxury Lifestyle"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#543610]/40 to-transparent"></div>
            </div>

            {/* Floating Glass Card */}
            <div className="absolute -bottom-10 -right-10 md:right-[-5%] bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 max-w-sm hidden md:block">
              <Sparkles className="text-[#543610] mb-4" size={32} />
              <p className="text-xl font-medium leading-snug">
                "We don't sell products. We curate symbols of progress."
              </p>
            </div>
          </div>

          {/* Long Editorial Content */}
          <div className="md:col-span-6 space-y-10 md:pl-12">
            <div className="space-y-6">
              <p className="text-2xl text-slate-700 leading-relaxed font-light italic">
                In a world of fast-fashion and fleeting trends, Nexus stands as
                a sanctuary for the discerning.
              </p>
              <div className="h-px w-24 bg-[#543610]"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our story didn't start in a boardroom; it started with a single
                question: Why should quality be a luxury? We spent years
                traveling across continents, meeting with master artisans who
                have spent decades perfecting a single stitch or a specific
                texture.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Every item in our collection is a testament to that journey. We
                analyze everything from the thread count of our textiles to the
                carbon footprint of our delivery routes. When you hold a Nexus
                product, you're holding a piece of history refined for the
                modern age.
              </p>
            </div>

            {/* Micro-Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-4xl font-black text-[#543610]">98%</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">
                  Sustainably Sourced
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-[#543610]">24h</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">
                  Concierge Support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Pillars - Clean & Professional */}
        <div className="grid md:grid-cols-3 gap-1px bg-[#D4C7C2] rounded-[30px] overflow-hidden border border-[#D4C7C2]">
          {[
            {
              icon: <Eye size={24} />,
              title: "Curation",
              desc: "Our global scouts hand-pick every item. If it isn't revolutionary, it isn't here.",
            },
            {
              icon: <Zap size={24} />,
              title: "Velocity",
              desc: "Proprietary logistics ensure your items reach you with carbon-neutral speed.",
            },
            {
              icon: <ArrowRight size={24} />,
              title: "Legacy",
              desc: "Our products are built to last generations, not seasons.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-12 hover:bg-[#543610] group transition-all duration-500 cursor-default"
            >
              <div className="text-[#543610] group-hover:text-white mb-6 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center">
          <Link to="/shop">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#543610] text-white font-semibold rounded-full hover:bg-[#8C7A73] transition-all duration-300">
              Explore the Collection
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
