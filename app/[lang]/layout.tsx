import { Metadata } from 'next'
import Script from 'next/script'
import { Locale } from '@/dictionaries'

const BASE_URL = 'https://keikobot.com'

const seoConfig = {
  pt: {
    title: 'Keiko Bot - Bot de Moderacao e Utilidades para Discord',
    description:
      'Keiko e um bot multifuncional para Discord com moderacao, notificacoes da Twitch/YouTube, mensagens de boas-vindas e muito mais. Gratuito e facil de usar!',
    keywords:
      'keiko bot, bot discord, bot moderacao discord, bot boas vindas discord, bot twitch discord, bot youtube discord, bot corgi, bot cachorro discord',
  },
  en: {
    title: 'Keiko Bot - Discord Moderation & Utility Bot',
    description:
      'Keiko is a multi-purpose Discord bot with moderation, Twitch/YouTube notifications, welcome messages, and more. Free and easy to use!',
    keywords:
      'keiko bot, discord bot, discord moderation bot, discord welcome bot, discord twitch bot, discord youtube bot, corgi bot, cute discord bot, dog discord bot',
  },
}

type Props = {
  params: Promise<{ lang: Locale }>
  children: React.ReactNode
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const config = seoConfig[lang]
  const canonicalUrl = `${BASE_URL}/${lang}`

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: 'Keiko Bot Team' }],
    creator: 'rukasudev',

    alternates: {
      canonical: canonicalUrl,
      languages: {
        pt: `${BASE_URL}/pt`,
        en: `${BASE_URL}/en`,
        'x-default': `${BASE_URL}/pt`,
      },
    },

    openGraph: {
      title: config.title,
      description: config.description,
      url: canonicalUrl,
      siteName: 'Keiko Bot',
      locale: lang === 'pt' ? 'pt_BR' : 'en_US',
      alternateLocale: lang === 'pt' ? ['en_US'] : ['pt_BR'],
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Keiko Bot - Discord Bot',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [`${BASE_URL}/og-image.png`],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }]
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Keiko Bot',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Discord',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: seoConfig[lang].description,
    url: `${BASE_URL}/${lang}`,
    image: `${BASE_URL}/og-image.png`,
    author: {
      '@type': 'Person',
      name: 'rukasudev',
    },
  }

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
