import type React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 sm:mt-20 border-t border-border/40 bg-muted/30 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold">
              <span className="text-primary">Bot</span>
              <span className="text-accent">Mather</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Telegram bot constructor without code.
            </p>
          </div>
          <div>
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">Product</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link
                  href="/template"
                  className="transition hover:text-foreground"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/price"
                  className="transition hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/price"
                  className="transition hover:text-foreground"
                >
                  Qanday ishlaydi
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">Contact</h4>
            <p className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
              <a
                href="tel:+998507137030"
                className="transition hover:text-foreground break-all"
              >
                +998 50 713 70 30
              </a>
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              <a
                href="mailto:info@botmathher.uz"
                className="transition hover:text-foreground break-all"
              >
                info@botmathher.uz
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-border/40 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2025 BotMather. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
