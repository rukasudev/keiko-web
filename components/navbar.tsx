import Link from 'next/link'
import { Button } from './ui/button'
import { LanguageSelect } from './language-select'

export const Navbar = () => {
  return (
    <div className="container">
      <nav className="flex justify-between items-center pt-4 text-white">
        <LanguageSelect></LanguageSelect>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="#" className="font-semibold">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#" className="font-semibold">
              Como configurar
            </Link>
          </li>
          <li>
            <Link href="#" className="font-semibold">
              Funcionalidades
            </Link>
          </li>
          <li>
            <Link href="#" className="font-semibold">
              Suporte
            </Link>
          </li>
          <li>
            <Button className="p-2 bg-keiko-orange font-bold">Convidar</Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
