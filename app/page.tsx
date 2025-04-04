"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NameProcessor from "@/components/name-processor"
import { StructureAnalysis } from "@/components/structure-analysis"
import { BioSeerInterpretation } from "@/components/bioseer-interpretation"
import { EducationalPosters } from "@/components/educational-posters"
import AboutSection from "@/components/about-section"
import { DonationSection } from "@/components/donation-section"
import { Card, CardContent } from "@/components/ui/card"
import { Steps } from "@/components/steps"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Footer } from "@/components/footer"
import { translations } from "@/lib/translations"
import { WelcomeScreen } from "@/components/welcome-screen"
import { CitationsDisclaimer } from "@/components/citations-disclaimer"
import { StructurePrediction } from "@/components/structure-prediction"
import { ProteinGallery } from "@/components/protein-gallery"
import { AppHeader } from "@/components/app-header"

export default function Home() {
  const [processedNames, setProcessedNames] = useState<string[]>([])
  const [structuralData, setStructuralData] = useState(null)
  const [activeTab, setActiveTab] = useState("about")
  const [predictStep, setPredictStep] = useState("name-processor")
  const [language, setLanguage] = useState("en")
  const [showWelcome, setShowWelcome] = useState(true)

  const t = translations[language]

  useEffect(() => {
    // Check if welcome has been dismissed
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome")
    if (hasSeenWelcome) {
      setShowWelcome(false)
    }

    // Add event listener for tab navigation
    const handleTabNavigation = (event) => {
      if (event.detail) {
        setActiveTab(event.detail)
      }
    }

    window.addEventListener("navigateTab", handleTabNavigation)

    return () => {
      window.removeEventListener("navigateTab", handleTabNavigation)
    }
  }, [])

  const handleNamesProcessed = (names: string[]) => {
    setProcessedNames(names)
    setPredictStep("structure-prediction")
  }

  const handleStructurePredicted = () => {
    setPredictStep("structure-analysis")
  }

  const handleStructuralDataSubmitted = (data) => {
    setStructuralData(data)
    setPredictStep("bioseer-interpretation")
  }

  const handleSkipToStructureAnalysis = () => {
    setPredictStep("structure-analysis")
  }

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
  }

  const handleDismissWelcome = () => {
    setShowWelcome(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-950 text-white">
      {showWelcome && <WelcomeScreen onDismiss={handleDismissWelcome} language={language} />}

      <AppHeader />

      <header className="mb-8">
        <div className="container mx-auto py-6 px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-sm text-purple-200/60">{t.subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSwitcher onLanguageChange={handleLanguageChange} />
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href="https://github.com/mari4n0d3ll4/Molecular-Mooring.git"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Github className="w-4 h-4" />
                  {t.openSource}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
            <TabsTrigger value="about">{t.about}</TabsTrigger>
            <TabsTrigger value="learn">{t.learn}</TabsTrigger>
            <TabsTrigger value="predict">{t.predict}</TabsTrigger>
            <TabsTrigger value="support">{t.support}</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <AboutSection language={language} />
            <div className="mt-8">
              <ProteinGallery language={language} />
            </div>
          </TabsContent>

          <TabsContent value="learn">
            <EducationalPosters language={language} />
          </TabsContent>

          <TabsContent value="predict" className="space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-semibold">{t.beginJourney}</h2>
              <p className="text-purple-200/60">{t.enterNames}</p>
            </div>

            <Steps
              activeStep={
                predictStep === "name-processor"
                  ? 1
                  : predictStep === "structure-prediction"
                    ? 2
                    : predictStep === "structure-analysis"
                      ? 3
                      : 4
              }
            />

            <Card className="bg-black/30 backdrop-blur border-purple-500/20">
              <CardContent className="p-6">
                <Tabs value={predictStep} onValueChange={setPredictStep} className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="name-processor">{t.processNames}</TabsTrigger>
                    <TabsTrigger value="structure-prediction" disabled={processedNames.length === 0}>
                      {language === "en" ? "Structure Prediction" : "Predicción de Estructura"}
                    </TabsTrigger>
                    <TabsTrigger value="structure-analysis">{t.structureAnalysis}</TabsTrigger>
                    <TabsTrigger value="bioseer-interpretation" disabled={!structuralData}>
                      {t.bioSeerInterpretation}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="name-processor">
                    <NameProcessor
                      onNamesProcessed={handleNamesProcessed}
                      language={language}
                      onSkipToStructureAnalysis={handleSkipToStructureAnalysis}
                    />
                  </TabsContent>

                  <TabsContent value="structure-prediction">
                    <StructurePrediction
                      processedNames={processedNames}
                      onContinue={handleStructurePredicted}
                      language={language}
                    />
                  </TabsContent>

                  <TabsContent value="structure-analysis">
                    <StructureAnalysis
                      processedNames={processedNames}
                      onSubmit={handleStructuralDataSubmitted}
                      language={language}
                    />
                  </TabsContent>

                  <TabsContent value="bioseer-interpretation">
                    <BioSeerInterpretation names={processedNames} structuralData={structuralData} language={language} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <CitationsDisclaimer language={language} />
          </TabsContent>

          <TabsContent value="support">
            <DonationSection language={language} />
          </TabsContent>
        </Tabs>
      </div>

      <Footer language={language} />
    </main>
  )
}

