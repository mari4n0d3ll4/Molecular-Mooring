import { Heart } from "lucide-react"

export function Footer({ language = "en" }) {
  const content = {
    en: {
      nonProfit: "Molecular Mooring is a non-profit educational project",
      openAccess: "All resources are provided under open access principles",
      license: "Licensed under Creative Commons Attribution-NonCommercial 4.0 International",
      madeWith: "Made with",
      forScience: "for science education",
    },
    es: {
      nonProfit: "Molecular Mooring es un proyecto educativo sin fines de lucro",
      openAccess: "Todos los recursos se proporcionan bajo principios de acceso abierto",
      license: "Bajo licencia Creative Commons Attribution-NonCommercial 4.0 International",
      madeWith: "Hecho con",
      forScience: "para la educación científica",
    },
  }

  const t = content[language]

  return (
    <footer className="border-t border-purple-800/20 mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="text-purple-200/60 max-w-2xl">
            <p className="font-medium text-purple-300">{t.nonProfit}</p>
            <p className="mt-1">{t.openAccess}</p>
            <p className="text-sm mt-2">{t.license}</p>
          </div>

          <div className="flex items-center text-sm text-purple-300/60">
            <span>{t.madeWith}</span>
            <Heart className="h-3 w-3 mx-1 text-pink-500" />
            <span>{t.forScience}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

