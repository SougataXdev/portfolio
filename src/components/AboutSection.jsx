import { Button } from "@/components/ui/button";
import devImage from "@/assets/dev-image.jpeg";
import { motion } from 'framer-motion';

const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Blur effects */}
      <div className="absolute -left-20 top-1/4 w-[350px] h-[150px] bg-white/10 blur-[80px] rounded-full -rotate-2"></div>
      <div className="absolute right-1/4 top-1/3 w-[250px] h-[100px] bg-white/12 blur-[80px] rounded-full -rotate-2"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
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
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative borders */}
          <div className="absolute -left-6 top-16 w-3 h-10 border border-primary rounded-lg z-10"></div>
          <div className="absolute -right-6 -top-4 w-6 h-2 border border-primary rounded-lg z-10"></div>
          
          {/* Profile Image */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-muted/20 border border-primary/20">
            <img 
              src={devImage} 
              alt="Sougata - Full Stack Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
