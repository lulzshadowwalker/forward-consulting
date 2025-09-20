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
  Globe,
  Handshake,
  Heart,
  Lightbulb,
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 text-teal-700 bg-teal-50 hover:bg-teal-100 dark:bg-teal-900/30 dark:text-teal-300"
            >
              {t("expertise.years")} {t("expertise.yearsLabel")}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t("hero.title")}
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                <Link href="/services">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800"
              >
                <Link href="/contact">{t("hero.contact")}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("services.title")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200 dark:border-slate-700">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                  <Building className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("services.organizationDesign.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {t("services.organizationDesign.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200 dark:border-slate-700">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                  <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("services.talentManagement.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {t("services.talentManagement.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200 dark:border-slate-700">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                  <Target className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("services.talentAssessment.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {t("services.talentAssessment.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200 dark:border-slate-700">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                  <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("services.specialized.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {t("services.specialized.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Expertise */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 text-teal-700 bg-teal-50 hover:bg-teal-100 dark:bg-teal-900/30 dark:text-teal-300"
              >
                {t("expertise.region")}
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                {t("expertise.title")}
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                {t("expertise.description")}
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                    {t("expertise.years")}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                    {t("expertise.yearsLabel")}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                    {t("expertise.clients")}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                    {t("expertise.clientsLabel")}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Placeholder for regional map/image */}
              <div className="bg-gradient-to-br from-teal-100 to-slate-200 dark:from-teal-900/20 dark:to-slate-700 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    Regional Expertise Map
                    <br />
                    <span className="text-sm opacity-75">
                      [Image placeholder]
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("values.title")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t("values.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Partnership */}
            <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("values.partnership.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {t("values.partnership.description")}
                </p>
              </CardContent>
            </Card>

            {/* Integrity */}
            <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("values.integrity.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {t("values.integrity.description")}
                </p>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("values.innovation.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {t("values.innovation.description")}
                </p>
              </CardContent>
            </Card>

            {/* Respect */}
            <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("values.respect.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {t("values.respect.description")}
                </p>
              </CardContent>
            </Card>

            {/* Excellence */}
            <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("values.excellence.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
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
              <ArrowRight className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SharedCTA variant="contact" href="/contact" />
    </main>
  );
}
