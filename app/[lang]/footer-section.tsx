'use client'

import { Label } from '@/components/ui/label'
import { I18nContext } from '@/providers/i18nProvider'
import Link from 'next/link'
import { useContext } from 'react'

export default function FooterSection() {
  const { i18n } = useContext(I18nContext)

  return (
    <>
      <section
        id="footer-section"
        className="container flex flex-col bg-white pt-8 pb-8"
      >
        <div className="grid grid-cols-2 md:flex items-start justify-center md:space-x-24">
          <div className="flex items-center flex-col space-y-4">
            <Label className="text-keiko-gray text-md pb-4">AUUUUUU</Label>
            <Link href="#about-section" className="text-sm">
              {i18n.footerSection.links[0]}
            </Link>
            <Link href="#advantage-section" className="text-sm">
              {i18n.footerSection.links[1]}
            </Link>
            <Link href="#features-section" className="text-sm">
              {i18n.footerSection.links[2]}
            </Link>
            <Link href="#how-to-use-section" className="text-sm">
              {i18n.footerSection.links[3]}
            </Link>
            <Link
              href="https:/keikobot.com/support"
              rel="noreferrer noopener"
              target="_blank"
              className="text-sm"
            >
              {i18n.footerSection.links[4]}
            </Link>
          </div>
          <div className="flex items-center flex-col space-y-4">
            <Label className="text-keiko-gray text-md pb-4">Woof woof</Label>
            <Link href="#" className="text-sm">
              {i18n.footerSection.legal[0]}
            </Link>
            <Link href="#" className="text-sm">
              {i18n.footerSection.legal[1]}
            </Link>
          </div>
        </div>
        <div className="w-full h-1 border-t-2 mt-8 mb-8" />
        <div className="flex justify-center items-center space-x-1">
          <Label className="text-keiko-gray text-sm">
            {i18n.footerSection.copyRight}
          </Label>
          <Label className="text-keiko-gray text-sm">
            {i18n.footerSection.madeBy}
          </Label>
        </div>
      </section>
    </>
  )
}
