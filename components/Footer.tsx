import { Bot, Send, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-button">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                BotBuilder
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-sm mb-4">
              Telegram botlarini kod yozmasdan, vizual konstruktor yordamida yarating. 
              Biznesingizni avtomatlashtiring.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Send className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Sahifalar</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Imkoniyatlar</a></li>
              <li><a href="#templates" className="text-muted-foreground hover:text-foreground transition-colors">Shablonlar</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Narxlar</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Yordam</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Qo'llanma</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Aloqa</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Maxfiylik siyosati</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 BotBuilder. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-sm text-muted-foreground">
            O'zbekistonda ishlab chiqilgan 🇺🇿
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
