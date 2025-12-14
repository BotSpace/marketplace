"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Xatolik",
        description: "Iltimos, barcha majburiy maydonlarni to'ldiring.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Xabar yuborildi!",
      description: "Tez orada siz bilan bog'lanamiz.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gradient-hero min-h-screen">
      <Navbar />

      <main className="pb-20 pt-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="animate-slide-up mx-auto mb-16 max-w-3xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Biz bilan <span className="text-gradient">bog'laning</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Savollaringiz bormi? Biz yordam berishga tayyormiz!
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="animate-slide-up space-y-8">
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
                  Aloqa ma'lumotlari
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Bizga qo'ng'iroq qiling, yozing yoki ofisimizga tashrif
                  buyuring. Biz har doim yordam berishga tayyormiz.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass flex items-start gap-4 rounded-xl p-5 transition-shadow hover:shadow-card">
                  <div className="bg-gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Telefon
                    </h3>
                    <p className="text-muted-foreground">+998 90 123 45 67</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Dush-Juma, 9:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="glass flex items-start gap-4 rounded-xl p-5 transition-shadow hover:shadow-card">
                  <div className="bg-gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Email
                    </h3>
                    <p className="text-muted-foreground">info@botspace.uz</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      24 soat ichida javob beramiz
                    </p>
                  </div>
                </div>

                <div className="glass flex items-start gap-4 rounded-xl p-5 transition-shadow hover:shadow-card">
                  <div className="bg-gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Telegram
                    </h3>
                    <p className="text-muted-foreground">@botbuilder_support</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tezkor yordam uchun
                    </p>
                  </div>
                </div>

                <div className="glass flex items-start gap-4 rounded-xl p-5 transition-shadow hover:shadow-card">
                  <div className="bg-gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Manzil
                    </h3>
                    <p className="text-muted-foreground">
                      Toshkent sh., Chilonzor tumani
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      IT Park, 3-qavat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up delay-200">
              <div className="glass-strong rounded-2xl p-8">
                <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
                  Xabar yuborish
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Ismingiz *
                    </label>
                    <Input
                      placeholder="Ismingizni kiriting"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      maxLength={100}
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      maxLength={255}
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Telefon raqam
                    </label>
                    <Input
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      maxLength={20}
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Xabaringiz *
                    </label>
                    <Textarea
                      placeholder="Xabaringizni yozing..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      maxLength={1000}
                      rows={5}
                      className="resize-none bg-background/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Yuborilmoqda..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Yuborish
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
