"use client";

import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface CardItem {
  icon: ReactNode;
  title: string;
  content: string;
}

interface AnimatedCardsProps {
  cards: CardItem[];
  className?: string;
}

export function AnimatedCards({ cards, className = "" }: AnimatedCardsProps) {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0"
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground text-center lg:text-left">
                    {card.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                    {card.content}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
