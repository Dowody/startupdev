import React from "react";
import { 
  FadeIn
} from "../../../../components/ui/animated-elements";

export const CopywritingHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#00020F] via-[#000818] to-[#001122] overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 h-20"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 text-center pt-12 pb-16">
        
        <FadeIn delay={0.1} direction="up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-12">
            <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm font-medium">✍️ Copywriting • Content Strategy • Conversion Copy</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight mb-7">
            Words That Convert
            <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent mt-1">
              Stories That Sell
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Compelling copy that connects with your audience and drives action. From website content to email campaigns, we craft words that convert visitors into customers.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              'Website Copy', 'Email Campaigns', 'Sales Pages', 
              'Blog Content', 'Social Media', 'Ad Copy',
              'Product Descriptions', 'Case Studies'
            ].map((service, index) => (
              <div key={index} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm text-white/80 text-sm font-medium hover:bg-white/10 transition-all duration-300">
                {service}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.5} direction="up">
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
            <button className="group px-9 py-3.5 bg-[#194EFF] text-white font-semibold text-base rounded-lg hover:bg-[#1E40AF] transition-all duration-300 shadow-lg shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 transform hover:scale-105">
              <span className="flex items-center gap-2.5">
                Start Copy Project
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button className="group px-9 py-3.5 bg-white/10 text-white font-semibold text-base rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center gap-2.5">
                Content Samples
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
            <span>85%+ Conversion Increase</span>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
            <span>200+ Projects Written</span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}; 