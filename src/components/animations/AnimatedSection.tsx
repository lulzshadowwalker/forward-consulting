'use client'

import { motion } from 'motion/react'

interface AnimatedSectionProps {
  title: string
  subtitle: string
  description: string
  className?: string
}

export function AnimatedSection({
  title,
  subtitle,
  description,
  className = '',
}: AnimatedSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-8"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
