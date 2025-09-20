import { SharedCTA } from "@/components/shared/SharedCTA";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Award,
  Building,
  Calendar,
  CheckCircle,
  MapPin,
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
      <section className="bg-gradient-to-br from-primary/5 via-background to-muted/10 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary/20"
            >
              {t("hero.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{t("hero.infoItems.founded")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{t("hero.infoItems.location")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>{t("hero.infoItems.team")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <Card className="hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground text-center lg:text-left">
                  {t("vision.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                  {t("vision.content")}
                </p>
              </div>
            </Card>

            {/* Mission */}
            <Card className="hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground text-center lg:text-left">
                  {t("mission.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                  {t("mission.content")}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("coreValues.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("coreValues.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: t("coreValues.clientFirst.title"),
                description: t("coreValues.clientFirst.description"),
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: t("coreValues.professionalExcellence.title"),
                description: t("coreValues.professionalExcellence.description"),
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: t("coreValues.insightDriven.title"),
                description: t("coreValues.insightDriven.description"),
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: t("coreValues.experiencedTeam.title"),
                description: t("coreValues.experiencedTeam.description"),
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: t("coreValues.trustedNetwork.title"),
                description: t("coreValues.trustedNetwork.description"),
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: t("coreValues.regionalFocus.title"),
                description: t("coreValues.regionalFocus.description"),
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t("ourStory.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("ourStory.subtitle")}
              </p>
            </div>

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      2020
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("ourStory.founded.label")}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {t("ourStory.founded.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("ourStory.founded.description")}
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      2021
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("ourStory.expansion.label")}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 md:text-right">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {t("ourStory.expansion.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("ourStory.expansion.description")}
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      2023
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("ourStory.saudiPartnership.label")}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {t("ourStory.saudiPartnership.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("ourStory.saudiPartnership.description")}
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      2024
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("ourStory.today.label")}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 md:text-right">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {t("ourStory.today.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("ourStory.today.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("achievements.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("achievements.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
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
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SharedCTA />
    </div>
  );
}
