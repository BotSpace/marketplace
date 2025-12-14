import { Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

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
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Qiyoslash
          </span>
          <h2 className="mb-6 mt-4 font-display text-3xl font-bold md:text-4xl">
            Konstruktor ekanligimiz —{" "}
            <span className="text-gradient">bizning ustunligimiz</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Boshqa yechimlar bilan solishtirganda nimaga ko'proq qulayliklar
            beramiz
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-card overflow-hidden rounded-3xl border border-border shadow-card">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 border-b border-border bg-muted/50 p-4 md:p-6">
              <div className="text-sm font-medium text-muted-foreground">
                Xususiyat
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">
                  Boshqa yechimlar
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    BotSpace
                  </span>
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
                  } transition-colors hover:bg-muted/30`}
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-foreground">
                      {row.feature}
                    </span>
                    {row.highlight && (
                      <span className="ml-2 rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                        Muhim
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 text-destructive/60" />
                      <span className="hidden md:inline">{row.competitor}</span>
                      <span className="text-xs md:hidden">
                        {row.competitor}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Check className="h-4 w-4 text-success" />
                      <span className="hidden md:inline">{row.us}</span>
                      <span className="text-xs md:hidden">{row.us}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="mb-6 text-muted-foreground">
              Hoziroq sinab ko'ring va farqni his qiling
            </p>
            <Button asChild variant="hero" size="xl" className="group">
              <Link href={"/templates"}>
                <Zap className="h-5 w-5" />
                Bepul boshlash
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
