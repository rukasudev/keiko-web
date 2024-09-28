import { Dots } from '@/components/dots'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-keiko-bg-primary flex flex-col">
      <Navbar />
      <div className="container md:h-[500px] flex flex-col md:flex-row justify-center items-center pb-4 md:pb-0">
        <div className="flex flex-col md:pl-24 md:pb-8 space-y-2 items-center md:items-start pt-8 md:pt-0">
          <Label className="text-5xl text-white font-black">Keiko Bot</Label>
          <Label className="text-1xl text-white text-center text-balance lg:w-[80%] md:text-left">
            Um leal companheiro do Discord com moderações, utilidades e alertas!
            ✨
          </Label>
          <Button className="bg-keiko-orange w-1/3" size="lg" asChild>
            <Link
              href="https:/keikobot.com/invite"
              rel="noreferrer noopener"
              target="_blank"
            >
              Convidar
            </Link>
          </Button>
        </div>
        <div className="flex items-center flex-col md:pb-8 md:pr-6">
          <Image
            src={'/KEIKO_01.png'}
            alt="Keiko-Image-01"
            width={350}
            height={350}
          />
          <div className="bg-white w-[90%] md:w-full lg:w-[90%] h-24 rounded-md">
            <div className="flex p-2 ml-4 space-x-1">
              <Label className="text-keiko-orange font-bold text-md">
                Keiko
              </Label>
              <div className="h-4 w-8 bg-keiko-blue rounded-sm mt-1 flex justify-center items-center">
                <Label className="text-[0.5rem] text-white font-bold">
                  APP
                </Label>
              </div>
            </div>
            <Label className="pl-6 text-md font-bold text-keiko-gray">
              Olá, eu sou o Keiko! 🐶
            </Label>
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
          height="auto"
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
