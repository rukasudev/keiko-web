import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function LanguageSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[150px] bg-hero-gradient-start">
        <SelectValue placeholder="🇧🇷 Português" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Idioma</SelectLabel>
          <SelectItem value="pt-br">🇧🇷 Português</SelectItem>
          <SelectItem value="en-us">🇺🇸 English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
