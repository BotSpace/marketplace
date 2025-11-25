"use client";

import type React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { OtpAuthDialog } from "@/app/[locale]/template/[id]/sections/otp-dialog";
import { useLinkToParent } from "@/lib/link-to-parrent";

export function Navigation() {
  const session = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { handleClick: goHomePage } = useLinkToParent({
    href: "/",
    onClick: (e) => console.log("Clicked!"),
  });

  useEffect(() => {
    console.log(session);
  }, [session]);

  useEffect(() => {
    // Close mobile menu when clicking outside
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="text-primary">Bot</span>
            <span className="text-accent">Mather</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/template"
              className="text-sm text-foreground/70 transition hover:text-foreground"
            >
              Templates
            </Link>
            <Link
              href="/price"
              className="text-sm text-foreground/70 transition hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm text-foreground/70 transition hover:text-foreground"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden items-center gap-4 md:flex">
            {session.status === "unauthenticated" ? (
              <OtpAuthDialog>
                <button className="rounded-full bg-foreground px-6 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90">
                  Login
                </button>
              </OtpAuthDialog>
            ) : (
              <b onClick={goHomePage} className="cursor-pointer text-sm">
                {session.data?.user.first_name}.{" "}
                {session.data?.user.last_name?.charAt(0)}
              </b>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute inset-0 top-16 z-50 bg-background/95 backdrop-blur md:hidden">
            <div
              style={{
                backdropFilter: "blur(100px)",
              }}
              className="flex flex-col space-y-4 px-4 py-6"
            >
              <Link
                href="/template"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground/70 transition hover:bg-muted hover:text-foreground"
              >
                Templates
              </Link>
              <Link
                href="/price"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground/70 transition hover:bg-muted hover:text-foreground"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground/70 transition hover:bg-muted hover:text-foreground"
              >
                Contact
              </Link>
              <div className="border-t border-border/40 pt-4">
                {session.status === "unauthenticated" ? (
                  <OtpAuthDialog>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background transition-opacity hover:opacity-90"
                    >
                      Login
                    </button>
                  </OtpAuthDialog>
                ) : (
                  <button
                    onClick={() => {
                      goHomePage();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full rounded-lg px-4 py-3 text-left text-base font-semibold text-foreground"
                  >
                    {session.data?.user.first_name}.{" "}
                    {session.data?.user.last_name?.charAt(0)}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
