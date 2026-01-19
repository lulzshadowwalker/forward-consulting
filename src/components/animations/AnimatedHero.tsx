'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

interface AnimatedHeroProps {
  heroImage: any
  badge: string
  title: string
  subtitle: string
  ctaText?: string
  contactText?: string
  ctaHref?: string
  contactHref?: string
  className?: string
  minHeight?: string
}

export function AnimatedHero({
  heroImage,
  badge,
  title,
  subtitle,
  ctaText,
  contactText,
  ctaHref = '/services',
  contactHref = '/contact',
  className = '',
  minHeight = 'min-h-[70vh] lg:min-h-[75vh]',
}: AnimatedHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section
      className={`relative ${minHeight} flex items-center py-20 overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          className="object-cover brightness-50 contrast-75"
          priority
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      <div className="container mx-auto px-4 flex-1 flex items-center relative z-20">
        <motion.div
          className="max-w-4xl mx-auto text-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge
              variant="secondary"
              className="mb-6 bg-primary/90 text-white backdrop-blur-sm border-primary shadow-lg"
            >
              {badge}
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {(ctaText || contactText) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={buttonVariants}
            >
              {ctaText && (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg backdrop-blur-sm font-semibold"
                >
                  <Link href={ctaHref}>
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
                  </Link>
                </Button>
              )}

              {contactText && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent backdrop-blur-sm border-primary/80 text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Link href={contactHref}>{contactText}</Link>
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Background decoration - kept for additional visual depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-32 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
      </div>
    </section>
  )
}
