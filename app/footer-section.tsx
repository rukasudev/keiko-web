import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function FooterSection() {
  return (
    <>
      <section
        id="footer-section"
        className="flex container flex-col bg-white pt-8 pb-8"
      >
        <div className="flex items-start justify-center space-x-24">
          <div className="flex flex-col space-y-4">
            <Label className="text-keiko-gray text-md pb-4">AUUUUUU</Label>
            <Link href="#about-section" className="text-sm">
              Sobre
            </Link>
            <Link href="#advantage-section" className="text-sm">
              Diferenciais únicos
            </Link>
            <Link href="#features-section" className="text-sm">
              Funcionalidades
            </Link>
            <Link href="#how-to-use-section" className="text-sm">
              Como utilizar
            </Link>
            <Link
              href="https:/keikobot.com/support"
              rel="noreferrer noopener"
              target="_blank"
              className="text-sm"
            >
              Suporte
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Label className="text-keiko-gray text-md pb-4">Woof woof</Label>
            <Link href="#" className="text-sm">
              News
            </Link>
            <Link href="#" className="text-sm">
              Status Page
            </Link>
            <Link href="#" className="text-sm">
              Documentação
            </Link>
            <Link href="#" className="text-sm">
              Repositório
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Label className="text-keiko-gray text-md pb-4">Legal :p</Label>
            <Link href="#" className="text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-sm">
              Return Policy
            </Link>
          </div>
        </div>
        <div className="w-full h-1 border-t-2 mt-8 mb-8" />
        <div className="flex justify-center items-center space-x-1">
          <Label className="text-keiko-gray text-sm">
            © 2024 Copyright. Todos os direitos reservados.
          </Label>
          <Label className="text-keiko-gray text-sm">
            Feito com ❤️ por @rukasudev
          </Label>
        </div>
      </section>
    </>
  )
}
