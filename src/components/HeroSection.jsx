import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Blur effect */}
      <div className="absolute top-20 left-1/3 w-[400px] h-[150px] bg-white/10 blur-[80px] rounded-full -rotate-2"></div>
      
      <motion.div 
        className="text-center max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="text-primary font-rubik font-semibold text-sm md:text-base uppercase tracking-wider mb-6"
          variants={itemVariants}
        >
          Welcome to the SougataXdev's Space
        </motion.p>
        <motion.h1 
          className="font-syne text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          variants={itemVariants}
        >
          Crafting Modern Web<br />Experiences with Code
        </motion.h1>
        <motion.p 
          className="text-muted-foreground font-rubik text-base md:text-lg mb-12 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Full Stack Developer specializing in React, Node.js, and cloud technologies. I transform ideas into scalable, high-performance web applications.
        </motion.p>
        <motion.a
          href="#works"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-rubik font-bold uppercase tracking-wider px-8 py-6 rounded-full text-sm shadow-lg transition-all duration-200 hover:scale-105"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
