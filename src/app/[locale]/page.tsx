import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button>{t("title")}</Button>
    </div>
  );
}
