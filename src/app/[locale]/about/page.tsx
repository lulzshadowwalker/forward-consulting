import heroImage from "@/assets/images/hero.png";
import { AnimatedCards } from "@/components/animations/AnimatedCards";
import { AnimatedHero } from "@/components/animations/AnimatedHero";
import { AnimatedStats } from "@/components/animations/AnimatedStats";
import { AnimatedTimeline } from "@/components/animations/AnimatedTimeline";
import { AnimatedValues } from "@/components/animations/AnimatedValues";
import { SharedCTA } from "@/components/shared/SharedCTA";
import {
  Award,
  Building,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
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
          },
          {
            icon: <Award className="w-8 h-8 text-primary" />,
            title: t("mission.title"),
            content: t("mission.content"),
          },
        ]}
      />

      {/* Values */}
      <AnimatedValues
        title={t("coreValues.title")}
        subtitle={t("coreValues.subtitle")}
        values={[
          {
            icon: <Users className="w-6 h-6 text-primary" />,
            title: t("coreValues.clientFirst.title"),
            description: t("coreValues.clientFirst.description"),
          },
          {
            icon: <Target className="w-6 h-6 text-primary" />,
            title: t("coreValues.professionalExcellence.title"),
            description: t("coreValues.professionalExcellence.description"),
          },
          {
            icon: <Award className="w-6 h-6 text-primary" />,
            title: t("coreValues.insightDriven.title"),
            description: t("coreValues.insightDriven.description"),
          },
          {
            icon: <TrendingUp className="w-6 h-6 text-primary" />,
            title: t("coreValues.experiencedTeam.title"),
            description: t("coreValues.experiencedTeam.description"),
          },
          {
            icon: <CheckCircle className="w-6 h-6 text-primary" />,
            title: t("coreValues.trustedNetwork.title"),
            description: t("coreValues.trustedNetwork.description"),
          },
          {
            icon: <Building className="w-6 h-6 text-primary" />,
            title: t("coreValues.regionalFocus.title"),
            description: t("coreValues.regionalFocus.description"),
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
          },
          {
            year: "2021",
            label: t("ourStory.expansion.label"),
            title: t("ourStory.expansion.title"),
            description: t("ourStory.expansion.description"),
          },
          {
            year: "2023",
            label: t("ourStory.saudiPartnership.label"),
            title: t("ourStory.saudiPartnership.title"),
            description: t("ourStory.saudiPartnership.description"),
          },
          {
            year: "2024",
            label: t("ourStory.today.label"),
            title: t("ourStory.today.title"),
            description: t("ourStory.today.description"),
          },
        ]}
      />

      {/* Stats Section */}
      <AnimatedStats
        title={t("achievements.title")}
        subtitle={t("achievements.subtitle")}
        stats={[
          {
            number: "100+",
            label: t("achievements.publicSector"),
          },
          {
            number: "50+",
            label: t("achievements.privateSector"),
          },
          {
            number: "20+",
            label: t("achievements.leadershipDevelopment"),
          },
          {
            number: "25+",
            label: t("achievements.institutionalResilience"),
          },
        ]}
      />

      {/* CTA Section */}
      <SharedCTA />
    </div>
  );
}
