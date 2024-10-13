import HeroSection from './hero-section'
import AboutSection from './about-section'
import AdvantageSection from './advantages-section'
import HowToUseSection from './how-to-use-section'
import FeaturesSection from './features-section'
import FooterSection from './footer-section'
import { getDictionary, Locale } from '@/dictionaries'
import { I18nProvider } from '@/providers/i18nProvider'

type Props = {
  params: {
    lang: Locale
  }
}

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang)

  return (
    <>
      <main className="flex flex-col space-y-8 bg-white">
        <I18nProvider lang={lang} dictionary={dictionary}>
          <HeroSection />
          <AboutSection />
          <AdvantageSection />
          <HowToUseSection />
          <FeaturesSection />
          <FooterSection />
        </I18nProvider>
      </main>
    </>
  )
}
