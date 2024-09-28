import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-white flex flex-col md:pb-14">
      <div className="container flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:ml-32">
          <Image
            src={'/KEIKO_02.png'}
            alt="Keiko-Image-01"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col md:pl-28 md:w-1/2 md:mr-8">
          <Label className="text-3xl text-black font-bold text-pretty">
            Crie uma comunidade incrível com o Keiko!
          </Label>
          <Label className="text-base text-keiko-gray text-pretty">
            O Keiko é mais que um bot, ele é o seu companheiro de aventuras no
            Discord!
          </Label>
          <Label className="text-lg text-black font-semibold pt-4 text-pretty">
            Suporte humano e amigável!
          </Label>
          <Label className="text-sm text-keiko-gray text-pretty">
            Com o suporte sempre pronto para dar aquela mãozinha (patinha) com
            um sorriso! Nos chame utilizando /suporte!
          </Label>
          <Label className="text-lg text-black font-semibold pt-4 text-pretty">
            Feito para você e seu servidor sz
          </Label>
          <Label className="text-sm text-keiko-gray text-pretty">
            Desde comandos personalizados até mensagens de boas-vindas, o Keiko
            se adapta ao seu estilo.
          </Label>
        </div>
      </div>
    </section>
  )
}
