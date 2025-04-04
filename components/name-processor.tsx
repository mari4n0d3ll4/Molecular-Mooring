"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, ArrowUpRight } from "lucide-react"
import { translations } from "@/lib/translations"

export default function NameProcessor({ onNamesProcessed, onSkipToStructureAnalysis, language = "en" }) {
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [processedName1, setProcessedName1] = useState("")
  const [processedName2, setProcessedName2] = useState("")
  const [error, setError] = useState("")

  const t = translations[language]

  const validAminoAcids = "ACDEFGHIKLMNPQRSTVWY"

  const processName = (name: string) => {
    // Remove spaces and special characters, convert to uppercase
    const cleanName = name.toUpperCase().replace(/[^A-Z]/g, "")

    // Filter out letters not in the amino acid code
    return cleanName
      .split("")
      .filter((char) => validAminoAcids.includes(char))
      .join("")
  }

  const handleProcess = () => {
    if (!name1.trim() || !name2.trim()) {
      setError(language === "en" ? "Please enter both names" : "Por favor ingrese ambos nombres")
      return
    }

    const processed1 = processName(name1)
    const processed2 = processName(name2)

    if (processed1.length === 0 || processed2.length === 0) {
      setError(
        language === "en"
          ? "After filtering, at least one name doesn't contain valid amino acid letters"
          : "Después de filtrar, al menos un nombre no contiene letras válidas de aminoácidos",
      )
      return
    }

    setProcessedName1(processed1)
    setProcessedName2(processed2)
    setError("")
  }

  const handleContinue = () => {
    onNamesProcessed([processedName1, processedName2])
  }

  const handleCopyToClipboard = () => {
    const textToCopy = `${processedName1} ${processedName2}`
    navigator.clipboard.writeText(textToCopy)
  }

  return (
    <div className="space-y-6">
      <div className="mb-4 flex items-center justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={onSkipToStructureAnalysis}
          className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
        >
          <ArrowUpRight className="h-4 w-4 mr-2" />
          {language === "en" ? "Skip to Structure Analysis" : "Ir directamente al Análisis de Estructura"}
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-black/20 border-purple-500/20">
          <CardHeader>
            <CardTitle>{language === "en" ? "Enter Names" : "Ingrese Nombres"}</CardTitle>
            <CardDescription className="text-purple-200">
              {language === "en"
                ? "Enter two names to convert into amino acid sequences"
                : "Ingrese dos nombres para convertir en secuencias de aminoácidos"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name1">{language === "en" ? "First Name" : "Primer Nombre"}</Label>
              <Input
                id="name1"
                placeholder={language === "en" ? "e.g., John Smith" : "ej., Juan Pérez"}
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="bg-black/30 border-purple-500/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name2">{language === "en" ? "Second Name" : "Segundo Nombre"}</Label>
              <Input
                id="name2"
                placeholder={language === "en" ? "e.g., Jane Doe" : "ej., María López"}
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="bg-black/30 border-purple-500/30"
              />
            </div>
            <div className="mt-2 text-xs text-purple-300 bg-purple-900/20 p-2 rounded-md border border-purple-500/20">
              <p>
                {language === "en"
                  ? "🔒 Privacy notice: Names entered are not recorded or stored. This site is anonymous and protects your privacy."
                  : "🔒 Aviso de privacidad: Los nombres ingresados no se registran ni almacenan. Este sitio es anónimo y protege su privacidad."}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleProcess}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {language === "en" ? "Process Names" : "Procesar Nombres"}
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-black/20 border-purple-500/20">
          <CardHeader>
            <CardTitle>{language === "en" ? "Processed Names" : "Nombres Procesados"}</CardTitle>
            <CardDescription className="text-purple-200">
              {language === "en" ? "Valid amino acid sequences" : "Secuencias válidas de aminoácidos"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {processedName1 && processedName2 ? (
              <>
                <div className="space-y-2">
                  <Label>{language === "en" ? "First Name (Processed)" : "Primer Nombre (Procesado)"}</Label>
                  <div className="p-2 bg-black/30 rounded border border-purple-500/30 font-mono">{processedName1}</div>
                </div>
                <div className="space-y-2">
                  <Label>{language === "en" ? "Second Name (Processed)" : "Segundo Nombre (Procesado)"}</Label>
                  <div className="p-2 bg-black/30 rounded border border-purple-500/30 font-mono">{processedName2}</div>
                </div>
                <div className="space-y-2">
                  <Label>{language === "en" ? "Combined Format" : "Formato Combinado"}</Label>
                  <div className="p-2 bg-black/30 rounded border border-purple-500/30 font-mono flex justify-between items-center">
                    <span>
                      {processedName1} {processedName2}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCopyToClipboard}
                      className="h-6 w-6 text-purple-400 hover:text-purple-300"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-[200px] text-purple-300">
                {language === "en" ? "Processed names will appear here" : "Los nombres procesados aparecerán aquí"}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {error && (
              <Alert variant="destructive" className="w-full">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {processedName1 && processedName2 && (
              <Button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {language === "en" ? "Continue to Structure Prediction" : "Continuar a Predicción de Estructura"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

