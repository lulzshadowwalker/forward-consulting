import heroImage from '@/assets/images/contact-us.png'
import { AnimatedContactForm } from '@/components/animations/AnimatedContactForm'
import { AnimatedContactInfo } from '@/components/animations/AnimatedContactInfo'
import { AnimatedHero } from '@/components/animations/AnimatedHero'
import { SharedCTA } from '@/components/shared/SharedCTA'
import { Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

type Props = {
  params: Promise<{ locale: string }>
}

export default function ContactPage(props: Props) {
  const t = useTranslations('ContactPage')

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <AnimatedHero
          badge={t('hero.badge')}
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          heroImage={heroImage}
        />

        {/* Contact Form and Info Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Contact Form */}
              <AnimatedContactForm
                title={t('form.title')}
                subtitle={t('form.subtitle')}
                formLabels={{
                  email: {
                    label: t('form.email.label'),
                    placeholder: t('form.email.placeholder'),
                  },
                  message: {
                    label: t('form.message.label'),
                    placeholder: t('form.message.placeholder'),
                  },
                }}
                submitText={t('form.submit')}
                sendingText={t('form.sending')}
                successMessage={t('form.success')}
                errorMessage={t('form.error')}
              />

              {/* Contact Information */}
              <AnimatedContactInfo
                title={t('contact.title')}
                subtitle={t('contact.subtitle')}
                contacts={[
                  {
                    icon: (
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    ),
                    title: t('contact.email.title'),
                    description: t('contact.email.description'),
                    value: t('contact.email.value'),
                    href: `mailto:${t('contact.email.value')}`,
                    color:
                      'bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50',
                  },
                  {
                    icon: (
                      <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                    ),
                    title: t('contact.phone.title'),
                    description: t('contact.phone.description'),
                    value: (
                      <div className="flex flex-col whitespace-pre-line">
                        <div className="flex items-center">
                          <span className="me-2 text-foreground">
                            {t('contact.phone.saudi-arabia')}:
                          </span>
                          <a
                            href={`tel:${t('contact.phone.saudi-arabia-phone')}`}
                            className="text-green-600 dark:text-green-400 hover:underline"
                            dir="ltr"
                          >
                            {t('contact.phone.saudi-arabia-phone')}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <span className="me-2 text-foreground">
                            {t('contact.phone.jordan')}:
                          </span>
                          <a
                            href={`tel:${t('contact.phone.jordan-phone')}`}
                            className="text-green-600 dark:text-green-400 hover:underline"
                            dir="ltr"
                          >
                            {t('contact.phone.jordan-phone')}
                          </a>
                        </div>
                      </div>
                    ),
                    color:
                      'bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/50',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SharedCTA variant="contact" />
      </main>
    </>
  )
}
