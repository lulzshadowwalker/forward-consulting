"use client";

import { motion } from "motion/react";

interface TimelineItem {
  year: string;
  label: string;
  title: string;
  description: string;
}

interface AnimatedTimelineProps {
  title: string;
  subtitle: string;
  items: TimelineItem[];
  className?: string;
}

export function AnimatedTimeline({
  title,
  subtitle,
  items,
  className = "",
}: AnimatedTimelineProps) {
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

  const timelineVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
              variants={titleVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={titleVariants}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
                variants={timelineVariants}
              >
                <div className="w-full md:w-1/3">
                  <motion.div
                    className="bg-primary/10 rounded-lg p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="text-2xl font-bold text-primary mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      {item.year}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </motion.div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
