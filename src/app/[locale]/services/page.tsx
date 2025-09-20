import { SharedCTA } from "@/components/shared/SharedCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Building,
  CheckCircle,
  Compass,
  Globe,
  Heart,
  Settings,
  Target,
  Trophy,
  Users,
  Zap,
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
        <section className="relative bg-gradient-to-br from-muted/20 to-muted/40 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t("hero.subtitle")}
              </p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("introduction.title")}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t("introduction.subtitle")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("introduction.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Core Services Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Organization Design & Workforce Planning */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {t("organizationDesign.title")}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {t("organizationDesign.description")}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {t
                      .raw("organizationDesign.services")
                      .map((service: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">
                            {service}
                          </span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Talent & Leadership Management */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {t("talentManagement.title")}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {t("talentManagement.description")}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {t
                      .raw("talentManagement.services")
                      .map((service: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">
                            {service}
                          </span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Talent Assessment */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                      <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                        {t("talentAssessment.title")}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t("talentAssessment.description")}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {t
                      .raw("talentAssessment.services")
                      .map((service: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-300 text-sm">
                            {service}
                          </span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specialized Services Combined */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                      <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                        {t("specializedServices.title")}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t("specializedServices.description")}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    {/* PMO Services */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Settings className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="font-semibold text-slate-900 dark:text-white text-sm">
                          {t("pmoServices.title")}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 ml-7">
                        {t("pmoServices.shortDescription")}
                      </p>
                    </div>

                    {/* Government Excellence */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="font-semibold text-slate-900 dark:text-white text-sm">
                          {t("governmentExcellence.title")}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 ml-7">
                        {t("governmentExcellence.shortDescription")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Delivery Approach */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("approachSection.title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("approachSection.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Design Phase */}
              <div className="relative">
                <Card className="h-full border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto w-20 h-20 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-6">
                      <Compass className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                      {t("approachSection.design.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t("approachSection.design.description")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Execute Phase */}
              <div className="relative">
                <Card className="h-full border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
                      <Zap className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                      {t("approachSection.execute.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t("approachSection.execute.description")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Arrow connecting the phases */}
            <div className="flex justify-center mt-8">
              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("whyChooseUs.title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("whyChooseUs.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Regional Expertise */}
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("whyChooseUs.regionalExpertise.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("whyChooseUs.regionalExpertise.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Proven Methodology */}
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("whyChooseUs.provenMethodology.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("whyChooseUs.provenMethodology.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Client-Centric */}
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("whyChooseUs.clientCentric.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("whyChooseUs.clientCentric.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Sustainable Impact */}
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("whyChooseUs.sustainableImpact.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("whyChooseUs.sustainableImpact.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SharedCTA variant="contact" href="/contact" />
      </main>
    </>
  );
}
