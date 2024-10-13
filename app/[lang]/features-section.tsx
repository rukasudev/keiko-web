'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { I18nContext } from '@/providers/i18nProvider'
import { BellRing, Globe, HandHelping, Swords } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

export default function FeaturesSection() {
  const { i18n } = useContext(I18nContext)

  return (
    <>
      <section className="flex flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 310"
          className="-mb-1"
        >
          <path
            fill="#FC9842"
            fillOpacity="1"
            d="M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,224C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div
          id="features-section"
          className="bg-keiko-orange flex flex-col justify-center items-center md:pl-28 md:pr-28 md:pb-24"
        >
          <div className="container flex flex-col items-center space-y-8 pt-24">
            <Label className="text-3xl text-white font-bold text-center">
              {i18n.featuresSection.title}
            </Label>
          </div>
          <div className="container grid gap-12 md:grid-cols-2 md:gap-24 pt-16 justify-items-end">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 min-w-16 w-16 min-h-16 h-16 flex items-center justify-center rounded-xl">
                <BellRing color="white" />
              </div>
              <div className="flex flex-col">
                <Label className="text-white text-xl font-bold">
                  {i18n.featuresSection.features[0].name}
                </Label>
                <Label className="text-white/70 text-base max-w-sm">
                  {i18n.featuresSection.features[0].description}
                </Label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 min-w-16 w-16 min-h-16 h-16 flex items-center justify-center rounded-xl">
                <Swords color="white" />
              </div>
              <div className="flex flex-col">
                <Label className="text-white text-xl font-bold">
                  {i18n.featuresSection.features[1].name}
                </Label>
                <Label className="text-white/70 text-base max-w-sm text-balance">
                  {i18n.featuresSection.features[1].description}
                </Label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 min-w-16 w-16 min-h-16 h-16 flex items-center justify-center rounded-xl">
                <Globe color="white" />
              </div>
              <div className="flex flex-col">
                <Label className="text-white text-xl font-bold">
                  {i18n.featuresSection.features[2].name}
                </Label>
                <Label className="text-white/70 text-base max-w-sm text-balance">
                  {i18n.featuresSection.features[2].description}
                </Label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 min-w-16 w-16 min-h-16 h-16 flex items-center justify-center rounded-xl">
                <HandHelping color="white" />
              </div>
              <div className="flex flex-col">
                <Label className="text-white text-xl font-bold">
                  {i18n.featuresSection.features[3].name}
                </Label>
                <Label className="text-white/70 text-base max-w-sm text-balance">
                  {i18n.featuresSection.features[3].description}
                </Label>
              </div>
            </div>
          </div>
          <div className="w-full h-1 border-t-2 mt-32 mb-16" />
          <div className="container flex flex-col md:flex-row space-y-2 space-x-2 items-center justify-center">
            <div className="flex flex-col space-y-2">
              <Label className="text-white text-3xl font-bold text-center">
                {i18n.featuresSection.secondTitle}
              </Label>
              <Label className="text-1xl text-white/70 text-center text-balance">
                {i18n.featuresSection.secondDescription}
              </Label>
              <div className="flex items-center justify-center pt-4">
                <Button
                  className="bg-keiko-blue w-1/3 font-bold"
                  size="lg"
                  asChild
                >
                  <Link
                    href="https://api.keikobot.com/v1/invite"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {i18n.inviteSecondary}
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src={'/KEIKO_03.png'}
              alt="keiko-features-section-image-03"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  )
}
