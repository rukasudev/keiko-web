import Link from 'next/link'
import { Button } from './ui/button'
import { LanguageSelect } from './language-select'

export const Navbar = () => {
  return (
    <div className="pl-8 pr-8">
      <nav className="flex justify-between items-center pt-4 text-white">
        <LanguageSelect />
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="#about-section" className="font-semibold">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#advantage-section" className="font-semibold">
              Diferenciais únicos
            </Link>
          </li>
          <li>
            <Link href="#how-to-use-section" className="font-semibold">
              Como utilizar
            </Link>
          </li>
          <li>
            <Link href="#features-section" className="font-semibold">
              Funcionalidades
            </Link>
          </li>
          <li>
            <Button className="p-2 bg-keiko-orange font-bold" asChild>
              <Link
                href="https:/keikobot.com/support"
                rel="noreferrer noopener"
                target="_blank"
                className="w-full"
              >
                Suporte
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
