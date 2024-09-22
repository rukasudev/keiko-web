import { Dots } from '@/components/dots'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r bg-keiko-bg-primary grid">
      <Navbar />
      <div className="container h-[500px] flex justify-center items-center">
        <div className="flex flex-col pl-24 pb-8 space-y-2">
          <Label className="text-5xl text-white font-black">Keiko Bot</Label>
          <Label className="text-1xl text-white w-[80%]">
            Um leal companheiro do Discord com moderações, utilidades e alertas!
            ✨
          </Label>
          <Button className="bg-keiko-orange w-1/3" size="lg">
            Convidar
          </Button>
        </div>
        <div className="flex items-center flex-col pb-8 pr-6">
          <Image
            src={'/KEIKO_01.png'}
            alt="Keiko-Image-01"
            width={350}
            height={350}
          />
          <div className="bg-white w-[90%] h-24 rounded-md">
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
        <div className="pb-64">
          <Dots />
        </div>
      </div>
      <div className="w-screen">
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
