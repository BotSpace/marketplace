import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-500" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Kod yozish 0% • Vizual konstruktor</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up delay-100">
              Telegramda biznesingiz uchun{" "}
              <span className="text-gradient">istalgan turdagi botni</span>{" "}
              o'zingiz yarating
            </h1>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-slide-up delay-200">
              Tayyor shablonlardan foydalaning yoki vizual konstruktor yordamida 
              o'zingizga mos botni <span className="text-foreground font-semibold">15 daqiqada</span> yig'ing. 
              Dasturchi kerak emas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
              <Button variant="hero" size="xl" className="group">
                Konstruktorni sinab ko'rish
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Play className="w-5 h-5 text-primary" />
                Video ko'rish
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 animate-slide-up delay-400">
              <div>
                <div className="font-display text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Tayyor shablonlar</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="font-display text-3xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Faol foydalanuvchilar</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="font-display text-3xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Mijozlar mamnuniyati</div>
              </div>
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="relative lg:h-[600px] animate-slide-in-right delay-200">
            {/* Laptop Mockup */}
            <div className="relative z-10 animate-float-slow">
              <div className="bg-secondary rounded-2xl p-2 shadow-card">
                {/* Laptop Screen */}
                <div className="bg-card rounded-xl overflow-hidden">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-warning/60" />
                      <div className="w-3 h-3 rounded-full bg-success/60" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-muted rounded-md px-3 py-1 text-xs text-muted-foreground text-center">
                        botbuilder.uz/constructor
                      </div>
                    </div>
                  </div>
                  
                  {/* Constructor Interface */}
                  <div className="p-4 min-h-[280px] bg-background">
                    <div className="grid grid-cols-3 gap-3">
                      {/* Sidebar */}
                      <div className="space-y-2">
                        <div className="text-xs text-muted-foreground mb-2">Bloklar</div>
                        {["Matn", "Rasm", "Tugma", "Menyu"].map((item, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded-lg text-xs ${
                              i === 2 ? "bg-primary/20 border border-primary/50 animate-drag-demo" : "bg-muted"
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      
                      {/* Canvas */}
                      <div className="col-span-2 bg-muted/50 rounded-xl p-3 border border-dashed border-border">
                        <div className="space-y-2">
                          <div className="bg-card rounded-lg p-2 text-xs border border-border">
                            Salom! Botimizga xush kelibsiz 👋
                          </div>
                          <div className="flex gap-2">
                            <div className="bg-primary/20 border border-primary/40 rounded-lg px-3 py-1.5 text-xs">
                              Mahsulotlar
                            </div>
                            <div className="bg-primary/20 border border-primary/40 rounded-lg px-3 py-1.5 text-xs">
                              Aksiyalar
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="h-3 bg-secondary rounded-b-xl mx-8" />
              <div className="h-1 bg-muted rounded-full mx-16" />
            </div>

            {/* Phone Mockup */}
            <div className="absolute -bottom-4 -right-4 md:right-8 z-20 animate-float">
              <div className="w-48 bg-secondary rounded-[2rem] p-2 shadow-card shadow-glow">
                {/* Phone Screen */}
                <div className="bg-card rounded-[1.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-4 py-2 text-[10px] text-muted-foreground">
                    <span>12:30</span>
                    <div className="w-16 h-4 bg-muted rounded-full" />
                    <span>100%</span>
                  </div>
                  
                  {/* Chat Interface */}
                  <div className="p-3 min-h-[200px] space-y-2">
                    <div className="flex items-center gap-2 pb-2 border-b border-border">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                        <span className="text-xs">🤖</span>
                      </div>
                      <div>
                        <div className="text-xs font-semibold">Sizning Botingiz</div>
                        <div className="text-[10px] text-success">online</div>
                      </div>
                    </div>
                    
                    <div className="bg-muted rounded-xl rounded-tl-sm p-2 text-[11px] max-w-[80%]">
                      Salom! Botimizga xush kelibsiz 👋
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      <button className="bg-primary/20 text-primary text-[10px] px-2 py-1 rounded-lg">
                        Mahsulotlar
                      </button>
                      <button className="bg-primary/20 text-primary text-[10px] px-2 py-1 rounded-lg">
                        Aksiyalar ✨
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Line */}
            <div className="absolute bottom-20 right-24 md:right-32 w-24 h-px bg-gradient-to-r from-primary/50 to-transparent animate-shimmer" />
            
            {/* Floating Label */}
            <div className="absolute bottom-32 right-0 md:right-4 glass px-3 py-2 rounded-lg text-xs animate-fade-in delay-500">
              <span className="text-primary">→</span> Noutbukda chizdingiz, Telefonda ishladi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
