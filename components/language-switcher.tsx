"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitcher({ onLanguageChange }) {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  useEffect(() => {
    // Initialize with stored preference or browser language
    const storedLang = localStorage.getItem("preferredLanguage")
    if (storedLang) {
      setCurrentLanguage(storedLang)
      onLanguageChange(storedLang)
    } else if (navigator.language.startsWith("es")) {
      setCurrentLanguage("es")
      onLanguageChange("es")
    }
  }, [onLanguageChange])

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang)
    localStorage.setItem("preferredLanguage", lang)
    onLanguageChange(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
        >
          <Globe className="h-4 w-4" />
          {currentLanguage === "en" ? "EN" : "ES"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/80 border-purple-500/30">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          className={`${currentLanguage === "en" ? "bg-purple-900/50" : ""} hover:bg-purple-900/30 cursor-pointer`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("es")}
          className={`${currentLanguage === "es" ? "bg-purple-900/50" : ""} hover:bg-purple-900/30 cursor-pointer`}
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

