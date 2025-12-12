import { Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = [
  {
    feature: "Bot yaratish vaqti",
    competitor: "2-4 hafta",
    us: "15-30 daqiqa",
  },
  {
    feature: "Narxi",
    competitor: "2-10 mln so'm",
    us: "Bepul boshlanadi",
  },
  {
    feature: "O'zgartirish kiritish",
    competitor: "Dasturchiga murojaat, 1-3 kun",
    us: "O'zingiz, 1 daqiqada",
    highlight: true,
  },
  {
    feature: "Texnik bilim talab",
    competitor: "Ha, kod bilish kerak",
    us: "Yo'q, faqat drag & drop",
  },
  {
    feature: "Moslashuvchanlik",
    competitor: "Cheklangan",
    us: "100% — cheklov yo'q",
    highlight: true,
  },
  {
    feature: "Qo'llab-quvvatlash",
    competitor: "Pullik yoki yo'q",
    us: "24/7 bepul yordam",
  },
];

const ComparisonSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Qiyoslash</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
            Konstruktor ekanligimiz —{" "}
            <span className="text-gradient">bizning ustunligimiz</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Boshqa yechimlar bilan solishtirganda nimaga ko'proq qulayliklar beramiz
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-3xl border border-border overflow-hidden shadow-card">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-4 md:p-6 bg-muted/50 border-b border-border">
              <div className="text-sm font-medium text-muted-foreground">Xususiyat</div>
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Boshqa yechimlar</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">BotBuilder</span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-4 md:p-6 ${
                    row.highlight ? "bg-primary/5" : ""
                  } hover:bg-muted/30 transition-colors`}
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-foreground">{row.feature}</span>
                    {row.highlight && (
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-medium">
                        Muhim
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <X className="w-4 h-4 text-destructive/60" />
                      <span className="hidden md:inline">{row.competitor}</span>
                      <span className="md:hidden text-xs">{row.competitor}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                      <Check className="w-4 h-4 text-success" />
                      <span className="hidden md:inline">{row.us}</span>
                      <span className="md:hidden text-xs">{row.us}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Hoziroq sinab ko'ring va farqni his qiling
            </p>
            <Button variant="hero" size="xl" className="group">
              <Zap className="w-5 h-5" />
              Bepul boshlash
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
