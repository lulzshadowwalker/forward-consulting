import { Navigation } from "@/components/navigation/Navigation";
import { SharedCTA } from "@/components/shared/SharedCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  CheckCircle,
  Compass,
  Eye,
  Globe,
  Handshake,
  MapPin,
  Network,
  Shield,
  Target,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("AboutPage");

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                {t("hero.subtitle")}
              </p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Vision */}
              <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t("vision.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t("vision.content")}
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                    <Compass className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t("mission.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t("mission.content")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("coreValues.title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("coreValues.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Client First */}
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <UserCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("coreValues.clientFirst.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("coreValues.clientFirst.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Professional Excellence */}
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("coreValues.professionalExcellence.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("coreValues.professionalExcellence.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Insight-Driven */}
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("coreValues.insightDriven.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("coreValues.insightDriven.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Experienced Team */}
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("coreValues.experiencedTeam.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("coreValues.experiencedTeam.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Trusted Network */}
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Network className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("coreValues.trustedNetwork.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("coreValues.trustedNetwork.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Regional Focus */}
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("coreValues.regionalFocus.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("coreValues.regionalFocus.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Deliver + Market Insight + How We Work - Combined Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* What We Deliver */}
              <div>
                <div className="text-center mb-12">
                  <div className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {t("whatWeDeliver.title")}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t("whatWeDeliver.subtitle")}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {t("whatWeDeliver.tailoredSolutions.title")}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {t("whatWeDeliver.tailoredSolutions.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {t("whatWeDeliver.knowledgeTransfer.title")}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {t("whatWeDeliver.knowledgeTransfer.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {t("whatWeDeliver.agileApproach.title")}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {t("whatWeDeliver.agileApproach.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Insight */}
              <div>
                <div className="text-center mb-12">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {t("marketInsight.title")}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t("marketInsight.subtitle")}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {t("marketInsight.gccExpertise.title")}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {t("marketInsight.gccExpertise.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {t("marketInsight.organizationalSupport.title")}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {t("marketInsight.organizationalSupport.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Work */}
              <div>
                <div className="text-center mb-12">
                  <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                    <Handshake className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {t("howWeWork.title")}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t("howWeWork.subtitle")}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {t("howWeWork.collaborative.title")}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {t("howWeWork.collaborative.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Handshake className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {t("howWeWork.partnership.title")}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {t("howWeWork.partnership.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {t("howWeWork.sustainable.title")}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {t("howWeWork.sustainable.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("ourStory.title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("ourStory.subtitle")}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-800"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {/* Founded */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                      <Building className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {t("ourStory.founded.title")}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {t("ourStory.founded.description")}
                      </p>
                    </div>
                  </div>

                  {/* Expansion */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                      <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {t("ourStory.expansion.title")}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {t("ourStory.expansion.description")}
                      </p>
                    </div>
                  </div>

                  {/* Saudi Partnership */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                      <Handshake className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {t("ourStory.saudiPartnership.title")}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {t("ourStory.saudiPartnership.description")}
                      </p>
                    </div>
                  </div>

                  {/* Today */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                      <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {t("ourStory.today.title")}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {t("ourStory.today.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Excellence */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("leadership.title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("leadership.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Deep Expertise */}
              <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("leadership.expertise.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("leadership.expertise.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Strategic Collaboration */}
              <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Handshake className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("leadership.collaboration.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("leadership.collaboration.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Lasting Impact */}
              <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t("leadership.impact.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {t("leadership.impact.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("achievements.title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("achievements.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  {t("achievements.publicSector")}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  {t("achievements.privateSector")}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  {t("achievements.leadershipDevelopment")}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  {t("achievements.institutionalResilience")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SharedCTA variant="partner" href="/contact" />
      </main>
    </>
  );
}
