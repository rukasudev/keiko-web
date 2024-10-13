'use client'

import { Dots } from '@/components/dots'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import TypingAnimation from '@/components/ui/typing-animation'
import { I18nContext } from '@/providers/i18nProvider'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

export default function HeroSection() {
  const { i18n } = useContext(I18nContext)

  return (
    <section className="bg-keiko-bg-primary flex flex-col">
      <Navbar />
      <div className="container md:h-[500px] flex flex-col md:flex-row justify-center items-center pb-4 md:pb-0">
        <div className="flex flex-col md:pl-24 md:pb-8 space-y-2 items-center md:items-start pt-8 md:pt-0">
          <Label className="text-5xl text-white font-black">
            {i18n.heroSection.title}
          </Label>
          <Label className="text-1xl text-white text-center text-balance lg:w-[80%] md:text-left">
            {i18n.heroSection.description}
          </Label>
          <Button className="bg-keiko-orange w-1/3 font-bold" size="lg" asChild>
            <Link
              href="https:/keikobot.com/invite"
              rel="noreferrer noopener"
              target="_blank"
            >
              {i18n.invitePrimary}
            </Link>
          </Button>
        </div>
        <div className="flex items-center flex-col md:pb-8 md:pr-6">
          <Image
            src={'/KEIKO_01.png'}
            alt="keiko-hero-section-image-01"
            priority
            width={350}
            height={350}
          />
          <div className="bg-white w-[90%] md:w-full lg:w-[90%] h-24 rounded-md">
            <div className="flex p-2 ml-4 space-x-1">
              <Label className="text-keiko-orange font-bold text-md">
                {i18n.heroSection.chatBallon.author}
              </Label>
              <div className="h-4 w-8 bg-keiko-blue rounded-sm mt-1 flex justify-center items-center">
                <Label className="text-[0.5rem] text-white font-bold">
                  {i18n.heroSection.chatBallon.label}
                </Label>
              </div>
            </div>
            <TypingAnimation
              className="pl-6 text-md font-bold text-keiko-gray"
              duration={100}
              text={i18n.heroSection.chatBallon.message}
            />
          </div>
        </div>
        <div className="pb-64 hidden md:block">
          <Dots />
        </div>
      </div>
      <div className="w-screen" id="about-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 780 134"
          width="100%"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            fill="#FFF"
            d="M385.66 32.03C306.67 11.2 223.78-29.8 143.84-46.61c-82.26-17.34-168.06-16.33-250.45.39-57.84 11.73-114 31.07-172 41.86A600.21 600.21 0 01-600-33.45V59.2H600V35c-67.81 23.12-144.29 15.51-214.34-2.97z"
            transform="matrix(.82 0 0 .97 493 76.74)"
          ></path>
        </svg>
      </div>
    </section>
  )
}
