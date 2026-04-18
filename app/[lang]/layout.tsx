import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Locale } from '@/dictionaries'
import '../../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

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
  const canonicalUrl = lang === 'en' ? BASE_URL : `${BASE_URL}/${lang}`

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: 'Keiko Bot Team' }],
    creator: 'rukasudev',

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: BASE_URL,
        pt: `${BASE_URL}/pt`,
        'x-default': BASE_URL,
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

    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      ],
      apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
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
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Keiko Bot',
        url: BASE_URL,
        inLanguage: lang === 'pt' ? 'pt-BR' : 'en-US',
      },
      {
        '@type': 'Organization',
        name: 'Keiko Bot',
        url: BASE_URL,
        logo: `${BASE_URL}/icon.png`,
        sameAs: [
          'https://github.com/rukasudev',
          'https://api.keikobot.com/v1/invite',
        ],
      },
      {
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
        url: lang === 'en' ? BASE_URL : `${BASE_URL}/${lang}`,
        image: `${BASE_URL}/og-image.png`,
        author: {
          '@type': 'Person',
          name: 'rukasudev',
        },
      },
    ],
  }

  return (
    <html lang={lang} className={`${inter.variable} scroll-smooth`}>
      <body className="font-inter tracking-tight antialiased">
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </div>
      </body>
    </html>
  )
}
