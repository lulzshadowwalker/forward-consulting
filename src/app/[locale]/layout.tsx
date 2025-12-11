import { Footer } from "@/components/footer/Footer";
import { Navigation } from "@/components/navigation/Navigation";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import { clsx } from "clsx";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ["arabic"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,

    // TODO: LocaleLayout doesn't exist
    namespace: "LocaleLayout",
  });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html
      className="min-h-full"
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body
        className={clsx(
          locale === "ar" ? notoSansArabic.className : inter.className,
          "flex min-h-full flex-col",
        )}
      >
        <NextIntlClientProvider>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
