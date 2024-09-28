'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { LanguageSelect } from './language-select'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { href: '#about-section', label: 'Sobre' },
    { href: '#advantage-section', label: 'Diferenciais únicos' },
    { href: '#how-to-use-section', label: 'Como utilizar' },
    { href: '#features-section', label: 'Funcionalidades' },
  ]

  return (
    <div className="md:pl-8 md:pr-8">
      <nav className="flex justify-between items-center md:pt-4 text-white relative">
        {/* Botão para telas menores */}
        <button
          className="container m-0 h-20 w-20 rounded-lg md:hidden z-50"
          onClick={handleClick}
        >
          <div className="grid justify-items-center gap-1.5">
            <span
              className={`h-1 w-8 rounded-full bg-white transition duration-200 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
            ></span>
            <span
              className={`h-1 w-8 rounded-full bg-white transition duration-200 ${isOpen ? 'scale-x-0' : ''}`}
            ></span>
            <span
              className={`h-1 w-8 rounded-full bg-white transition duration-200 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
            ></span>
          </div>
        </button>
        <LanguageSelect />

        {/* Camada de fundo com efeito de desfoque */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 backdrop-blur-md z-30"
            onClick={handleClick}
          />
        )}

        {/* Navbar para telas menores */}
        <div
          className={`fixed top-0 left-0 h-full bg-black transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col items-center justify-center w-3/4 z-40`}
        >
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-semibold text-white"
                  onClick={handleClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button className="p-2 bg-keiko-orange font-bold" asChild>
                <Link
                  href="https://keikobot.com/support"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="w-full text-white"
                  onClick={handleClick}
                >
                  Suporte
                </Link>
              </Button>
            </li>
          </ul>
        </div>

        {/* Navbar para telas médias e maiores */}
        <ul className="hidden md:flex md:flex-row space-x-6 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-semibold text-nowrap">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Button className="p-2 bg-keiko-orange font-bold" asChild>
              <Link
                href="https://keikobot.com/support"
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
