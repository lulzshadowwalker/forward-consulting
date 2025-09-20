"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

const quickLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "services", href: "/services" },
  { name: "contact", href: "/contact" },
] as const;

const serviceLinks = [
  { name: "organizationDesign", href: "/services" },
  { name: "talentManagement", href: "/services" },
  { name: "talentAssessment", href: "/services" },
  { name: "specializedServices", href: "/services" },
] as const;

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FC</span>
              </div>
              <span className="text-xl font-bold">{t("brand.name")}</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              {t("brand.tagline")}
            </p>

            {/* Social Media Links */}
            <div>
              <h4 className="font-semibold mb-3 text-white">
                {t("social.title")}
              </h4>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <Link
                    href="https://linkedin.com/company/forward-consulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("social.linkedin")}
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <Link
                    href="https://twitter.com/forward_consult"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("social.twitter")}
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <Link
                    href="https://facebook.com/forward.consulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("social.facebook")}
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">
              {t("quickLinks.title")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {t(`quickLinks.${link.name}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">
              {t("services.title")}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {t(`services.${service.name}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">
              {t("contact.title")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                <Link
                  href={`mailto:${t("contact.email")}`}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {t("contact.email")}
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                <Link
                  href={`tel:${t("contact.phone")}`}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {t("contact.phone")}
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  {t("contact.address")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">{t("legal.copyright")}</p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              {t("legal.privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              {t("legal.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
