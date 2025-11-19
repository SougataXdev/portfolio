import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Blur effects */}
      <div className="absolute -left-20 top-1/4 w-[350px] h-[150px] bg-white/10 blur-[80px] rounded-full -rotate-2"></div>
      <div className="absolute right-1/4 top-1/3 w-[250px] h-[100px] bg-white/12 blur-[80px] rounded-full -rotate-2"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Hi, I'm Sougata<br />Full Stack Developer
          </h2>
          <p className="text-muted-foreground font-rubik text-sm leading-relaxed tracking-wide mb-8">
            I'm a passionate full stack developer from Kolkata, India, specializing in building modern web applications. I craft end-to-end solutions with React, Node.js, and cloud technologies. My portfolio showcases my expertise in frontend design, backend architecture, and creating seamless user experiences.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-rubik font-semibold text-sm px-6 py-5 rounded-2xl"
          >
            Learn More About Me
          </Button>
        </div>
        
        <div className="relative">
          {/* Decorative borders */}
          <div className="absolute -left-6 top-16 w-3 h-10 border border-primary rounded-lg"></div>
          <div className="absolute -right-6 -top-4 w-6 h-2 border border-primary rounded-lg"></div>
          
          {/* Image placeholder */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-muted/20 border border-primary/20">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-rubik text-sm">
              Profile Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
