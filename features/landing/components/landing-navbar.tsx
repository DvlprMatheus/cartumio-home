"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { LandingNavLink } from "@/features/landing/components/landing-nav-link";
import { LandingThemeToggle } from "@/features/landing/components/landing-theme-toggle";
import { Button } from "@/features/shared/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/features/shared/components/ui/sheet";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#inscrever", label: "Se Inscrever" },
];

export function LandingNavbar() {
  return (
    <header className="relative z-10 flex h-14 shrink-0 items-center px-4 sm:h-16 sm:px-6 md:px-10">
      <div className="flex min-w-0 flex-1">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span
            className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md sm:size-9"
            aria-hidden
          >
            <Image
              src="/logo-dark.svg"
              alt="Cartumio dark logo"
              width={36}
              height={36}
              className="size-8 object-cover dark:hidden sm:size-9"
              priority
            />
            <Image
              src="/logo-light.svg"
              alt="Cartumio light logo"
              width={36}
              height={36}
              className="hidden size-8 object-cover dark:block sm:size-9"
              priority
            />
          </span>
          <span className="truncate text-sm font-semibold tracking-tight sm:text-base">
            Cartumio
          </span>
        </Link>
      </div>
      <nav
        className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex"
        aria-label="Principal"
      >
        {navItems.map((item) => (
          <LandingNavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </nav>
      <div className="flex flex-1 items-center justify-end gap-0.5 sm:gap-1">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:max-w-sm">
            <SheetHeader className="text-left">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-2 pb-4" aria-label="Principal">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <LandingNavLink
                    href={item.href}
                    label={item.label}
                    className="block rounded-md px-3 py-3 text-base hover:bg-muted/80"
                  />
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <LandingThemeToggle />
      </div>
    </header>
  );
}
