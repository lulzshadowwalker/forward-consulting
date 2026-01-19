import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

type CTAVariant = 'contact' | 'partner' | 'services'

interface SharedCTAProps {
  variant?: CTAVariant
  href?: string
  className?: string
}

export function SharedCTA({
  variant = 'contact',
  href = '/contact',
  className = '',
}: SharedCTAProps) {
  const t = useTranslations('SharedCTA')

  return (
    <section
      className={`py-20 bg-gradient-to-br from-teal-600 to-indigo-700 ${className}`}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t(`${variant}.title`)}
          </h2>

          <p className="text-xl text-teal-100 mb-8">
            {t(`${variant}.description`)}
          </p>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-teal-700 hover:bg-slate-100 font-semibold"
          >
            <Link href={href}>
              {t(`${variant}.button`)}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
