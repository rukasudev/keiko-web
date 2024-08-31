import { Dots } from '@/components/dots'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r bg-hero-gradient-start flex flex-col">
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
          <Dots></Dots>
        </div>
      </div>
      <div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
