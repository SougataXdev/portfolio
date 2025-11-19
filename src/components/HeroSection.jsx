import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Blur effect */}
      <div className="absolute top-20 left-1/3 w-[400px] h-[150px] bg-white/10 blur-[80px] rounded-full -rotate-2"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <p className="text-primary font-rubik font-semibold text-sm md:text-base uppercase tracking-wider mb-6">
          Welcome to the SougataXdev's Space
        </p>
        <h1 className="font-syne text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Crafting Modern Web<br />Experiences with Code
        </h1>
        <p className="text-muted-foreground font-rubik text-base md:text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          Full Stack Developer specializing in React, Node.js, and cloud technologies. I transform ideas into scalable, high-performance web applications.
        </p>
        <a
          href="#works"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-rubik font-bold uppercase tracking-wider px-8 py-6 rounded-full text-sm shadow-lg transition-all duration-200 hover:scale-105"
        >
          View My Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
