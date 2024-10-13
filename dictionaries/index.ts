/* eslint-disable @typescript-eslint/no-explicit-any */
import 'server-only'

export interface Dictionary {
  [key: string]: any
}

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  pt: () => import('./pt.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
