"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useLinkToParent } from "@/lib/link-to-parrent";
import { OtpAuthDialog } from "./otp-dialog";
import { useTranslations } from "next-intl";
import { LanguageSection } from "./lang-switcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");

  const session = useSession();

  const { handleClick: goHomePage } = useLinkToParent({
    href: "/",
    onClick: (e) => console.log("Clicked!"),
  });

  return (
    <nav className="glass-strong fixed left-0 right-0 top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <img src={"/logo.png"} alt="Logo" width={40} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("home")}
            </Link>
            <Link
              href="/templates"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("templates")}
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("pricing")}
            </Link>
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <LanguageSection />
            {session.status === "unauthenticated" ? (
              <OtpAuthDialog>
                <Button variant="hero" size="default">
                  {t("signIn")}
                </Button>
              </OtpAuthDialog>
            ) : (
              session.status === "authenticated" && (
                <Avatar
                  onClick={goHomePage}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center"
                >
                  <AvatarImage
                    className="h-8 w-8 rounded-full"
                    src={
                      session.data?.user.avatar ||
                      "https://github.com/shadcn.png"
                    }
                    alt={`${session.data?.user.first_name} ${session.data?.user.last_name}`}
                  />
                  <AvatarFallback>
                    {session.data?.user.first_name?.charAt(0)}
                    {session.data?.user.last_name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            {session.status === "unauthenticated" ? (
              <OtpAuthDialog>
                <Button variant="hero" size="default">
                  {t("signIn")}
                </Button>
              </OtpAuthDialog>
            ) : (
              session.status === "authenticated" && (
                <Avatar
                  onClick={goHomePage}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center"
                >
                  <AvatarImage
                    className="h-8 w-8 rounded-full"
                    src={
                      session.data?.user.avatar ||
                      "https://github.com/shadcn.png"
                    }
                    alt={`${session.data?.user.first_name} ${session.data?.user.last_name}`}
                  />
                  <AvatarFallback>
                    {session.data?.user.first_name?.charAt(0)}
                    {session.data?.user.last_name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              )
            )}

            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="animate-fade-in border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("home")}
              </Link>
              <Link
                href="/templates"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("templates")}
              </Link>
              <Link
                href="/pricing"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("pricing")}
              </Link>
              <LanguageSection />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
