import heroImage from "@/assets/images/about-us.webp";
import partnershipImage from "@/assets/images/partnership.webp";
import integrityImage from "@/assets/images/integrity.webp";
import innovationImage from "@/assets/images/innovation.webp";
import respectImage from "@/assets/images/respect.webp";
import excellenceImage from "@/assets/images/excellence.webp";
import visionImage from "@/assets/images/vision.webp";
import missionImage from "@/assets/images/mission.webp";
import year2020Image from "@/assets/images/2020.webp";
import year2021Image from "@/assets/images/2021.webp";
import year2023Image from "@/assets/images/2023.webp";
import year2024Image from "@/assets/images/2024.webp";
import { AnimatedCards } from "@/components/animations/AnimatedCards";
import { AnimatedHero } from "@/components/animations/AnimatedHero";
import { AnimatedValues } from "@/components/animations/AnimatedValues";
import { AnimatedTimeline } from "@/components/animations/AnimatedTimeline";
import { SharedCTA } from "@/components/shared/SharedCTA";
import {
  Award,
  Handshake,
  Heart,
  Lightbulb,
  Shield,
  Star,
  Target,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");
  const tHome = await getTranslations("HomePage");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AnimatedHero
        heroImage={heroImage}
        badge={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        className="pt-24 pb-20"
        minHeight="min-h-[70vh] lg:min-h-[75vh]"
      />

      {/* Vision & Mission */}
      <AnimatedCards
        cards={[
          {
            icon: <Target className="w-8 h-8 text-primary" />,
            title: t("vision.title"),
            content: t("vision.content"),
            image: visionImage,
          },
          {
            icon: <Award className="w-8 h-8 text-primary" />,
            title: t("mission.title"),
            content: t("mission.content"),
            image: missionImage,
          },
        ]}
      />

      {/* Values */}
      <AnimatedValues
        title={tHome("values.title")}
        subtitle={tHome("values.subtitle")}
        values={[
          {
            icon: <Handshake className="w-6 h-6 text-primary" />,
            title: tHome("values.partnership.title"),
            description: tHome("values.partnership.description"),
            image: partnershipImage,
          },
          {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: tHome("values.integrity.title"),
            description: tHome("values.integrity.description"),
            image: integrityImage,
          },
          {
            icon: <Lightbulb className="w-6 h-6 text-primary" />,
            title: tHome("values.innovation.title"),
            description: tHome("values.innovation.description"),
            image: innovationImage,
          },
          {
            icon: <Heart className="w-6 h-6 text-primary" />,
            title: tHome("values.respect.title"),
            description: tHome("values.respect.description"),
            image: respectImage,
          },
          {
            icon: <Star className="w-6 h-6 text-primary" />,
            title: tHome("values.excellence.title"),
            description: tHome("values.excellence.description"),
            image: excellenceImage,
          },
        ]}
        className="bg-muted/30"
      />

      {/* Our Story */}
      <AnimatedTimeline
        title={t("ourStory.title")}
        subtitle={t("ourStory.subtitle")}
        items={[
          {
            year: "2020",
            label: t("ourStory.founded.label"),
            title: t("ourStory.founded.title"),
            description: t("ourStory.founded.description"),
            image: year2020Image,
          },
          {
            year: "2021",
            label: t("ourStory.expansion.label"),
            title: t("ourStory.expansion.title"),
            description: t("ourStory.expansion.description"),
            image: year2021Image,
          },
          {
            year: "2023",
            label: t("ourStory.saudiPartnership.label"),
            title: t("ourStory.saudiPartnership.title"),
            description: t("ourStory.saudiPartnership.description"),
            image: year2023Image,
          },
        ]}
      />

      {/* CTA Section */}
      <SharedCTA />
    </div>
  );
}
