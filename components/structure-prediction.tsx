"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Copy, Info, ArrowRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function StructurePrediction({ processedNames, onContinue, language = "en" }) {
  if (!processedNames || processedNames.length === 0) {
    return null
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(processedNames.join(" "))
  }

  return (
    <div className="space-y-6">
      <Card className="bg-black/20 border-purple-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-purple-400" />
            {language === "en" ? "Predict Protein Structure" : "Predecir Estructura de Proteína"}
          </CardTitle>
          <CardDescription className="text-purple-200">
            {language === "en"
              ? "Use the processed names with AlphaFold or ColabFold to generate a protein structure"
              : "Utilice los nombres procesados con AlphaFold o ColabFold para generar una estructura proteica"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-black/30 rounded border border-purple-500/30">
            <h3 className="font-semibold mb-2 text-white">{language === "en" ? "Your Sequence" : "Su Secuencia"}</h3>
            <div className="p-2 bg-black/20 rounded border border-purple-500/30 font-mono flex justify-between items-center">
              <span className="text-purple-200">{processedNames.join(" ")}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopyToClipboard}
                className="h-6 w-6 text-purple-400 hover:text-purple-300"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-center text-purple-100 mt-4 mb-4">
              {language === "en"
                ? "Copy your processed sequence and choose one of these prediction tools:"
                : "Copie su secuencia procesada y elija una de estas herramientas de predicción:"}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-6 bg-black/30 rounded border border-purple-500/30">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">AlphaFold 3</h3>
                  <p className="text-sm text-purple-300 mb-4">
                    {language === "en"
                      ? "Latest version with improved accuracy"
                      : "Última versión con precisión mejorada"}
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                      asChild
                    >
                      <a href="https://alphafoldserver.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {language === "en" ? "Open AlphaFold 3" : "Abrir AlphaFold 3"}
                      </a>
                    </Button>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" className="w-full">
                            <Info className="h-4 w-4 mr-2" />
                            {language === "en" ? "Instructions" : "Instrucciones"}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs bg-black/90 border-purple-500/30 text-purple-100">
                          <p className="text-xs">
                            {language === "en"
                              ? "Submit the protein name via the server link. Follow the on-screen instructions to complete your submission."
                              : "Envíe el nombre de la proteína a través del enlace del servidor. Siga las instrucciones en pantalla para completar su envío."}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center p-6 bg-black/30 rounded border border-purple-500/30">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">ColabFold</h3>
                  <p className="text-sm text-purple-300 mb-4">
                    {language === "en"
                      ? "Run AlphaFold in Google Colab (faster)"
                      : "Ejecute AlphaFold en Google Colab (más rápido)"}
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                      asChild
                    >
                      <a
                        href="https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {language === "en" ? "Open ColabFold" : "Abrir ColabFold"}
                      </a>
                    </Button>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" className="w-full">
                            <Info className="h-4 w-4 mr-2" />
                            {language === "en" ? "Instructions" : "Instrucciones"}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs bg-black/90 border-purple-500/30 text-purple-100">
                          <div className="text-xs space-y-1">
                            <p>
                              {language === "en"
                                ? "1. Requires Google login"
                                : "1. Requiere inicio de sesión en Google"}
                            </p>
                            <p>
                              {language === "en"
                                ? "2. Paste the protein name in query_sequence field"
                                : "2. Pegue el nombre de la proteína en el campo query_sequence"}
                            </p>
                            <p>
                              {language === "en"
                                ? "3. Click Run all (Run Time options bar)"
                                : "3. Haga clic en Ejecutar todo (barra de opciones de Run Time)"}
                            </p>
                            <p>
                              {language === "en"
                                ? "4. Accept warning and click Run Anyway"
                                : "4. Acepte la advertencia y haga clic en Ejecutar de todos modos"}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
            <h3 className="text-lg font-semibold text-white mb-2">
              {language === "en" ? "What to do next" : "Qué hacer a continuación"}
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-purple-200">
              <li>
                {language === "en"
                  ? "Submit your sequence to one of the prediction tools above"
                  : "Envíe su secuencia a una de las herramientas de predicción anteriores"}
              </li>
              <li>
                {language === "en"
                  ? "Download the PDB file once the prediction is complete"
                  : "Descargue el archivo PDB una vez que la predicción esté completa"}
              </li>
              <li>
                {language === "en"
                  ? "Continue to the next step to upload and analyze your structure"
                  : "Continúe al siguiente paso para cargar y analizar su estructura"}
              </li>
            </ol>

            <Button
              onClick={onContinue}
              className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {language === "en" ? "Continue to Structure Analysis" : "Continuar al Análisis de Estructura"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

