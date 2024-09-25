import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function HowToUseSection() {
  return (
    <section className="bg-white flex flex-col justify-center items-center pl-28 pr-28 pt-16">
      <div className="container flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <Label className="text-3xl text-black font-bold">
            Configure tudo diretamente pelo Discord
          </Label>
          <Label className="text-base text-keiko-gray">
            Veja como é fácil chamar o Keiko e já sair se divertindo 🐶
          </Label>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center h-14 w-14 rounded-full bg-blue-300 space-y-6">
            <Image
              src={'/KEIKO_FACE_01.png'}
              alt="Keiko-Image-01"
              width={400}
              height={400}
            />
            <div className="flex flex-col text-center">
              <Label className="font-bold text-nowrap text-lg">
                1. Convide Keiko
              </Label>
              <Label className="text-sm text-keiko-gray">
                Adicione Keiko ao seu servidor do Discord.
              </Label>
            </div>
          </div>
          <div className="w-64 border-t-2 border-dashed" />
          <div className="flex flex-col items-center h-14 w-14 rounded-full bg-blue-300 space-y-6">
            <Image
              src={'/KEIKO_FACE_02.png'}
              alt="Keiko-Image-02"
              width={400}
              height={400}
            />
            <div className="flex flex-col text-center">
              <Label className="font-bold text-nowrap text-lg">
                2. Utilize os comandos com /
              </Label>
              <Label className="text-sm text-keiko-gray">
                Use o comando /ajuda para ver todas as funcionalidades.
              </Label>
            </div>
          </div>
          <div className="w-64 border-t-2 border-dashed" />
          <div className="flex flex-col items-center h-14 w-14 rounded-full bg-blue-300 space-y-6">
            <Image
              src={'/KEIKO_FACE_03.png'}
              alt="Keiko-Image-01"
              width={400}
              height={400}
            />
            <div className="flex flex-col text-center">
              <Label className="font-bold text-nowrap text-lg">
                3. Escolha e Configure
              </Label>
              <Label className="text-sm text-keiko-gray">
                Ative e personalize as funcionalidades como preferir.
              </Label>
            </div>
          </div>
        </div>
        <div className="pt-32">
          <Image
            src={'/KEIKO_HOW_TO_USE.gif'}
            alt="Keiko-Image-01"
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
