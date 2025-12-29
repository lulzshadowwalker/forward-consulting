import heroImage from "@/assets/images/services.webp";
import services1Image from "@/assets/images/service-1.webp";
import services2Image from "@/assets/images/service-2.png";
import services3Image from "@/assets/images/service-3.png";
import services4Image from "@/assets/images/service-4.webp";
import specializedServicesImage from "@/assets/images/specialized-services.webp";
import designImage from "@/assets/images/design.webp";
import executeImage from "@/assets/images/execute.png";
import sustainImage from "@/assets/images/sustain.png";
import { AnimatedApproach } from "@/components/animations/AnimatedApproach";
import { AnimatedFeatureGrid } from "@/components/animations/AnimatedFeatureGrid";
import { AnimatedHero } from "@/components/animations/AnimatedHero";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedServiceCards } from "@/components/animations/AnimatedServiceCards";
import {
  IconRegionalExpertise,
  IconSustainableImpact,
} from "@/components/icons/ServiceIcons";
import { SharedCTA } from "@/components/shared/SharedCTA";
import {
  Award,
  Building,
  CheckCircle,
  Handshake,
  RefreshCw,
  Target,
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
              title: t("pmoServices.title"),
              description: t("pmoServices.shortDescription"),
              services: t.raw("pmoServices.services"),
              image: services4Image,
            },
            {
              icon: (
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              ),
              title: t("governmentExcellence.title"),
              description: t("governmentExcellence.shortDescription"),
              services: t.raw("governmentExcellence.services"),
              image: specializedServicesImage,
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
              icon: <IconSustainableImpact className="w-9 h-9 text-primary" />,
              title: t("whyChooseUs.values.title"),
              description: t("whyChooseUs.values.description"),
            },
            {
              icon: <Users className="w-9 h-9 text-primary" />,
              title: t("whyChooseUs.about.title"),
              description: t("whyChooseUs.about.description"),
            },
            {
              icon: <Target className="w-8 h-8 text-primary" />,
              title: t("whyChooseUs.deliver.title"),
              description: t("whyChooseUs.deliver.description"),
            },
            {
              icon: <IconRegionalExpertise className="w-9 h-9 text-primary" />,
              title: t("whyChooseUs.context.title"),
              description: t("whyChooseUs.context.description"),
            },
            {
              icon: <Handshake className="w-9 h-9 text-primary" />,
              title: t("whyChooseUs.how.title"),
              description: t("whyChooseUs.how.description"),
            },
          ]}
        />{" "}
        {/* CTA Section */}
        <SharedCTA variant="contact" href="/contact" />
      </main>
    </>
  );
}
