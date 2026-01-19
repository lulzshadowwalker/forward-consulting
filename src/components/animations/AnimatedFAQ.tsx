'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'motion/react'

interface FAQItem {
  question: string
  answer: string
}

interface AnimatedFAQProps {
  title: string
  subtitle: string
  faqs: FAQItem[]
  className?: string
}

export function AnimatedFAQ({
  title,
  subtitle,
  faqs,
  className = '',
}: AnimatedFAQProps) {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className={`py-20 bg-slate-50 dark:bg-slate-800 ${className}`}>
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
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, index) => (
              <motion.div key={index} variants={faqVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <motion.span
                      className="font-semibold text-slate-900 dark:text-white"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {item.question}
                    </motion.span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <motion.p
                      className="text-slate-600 dark:text-slate-300 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.answer}
                    </motion.p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
