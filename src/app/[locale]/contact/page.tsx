"use client";

import { SharedCTA } from "@/components/shared/SharedCTA";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import heroImage from "@/assets/images/hero.png";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function ContactPage(props: Props) {
  const t = useTranslations("ContactPage");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqadrgrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success(t("form.success"));
        setFormData({ email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error(t("form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] lg:min-h-[65vh] flex items-center py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Hero background"
              fill
              className="object-cover brightness-50 contrast-75"
              priority
            />
          </div>

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-background/20 z-10"></div>

          <div className="container mx-auto px-4 flex-1 flex items-center relative z-20">
            <div className="text-center max-w-4xl mx-auto w-full">
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/90 text-white backdrop-blur-sm border-primary shadow-lg"
              >
                {t("hero.badge")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                {t("hero.title")}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                {t("hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {t("form.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("form.subtitle")}
                  </p>
                </div>

                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-slate-900 dark:text-white"
                        >
                          {t("form.email.label")}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("form.email.placeholder")}
                          required
                          className="h-12"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-slate-900 dark:text-white"
                        >
                          {t("form.message.label")}
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("form.message.placeholder")}
                          required
                          rows={6}
                          className="resize-none"
                          disabled={isSubmitting}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={
                          isSubmitting || !formData.email || !formData.message
                        }
                        className="w-full h-12 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            {t("form.sending")}
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            {t("form.submit")}
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {t("contact.title")}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    {t("contact.subtitle")}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <Card className="group hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                          <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {t("contact.email.title")}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                            {t("contact.email.description")}
                          </p>
                          <Link
                            href={`mailto:${t("contact.email.value")}`}
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {t("contact.email.value")}
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="group hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                          <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {t("contact.phone.title")}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                            {t("contact.phone.description")}
                          </p>
                          <Link
                            href={`tel:${t("contact.phone.value")}`}
                            className="text-green-600 dark:text-green-400 hover:underline"
                          >
                            {t("contact.phone.value")}
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Office */}
                  <Card className="group hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                          <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {t("contact.office.title")}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                            {t("contact.office.description")}
                          </p>
                          <p className="text-purple-600 dark:text-purple-400">
                            {t("contact.office.value")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("faq.title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("faq.subtitle")}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {t.raw("faq.items").map((item: any, index: number) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SharedCTA variant="contact" />
      </main>
    </>
  );
}
