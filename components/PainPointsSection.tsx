import { Clock, ShieldAlert, Users, Wallet } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Vaqt yetishmaydi",
    description: "Dasturchi topish, loyiha tushuntirish, kutish... Oy emas, haftalab ketadi.",
  },
  {
    icon: Wallet,
    title: "Qimmat turadi",
    description: "Oddiy bot uchun ham millionlab so'm to'lash kerak bo'ladi.",
  },
  {
    icon: ShieldAlert,
    title: "Nazorat yo'q",
    description: "Botni o'zgartirish kerak bo'lsa, yana dasturchiga murojaat qilasiz.",
  },
  {
    icon: Users,
    title: "Murakkablik",
    description: "Texnik bilim yo'q, kod tushunarsiz — shunchaki qo'rqinchli.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Muammolar</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
            Tanish muammolar, to'g'rimi?
          </h2>
          <p className="text-muted-foreground text-lg">
            Telegram bot yaratishni xohlaysiz, lekin quyidagi to'siqlar oldingizda turadi
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-destructive/50 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <point.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <span className="text-muted-foreground">Endi bu muammolar hal bo'ladi</span>
            <span className="text-2xl">👇</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
