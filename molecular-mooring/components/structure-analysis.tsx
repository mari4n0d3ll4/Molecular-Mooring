"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ExternalLink } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { translations } from "@/lib/translations"

export function StructureAnalysis({ processedNames, onSubmit, language = "en" }) {
  const [typeOfRelationship, setTypeOfRelationship] = useState("")
  const [interactionFormation, setInteractionFormation] = useState("")
  const [secondaryStructure, setSecondaryStructure] = useState("")
  const [aminoAcidsInContact, setAminoAcidsInContact] = useState("")
  const [specialAminoAcids, setSpecialAminoAcids] = useState("")
  const [error, setError] = useState("")

  const t = translations[language]

  const handleSubmit = () => {
    if (!typeOfRelationship || !interactionFormation || !secondaryStructure || !aminoAcidsInContact) {
      setError(
        language === "en" ? "Please complete all required fields" : "Por favor complete todos los campos requeridos",
      )
      return
    }

    const structuralData = {
      type_of_relationship: typeOfRelationship,
      interaction_formation: interactionFormation,
      secondary_structure: secondaryStructure,
      amino_acids_in_contact: aminoAcidsInContact,
      special_amino_acids: specialAminoAcids || "None",
    }

    onSubmit(structuralData)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-black/20 border-purple-500/20">
        <CardHeader>
          <CardTitle>{t.analyzeStructure}</CardTitle>
          <CardDescription className="text-purple-200">{t.afterGenerating}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-black/30 rounded border border-purple-500/30">
              <h3 className="font-semibold mb-2">{t.currentNames}</h3>
              <p className="font-mono text-purple-300">{processedNames.join(" ")}</p>
            </div>

            <a
              href="https://www.ncbi.nlm.nih.gov/Structure/icn3d/full.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-black/30 rounded border border-purple-500/30 hover:bg-black/40 transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-semibold">{t.openViewer}</h3>
                <p className="text-sm text-purple-300">{t.uploadPDB}</p>
              </div>
              <ExternalLink className="h-5 w-5 text-purple-400" />
            </a>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/20 border-purple-500/20">
        <CardHeader>
          <CardTitle>{t.enterStructural}</CardTitle>
          <CardDescription className="text-purple-200">{t.basedOnAnalysis}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>{t.typeOfRelationship} *</Label>
            <RadioGroup value={typeOfRelationship} onValueChange={setTypeOfRelationship}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Siblings/Brothers" id="relationship-siblings" />
                <Label htmlFor="relationship-siblings">{t.siblings}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Accomplished Couple" id="relationship-accomplished" />
                <Label htmlFor="relationship-accomplished">{t.accomplishedCouple}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Desired Couple" id="relationship-desired" />
                <Label htmlFor="relationship-desired">{t.desiredCouple}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Work Colleagues" id="relationship-colleagues" />
                <Label htmlFor="relationship-colleagues">{t.workColleagues}</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>{t.interactionFormation} *</Label>
            <RadioGroup value={interactionFormation} onValueChange={setInteractionFormation}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="interaction-yes" />
                <Label htmlFor="interaction-yes">{t.yes}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Partially" id="interaction-partially" />
                <Label htmlFor="interaction-partially">{t.partially}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="interaction-no" />
                <Label htmlFor="interaction-no">{t.no}</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>{t.secondaryStructure} *</Label>
            <RadioGroup value={secondaryStructure} onValueChange={setSecondaryStructure}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Fully α-Helix" id="structure-alpha" />
                <Label htmlFor="structure-alpha">{t.fullyAlphaHelix}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Fully β-Sheet" id="structure-beta" />
                <Label htmlFor="structure-beta">{t.fullyBetaSheet}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Fully Disordered" id="structure-disordered" />
                <Label htmlFor="structure-disordered">{t.fullyDisordered}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Mixed (α-Helix + β-Sheet)" id="structure-mixed-ab" />
                <Label htmlFor="structure-mixed-ab">{t.mixedAlphaBeta}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Mixed (α-Helix + Disordered)" id="structure-mixed-ad" />
                <Label htmlFor="structure-mixed-ad">{t.mixedAlphaDisordered}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Mixed (β-Sheet + Disordered)" id="structure-mixed-bd" />
                <Label htmlFor="structure-mixed-bd">{t.mixedBetaDisordered}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Mixed (α-Helix + β-Sheet + Disordered)" id="structure-mixed-abd" />
                <Label htmlFor="structure-mixed-abd">{t.mixedAll}</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>{t.aminoAcidsInContact} *</Label>
            <RadioGroup value={aminoAcidsInContact} onValueChange={setAminoAcidsInContact}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Fully Electrostatic (Charged: R, K, E, D)" id="contact-electrostatic" />
                <Label htmlFor="contact-electrostatic">{t.fullyElectrostatic}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Fully Hydrophobic (A, V, L, I, M, F, etc.)" id="contact-hydrophobic" />
                <Label htmlFor="contact-hydrophobic">{t.fullyHydrophobic}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Mixed Electrostatic & Hydrophobic" id="contact-mixed" />
                <Label htmlFor="contact-mixed">{t.mixedElectrostaticHydrophobic}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Polar-Polar (N, Q, S, T, Y, etc.)" id="contact-polar" />
                <Label htmlFor="contact-polar">{t.polarPolar}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="None" id="contact-none" />
                <Label htmlFor="contact-none">{t.none}</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>{t.specialAminoAcids}</Label>
            <RadioGroup value={specialAminoAcids} onValueChange={setSpecialAminoAcids}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Fluorescent (W, Y, F)" id="special-fluorescent" />
                <Label htmlFor="special-fluorescent">{t.fluorescent}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Disulfide Bridge (Cysteine-Cysteine)" id="special-disulfide" />
                <Label htmlFor="special-disulfide">{t.disulfideBridge}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Prolines (P)" id="special-prolines" />
                <Label htmlFor="special-prolines">{t.prolines}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Histidines (H)" id="special-histidines" />
                <Label htmlFor="special-histidines">{t.histidines}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="None" id="special-none" />
                <Label htmlFor="special-none">{t.none}</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          {error && (
            <Alert variant="destructive" className="w-full">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {t.generateInterpretation}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

