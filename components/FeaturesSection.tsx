import { Eye, Menu, Image, MessageSquare, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Vizual Tahrirchi",
    description: "O'zgarishlarni real vaqtda ko'rib boring. Qora quti yo'q — nima qilsangiz, o'sha ko'rinadi.",
    highlight: "Real-time preview",
  },
  {
    icon: Menu,
    title: "Moslashuvchan Menyu",
    description: "Menyuni xohlagan paytda o'zgartiring. Ertalab nonushta, tushda tushlik menyusi — avtomatik.",
    highlight: "Vaqt bo'yicha o'zgaradi",
  },
  {
    icon: Image,
    title: "Media Yuklash",
    description: "Instagramga rasm qo'ygandek, botga mahsulot rasmini yuklang. Oddiy va tez.",
    highlight: "Drag & Drop",
  },
  {
    icon: MessageSquare,
    title: "Xabarlar Tarixi",
    description: "Mijozlar bilan barcha suhbatlarni ko'ring va tahlil qiling. Hech narsa yo'qolmaydi.",
    highlight: "Analitika",
  },
  {
    icon: BarChart3,
    title: "Statistika",
    description: "Qancha odam botdan foydalanmoqda? Qaysi mahsulot ko'p qiziqtirmoqda? Barchasini bilib oling.",
    highlight: "Dashboard",
  },
  {
    icon: Shield,
    title: "Xavfsizlik",
    description: "Ma'lumotlaringiz himoyalangan. Faqat siz va sizning jamoangiz kirishingiz mumkin.",
    highlight: "Shifrlangan",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Imkoniyatlar</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
            Boshqaruv to'liq <span className="text-gradient">sizda</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Admin panel orqali botingizni istalgan vaqtda boshqaring. 
            Dasturchi kerak emas, faqat bir necha marta bosish kifoya.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  {feature.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
