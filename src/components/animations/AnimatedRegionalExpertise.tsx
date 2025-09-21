"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import Image from "next/image";

interface StatItem {
  number: string;
  label: string;
}

interface AnimatedRegionalExpertiseProps {
  badge: string;
  title: string;
  description: string;
  stats: StatItem[];
  image: any;
  imageAlt: string;
  className?: string;
}

export function AnimatedRegionalExpertise({
  badge,
  title,
  description,
  stats,
  image,
  imageAlt,
  className = "",
}: AnimatedRegionalExpertiseProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={textVariants}>
            <Badge
              variant="secondary"
              className="mb-4 text-primary bg-primary/10 hover:bg-primary/20"
            >
              {badge}
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {title}
            </h2>

            <p className="text-lg text-muted-foreground mb-8">{description}</p>

            <motion.div
              className="grid grid-cols-2 gap-8"
              variants={statsVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative" variants={imageVariants}>
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-muted/20 rounded-2xl p-8 h-80 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
