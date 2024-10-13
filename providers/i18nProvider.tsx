'use client'

import { createContext, ReactNode } from 'react'
import { Dictionary } from '@/dictionaries'

interface I18nProviderProps {
  lang: string
  dictionary: Dictionary
  children: ReactNode
}

type I18nContextType = {
  i18n: Dictionary
  lang: string
}

export const I18nContext = createContext<I18nContextType>({
  i18n: {},
  lang: '',
})

export const I18nProvider: React.FC<I18nProviderProps> = ({
  dictionary,
  lang,
  children,
}) => {
  return (
    <I18nContext.Provider value={{ i18n: dictionary, lang }}>
      {children}
    </I18nContext.Provider>
  )
}
