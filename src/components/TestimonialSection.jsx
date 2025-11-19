const TestimonialSection = () => {
  return (
    <section className="py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Blur effect */}
      <div className="absolute -left-20 bottom-20 w-[350px] h-[150px] bg-white/10 blur-[80px] rounded-full -rotate-2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-start gap-8">
          <div className="flex-1">
            <h3 className="font-syne text-2xl font-bold text-foreground mb-4">
              Testimonial
            </h3>
            <p className="text-muted-foreground font-rubik text-sm leading-relaxed mb-4">
              "Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn't need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can't thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!"
            </p>
            <p className="font-syne text-sm font-bold text-foreground">-Martin lee</p>
          </div>
          
          {/* Quote icon */}
          <div className="text-8xl font-syne font-extrabold text-primary/20 leading-none rotate-180">
            "
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
