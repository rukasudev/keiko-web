'use client'

import { Label } from '@/components/ui/label'
import { I18nContext } from '@/providers/i18nProvider'
import Image from 'next/image'
import { useContext } from 'react'

export default function HowToUseSection() {
  const { i18n, lang } = useContext(I18nContext)

  return (
    <section
      id="how-to-use-section"
      className="bg-white flex flex-col justify-center items-center md:pl-28 md:pr-28 pt-16"
    >
      <div className="container flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <Label className="text-2xl md:text-3xl text-black font-bold text-center text-pretty">
            {i18n.howToUseSection.title}
          </Label>
          <Label className="text-base text-center text-pretty text-keiko-gray">
            {i18n.howToUseSection.description}
          </Label>
        </div>
        <div className="flex flex-col space-y-32 md:space-y-0 md:flex-row justify-center items-center">
          <div className="flex flex-col items-center h-14 w-14 rounded-full bg-blue-300 space-y-2 md:space-y-6">
            <Image
              src={'/KEIKO_FACE_01.png'}
              alt="keiko-how-to-use-image-01"
              width={400}
              height={400}
            />
            <div className="flex flex-col text-center">
              <Label className="font-bold text-nowrap text-lg">
                {i18n.howToUseSection.steps[0].title}
              </Label>
              <Label className="text-sm text-keiko-gray">
                {i18n.howToUseSection.steps[0].description}
              </Label>
            </div>
          </div>
          <div className="w-64 border-t-2 border-dashed hidden md:block" />
          <div className="flex flex-col items-center h-14 w-14 rounded-full bg-blue-300 space-y-2 md:space-y-6">
            <Image
              src={'/KEIKO_FACE_02.png'}
              alt="keiko-how-to-use-image-02"
              width={400}
              height={400}
            />
            <div className="flex flex-col text-center">
              <Label className="font-bold text-nowrap text-lg">
                {i18n.howToUseSection.steps[1].title}
              </Label>
              <Label className="text-sm text-keiko-gray">
                {i18n.howToUseSection.steps[1].description}
              </Label>
            </div>
          </div>
          <div className="w-64 border-t-2 border-dashed hidden md:block" />
          <div className="flex flex-col items-center h-14 w-14 rounded-full bg-blue-300 space-y-2 md:space-y-6">
            <Image
              src={'/KEIKO_FACE_03.png'}
              alt="keiko-how-to-use-image-03"
              width={400}
              height={400}
            />
            <div className="flex flex-col text-center">
              <Label className="font-bold text-nowrap text-lg">
                {i18n.howToUseSection.steps[2].title}
              </Label>
              <Label className="text-sm text-keiko-gray">
                {i18n.howToUseSection.steps[2].description}
              </Label>
            </div>
          </div>
        </div>
        <div className="pt-28 md:pt-32">
          <Image
            src={`KEIKO_HOW_TO_USE_${lang.toUpperCase()}.gif`}
            alt="keiko-how-to-use-gif"
            width={900}
            height={400}
            unoptimized
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
