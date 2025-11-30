"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { OtpAuthDialog } from "@/app/[locale]/templates/[id]/sections/otp-dialog";
import { useLinkToParent } from "@/lib/link-to-parrent";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type Props = {};

export function Navigation({}: Props) {
  const session = useSession();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { handleClick: goHomePage } = useLinkToParent({
    href: "/",
    onClick: (e) => console.log("Clicked!"),
  });

  const [currentPathname, setCurrentPathname] = useState<string>("");

  // Only set pathname after mount to avoid hydration mismatch
  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Bosh sahifa" },
    { href: "/templates", label: "Shablonlar" },
    { href: "/pricing", label: "Narxlar" },
    { href: "/contact", label: "Aloqa" },
  ];

  // Normalize pathname for consistent comparison
  // usePathname from next-intl already returns pathname without locale prefix
  const normalizePath = (path: string) => {
    if (!path) return "/";
    // Remove trailing slash except for root
    const normalized = path === "/" ? "/" : path.replace(/\/$/, "");
    return normalized || "/";
  };

  const normalizedPathname = normalizePath(currentPathname);

  const isActive = (href: string) => {
    if (!currentPathname) return false; // Don't show active state until hydrated

    const normalizedHref = normalizePath(href);

    if (normalizedHref === "/") {
      return normalizedPathname === "/";
    }
    return (
      normalizedPathname === normalizedHref ||
      normalizedPathname.startsWith(`${normalizedHref}/`)
    );
  };

  const DesktopNav = () => (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link
              href={item.href}
              className={cn(
                navigationMenuTriggerStyle(),
                isActive(item.href) && "bg-accent text-accent-foreground",
              )}
            >
              {item.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );

  const MobileNav = () => (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "rounded-md px-4 py-2 text-lg font-medium transition-colors hover:text-primary",
                isActive(item.href)
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl font-bold"
        >
          <span>BotMather</span>
        </Link>

        <div className="flex gap-2">
          <DesktopNav />
          <MobileNav />
          {session.status === "unauthenticated" ? (
            <OtpAuthDialog>
              <button className="rounded-full bg-foreground px-6 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90">
                Login
              </button>
            </OtpAuthDialog>
          ) : (
            <Avatar
              onClick={goHomePage}
              className="flex h-8 w-8 cursor-pointer items-center justify-center"
            >
              <AvatarImage
                className="h-8 w-8 rounded-full"
                src={
                  session.data?.user.avatar || "https://github.com/shadcn.png"
                }
                alt={`${session.data?.user.first_name} ${session.data?.user.last_name}`}
              />
              <AvatarFallback>
                {session.data?.user.first_name?.charAt(0)}
                {session.data?.user.last_name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </header>
  );
}
