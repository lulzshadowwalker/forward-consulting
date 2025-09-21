import heroImage from "@/assets/images/hero.png";
import regionalExpertise from "@/assets/images/regional-expertise.png";
import { SharedCTA } from "@/components/shared/SharedCTA";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Award,
  Building,
  CheckCircle,
  Handshake,
  Heart,
  Lightbulb,
  Shield,
  Star,
  Target,
  Users,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

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
        <section className="relative min-h-[70vh] lg:min-h-[75vh] flex items-center py-20 overflow-hidden">
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
          <div className="absolute inset-0 bg-black/10 z-10"></div>

          <div className="container mx-auto px-4 flex-1 flex items-center">
            <div className="max-w-4xl mx-auto text-center w-full">
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/90 text-white backdrop-blur-sm border-primary shadow-lg"
              >
                {t("expertise.years")} {t("expertise.yearsLabel")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {t("hero.title")}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
                {t("hero.subtitle")}
              </p>{" "}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg backdrop-blur-sm font-semibold"
                >
                  <Link href="/services">
                    {t("hero.cta")}
                    <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent backdrop-blur-sm border-primary/80 text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Link href="/contact">{t("hero.contact")}</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Background decoration - kept for additional visual depth */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("services.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("services.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t("services.organizationDesign.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {t("services.organizationDesign.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t("services.talentManagement.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {t("services.talentManagement.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t("services.talentAssessment.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {t("services.talentAssessment.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t("services.specialized.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {t("services.specialized.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regional Expertise */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 text-primary bg-primary/10 hover:bg-primary/20"
                >
                  {t("expertise.region")}
                </Badge>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t("expertise.title")}
                </h2>

                <p className="text-lg text-muted-foreground mb-8">
                  {t("expertise.description")}
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {t("expertise.years")}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">
                      {t("expertise.yearsLabel")}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {t("expertise.clients")}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">
                      {t("expertise.clientsLabel")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-muted/20 rounded-2xl p-8 h-80 flex items-center justify-center overflow-hidden">
                  <Image
                    src={regionalExpertise}
                    alt={t("expertise.imageAlt")}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("values.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t("values.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Partnership */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t("values.partnership.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {t("values.partnership.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Integrity */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t("values.integrity.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {t("values.integrity.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Innovation */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t("values.innovation.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {t("values.innovation.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Respect */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t("values.respect.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {t("values.respect.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Excellence */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t("values.excellence.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {t("values.excellence.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("approach.title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("approach.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Design */}
              <div className="relative">
                <Card className="h-full border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                      <Target className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                      {t("approach.design.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      {t("approach.design.description")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Execute */}
              <div className="relative">
                <Card className="h-full border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                      {t("approach.execute.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      {t("approach.execute.description")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center mt-8 mb-8">
              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-teal-600 dark:text-teal-400 rtl:rotate-180" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SharedCTA variant="contact" href="/contact" />
      </main>
    </>
  );
}
