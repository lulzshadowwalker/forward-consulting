"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { Globe, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "services", href: "/services" },
  { name: "contact", href: "/contact" },
] as const;

export function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = params.locale as string;

  const toggleLocale = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    router.push(`/${newLocale}${pathname}`);
  };

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FC</span>
              </div>
              <span className="hidden sm:block">{t("brand")}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                  isActive(item.href)
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
              className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
              aria-label={t("language")}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:block text-xs font-medium">
                {currentLocale === "en" ? "العربية" : "English"}
              </span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-slate-600 dark:text-slate-300"
                  aria-label={t("menu")}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">{t("brand")}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                        isActive(item.href)
                          ? "text-teal-600 dark:text-teal-400"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {t(item.name)}
                    </Link>
                  ))}

                  {/* Mobile Language Switcher */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        toggleLocale();
                        setIsOpen(false);
                      }}
                      className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      <Globe className="w-4 h-4" />
                      <span>
                        {currentLocale === "en" ? "العربية" : "English"}
                      </span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
