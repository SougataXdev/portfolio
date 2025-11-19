import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";
import resuRevImage from "@/assets/resu-rev.png";
import hireMeImage from "@/assets/hire-me.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Resume Reviewer",
      client: "Personal Project",
      work: ["React Router v7", "Puter.js", "Tailwind", "TypeScript"],
      description: "Implemented secure authentication, role-based access, and cloud deployment for a resume screening system. Incorporated NLP models for automated resume filtering and job-candidate matching. Developed a responsive and interactive front-end using modern React architecture and state management.",
      link: "https://resu-rev.vercel.app/",
      image: resuRevImage,
    },
    {
      title: "Job Portal (MERN Stack + Aceternity UI)",
      client: "Full Stack Application",
      work: ["Next.js", "Node.js", "Express.js", "MongoDB", "Supabase"],
      description: "Improved a full-stack job listing and application platform with secure authentication and application tracking. Blended resume filtering and dynamic job matching using Clerk for authentication. Developed modern, responsive UI/UX with Aceternity components and server-side rendering.",
      link: "https://hire-xo.vercel.app/",
      image: hireMeImage,
    },
    {
      title: "AutoNova – SaaS for Automated Social Media",
      client: "SaaS Product",
      work: ["Next.js", "Tailwind CSS", "Prisma", "Instagram API"],
      description: "Expanded a SaaS platform to automate Instagram DMs and comments with AI-powered smart responses. Created a scalable architecture with real-time automation. Integrated Instagram API and Relume for design workflows, enhancing reliability and performance.",
      link: "https://autonova.vercel.app/",
      image: resuRevImage,
    },
    {
      title: "Coming Soon",
      client: "Next Project",
      work: ["Upcoming", "Innovation"],
      description: "Exciting new project in development. Stay tuned for more updates!",
      isComingSoon: true,
      image: null,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-16 relative overflow-hidden" id="works">
      {/* Blur effect */}
      <div className="absolute right-1/4 top-1/3 w-[250px] h-[100px] bg-white/12 blur-[80px] rounded-full -rotate-2"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Projects Highlight
          </h2>
          <Button 
            variant="outline"
            className="border-primary text-foreground hover:bg-primary/10 font-rubik font-bold text-xs uppercase tracking-wider px-6 py-5 rounded-full"
          >
            Explore More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
