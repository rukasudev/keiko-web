'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { LanguageSelect } from './language-select'
import { useContext, useEffect, useState } from 'react'
import { I18nContext } from '@/providers/i18nProvider'

export const Navbar = () => {
  const { i18n } = useContext(I18nContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navItems = [
    { href: '#about-section', label: i18n.navbar.about },
    { href: '#advantage-section', label: i18n.navbar.uniqueFeatures },
    { href: '#how-to-use-section', label: i18n.navbar.howToUse },
    { href: '#features-section', label: i18n.navbar.features },
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
          className={`fixed top-0 left-0 h-full bg-keiko-orange transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col pl-8 items-start justify-center w-3/4 z-40`}
        >
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-semibold text-lg text-white"
                  onClick={handleClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button className="p-2 bg-keiko-bg-primary font-bold" asChild>
                <Link
                  href="https://keikobot.com/support"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="w-full text-white"
                  onClick={handleClick}
                >
                  {i18n.navbar.support}
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
                {i18n.navbar.support}
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
