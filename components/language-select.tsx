import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useContext, useEffect, useState } from 'react'
import { I18nContext } from '@/providers/i18nProvider'

export function LanguageSelect() {
  const { i18n, lang } = useContext(I18nContext)
  const router = useRouter()
  const [selectedLang, setSelectedLang] = useState(lang)

  const getPathForLang = (lang: string) => (lang === 'en' ? '/' : `/${lang}`)

  const handleLanguageChange = (newLang: string) => {
    setSelectedLang(newLang)
    localStorage.setItem('userLang', newLang)
    router.push(getPathForLang(newLang))
  }

  useEffect(() => {
    const savedLang = localStorage.getItem('userLang') || 'pt'
    if (savedLang !== selectedLang) {
      setSelectedLang(savedLang)
      router.push(getPathForLang(savedLang))
    }
  }, [selectedLang, router])

  return (
    <div className="container flex justify-end md:justify-between">
      <Select value={selectedLang} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[150px] bg-keiko-bg-primary">
          {selectedLang === 'pt' ? '🇧🇷' : '🇺🇸'}{' '}
          <SelectValue>
            {i18n.selectLanguage.languages[selectedLang === 'pt' ? 0 : 1]}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{i18n.selectLanguage.title}</SelectLabel>
            <SelectItem value="pt">
              🇧🇷 {i18n.selectLanguage.languages[0]}
            </SelectItem>
            <SelectItem value="en">
              🇺🇸 {i18n.selectLanguage.languages[1]}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
