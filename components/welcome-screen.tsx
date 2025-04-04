"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Microscope, X, ArrowRight } from "lucide-react"

export function WelcomeScreen({ onDismiss, language = "en" }) {
  const [isVisible, setIsVisible] = useState(true)

  // Check if the welcome screen has been dismissed before
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome")
    if (hasSeenWelcome) {
      setIsVisible(false)
      onDismiss()
    }
  }, [onDismiss])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("hasSeenWelcome", "true")
    onDismiss()
  }

  const handleContinue = () => {
    setIsVisible(false)
    localStorage.setItem("hasSeenWelcome", "true")
    onDismiss()
  }

  if (!isVisible) return null

  const content = {
    en: {
      title: "Welcome to Molecular Mooring!",
      description: "Discover connections between names through protein structures",
      introduction:
        "This interactive experience uses AI-powered protein prediction to create metaphorical interpretations of relationships.",
      howItWorks: "How It Works:",
      steps: [
        {
          title: "Name Processing",
          description: "Convert names into amino acid sequences.",
        },
        {
          title: "Structure Prediction",
          description: "Analyze the 3D structure predicted by AlphaFold.",
        },
        {
          title: "Bio-Seer Analysis",
          description: "Receive a metaphorical interpretation of the connection.",
        },
      ],
      privacy:
        "🔒 Privacy: Names entered in this app are not recorded or stored. This site is anonymous and protects your privacy.",
      dismiss: "Dismiss",
      continue: "Begin",
    },
    es: {
      title: "¡Bienvenido a Molecular Mooring!",
      description: "Descubre conexiones entre nombres a través de estructuras proteicas",
      introduction:
        "Esta experiencia interactiva utiliza predicción de proteínas impulsada por IA para crear interpretaciones metafóricas de relaciones.",
      howItWorks: "Cómo Funciona:",
      steps: [
        {
          title: "Procesamiento de Nombres",
          description: "Convierte nombres en secuencias de aminoácidos.",
        },
        {
          title: "Predicción de Estructura",
          description: "Analiza la estructura 3D predicha por AlphaFold.",
        },
        {
          title: "Análisis Bio-Vidente",
          description: "Recibe una interpretación metafórica de la conexión.",
        },
      ],
      privacy:
        "🔒 Privacidad: Los nombres ingresados en esta aplicación no se registran ni almacenan. Este sitio es anónimo y protege su privacidad.",
      dismiss: "Descartar",
      continue: "Comenzar",
    },
  }

  const t = content[language]

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-black/80 border-purple-500/30">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 text-purple-300 hover:text-white hover:bg-purple-900/30"
            onClick={handleDismiss}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Microscope className="h-6 w-6 text-purple-400" />
            <CardTitle className="text-2xl text-white">{t.title}</CardTitle>
          </div>
          <CardDescription className="text-purple-200 text-base">{t.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-purple-100">{t.introduction}</p>

            <div>
              <h3 className="font-semibold text-white mb-3">{t.howItWorks}</h3>
              <div className="space-y-4">
                {t.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="text-purple-200 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
              <p className="text-purple-200 text-sm">{t.privacy}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="ghost"
            className="text-purple-300 hover:text-white hover:bg-purple-900/30"
            onClick={handleDismiss}
          >
            {t.dismiss}
          </Button>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={handleContinue}
          >
            {t.continue}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

