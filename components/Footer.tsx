import { Send, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image src={Logo} alt="Logo" width={40} height={40} />
            </Link>
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              Telegram botlarini kod yozmasdan, vizual konstruktor yordamida
              yarating. Biznesingizni avtomatlashtiring.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://t.me/botmother_community/1"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted transition-colors hover:bg-primary/20"
              >
                <Send className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <a
                href="https://www.instagram.com/botspaceuz/"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted transition-colors hover:bg-primary/20"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://www.youtube.com/@botspaceuz"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted transition-colors hover:bg-primary/20"
              >
                <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Sahifalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#features"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Imkoniyatlar
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Shablonlar
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Narxlar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Yordam</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://t.me/botmother_community/6"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Qo'llanma
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/botmother_community/2"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/muhiddin_kabraliev_office"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Aloqa
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Maxfiylik siyosati
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 BotSpace. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-sm text-muted-foreground">
            ICO soft tomonidan ishlab chiqarilgan 🇺🇿
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
