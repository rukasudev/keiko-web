import { GlobeIcon, RocketIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons'
import { BellIcon } from 'lucide-react'

import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import { NotificationsList } from '@/components/notifications'
import { Label } from '@/components/ui/label'
import { WelcomeMessages } from '@/components/welcome-message'
import { MultiLanguage } from '@/components/multi-language'
import { ManagmentButtons } from '@/components/managment-buttons'

const features = [
  {
    Icon: BellIcon,
    name: `Notificações da Twitch e Youtube`,
    description: 'Notificações de Multiplos Streamers/Youtubers!',
    href: '#',
    cta: 'Saiba mais (Em breve)',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <NotificationsList className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: EnvelopeOpenIcon,
    name: 'Mensagens de boas-vindas',
    description: 'Mensagem personalizadas e com imagens bonitas e acolhedoras!',
    href: '#',
    cta: 'Saiba mais (Em breve)',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <WelcomeMessages className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: GlobeIcon,
    name: 'Multilínguas e traduções',
    description: 'Suporte a vários idiomas e traduções de mensagens!',
    href: '#',
    cta: 'Saiba mais (Em breve)',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <MultiLanguage className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: RocketIcon,
    name: 'Fácil gerenciamento',
    description:
      'Através dos botões do Discord, edite, pause ou desabilite funcionalidades quando necessário, com total flexibilidade e sem complicações.',
    className: 'col-span-3 lg:col-span-1',
    href: '#',
    cta: 'Saiba mais (Em breve)',
    background: (
      <ManagmentButtons className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
]

export default function AdvantageSection() {
  return (
    <section
      id="advantage-section"
      className="bg-keiko-bg-secondary flex flex-col justify-center items-center pt-16 pb-16 md:pl-28 md:pr-28 md:pb-24 space-x-8 space-y-8"
    >
      <div className="container flex flex-col items-center">
        <Label className="text-3xl text-black font-bold text-center md:text-left text-nowrap">
          Com diferenciais únicos!
        </Label>
        <Label className="text-base text-keiko-gray text-center">
          O Keiko tem uma variedade de recursos únicos! Aqui estão alguns dos
          nossos favoritos
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
