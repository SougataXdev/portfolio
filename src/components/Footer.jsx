import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#131313] py-16 px-6 lg:px-16 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Contact section */}
        <div className="text-center mb-12">
          <p className="text-primary font-syne font-bold text-sm mb-4">
            Get in Touch With Me
          </p>
          <a 
            href="mailto:sougatadev@support.com" 
            className="text-foreground font-syne font-bold text-3xl md:text-4xl underline hover:text-primary transition-colors"
          >
            sougata.dev@gmail.com
          </a>
        </div>
        
        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-foreground font-syne font-bold text-xl tracking-wider">SOU</span>
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 rounded-full border-2 border-white/15"></div>
                <div className="absolute inset-0 rounded-full border border-white/60"></div>
              </div>
              <span className="text-foreground font-syne font-bold text-xl tracking-wider">GATA</span>
            </div>
          </div>
          
          {/* Address */}
          <div className="font-syne font-bold text-foreground space-y-1">
            <p>Karimpur, Natna Block,</p>
            <p>Nadia, India</p>
          </div>
          
          {/* Phone and social */}
          <div className="space-y-2">
            <p className="font-syne font-bold text-foreground">+91 8145999980</p>
            <p className="font-syne font-bold text-foreground">+91 9822334455</p>
            <div className="flex gap-3">
              <Facebook className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-muted-foreground/30 mb-6"></div>
        
        {/* Copyright */}
        <p className="text-center font-syne font-bold text-xs text-foreground">
          © 2025. Sougata DevWorks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
