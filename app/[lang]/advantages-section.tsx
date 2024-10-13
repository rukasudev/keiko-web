'use client'

import { GlobeIcon, RocketIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons'
import { BellIcon } from 'lucide-react'

import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import { NotificationsList } from '@/components/notifications'
import { Label } from '@/components/ui/label'
import { WelcomeMessages } from '@/components/welcome-message'
import { MultiLanguage } from '@/components/multi-language'
import { ManagmentButtons } from '@/components/managment-buttons'
import { I18nContext } from '@/providers/i18nProvider'
import { useContext } from 'react'

export default function AdvantageSection() {
  const { i18n } = useContext(I18nContext)

  const features = [
    {
      Icon: BellIcon,
      name: i18n.advantageSection.features[0].name,
      description: i18n.advantageSection.features[0].description,
      href: '#',
      cta: i18n.advantageSection.cta,
      className: 'col-span-3 lg:col-span-2',
      background: (
        <NotificationsList className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      Icon: EnvelopeOpenIcon,
      name: i18n.advantageSection.features[1].name,
      description: i18n.advantageSection.features[1].description,
      href: '#',
      cta: i18n.advantageSection.cta,
      className: 'col-span-3 lg:col-span-1',
      background: (
        <WelcomeMessages className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      Icon: GlobeIcon,
      name: i18n.advantageSection.features[2].name,
      description: i18n.advantageSection.features[2].description,
      href: '#',
      cta: i18n.advantageSection.cta,
      className: 'col-span-3 lg:col-span-2',
      background: (
        <MultiLanguage className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      Icon: RocketIcon,
      name: i18n.advantageSection.features[3].name,
      description: i18n.advantageSection.features[3].description,
      className: 'col-span-3 lg:col-span-1',
      href: '#',
      cta: i18n.advantageSection.cta,
      background: (
        <ManagmentButtons className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
  ]

  return (
    <section
      id="advantage-section"
      className="bg-keiko-bg-secondary flex flex-col justify-center items-center pt-16 pb-16 md:pl-28 md:pr-28 md:pb-24 space-x-8 space-y-8"
    >
      <div className="container flex flex-col items-center">
        <Label className="text-3xl text-black font-bold text-center md:text-left text-nowrap">
          {i18n.advantageSection.title}
        </Label>
        <Label className="text-base text-keiko-gray text-center">
          {i18n.advantageSection.description}
        </Label>
      </div>
      <BentoGrid className="container">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  )
}
