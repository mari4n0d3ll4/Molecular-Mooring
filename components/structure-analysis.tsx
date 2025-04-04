"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ExternalLink, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { translations } from "@/lib/translations"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { InfoIcon } from "lucide-react"

// Add this new component after the imports and before the StructureAnalysis component
function ICn3DGuide({ language = "en" }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-black/30 rounded border border-purple-500/30 overflow-hidden"
    >
      <AccordionItem value="guide" className="border-b-0">
        <AccordionTrigger className="px-4 py-3 text-sm font-medium hover:bg-purple-900/20 hover:no-underline">
          <div className="flex items-center">
            <InfoIcon className="h-4 w-4 mr-2 text-purple-400" />
            {language === "en"
              ? "How to load and analyze your protein structure"
              : "Cómo cargar y analizar su estructura de proteína"}
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4 pt-2">
          <div className="space-y-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium text-purple-300">
                {language === "en" ? "Step 1: Load your structure" : "Paso 1: Cargue su estructura"}
              </h4>
              <p className="text-purple-200">
                {language === "en"
                  ? "Go to 'Choose file' and select the PDB or GIF downloaded from ColabFold or AlphaFold, respectively."
                  : "Vaya a 'Elegir archivo' y seleccione el PDB o GIF descargado de ColabFold o AlphaFold, respectivamente."}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-purple-300">
                {language === "en" ? "Step 2: Handle the dialog" : "Paso 2: Maneje el diálogo"}
              </h4>
              <p className="text-purple-200">
                {language === "en"
                  ? "A 'Please input...' panel may appear. Close it. Then re-select the PDB from the white button menu via File → Open File → PDB Files (appendable). Click on 'Append'."
                  : "Puede aparecer un panel 'Por favor ingrese...'. Ciérrelo. Luego vuelva a seleccionar el PDB desde el menú del botón blanco a través de Archivo → Abrir archivo → Archivos PDB (anexables). Haga clic en 'Anexar'."}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-purple-300">
                {language === "en" ? "Step 3: View your structure" : "Paso 3: Vea su estructura"}
              </h4>
              <p className="text-purple-200">
                {language === "en"
                  ? "A cartoon of your protein pair should appear, showing the secondary structure elements like this:"
                  : "Debería aparecer una representación de su par de proteínas, mostrando los elementos de estructura secundaria como esta:"}
              </p>
              <div className="mt-2 rounded overflow-hidden border border-purple-500/30 max-w-[50%] mx-auto">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-94rszfMPJOy0Nreg1BmBgZMRtkUI6Y.png"
                  alt="Protein structure cartoon view"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-purple-300">
                {language === "en" ? "Step 4: View side chains" : "Paso 4: Ver cadenas laterales"}
              </h4>
              <p className="text-purple-200">
                {language === "en"
                  ? "Select Style → Side Chains → Lines to see the amino acid building blocks:"
                  : "Seleccione Estilo → Cadenas laterales → Líneas para ver los bloques de construcción de aminoácidos:"}
              </p>
              <div className="mt-2 rounded overflow-hidden border border-purple-500/30 max-w-[50%] mx-auto">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02-UqAyiqedjxbiPJ2y7HN6WP86shARE8.png"
                  alt="Protein structure with side chains"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-purple-300">
                {language === "en" ? "Step 5: Analyze interactions" : "Paso 5: Analizar interacciones"}
              </h4>
              <p className="text-purple-200">
                {language === "en"
                  ? "Go to Analysis → Seq. & Annotations → Annotations all and check the Details Panel to see interactions:"
                  : "Vaya a Análisis → Sec. y Anotaciones → Todas las anotaciones y revise el Panel de detalles para ver las interacciones:"}
              </p>
              <div className="mt-2 rounded overflow-hidden border border-purple-500/30 max-w-[50%] mx-auto">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03-d4AHvwrkf8idOyNpAHOfGby4vBfaZx.png"
                  alt="Sequence annotations panel"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-purple-300">
                {language === "en" ? "Step 6: Complete the form" : "Paso 6: Complete el formulario"}
              </h4>
              <p className="text-purple-200">
                {language === "en"
                  ? "Based on your analysis, complete the structural characteristics form below. For example, in the image above: Relationship: Desired Couple, Interaction: Yes, Secondary structure: Fully α-helix, Amino acids in contact: Mixed electrostatic and hydrophobic, Special amino acids: None."
                  : "Basado en su análisis, complete el formulario de características estructurales a continuación. Por ejemplo, en la imagen de arriba: Relación: Pareja deseada, Interacción: Sí, Estructura secundaria: Completamente α-hélice, Aminoácidos en contacto: Mixto electrostático e hidrofóbico, Aminoácidos especiales: Ninguno."}
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function StructureAnalysis({ processedNames, onSubmit, language = "en" }) {
  const [typeOfRelationship, setTypeOfRelationship] = useState("")
  const [interactionFormation, setInteractionFormation] = useState("")
  const [secondaryStructure, setSecondaryStructure] = useState("")
  const [aminoAcidsInContact, setAminoAcidsInContact] = useState("")
  const [specialAminoAcids, setSpecialAminoAcids] = useState("")
  const [error, setError] = useState("")
  const [pdbFile, setPdbFile] = useState(null)
  const [icn3dLoaded, setIcn3dLoaded] = useState(false)
  const [scriptLoadError, setScriptLoadError] = useState(false)
  const icn3dRef = useRef(null)

  const t = translations[language]

  // Initialize iCn3D when component is mounted
  useEffect(() => {
    // Add required CSS
    const addCSS = (url) => {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = url
      document.head.appendChild(link)
      return link
    }

    // Add required scripts
    const addScript = (url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script")
        script.src = url
        script.async = true
        script.onload = () => resolve(script)
        script.onerror = (e) => {
          console.error(`Failed to load script: ${url}`, e)
          setScriptLoadError(true)
          reject(new Error(`Failed to load script: ${url}`))
        }
        document.body.appendChild(script)
      })
    }

    // Load CSS and scripts in sequence
    const css1 = addCSS("https://www.ncbi.nlm.nih.gov/Structure/icn3d/lib/jquery-ui.min.css")
    const css2 = addCSS("https://www.ncbi.nlm.nih.gov/Structure/icn3d/icn3d.css")

    // Load scripts in sequence
    const loadScripts = async () => {
      try {
        await addScript("https://www.ncbi.nlm.nih.gov/Structure/icn3d/lib/jquery.min.js")
        await addScript("https://www.ncbi.nlm.nih.gov/Structure/icn3d/lib/jquery-ui.min.js")
        await addScript("https://cdn.jsdelivr.net/npm/three@0.137.0/build/three.min.js") // Use CDN fallback
        await addScript("https://www.ncbi.nlm.nih.gov/Structure/icn3d/icn3d.min.js")

        // Set flag when all scripts are loaded
        setIcn3dLoaded(true)
        setScriptLoadError(false)

        // Initialize viewer with default structure if no PDB file is loaded yet
        if (!pdbFile && icn3dRef.current) {
          // Ensure the container is ready
          icn3dRef.current.innerHTML = '<div id="icn3dwrap" style="width:100%; height:400px;"></div>'
          setTimeout(() => {
            initializeViewer()
          }, 200)
        }
      } catch (error) {
        console.error("Error loading iCn3D scripts:", error)
        setScriptLoadError(true)
      }
    }

    loadScripts()

    // Cleanup function
    return () => {
      try {
        if (css1) document.head.removeChild(css1)
        if (css2) document.head.removeChild(css2)
      } catch (e) {
        console.error("Error during cleanup:", e)
      }
    }
  }, [])

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

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setPdbFile(file)

      // Read the file and pass to iCn3D
      const reader = new FileReader()
      reader.onload = (e) => {
        const pdbContent = e.target.result

        // Initialize iCn3D with the PDB content
        if (icn3dLoaded && window.icn3d && window.$) {
          initializeViewerWithPDB(pdbContent)
        }
      }
      reader.readAsText(file)
    }
  }

  // Add these new helper functions for initializing the viewer
  const initializeViewer = () => {
    if (window.icn3d && window.$ && icn3dRef.current) {
      // Make sure we're not trying to initialize before the DOM is ready
      setTimeout(() => {
        try {
          // Clear previous content if any
          icn3dRef.current.innerHTML = '<div id="icn3dwrap" style="width:100%; height:400px;"></div>'

          const cfg = {
            divid: "icn3dwrap",
            width: "100%",
            height: "400px",
            resize: true,
            rotate: "right",
            mobilemenu: true,
            showcommand: false,
            showtitle: false,
          }

          // Use a default structure
          cfg["mmdbid"] = "7A3O"

          const icn3dui = new window.icn3d.iCn3DUI(cfg)
          icn3dui.show3DStructure()
        } catch (error) {
          console.error("Error initializing iCn3D:", error)
        }
      }, 100) // Small delay to ensure DOM is ready
    }
  }

  const initializeViewerWithPDB = (pdbContent) => {
    if (window.icn3d && window.$ && icn3dRef.current) {
      // Make sure we're not trying to initialize before the DOM is ready
      setTimeout(() => {
        try {
          // Clear previous content and create a fresh container
          icn3dRef.current.innerHTML = '<div id="icn3dwrap" style="width:100%; height:400px;"></div>'

          const cfg = {
            divid: "icn3dwrap",
            width: "100%",
            height: "400px",
            resize: true,
            rotate: "right",
            mobilemenu: true,
            showcommand: false,
            showtitle: false,
            pdbstr: pdbContent,
          }

          const icn3dui = new window.icn3d.iCn3DUI(cfg)
          icn3dui.show3DStructure()
        } catch (error) {
          console.error("Error initializing iCn3D with PDB:", error)
        }
      }, 100) // Small delay to ensure DOM is ready
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-black/20 border-purple-500/20">
        <CardHeader>
          <CardTitle>Structure Analysis</CardTitle>
          <CardDescription className="text-purple-200">
            {language === "en"
              ? "Analyze the protein structure and identify key features"
              : "Analice la estructura de la proteína e identifique características clave"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {processedNames && processedNames.length > 0 && (
              <div className="p-4 bg-black/30 rounded border border-purple-500/30">
                <h3 className="font-semibold mb-2">{t.currentNames}</h3>
                <p className="font-mono text-purple-300">{processedNames.join(" ")}</p>
              </div>
            )}

            <div className="bg-black/30 rounded border border-purple-500/30 overflow-hidden">
              <div className="p-4 flex justify-between items-center border-b border-purple-500/30">
                <h3 className="font-semibold">Analyze Structure in iCn3D</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                    asChild
                  >
                    <a
                      href="https://www.ncbi.nlm.nih.gov/Structure/icn3d/full.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {language === "en" ? "Open in Full View" : "Abrir en Vista Completa"}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="w-full p-4 bg-black/50">
                {scriptLoadError && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      {language === "en"
                        ? "Failed to load 3D viewer scripts. You can still continue with the analysis."
                        : "Error al cargar los scripts del visor 3D. Aún puede continuar con el análisis."}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-3">
                  <div className="mb-2">
                    <input
                      type="file"
                      accept=".pdb"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-purple-300
                        file:mr-4 file:py-2 file:px-4
                        file:rounded file:border-0
                        file:text-sm file:font-semibold
                        file:bg-purple-900 file:text-purple-100
                        hover:file:bg-purple-800
                        cursor-pointer"
                    />
                    <p className="text-xs text-purple-400 mt-1">
                      {language === "en"
                        ? "Upload your PDB file from AlphaFold or ColabFold"
                        : "Suba su archivo PDB de AlphaFold o ColabFold"}
                    </p>
                  </div>

                  <ICn3DGuide language={language} />
                </div>

                <div ref={icn3dRef} className="w-full h-[400px] border border-purple-500/20 rounded">
                  {/* The container will be created dynamically */}
                </div>
              </div>

              <div className="p-4 bg-black/40 border-t border-purple-500/30">
                <h4 className="text-sm font-medium text-purple-300 mb-2">
                  {language === "en"
                    ? "Featured Structure: Dengue Virus Envelope with Neutralizing Antibody (PDB: 7A3O)"
                    : "Estructura Destacada: Envoltura del Virus del Dengue con Anticuerpo Neutralizante (PDB: 7A3O)"}
                </h4>
                <p className="text-xs text-purple-200 mb-2">
                  {language === "en"
                    ? "This crystallographic structure shows a monoclonal antibody binding to and neutralizing the dengue virus envelope protein - a perfect example of structural biology's role in understanding disease mechanisms."
                    : "Esta estructura cristalográfica muestra un anticuerpo monoclonal que se une y neutraliza la proteína de la envoltura del virus del dengue - un ejemplo perfecto del papel de la biología estructural en la comprensión de los mecanismos de las enfermedades."}
                </p>
                <p className="text-xs text-purple-200 mb-2">
                  {language === "en"
                    ? "César Milstein's pioneering work on monoclonal antibodies revolutionized medicine and structural biology. His techniques made it possible to produce the specific antibodies used in structures like this one."
                    : "El trabajo pionero de César Milstein sobre anticuerpos monoclonales revolucionó la medicina y la biología estructural. Sus técnicas hicieron posible producir los anticuerpos específicos utilizados en estructuras como esta."}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <Button variant="link" size="sm" className="text-purple-400 p-0 h-auto" asChild>
                    <a href="https://www.rcsb.org/structure/7A3O" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {language === "en" ? "View on PDB" : "Ver en PDB"}
                    </a>
                  </Button>
                  <p className="text-xs text-purple-300">
                    {language === "en"
                      ? "Structural biology helps us fight diseases by revealing molecular interactions."
                      : "La biología estructural nos ayuda a combatir enfermedades revelando interacciones moleculares."}
                  </p>
                </div>
              </div>

              <div className="p-3 border-t border-purple-500/30 bg-black/40">
                <p className="text-xs text-purple-300 flex items-center">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  <a
                    href="https://www.ncbi.nlm.nih.gov/Structure/icn3d/icn3d.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-100"
                  >
                    {language === "en" ? "iCn3D Documentation" : "Documentación de iCn3D"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/20 border-purple-500/20">
        <CardHeader>
          <CardTitle>{t.enterStructural}</CardTitle>
          <CardDescription className="text-purple-200">{t.basedOnAnalysis}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs defaultValue="relationship" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="relationship">
                {language === "en" ? "Relationship Type" : "Tipo de Relación"}
              </TabsTrigger>
              <TabsTrigger value="structural">
                {language === "en" ? "Structural Features" : "Características Estructurales"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="relationship" className="space-y-4 pt-4">
              <div className="p-3 bg-purple-900/20 rounded border border-purple-500/30 mb-4">
                <p className="text-sm text-purple-200">
                  {language === "en"
                    ? "🔒 Privacy notice: Your relationship information is not recorded or stored."
                    : "🔒 Aviso de privacidad: Su información de relación no se registra ni almacena."}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">
                  {language === "en"
                    ? "What type of relationship exists between these partners?"
                    : "¿Qué tipo de relación existe entre estos participantes?"}
                </h3>
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
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Prefer Not To Say" id="relationship-private" />
                    <Label htmlFor="relationship-private">
                      {language === "en" ? "I prefer not to say" : "Prefiero no decir"}
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>

            <TabsContent value="structural" className="space-y-6 pt-4">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">
                  {language === "en"
                    ? "Do the molecules form an interaction?"
                    : "¿Las moléculas forman una interacción?"}
                </h3>
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

              <Separator />

              <div className="space-y-3">
                <h3 className="text-lg font-medium">
                  {language === "en"
                    ? "What secondary structure elements predominate?"
                    : "¿Qué elementos de estructura secundaria predominan?"}
                </h3>
                <RadioGroup value={secondaryStructure} onValueChange={setSecondaryStructure}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Fully α-Helix" id="structure-alpha" />
                    <Label htmlFor="structure-alpha">{t.fullyAlphaHelix}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Fully parallel β-Sheet" id="structure-parallel-beta" />
                    <Label htmlFor="structure-parallel-beta">
                      {language === "en" ? "Fully parallel β-Sheet" : "Completamente Lámina β paralela"}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Fully anti parallel β-Sheet" id="structure-antiparallel-beta" />
                    <Label htmlFor="structure-antiparallel-beta">
                      {language === "en" ? "Fully anti parallel β-Sheet" : "Completamente Lámina β antiparalela"}
                    </Label>
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

              <Separator />

              <div className="space-y-3">
                <h3 className="text-lg font-medium">
                  {language === "en"
                    ? "What types of amino acids form the contact interface?"
                    : "¿Qué tipos de aminoácidos forman la interfaz de contacto?"}
                </h3>
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

              <Separator />

              <div className="space-y-3">
                <h3 className="text-lg font-medium">
                  {language === "en"
                    ? "Are there any special amino acids at the interaction?"
                    : "¿Hay aminoácidos especiales en la interacción?"}
                </h3>
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

              <div className="p-3 bg-black/30 rounded-lg mt-2">
                <h4 className="text-sm font-medium text-purple-300 mb-1">
                  {language === "en"
                    ? "Need help identifying these features?"
                    : "¿Necesita ayuda para identificar estas características?"}
                </h4>
                <p className="text-xs text-purple-200">
                  {language === "en"
                    ? "Visit the Learn section for detailed explanations of these structural characteristics."
                    : "Visite la sección Aprender para obtener explicaciones detalladas de estas características estructurales."}
                </p>
                <Button
                  variant="link"
                  size="sm"
                  className="text-purple-400 p-0 h-auto mt-1"
                  onClick={() => document.querySelector('[value="learn"]')?.click()}
                >
                  {language === "en" ? "Go to Learn Section" : "Ir a la Sección Aprender"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
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

