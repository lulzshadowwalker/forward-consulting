"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { ReactNode } from "react";

interface ApproachItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface AnimatedApproachProps {
  title: string;
  subtitle: string;
  approaches: ApproachItem[];
  className?: string;
}

export function AnimatedApproach({
  title,
  subtitle,
  approaches,
  className = "",
}: AnimatedApproachProps) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section className={`py-20 bg-slate-50 dark:bg-slate-800/50 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-4"
            variants={titleVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <span>{title.split(" ").slice(0, isRtl ? 2 : 1)}</span>
              <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center shrink-0">
                <DotLottieReact
                  src="https://lottie.host/f7c26559-c6b8-4842-944f-dbe7e28d2cfa/Qs0P2Egxpt.lottie"
                  loop
                  autoplay
                  className="w-6 h-6 md:w-12 md:h-12 ltr:scale-x-[-1] ltr:max-[502px]:scale-y-[-1] rtl:max-[372px]:scale-y-[-1]"
                />
              </div>
              <span>
                {title
                  .split(" ")
                  .slice(isRtl ? 2 : 1)
                  .join(" ")}
              </span>
            </h2>
          </motion.div>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            variants={titleVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
            >
              <Card className="h-full border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <motion.div
                    className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4"
                    whileHover={{
                      rotateY: 180,
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {approach.icon}
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                    {approach.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Connecting Arrow */}
        <motion.div
          className="flex justify-center mt-8 mb-8"
          variants={arrowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8 }}
        >
          <div className="hidden md:block">
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight className="w-8 h-8 text-teal-600 dark:text-teal-400 rtl:rotate-180" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
