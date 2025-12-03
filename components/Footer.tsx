import type React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border/40 bg-muted/30 py-8 sm:mt-20 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 grid grid-cols-2 gap-6 sm:mb-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-3 text-base font-bold sm:mb-4 sm:text-lg">
              <span className="text-primary">Bot</span>
              <span className="text-accent">Mother</span>
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Telegram bot constructor without code.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground sm:mb-4 sm:text-base">
              Product
            </h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground sm:space-y-2 sm:text-sm">
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
            <h4 className="mb-3 text-sm font-semibold text-foreground sm:mb-4 sm:text-base">
              Company
            </h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground sm:space-y-2 sm:text-sm">
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
            <h4 className="mb-3 text-sm font-semibold text-foreground sm:mb-4 sm:text-base">
              Contact
            </h4>
            <p className="mb-1.5 text-xs text-muted-foreground sm:mb-2 sm:text-sm">
              <a
                href="tel:+998507137030"
                className="break-all transition hover:text-foreground"
              >
                +998 50 713 70 30
              </a>
            </p>
            <p className="text-xs text-muted-foreground sm:text-sm">
              <a
                href="mailto:info@botmother.uz"
                className="break-all transition hover:text-foreground"
              >
                info@botmother.uz
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-border/40 pt-6 text-center text-xs text-muted-foreground sm:pt-8 sm:text-sm">
          <p>&copy; 2025 BotMother. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
