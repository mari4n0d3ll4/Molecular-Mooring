"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Share2 } from "lucide-react"
import { translations } from "@/lib/translations"

export function BioSeerInterpretation({ names, structuralData, language = "en" }) {
  const [interpretation, setInterpretation] = useState("")
  const [relationshipType, setRelationshipType] = useState("")
  const [intensity, setIntensity] = useState("")
  const [loading, setLoading] = useState(true)

  const t = translations[language]

  useEffect(() => {
    if (structuralData) {
      setLoading(true)
      // Simulate API call or processing time
      setTimeout(() => {
        generateInterpretation()
        setLoading(false)
      }, 1500)
    }
  }, [structuralData, language])

  const generateInterpretation = () => {
    // Generate relationship type based on secondary structure and the provided relationship type
    let relationship = ""

    // Base relationship description on the type_of_relationship
    switch (structuralData.type_of_relationship) {
      case "Siblings/Brothers":
        relationship = language === "en" ? "familial and supportive" : "familiar y de apoyo"
        break
      case "Accomplished Couple":
        relationship = language === "en" ? "established and harmonious" : "establecida y armoniosa"
        break
      case "Desired Couple":
        relationship = language === "en" ? "potential and aspirational" : "potencial y aspiracional"
        break
      case "Work Colleagues":
        relationship = language === "en" ? "professional and collaborative" : "profesional y colaborativa"
        break
      default:
        relationship = language === "en" ? "unique" : "única"
    }

    // Modify with secondary structure characteristics
    switch (structuralData.secondary_structure) {
      case "Fully α-Helix":
        relationship +=
          language === "en"
            ? ", with a stable and well-defined structure"
            : ", con una estructura estable y bien definida"
        break
      case "Fully β-Sheet":
        relationship +=
          language === "en"
            ? ", showing strong interconnected patterns"
            : ", mostrando patrones fuertemente interconectados"
        break
      case "Fully Disordered":
        relationship +=
          language === "en"
            ? ", characterized by flexibility and adaptability"
            : ", caracterizada por flexibilidad y adaptabilidad"
        break
      case "Mixed (α-Helix + β-Sheet)":
        relationship +=
          language === "en"
            ? ", balancing stability with interconnection"
            : ", equilibrando estabilidad con interconexión"
        break
      case "Mixed (α-Helix + Disordered)":
        relationship +=
          language === "en" ? ", combining structure with adaptability" : ", combinando estructura con adaptabilidad"
        break
      case "Mixed (β-Sheet + Disordered)":
        relationship +=
          language === "en"
            ? ", featuring both organized patterns and spontaneity"
            : ", presentando tanto patrones organizados como espontaneidad"
        break
      case "Mixed (α-Helix + β-Sheet + Disordered)":
        relationship +=
          language === "en"
            ? ", displaying a complex interplay of stability, connection, and flexibility"
            : ", mostrando una interacción compleja de estabilidad, conexión y flexibilidad"
        break
    }

    setRelationshipType(relationship)

    // Generate intensity based on interaction formation
    let intensityValue = ""
    switch (structuralData.interaction_formation) {
      case "Yes":
        intensityValue = language === "en" ? "strong and enduring" : "fuerte y duradera"
        break
      case "Partially":
        intensityValue = language === "en" ? "moderate and evolving" : "moderada y en evolución"
        break
      case "No":
        intensityValue = language === "en" ? "distant or potential" : "distante o potencial"
        break
      default:
        intensityValue = language === "en" ? "unique" : "única"
    }
    setIntensity(intensityValue)

    // Generate full interpretation
    let fullInterpretation =
      language === "en"
        ? `The molecular connection between ${names[0]} and ${names[1]} reveals a ${relationship} relationship with ${intensityValue} bonds. `
        : `La conexión molecular entre ${names[0]} y ${names[1]} revela una relación ${relationship} con vínculos ${intensityValue}. `

    // Add details based on amino acids in contact
    switch (structuralData.amino_acids_in_contact) {
      case "Fully Electrostatic (Charged: R, K, E, D)":
        fullInterpretation +=
          language === "en"
            ? "Their interaction is characterized by strong emotional charges, with moments of attraction and occasional repulsion. Like ionic bonds in proteins, they are drawn together by complementary energies, creating a dynamic that thrives on difference and balance. "
            : "Su interacción se caracteriza por fuertes cargas emocionales, con momentos de atracción y repulsión ocasional. Como los enlaces iónicos en las proteínas, son atraídos por energías complementarias, creando una dinámica que prospera en la diferencia y el equilibrio. "
        break
      case "Fully Hydrophobic (A, V, L, I, M, F, etc.)":
        fullInterpretation +=
          language === "en"
            ? "Their connection forms a protected space away from external pressures, creating an intimate sanctuary. Like hydrophobic residues clustering together, they find comfort and stability in their shared retreat from the outside world. "
            : "Su conexión forma un espacio protegido alejado de presiones externas, creando un santuario íntimo. Como residuos hidrofóbicos agrupándose, encuentran comodidad y estabilidad en su retiro compartido del mundo exterior. "
        break
      case "Mixed Electrostatic & Hydrophobic":
        fullInterpretation +=
          language === "en"
            ? "Their relationship balances moments of charged emotional exchange with periods of quiet intimacy. This versatility allows them to navigate both social environments and private spaces with equal harmony. "
            : "Su relación equilibra momentos de intercambio emocional intenso con períodos de intimidad tranquila. Esta versatilidad les permite navegar tanto entornos sociales como espacios privados con igual armonía. "
        break
      case "Polar-Polar (N, Q, S, T, Y, etc.)":
        fullInterpretation +=
          language === "en"
            ? "Their connection is characterized by mutual support and nurturing interactions. Like polar amino acids forming hydrogen bonds, they create a network of subtle but meaningful exchanges that strengthen their relationship over time. "
            : "Su conexión se caracteriza por apoyo mutuo e interacciones nutritivas. Como aminoácidos polares formando enlaces de hidrógeno, crean una red de intercambios sutiles pero significativos que fortalecen su relación con el tiempo. "
        break
      case "None":
        fullInterpretation +=
          language === "en"
            ? "While currently maintaining their independence, there remains potential for meaningful interaction under the right conditions. "
            : "Mientras mantienen actualmente su independencia, existe potencial para una interacción significativa bajo las condiciones adecuadas. "
        break
    }

    // Add special characteristics if present
    if (structuralData.special_amino_acids && structuralData.special_amino_acids !== "None") {
      switch (structuralData.special_amino_acids) {
        case "Fluorescent (W, Y, F)":
          fullInterpretation +=
            language === "en"
              ? "Their connection has a luminous quality, visible to others and bringing light to dark situations. Like aromatic amino acids, they have the capacity to illuminate and transform their environment. "
              : "Su conexión tiene una cualidad luminosa, visible para otros y aportando luz a situaciones oscuras. Como aminoácidos aromáticos, tienen la capacidad de iluminar y transformar su entorno. "
          break
        case "Disulfide Bridge (Cysteine-Cysteine)":
          fullInterpretation +=
            language === "en"
              ? "Their bond contains rare but transformative connections that fundamentally change both individuals. Like cysteine bridges in proteins, these links provide exceptional strength and resilience through life's challenges. "
              : "Su vínculo contiene conexiones raras pero transformadoras que cambian fundamentalmente a ambos individuos. Como puentes de cisteína en proteínas, estos enlaces proporcionan fuerza excepcional y resiliencia ante los desafíos de la vida. "
          break
        case "Prolines (P)":
          fullInterpretation +=
            language === "en"
              ? "Their relationship introduces unexpected turns and pivots, creating a unique structural signature. Like proline in a protein chain, they bring creative disruption that leads to new possibilities. "
              : "Su relación introduce giros y pivotes inesperados, creando una firma estructural única. Como la prolina en una cadena proteica, aportan una disrupción creativa que conduce a nuevas posibilidades. "
          break
        case "Histidines (H)":
          fullInterpretation +=
            language === "en"
              ? "Their connection adapts to changing environments, sensing and responding to shifts in their surroundings. Like histidine residues, they have the wisdom to adjust their interaction based on the conditions they encounter. "
              : "Su conexión se adapta a entornos cambiantes, detectando y respondiendo a cambios en su entorno. Como residuos de histidina, tienen la sabiduría para ajustar su interacción según las condiciones que encuentran. "
          break
      }
    }

    // Add concluding insight based on relationship type and other factors
    fullInterpretation +=
      language === "en"
        ? "The Bio-Seer foresees a connection that " + generateConclusion(structuralData)
        : "El Bio-Vidente prevé una conexión que " + generateConclusion(structuralData)

    setInterpretation(fullInterpretation)
  }

  const generateConclusion = (data) => {
    // Generate different conclusions based on the combination of factors
    const relationshipType = data.type_of_relationship

    if (relationshipType === "Siblings/Brothers") {
      if (data.interaction_formation === "Yes") {
        return language === "en"
          ? "will continue to provide mutual support and understanding throughout life's journey."
          : "continuará brindando apoyo mutuo y comprensión a lo largo del viaje de la vida."
      } else if (data.interaction_formation === "Partially") {
        return language === "en"
          ? "has potential to grow stronger through shared experiences and open communication."
          : "tiene potencial para fortalecerse a través de experiencias compartidas y comunicación abierta."
      } else {
        return language === "en"
          ? "may benefit from intentional efforts to bridge the distance and rebuild connection."
          : "podría beneficiarse de esfuerzos intencionales para acortar la distancia y reconstruir la conexión."
      }
    } else if (relationshipType === "Accomplished Couple") {
      if (data.secondary_structure.includes("α-Helix")) {
        return language === "en"
          ? "will maintain its stability while continuing to evolve in meaningful ways."
          : "mantendrá su estabilidad mientras continúa evolucionando de manera significativa."
      } else if (data.secondary_structure.includes("Disordered")) {
        return language === "en"
          ? "thrives on adaptability and embracing change rather than rigid expectations."
          : "prospera en la adaptabilidad y en abrazar el cambio en lugar de expectativas rígidas."
      } else {
        return language === "en"
          ? "draws strength from its established patterns and shared history."
          : "obtiene fuerza de sus patrones establecidos e historia compartida."
      }
    } else if (relationshipType === "Desired Couple") {
      if (data.interaction_formation === "Yes") {
        return language === "en"
          ? "shows promising alignment and compatibility for a fulfilling partnership."
          : "muestra una prometedora alineación y compatibilidad para una asociación satisfactoria."
      } else if (data.amino_acids_in_contact === "Mixed Electrostatic & Hydrophobic") {
        return language === "en"
          ? "has significant potential if both parties can balance their different energies and needs."
          : "tiene un potencial significativo si ambas partes pueden equilibrar sus diferentes energías y necesidades."
      } else {
        return language === "en"
          ? "may develop with time and the right circumstances, though patience will be required."
          : "puede desarrollarse con el tiempo y las circunstancias adecuadas, aunque se requerirá paciencia."
      }
    } else if (relationshipType === "Work Colleagues") {
      if (data.special_amino_acids === "Fluorescent (W, Y, F)") {
        return language === "en"
          ? "will illuminate new possibilities and inspire creative collaboration."
          : "iluminará nuevas posibilidades e inspirará colaboración creativa."
      } else if (data.secondary_structure.includes("β-Sheet")) {
        return language === "en"
          ? "forms a strong foundation for productive teamwork and mutual support."
          : "forma una base sólida para el trabajo en equipo productivo y el apoyo mutuo."
      } else {
        return language === "en"
          ? "functions best when clear boundaries and expectations are established."
          : "funciona mejor cuando se establecen límites y expectativas claras."
      }
    } else {
      // Default conclusion if relationship type is not recognized
      return language === "en"
        ? "offers unique opportunities for growth and understanding."
        : "ofrece oportunidades únicas para el crecimiento y la comprensión."
    }
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(interpretation)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-black/20 border-purple-500/20">
        <CardHeader>
          <CardTitle>{t.bioSeerInterpretationTitle}</CardTitle>
          <CardDescription className="text-purple-200">{t.mysticalAnalysis}</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-16 h-16 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <p className="text-purple-300">{t.consulting}</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 relative">
                <div className="absolute -top-3 left-4 bg-purple-600 text-xs px-2 py-1 rounded-full">
                  {t.relationshipType}:{" "}
                  {language === "en"
                    ? structuralData.type_of_relationship
                    : translateRelationshipType(structuralData.type_of_relationship)}
                </div>
                <div className="absolute -top-3 right-4 bg-pink-600 text-xs px-2 py-1 rounded-full">
                  {t.bondIntensity}: {intensity}
                </div>
                <p className="text-lg leading-relaxed mt-4 text-purple-100">{interpretation}</p>
              </div>

              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyToClipboard}
                  className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  {t.copy}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  {t.share}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-black/20 border-purple-500/20">
        <CardHeader>
          <CardTitle>{t.aboutBioSeer}</CardTitle>
          <CardDescription className="text-purple-200">{t.understandingScience}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-invert max-w-none">
            <p>{t.bioSeerExplanation}</p>
            <ul className="list-disc pl-5 space-y-1 text-purple-200">
              <li>
                <span className="text-white font-medium">{t.secondaryStructuresExplanation}</span>
              </li>
              <li>
                <span className="text-white font-medium">{t.aminoAcidInteractionsExplanation}</span>
              </li>
              <li>
                <span className="text-white font-medium">{t.specialResiduesExplanation}</span>
              </li>
            </ul>
            <p className="text-sm text-purple-300 mt-4">{t.disclaimer}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Helper function to translate relationship types
function translateRelationshipType(type) {
  switch (type) {
    case "Siblings/Brothers":
      return "Hermanos"
    case "Accomplished Couple":
      return "Pareja Establecida"
    case "Desired Couple":
      return "Pareja Deseada"
    case "Work Colleagues":
      return "Colegas de Trabajo"
    default:
      return type
  }
}

