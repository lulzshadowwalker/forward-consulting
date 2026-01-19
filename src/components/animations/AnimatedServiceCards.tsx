'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { motion } from 'motion/react'
import { ReactNode } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface ServiceItem {
  icon: ReactNode
  title: string
  description: string
  services: string[]
  image?: StaticImageData
}

interface AnimatedServiceCardsProps {
  services: ServiceItem[]
  className?: string
}

export function AnimatedServiceCards({
  services,
  className = '',
}: AnimatedServiceCardsProps) {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                  {service.image && (
                    <motion.div
                      className="mt-6 mb-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </motion.div>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.services.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
