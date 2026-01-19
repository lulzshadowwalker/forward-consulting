'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { toast } from 'sonner'

interface AnimatedContactFormProps {
  title: string
  subtitle: string
  formLabels: {
    email: { label: string; placeholder: string }
    message: { label: string; placeholder: string }
  }
  submitText: string
  sendingText: string
  successMessage: string
  errorMessage: string
  className?: string
}

export function AnimatedContactForm({
  title,
  subtitle,
  formLabels,
  submitText,
  sendingText,
  successMessage,
  errorMessage,
  className = '',
}: AnimatedContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mqadrgrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        toast.success(successMessage)
        setFormData({ email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="mb-8" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </motion.div>

      <motion.div variants={formVariants}>
        <Card className="border-slate-200 dark:border-slate-700">
          <CardContent className="p-8">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div className="space-y-2" variants={itemVariants}>
                <Label
                  htmlFor="email"
                  className="text-slate-900 dark:text-white"
                >
                  {formLabels.email.label}
                </Label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={formLabels.email.placeholder}
                    required
                    className="h-12 border-input-900 bg-background"
                    disabled={isSubmitting}
                  />
                </motion.div>
              </motion.div>

              <motion.div className="space-y-2" variants={itemVariants}>
                <Label
                  htmlFor="message"
                  className="text-slate-900 dark:text-white"
                >
                  {formLabels.message.label}
                </Label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={formLabels.message.placeholder}
                    required
                    rows={6}
                    className="resize-none border-input-900 bg-background"
                    disabled={isSubmitting}
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting || !formData.email || !formData.message
                    }
                    className="group w-full h-12 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        {sendingText}
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        {submitText}
                        <motion.div
                          whileHover={{ x: 5, y: -2, rotate: 20 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          <Send className="w-4 h-4" />
                        </motion.div>
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
