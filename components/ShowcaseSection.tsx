import { Button } from "@/components/ui/button";
import { Edit3, ShoppingCart, Calendar, Pizza, Briefcase, Heart } from "lucide-react";

const templates = [
  {
    icon: ShoppingCart,
    title: "E-commerce Bot",
    description: "Mahsulotlar katalogi, savat, buyurtma berish",
    color: "bg-telegram/10 text-telegram",
    popular: true,
  },
  {
    icon: Pizza,
    title: "Restoran Bot",
    description: "Menyu, buyurtma, yetkazib berish",
    color: "bg-warning/10 text-warning",
    popular: false,
  },
  {
    icon: Calendar,
    title: "Booking Bot",
    description: "Uchrashuv belgilash, eslatmalar",
    color: "bg-success/10 text-success",
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Biznes Bot",
    description: "FAQ, aloqa, xizmatlar ro'yxati",
    color: "bg-accent/10 text-accent",
    popular: true,
  },
  {
    icon: Heart,
    title: "Support Bot",
    description: "Mijozlar bilan muloqot, yordam",
    color: "bg-destructive/10 text-destructive",
    popular: false,
  },
];

const ShowcaseSection = () => {
  return (
    <section id="templates" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Shablonlar</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
            Noldan boshlashga erinasizmi?{" "}
            <span className="text-gradient">Tayyorini oling</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bizda 50+ tayyor shablonlar bor. Ularni 100% o'zingizga moslab o'zgartirishingiz mumkin. 
            Ranglar, matnlar, rasmlar — hammasi o'zgaradi.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              {/* Popular Badge */}
              {template.popular && (
                <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold">
                  Mashhur
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${template.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <template.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold mb-2">{template.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{template.description}</p>

              {/* Edit Button */}
              <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-primary">
                <Edit3 className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                Shablonni tahrirlash
              </Button>
            </div>
          ))}

          {/* More Templates Card */}
          <div className="p-6 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 transition-colors flex flex-col items-center justify-center text-center min-h-[200px]">
            <div className="font-display text-4xl font-bold text-gradient mb-2">45+</div>
            <div className="text-muted-foreground text-sm mb-4">Boshqa shablonlar</div>
            <Button variant="outline" size="sm">
              Hammasini ko'rish
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="group">
            Shablonlarni ko'rish
            <Edit3 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
