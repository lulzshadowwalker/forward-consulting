import heroImage from "@/assets/images/hero.png";
import { AnimatedApproach } from "@/components/animations/AnimatedApproach";
import { AnimatedFeatureGrid } from "@/components/animations/AnimatedFeatureGrid";
import { AnimatedHero } from "@/components/animations/AnimatedHero";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedServiceCards } from "@/components/animations/AnimatedServiceCards";
import { SharedCTA } from "@/components/shared/SharedCTA";
import {
  Award,
  BarChart3,
  Building,
  Clock,
  FileSearch,
  Rocket,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("ServicesPage");

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <AnimatedHero
          heroImage={heroImage}
          badge={t("hero.badge")}
          title={t("hero.title")}
          subtitle={t("hero.subtitle")}
          minHeight="min-h-[70vh] lg:min-h-[75vh]"
        />
        {/* Introduction */}
        <AnimatedSection
          title={t("introduction.title")}
          subtitle={t("introduction.subtitle")}
          description={t("introduction.description")}
        />
        {/* Core Services Grid */}
        <AnimatedServiceCards
          services={[
            {
              icon: <Building className="w-8 h-8 text-primary" />,
              title: t("organizationDesign.title"),
              description: t("organizationDesign.description"),
              services: t.raw("organizationDesign.services"),
            },
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              title: t("talentManagement.title"),
              description: t("talentManagement.description"),
              services: t.raw("talentManagement.services"),
            },
            {
              icon: (
                <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              ),
              title: t("talentAssessment.title"),
              description: t("talentAssessment.description"),
              services: t.raw("talentAssessment.services"),
            },
            {
              icon: (
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              ),
              title: t("specializedServices.title"),
              description: t("specializedServices.description"),
              services: [
                t("pmoServices.title") +
                  ": " +
                  t("pmoServices.shortDescription"),
                t("governmentExcellence.title") +
                  ": " +
                  t("governmentExcellence.shortDescription"),
              ],
            },
          ]}
        />
        {/* Service Delivery Approach */}
        {/* Our Approach */}
        <AnimatedApproach
          title={t("approach.title")}
          subtitle={t("approach.subtitle")}
          approaches={[
            {
              icon: (
                <FileSearch className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              ),
              title: t("approach.assessment.title"),
              description: t("approach.assessment.description"),
            },
            {
              icon: (
                <Target className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              ),
              title: t("approach.strategy.title"),
              description: t("approach.strategy.description"),
            },
            {
              icon: (
                <Rocket className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              ),
              title: t("approach.implementation.title"),
              description: t("approach.implementation.description"),
            },
            {
              icon: (
                <BarChart3 className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              ),
              title: t("approach.optimization.title"),
              description: t("approach.optimization.description"),
            },
          ]}
        />
        {/* Why Choose Us */}
        {/* Why Choose Us */}
        <AnimatedFeatureGrid
          title={t("whyChooseUs.title")}
          subtitle={t("whyChooseUs.subtitle")}
          features={[
            {
              icon: <Star className="w-8 h-8 text-primary" />,
              title: t("whyChooseUs.expertise.title"),
              description: t("whyChooseUs.expertise.description"),
            },
            {
              icon: <Clock className="w-8 h-8 text-primary" />,
              title: t("whyChooseUs.proven.title"),
              description: t("whyChooseUs.proven.description"),
            },
            {
              icon: <Shield className="w-8 h-8 text-primary" />,
              title: t("whyChooseUs.trust.title"),
              description: t("whyChooseUs.trust.description"),
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-primary" />,
              title: t("whyChooseUs.results.title"),
              description: t("whyChooseUs.results.description"),
            },
          ]}
        />{" "}
        {/* CTA Section */}
        <SharedCTA variant="contact" href="/contact" />
      </main>
    </>
  );
}
