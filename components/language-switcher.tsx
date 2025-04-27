"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const languages = [
  { code: "bs", name: "Bosanski" },
  { code: "en", name: "English" },
]

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState("bs")

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)
    // In a real implementation, you would change the language here
    // For example: router.push(`?lang=${langCode}`)
  }

  const getCurrentLanguageName = () => {
    return languages.find((lang) => lang.code === currentLanguage)?.name || "Bosanski"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          {getCurrentLanguageName()}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={currentLanguage === language.code ? "bg-muted" : ""}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
