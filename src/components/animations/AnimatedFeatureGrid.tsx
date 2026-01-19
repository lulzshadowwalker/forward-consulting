'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface FeatureItem {
  icon: ReactNode
  title: string
  description: string
}

interface AnimatedFeatureGridProps {
  title: string
  subtitle: string
  features: FeatureItem[]
  className?: string
}

export function AnimatedFeatureGrid({
  title,
  subtitle,
  features,
  className = '',
}: AnimatedFeatureGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }

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
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            variants={titleVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            variants={titleVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-4">
                  <motion.div
                    className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      duration: 0.8,
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
