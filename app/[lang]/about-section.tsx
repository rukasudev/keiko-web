'use client'

import { Label } from '@/components/ui/label'
import { I18nContext } from '@/providers/i18nProvider'
import Image from 'next/image'
import { useContext } from 'react'

export default function AboutSection() {
  const { i18n } = useContext(I18nContext)

  return (
    <section className="bg-white flex flex-col md:pb-14">
      <div className="container flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:ml-32">
          <Image
            src={'/KEIKO_02.png'}
            alt="keiko-about-section-image-02"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col md:pl-28 md:w-1/2 md:mr-8">
          <Label className="text-3xl text-black font-bold text-pretty">
            {i18n.aboutSection.title}
          </Label>
          <Label className="text-base text-keiko-gray text-pretty">
            {i18n.aboutSection.description}
          </Label>
          <Label className="text-lg text-black font-semibold pt-4 text-pretty">
            {i18n.aboutSection.subtitles[0].title}
          </Label>
          <Label className="text-sm text-keiko-gray text-pretty">
            {i18n.aboutSection.subtitles[0].description}
          </Label>
          <Label className="text-lg text-black font-semibold pt-4 text-pretty">
            {i18n.aboutSection.subtitles[1].title}
          </Label>
          <Label className="text-sm text-keiko-gray text-pretty">
            {i18n.aboutSection.subtitles[1].description}
          </Label>
        </div>
      </div>
    </section>
  )
}
