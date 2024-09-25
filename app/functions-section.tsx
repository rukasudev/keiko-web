import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { BellRing, Globe, HandHelping, Swords } from 'lucide-react'

import Image from 'next/image'

export default function FunctionsSection() {
  return (
    <>
      <section className="flex flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FC9842"
            fillOpacity="1"
            d="M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,224C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className="bg-keiko-orange flex flex-col justify-center items-center pl-28 pr-28 pb-24">
          <div className="container flex flex-col items-center space-y-8 pt-24">
            <Label className="text-3xl text-white font-bold text-center">
              Descubra como o Keiko pode te ajudar!
            </Label>
          </div>
          <div className="container grid grid-cols-2 gap-24 pt-16 justify-items-stretch">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 w-16 h-16 flex items-center justify-center rounded-xl">
                <BellRing color="white" />
              </div>
              <div className="flex flex-col">
                <Label className="text-white text-xl font-bold">
                  Notificações
                </Label>
                <Label className="text-white/70 text-base max-w-sm">
                  Não perca nenhuma live ou vídeo! Keiko te avisa de tudo.
                </Label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 w-16 h-16 flex items-center justify-center rounded-xl">
                <Swords color="white" />
              </div>
              <div className="flex flex-col">
                <Label className="text-white text-xl font-bold">
                  Moderações
                </Label>
                <Label className="text-white/70 text-base max-w-sm text-balance">
                  Bloqueia links indesejados, dá boas-vindas aos novos membros,
                  adiciona cargos e muito mais!
                </Label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 w-16 h-16 flex items-center justify-center rounded-xl">
                <Globe color="white" />
              </div>
              <div className="flex flex-col">
                <Label className="text-white text-xl font-bold">
                  Traduções
                </Label>
                <Label className="text-white/70 text-base max-w-sm text-balance">
                  Quebra a barreira do idioma! O Keiko traduz as mensagens pra
                  você.
                </Label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 w-16 h-16 flex items-center justify-center rounded-xl">
                <HandHelping color="white" />
              </div>
              <div className="flex flex-col">
                <Label className="text-white text-xl font-bold">Suporte</Label>
                <Label className="text-white/70 text-base max-w-sm text-balance">
                  Sempre pronto para te ajudar com qualquer dúvida que surgir.
                </Label>
              </div>
            </div>
          </div>
          <div className="w-full h-1 border-t-2 mt-32 mb-16" />
          <div className="container flex space-y-2 space-x-2 items-center justify-center">
            <div className="flex flex-col space-y-2">
              <Label className="text-white text-3xl font-bold text-center">
                Pronto para turbinar seu servidor?
              </Label>
              <Label className="text-1xl text-white/70 text-center text-balance">
                Moderador, assistente e amigo! O Keiko faz tudo para sua
                comunidade ficar ainda mais divertida.
              </Label>
              <div className="flex items-center justify-center pt-4">
                <Button className="bg-keiko-blue w-1/3 font-bold" size="lg">
                  Convidar agora
                </Button>
              </div>
            </div>
            <Image
              src={'/KEIKO_03.png'}
              alt="Keiko-Image-03"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  )
}
