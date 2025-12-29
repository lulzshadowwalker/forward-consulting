import heroImage from "@/assets/images/home.webp";
import regionalExpertise from "@/assets/images/20-years.webp";
import partnershipImage from "@/assets/images/partnership.webp";
import integrityImage from "@/assets/images/integrity.webp";
import innovationImage from "@/assets/images/innovation.webp";
import respectImage from "@/assets/images/respect.webp";
import excellenceImage from "@/assets/images/excellence.webp";
import designImage from "@/assets/images/design.webp";
import executeImage from "@/assets/images/execute.png";
import sustainImage from "@/assets/images/sustain.png";
import { AnimatedApproach } from "@/components/animations/AnimatedApproach";
import { AnimatedClientsMarquee } from "@/components/animations/AnimatedClientsMarquee";
import { AnimatedHero } from "@/components/animations/AnimatedHero";
import { AnimatedRegionalExpertise } from "@/components/animations/AnimatedRegionalExpertise";
import { AnimatedServicesGrid } from "@/components/animations/AnimatedServicesGrid";
import { AnimatedValues } from "@/components/animations/AnimatedValues";
import { SharedCTA } from "@/components/shared/SharedCTA";
import {
  Award,
  Briefcase,
  Building,
  CheckCircle,
  Handshake,
  Heart,
  Lightbulb,
  RefreshCw,
  Shield,
  Star,
  Target,
  Users,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("HomePage");

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <AnimatedHero
          heroImage={heroImage}
          badge={`${t("expertise.years")} ${t("expertise.yearsLabel")}`}
          title={t("hero.title")}
          subtitle={t("hero.subtitle")}
          ctaText={t("hero.cta")}
          contactText={t("hero.contact")}
          ctaHref="/services"
          contactHref="/contact"
        />

        {/* Services Overview */}
        <AnimatedServicesGrid
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          services={[
            {
              icon: <Building className="w-6 h-6 text-primary" />,
              title: t("services.organizationDesign.title"),
              description: t("services.organizationDesign.description"),
            },
            {
              icon: <Users className="w-6 h-6 text-primary" />,
              title: t("services.talentManagement.title"),
              description: t("services.talentManagement.description"),
            },
            {
              icon: <Target className="w-6 h-6 text-primary" />,
              title: t("services.talentAssessment.title"),
              description: t("services.talentAssessment.description"),
            },
            {
              icon: <Briefcase className="w-6 h-6 text-primary" />,
              title: t("services.pmoServices.title"),
              description: t("services.pmoServices.description"),
            },
            {
              icon: <Award className="w-6 h-6 text-primary" />,
              title: t("services.specialized.title"),
              description: t("services.specialized.description"),
            },
          ]}
        />

        <AnimatedClientsMarquee
          title={t("clients.title")}
          subtitle={t("clients.subtitle")}
        />

        {/* Regional Expertise */}
        <AnimatedRegionalExpertise
          badge={t("expertise.region")}
          title={t("expertise.title")}
          description={t("expertise.description")}
          stats={[]}
          image={regionalExpertise}
          imageAlt={t("expertise.imageAlt")}
        />

        {/* Values Section */}
        <AnimatedValues
          title={t("values.title")}
          subtitle={t("values.subtitle")}
          values={[
            {
              icon: <Handshake className="w-6 h-6 text-primary" />,
              title: t("values.partnership.title"),
              description: t("values.partnership.description"),
              image: partnershipImage,
            },
            {
              icon: <Shield className="w-6 h-6 text-primary" />,
              title: t("values.integrity.title"),
              description: t("values.integrity.description"),
              image: integrityImage,
            },
            {
              icon: <Lightbulb className="w-6 h-6 text-primary" />,
              title: t("values.innovation.title"),
              description: t("values.innovation.description"),
              image: innovationImage,
            },
            {
              icon: <Heart className="w-6 h-6 text-primary" />,
              title: t("values.respect.title"),
              description: t("values.respect.description"),
              image: respectImage,
            },
            {
              icon: <Star className="w-6 h-6 text-primary" />,
              title: t("values.excellence.title"),
              description: t("values.excellence.description"),
              image: excellenceImage,
            },
          ]}
        />

        {/* Approach Section */}
        <AnimatedApproach
          title={t("approach.title")}
          subtitle={t("approach.subtitle")}
          approaches={[
            {
              icon: (
                <Target className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              ),
              title: t("approach.design.title"),
              description: t("approach.design.description"),
              image: designImage,
            },
            {
              icon: (
                <CheckCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              ),
              title: t("approach.execute.title"),
              description: t("approach.execute.description"),
              image: executeImage,
            },
            {
              icon: (
                <RefreshCw className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              ),
              title: t("approach.sustain.title"),
              description: t("approach.sustain.description"),
              image: sustainImage,
            },
          ]}
        />

        {/* CTA Section */}
        <SharedCTA variant="contact" href="/contact" />
      </main>
    </>
  );
}
