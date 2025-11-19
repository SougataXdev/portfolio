import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Blur effect */}
      <div className="absolute top-20 left-1/3 w-[400px] h-[150px] bg-white/10 blur-[80px] rounded-full -rotate-2"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <h1 className="font-syne text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-12 leading-tight">
          Full Stack Developer<br />Building Digital Solutions
        </h1>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-rubik font-bold uppercase tracking-wider px-8 py-6 rounded-full text-sm shadow-lg"
        >
          View My Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
