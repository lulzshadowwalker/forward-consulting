import heroImage from "@/assets/images/services.webp";
import services1Image from "@/assets/images/organization-design-and-workforce.webp";
import services2Image from "@/assets/images/talent-and-leadership-management.webp";
import services3Image from "@/assets/images/talent-assessment.webp";
import services4Image from "@/assets/images/specialized-services.webp";
import designImage from "@/assets/images/design.webp";
import executeImage from "@/assets/images/excute.webp";
import sustainImage from "@/assets/images/sustain.webp";
import { AnimatedApproach } from "@/components/animations/AnimatedApproach";
import { AnimatedFeatureGrid } from "@/components/animations/AnimatedFeatureGrid";
import { AnimatedHero } from "@/components/animations/AnimatedHero";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedServiceCards } from "@/components/animations/AnimatedServiceCards";
import { SharedCTA } from "@/components/shared/SharedCTA";
import {
  Award,
  Building,
  CheckCircle,
  Clock,
  Handshake,
  RefreshCw,
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
  const tHome = await getTranslations("HomePage");

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
              image: services1Image,
            },
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              title: t("talentManagement.title"),
              description: t("talentManagement.description"),
              services: t.raw("talentManagement.services"),
              image: services2Image,
            },
            {
              icon: (
                <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              ),
              title: t("talentAssessment.title"),
              description: t("talentAssessment.description"),
              services: t.raw("talentAssessment.services"),
              image: services3Image,
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
              image: services4Image,
            },
          ]}
        />
        {/* Our Approach */}
        <AnimatedApproach
          title={tHome("approach.title")}
          subtitle={tHome("approach.subtitle")}
          approaches={[
            {
              icon: (
                <Target className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              ),
              title: tHome("approach.design.title"),
              description: tHome("approach.design.description"),
              image: designImage,
            },
            {
              icon: (
                <CheckCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              ),
              title: tHome("approach.execute.title"),
              description: tHome("approach.execute.description"),
              image: executeImage,
            },
            {
              icon: (
                <RefreshCw className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              ),
              title: tHome("approach.sustain.title"),
              description: tHome("approach.sustain.description"),
              image: sustainImage,
            },
          ]}
        />
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
              icon: <Handshake className="w-8 h-8 text-primary" />,
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
