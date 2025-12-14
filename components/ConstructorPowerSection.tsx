"use client";

import { MousePointer2, Puzzle, RefreshCw } from "lucide-react";
import { useTranslations } from "next-intl";

const ConstructorPowerSection = () => {
  const t = useTranslations("ConstructorPowerSection");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">{t("badge")}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {t("title")}{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("description")}
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-3xl border border-border p-4 md:p-8 shadow-card">
            {/* Demo Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                <RefreshCw className="w-3 h-3" />
                Real-time sinxronizatsiya
              </div>
            </div>

            {/* Demo Content */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Constructor Side */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-muted-foreground mb-4">Konstruktor paneli</div>
                
                {/* Drag Source */}
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Bloklar kutubxonasi:</div>
                  <div className="flex flex-wrap gap-2">
                    {["Matn bloki", "Rasm", "Tugma", "Menyu"].map((item, i) => (
                      <div key={i} className="px-3 py-2 rounded-lg bg-muted text-xs hover:bg-muted/80 cursor-grab transition-colors">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Canvas */}
                <div className="relative bg-background rounded-xl p-4 border-2 border-dashed border-border min-h-[200px]">
                  <div className="text-xs text-muted-foreground mb-3">Bot tuzilishi:</div>
                  
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-card border border-border text-sm">
                      Salom! Botimizga xush kelibsiz 👋
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="p-2 rounded-lg bg-muted text-xs">
                        Biz haqimizda
                      </div>
                      
                      {/* Animated dragging element */}
                      <div className="relative">
                        <div className="p-2 rounded-lg bg-primary/20 border-2 border-primary text-xs text-primary animate-drag-demo">
                          <span className="flex items-center gap-1">
                            <Puzzle className="w-3 h-3" />
                            Aksiyalar
                          </span>
                        </div>
                        
                        {/* Cursor indicator */}
                        <MousePointer2 className="absolute -top-2 -right-2 w-4 h-4 text-primary animate-drag-demo" />
                      </div>
                    </div>
                  </div>

                  {/* Drop zone indicator */}
                  <div className="absolute bottom-4 right-4 text-[10px] text-muted-foreground flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    Sudrab tashlang
                  </div>
                </div>
              </div>

              {/* Phone Preview Side */}
              <div className="flex justify-center items-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-56 bg-secondary rounded-[2.5rem] p-3 shadow-card">
                    <div className="bg-card rounded-[2rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between px-5 py-2 text-[10px] text-muted-foreground">
                        <span>12:30</span>
                        <div className="w-20 h-5 bg-muted rounded-full" />
                        <span>100%</span>
                      </div>
                      
                      {/* Chat */}
                      <div className="p-4 min-h-[280px]">
                        <div className="flex items-center gap-3 pb-3 border-b border-border mb-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-lg">
                            🤖
                          </div>
                          <div>
                            <div className="text-sm font-semibold">Do'kon Bot</div>
                            <div className="text-[10px] text-success flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-success" />
                              online
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-muted rounded-2xl rounded-tl-sm p-3 text-xs max-w-[85%]">
                            Salom! Botimizga xush kelibsiz 👋
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <button className="bg-telegram/20 text-telegram text-[11px] px-3 py-1.5 rounded-xl hover:bg-telegram/30 transition-colors">
                              Biz haqimizda
                            </button>
                            <button className="bg-telegram text-primary-foreground text-[11px] px-3 py-1.5 rounded-xl shadow-button animate-pulse">
                              Aksiyalar ✨
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live indicator */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    Jonli ko'rinish
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Badge */}
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MousePointer2 className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">Drag & Drop</span> texnologiyasi
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="text-sm text-muted-foreground">
                Kod yozmasdan, sudrab tashlash bilan bot yarating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructorPowerSection;
