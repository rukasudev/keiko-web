import HeroSection from './hero-section'
import AboutSection from './about-section'
import AdvantageSection from './advantages-section'
import HowToUseSection from './how-to-use-section'
import FeaturesSection from './features-section'
import FooterSection from './footer-section'

export default function Home() {
  return (
    <>
      <main className="flex flex-col space-y-8 bg-white">
        <HeroSection />
        <AboutSection />
        <AdvantageSection />
        <HowToUseSection />
        <FeaturesSection />
        <FooterSection />
      </main>
    </>
  )
}
