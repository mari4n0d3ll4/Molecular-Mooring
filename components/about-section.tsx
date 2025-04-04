"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations } from "@/lib/translations"

export default function AboutSection({ language = "en" }) {
  const t = translations[language]

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          {t.aboutMolecularMooring}
        </h2>
        <p className="text-purple-200/60 mt-2">{t.bridgeBiology}</p>
      </div>

      <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">{t.overview}</TabsTrigger>
          <TabsTrigger value="historical">{t.historical}</TabsTrigger>
          <TabsTrigger value="methodology">{t.methodology}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="bg-black/20 border-purple-500/20 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAY-DpRTZI1BK2KXVCy3sUQd4JV2l1YIuR.png"
                alt="Collection of colorful protein structures"
                layout="fill"
                objectFit="cover"
                className="opacity-15"
              />
            </div>
            <CardHeader>
              <CardTitle>{t.projectOverview}</CardTitle>
              <CardDescription className="text-purple-200">{t.projectDescription}</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none text-purple-200 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p>
                    {language === "en"
                      ? "Molecular Mooring is an interactive scientific outreach project that combines state-of-the-art protein structure prediction with metaphorical interpretation of human relationships. The project was developed at the "
                      : "Molecular Mooring es un proyecto interactivo de divulgación científica que combina la predicción de estructuras de proteínas de vanguardia con la interpretación metafórica de las relaciones humanas. El proyecto fue desarrollado en el "}
                    <a
                      href="https://sites.google.com/view/vibilab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-100 underline"
                    >
                      {language === "en"
                        ? "Virus Biophysics Research Laboratory (ViBiLab)"
                        : "Laboratorio de Investigación en Biofísica de Virus (ViBiLab)"}
                    </a>
                    {language === "en"
                      ? " at CIBION-CONICET in Buenos Aires, Argentina."
                      : " en CIBION-CONICET en Buenos Aires, Argentina."}
                  </p>

                  <blockquote className="border-l-4 border-purple-500 pl-4 italic">
                    {language === "en"
                      ? '"Engaging the public through state-of-the-art science is crucial for fostering trust and transparency in research, thereby promoting a more democratic scientific landscape. Structural biology, often perceived as abstract, can be made accessible by employing relatable analogies and interactive methods."'
                      : '"Involucrar al público a través de la ciencia de vanguardia es crucial para fomentar la confianza y la transparencia en la investigación, promoviendo así un panorama científico más democrático. La biología estructural, a menudo percibida como abstracta, puede hacerse accesible empleando analogías relacionables y métodos interactivos."'}
                  </blockquote>
                </div>

                <div className="relative h-[300px] rounded-lg overflow-hidden border border-purple-500/30 shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAY-DpRTZI1BK2KXVCy3sUQd4JV2l1YIuR.png"
                    alt="Collection of colorful protein structures predicted from participant names"
                    layout="fill"
                    objectFit="contain"
                    className="p-2"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-xs text-center text-purple-200">
                    {language === "en"
                      ? "Protein structures predicted from participant names during public science events"
                      : "Estructuras de proteínas predichas a partir de nombres de participantes durante eventos científicos públicos"}
                  </div>
                </div>
              </div>

              {/* Merged About This Tool and Bio-Seer Interpretations section */}
              <div className="mt-6 p-4 bg-black/30 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {language === "en"
                    ? "About This Tool & Bio-Seer Interpretations"
                    : "Sobre Esta Herramienta e Interpretaciones Bio-Videntes"}
                </h3>
                <p>
                  {language === "en"
                    ? "Molecular Mooring combines protein structure prediction with metaphorical interpretations of relationships to make complex biology concepts accessible. The Bio-Seer interpretations merge scientific understanding of protein structures with metaphorical insights into human relationships, drawing parallels between secondary structures (α-helices, β-sheets) and relationship stability patterns, amino acid interactions and emotional connection styles, and special residues and unique relationship qualities. While based on actual structural biology concepts, these interpretations are metaphorical in nature and should be enjoyed as a creative exploration of the intersection between science and human connection."
                    : "Molecular Mooring combina la predicción de estructuras de proteínas con interpretaciones metafóricas de relaciones para hacer accesibles conceptos complejos de biología. Las interpretaciones Bio-Videntes fusionan el entendimiento científico de las estructuras proteicas con perspectivas metafóricas sobre las relaciones humanas, estableciendo paralelismos entre estructuras secundarias (α-hélices, láminas β) y patrones de estabilidad en relaciones, interacciones de aminoácidos y estilos de conexión emocional, y residuos especiales y cualidades únicas de relación. Aunque se basan en conceptos reales de biología estructural, estas interpretaciones son de naturaleza metafórica y deben disfrutarse como una exploración creativa de la intersección entre ciencia y conexión humana."}
                </p>
              </div>

              {/* Structural Examples Gallery */}
              <div className="mt-6 p-4 bg-black/30 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {language === "en"
                    ? "Structural Examples & Bio-Seer Interpretations"
                    : "Ejemplos Estructurales e Interpretaciones Bio-Videntes"}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-black/40 rounded-lg overflow-hidden border border-purple-500/20">
                    <div className="relative h-48 w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01%20Anti%20parallel%20Beta%20sheet%20Brothers%20united%20but%20figthing%20a%20lot%20-OXfM96H89ivC8GFCG0wDlb67eCsJhQ.png"
                        alt="Anti-parallel Beta sheet structure"
                        layout="fill"
                        objectFit="contain"
                        className="p-2"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-white text-sm">
                        {language === "en" ? "Anti-parallel Beta Sheet" : "Lámina Beta Antiparalela"}
                      </h4>
                      <p className="text-xs text-purple-200 mt-1">
                        {language === "en"
                          ? "Bio-Seer interpretation: Brothers united but fighting a lot. These structures show strong connections but with competitive tension."
                          : "Interpretación Bio-Vidente: Hermanos unidos pero peleando mucho. Estas estructuras muestran conexiones fuertes pero con tensión competitiva."}
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-lg overflow-hidden border border-purple-500/20">
                    <div className="relative h-48 w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02%20Alpha%20helix%20established%20couple%20interaction%20different%203D%20orientations-bmN3GkaJy4b12VG0iYLImhWkZuzPz6.png"
                        alt="Alpha helix with different 3D orientations"
                        layout="fill"
                        objectFit="contain"
                        className="p-2"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-white text-sm">
                        {language === "en"
                          ? "Alpha Helices with Different Orientations"
                          : "Hélices Alfa con Diferentes Orientaciones"}
                      </h4>
                      <p className="text-xs text-purple-200 mt-1">
                        {language === "en"
                          ? "Bio-Seer interpretation: Established couple with stable interaction despite different perspectives. These structures show harmony in diversity."
                          : "Interpretación Bio-Vidente: Pareja establecida con interacción estable a pesar de diferentes perspectivas. Estas estructuras muestran armonía en la diversidad."}
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-lg overflow-hidden border border-purple-500/20">
                    <div className="relative h-48 w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03%20Disorder%20and%20Alpha%20helix%20desired%20couple%20no%20interaction-ABYbbcotim16hfmh8zDefTAaDD5454.png"
                        alt="Disorder and Alpha helix without interaction"
                        layout="fill"
                        objectFit="contain"
                        className="p-2"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-white text-sm">
                        {language === "en"
                          ? "Disorder and Alpha Helix (No Interaction)"
                          : "Desorden y Hélice Alfa (Sin Interacción)"}
                      </h4>
                      <p className="text-xs text-purple-200 mt-1">
                        {language === "en"
                          ? "Bio-Seer interpretation: Desired couple with no interaction. These structures represent potential connections that haven't formed yet."
                          : "Interpretación Bio-Vidente: Pareja deseada sin interacción. Estas estructuras representan conexiones potenciales que aún no se han formado."}
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-lg overflow-hidden border border-purple-500/20">
                    <div className="relative h-48 w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04%20Alpha%20helix%20stablished%20couple%20hydrophobic%20interaction-LLmkdr6XdXdatMxypVAq4xRgoJnpVI.png"
                        alt="Alpha helices with hydrophobic interaction"
                        layout="fill"
                        objectFit="contain"
                        className="p-2"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-white text-sm">
                        {language === "en"
                          ? "Alpha Helices with Hydrophobic Interaction"
                          : "Hélices Alfa con Interacción Hidrofóbica"}
                      </h4>
                      <p className="text-xs text-purple-200 mt-1">
                        {language === "en"
                          ? "Bio-Seer interpretation: Established couple with strong hydrophobic bonds. These structures show deep, private connections away from external influences."
                          : "Interpretación Bio-Vidente: Pareja establecida con fuertes enlaces hidrofóbicos. Estas estructuras muestran conexiones profundas y privadas, alejadas de influencias externas."}
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-lg overflow-hidden border border-purple-500/20 md:col-span-2">
                    <div className="relative h-48 w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05%20fully%20diserdered%20working%20coleages%20poor%20and%20hydrophobic%20interaction-Az2CzZDOxXgUKDRqNk5ORJWxsyJAvD.png"
                        alt="Fully disordered regions with poor interaction"
                        layout="fill"
                        objectFit="contain"
                        className="p-2"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-white text-sm">
                        {language === "en"
                          ? "Fully Disordered Regions with Poor Interaction"
                          : "Regiones Completamente Desordenadas con Interacción Pobre"}
                      </h4>
                      <p className="text-xs text-purple-200 mt-1">
                        {language === "en"
                          ? "Bio-Seer interpretation: Working colleagues with minimal hydrophobic interaction. These structures represent professional relationships with limited personal connection."
                          : "Interpretación Bio-Vidente: Colegas de trabajo con interacción hidrofóbica mínima. Estas estructuras representan relaciones profesionales con conexión personal limitada."}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-purple-300/70 mt-4 italic text-center">
                  {language === "en"
                    ? "These examples illustrate how different protein structures correlate with the Bio-Seer's metaphorical relationship interpretations."
                    : "Estos ejemplos ilustran cómo diferentes estructuras de proteínas se correlacionan con las interpretaciones metafóricas de relaciones del Bio-Vidente."}
                </p>
              </div>

              {/* Navigation guidance section */}
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/30 hover:bg-purple-900/40 transition-colors group">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    {language === "en" ? "Learn More" : "Aprende Más"}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-purple-200">
                    {language === "en"
                      ? "Explore our educational resources to understand the fundamentals of protein structure and prediction. Visit the Learn tab to discover more about amino acids, protein folding, and AlphaFold technology."
                      : "Explora nuestros recursos educativos para comprender los fundamentos de la estructura y predicción de proteínas. Visita la pestaña Aprender para descubrir más sobre aminoácidos, plegamiento de proteínas y tecnología AlphaFold."}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 text-purple-300 hover:text-purple-100"
                    onClick={() => window.dispatchEvent(new CustomEvent("navigateTab", { detail: "learn" }))}
                  >
                    {t.goToLearnTab}
                  </Button>
                </div>

                <div className="p-4 bg-pink-900/30 rounded-lg border border-pink-500/30 hover:bg-pink-900/40 transition-colors group">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    {language === "en" ? "Try It Yourself" : "Pruébalo Tú Mismo"}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-purple-200">
                    {language === "en"
                      ? "Ready to experience the Bio-Seer's insights? Head to the Predict tab to enter names, generate protein structures, and receive metaphorical interpretations of the molecular connections."
                      : "¿Listo para experimentar las perspectivas del Bio-Vidente? Dirígete a la pestaña Predecir para ingresar nombres, generar estructuras de proteínas y recibir interpretaciones metafóricas de las conexiones moleculares."}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 text-pink-300 hover:text-pink-100"
                    onClick={() => window.dispatchEvent(new CustomEvent("navigateTab", { detail: "predict" }))}
                  >
                    {t.goToPredictTab}
                  </Button>
                </div>
              </div>

              {/* Tools Used section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {language === "en" ? "Tools Used" : "Herramientas Utilizadas"}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="https://github.com/sokrypton/ColabFold"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/30 rounded border border-purple-500/30 hover:bg-purple-900/20 transition-colors flex flex-col items-center justify-center text-center"
                  >
                    <h4 className="font-medium text-white mb-1">{language === "en" ? "ColabFold" : "ColabFold"}</h4>
                    <ExternalLink className="h-4 w-4 text-purple-400 mt-1" />
                  </a>

                  <a
                    href="https://alphafold.ebi.ac.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/30 rounded border border-purple-500/30 hover:bg-purple-900/20 transition-colors flex flex-col items-center justify-center text-center"
                  >
                    <h4 className="font-medium text-white mb-1">{language === "en" ? "AlphaFold" : "AlphaFold"}</h4>
                    <ExternalLink className="h-4 w-4 text-purple-400 mt-1" />
                  </a>

                  <a
                    href="https://www.ncbi.nlm.nih.gov/Structure/icn3d/full.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/30 rounded border border-purple-500/30 hover:bg-purple-900/20 transition-colors flex flex-col items-center justify-center text-center"
                  >
                    <h4 className="font-medium text-white mb-1">{language === "en" ? "iCn3D" : "iCn3D"}</h4>
                    <ExternalLink className="h-4 w-4 text-purple-400 mt-1" />
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/mari4n0d3ll4/Molecular-Mooring.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {language === "en" ? "View Source Code" : "Ver Código Fuente"}
                  </Button>
                </a>
                <a
                  href="https://sites.google.com/view/vibilab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {language === "en" ? "Visit ViBiLab" : "Visitar ViBiLab"}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="historical">
          <Card className="bg-black/20 border-purple-500/20">
            <CardHeader>
              <CardTitle>{t.historicalExample}</CardTitle>
              <CardDescription className="text-purple-200">{t.nobelLaureates}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="w-full flex justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2009.56.05-lLCighrLnnBF0dEeOZdiTwcbyHo4i8.png"
                    alt="Example prediction showing the relationship between Nobel laureates"
                    width={800}
                    height={500}
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
                <div className="prose dark:prose-invert text-purple-200 max-w-3xl mx-auto">
                  <h4 className="text-white">
                    {language === "en"
                      ? "Molecular Mooring Example with Nobel Laureates César Milstein and Luis Federico Leloir"
                      : "Ejemplo de Molecular Mooring con los Premios Nobel César Milstein y Luis Federico Leloir"}
                  </h4>

                  {/* Steps through the process, mirroring the predict section */}
                  <div className="mt-4 p-4 bg-black/30 rounded-lg border border-purple-500/30">
                    <h5 className="text-white font-medium mb-2">
                      {language === "en" ? "Step-by-Step Process" : "Proceso Paso a Paso"}
                    </h5>
                    <p className="text-sm text-purple-300">
                      {language === "en"
                        ? "(A) Step 1 - Name Processing: The protein sequence input was derived from the names LISFEDERICLELIR and CESARMILSTEIN. (B) Step 2 - Structure Prediction: The predicted structure output colored by the pLDDT score (predicted Local Distance Different Test) and the expected distance error provided by the AlphaFold Server. The dimer is colored in sky and white, respectively, with the cysteine disulfide bridge highlighted in yellow. (C) Step 3 - Bio-Seer Analysis: The interaction surface is analyzed to generate a metaphorical interpretation."
                        : "(A) Paso 1 - Procesamiento de Nombres: La secuencia de proteínas de entrada se derivó de los nombres LISFEDERICLELIR y CESARMILSTEIN. (B) Paso 2 - Predicción de Estructura: La estructura predicha coloreada por la puntuación pLDDT (prueba de diferencia de distancia local predicha) y el error de distancia esperado proporcionado por el servidor AlphaFold. El dímero está coloreado en celeste y blanco, respectivamente, con el puente disulfuro de cisteína resaltado en amarillo. (C) Paso 3 - Análisis Bio-Vidente: Se analiza la superficie de interacción para generar una interpretación metafórica."}
                    </p>
                  </div>

                  {/* Structural characteristics */}
                  <div className="mt-4 p-4 bg-black/30 rounded-lg border border-purple-500/30">
                    <h5 className="text-white font-medium mb-2">
                      {language === "en" ? "Structural Characteristics" : "Características Estructurales"}
                    </h5>
                    <ul className="text-sm text-purple-300 space-y-1">
                      <li>
                        {language === "en"
                          ? "• Relationship Type: Work Colleagues"
                          : "• Tipo de Relación: Colegas de Trabajo"}
                      </li>
                      <li>
                        {language === "en"
                          ? "• Interaction Formation: Yes (strong interaction present)"
                          : "• Formación de Interacción: Sí (fuerte interacción presente)"}
                      </li>
                      <li>
                        {language === "en"
                          ? "• Secondary Structure: Fully α-Helix"
                          : "• Estructura Secundaria: Completamente α-Hélice"}
                      </li>
                      <li>
                        {language === "en"
                          ? "• Amino Acids in Contact: Mixed Hydrophobic & Electrostatic"
                          : "• Aminoácidos en Contacto: Mixto Hidrofóbico y Electrostático"}
                      </li>
                      <li>
                        {language === "en"
                          ? "• Special Feature: Disulfide Bridge (Cysteine-Cysteine)"
                          : "• Característica Especial: Puente Disulfuro (Cisteína-Cisteína)"}
                      </li>
                    </ul>
                  </div>

                  {/* Bio-Seer Interpretation */}
                  <div className="mt-4 p-4 bg-black/30 rounded-lg border border-purple-500/30">
                    <h5 className="text-white font-medium mb-2">
                      {language === "en" ? "Bio-Seer Interpretation" : "Interpretación del Bio-Vidente"}
                    </h5>
                    <p className="italic text-purple-100">
                      {language === "en"
                        ? '"This interaction would have been one of great cohesion, trust, and support—a strong and enduring bond between two brilliant scientific minds."'
                        : '"Esta interacción habría sido de gran cohesión, confianza y apoyo—un vínculo fuerte y duradero entre dos mentes científicas brillantes."'}
                    </p>
                  </div>

                  {/* Why this example was chosen */}
                  <h5 className="text-white font-medium mt-6 mb-2">
                    {language === "en" ? "Why We Chose This Example" : "Por Qué Elegimos Este Ejemplo"}
                  </h5>
                  <p className="mt-4">
                    {language === "en"
                      ? "We selected this example to highlight the relevance of public support to science and the impact of political stability on scientific progress. The story of these Nobel laureates illustrates how scientific lineages can flourish or fracture depending on societal conditions."
                      : "Seleccionamos este ejemplo para destacar la relevancia del apoyo público a la ciencia y el impacto de la estabilidad política en el progreso científico. La historia de estos premios Nobel ilustra cómo los linajes científicos pueden florecer o fracturarse dependiendo de las condiciones sociales."}
                  </p>

                  <p className="mt-4">
                    {language === "en"
                      ? "Both César Milstein and Luis Federico Leloir, Nobel Prize laureates, traced their scientific roots to Bernardo Houssay, Argentina's first Nobel laureate in Physiology or Medicine (1947). Leloir, mentored by Houssay, later introduced Milstein to Andrés Stoppani, his own mentor and another of Houssay's disciples. Milstein described himself as \"a great-grandson of Houssay,\" a lineage he reflected upon in a 1993 interview."
                      : 'Tanto Milstein como Leloir trazaron sus raíces científicas a Bernardo Houssay, el primer premio Nobel de Argentina en Fisiología/Medicina (1947). Leloir, mentoreado por Houssay, más tarde presentó a Milstein a Andrés Stoppani, otro de los discípulos de Houssay. Milstein se consideraba a sí mismo "un bisnieto de Houssay" como explicó en su entrevista de 1993.'}
                  </p>

                  <p>
                    {language === "en"
                      ? "Political instability and inadequate research support, however, disrupted this scientific legacy. After the 1962 military coup in Argentina, Milstein was forced to leave the country and continue his research abroad. He joined Fred Sanger's lab at the MRC Laboratory of Molecular Biology (LMB) in Cambridge, where he later received the Nobel Prize in 1984. His departure broke the chain of Nobel Prize-winning research within Argentina—a poignant reminder of how political upheaval can fracture scientific progress."
                      : "La inestabilidad política y el apoyo inadecuado a la investigación, sin embargo, interrumpieron este legado científico. Después del golpe militar de 1962 en Argentina, Milstein se vio obligado a abandonar el país y continuar su investigación en el extranjero. Se unió al laboratorio de Fred Sanger en el Laboratorio de Biología Molecular del MRC (LMB) en Cambridge, donde más tarde recibió el Premio Nobel en 1984. Su partida rompió la cadena de investigación ganadora del Premio Nobel dentro de Argentina, un recordatorio conmovedor de cómo la agitación política puede fracturar el progreso científico."}
                  </p>

                  <p>
                    {language === "en"
                      ? "Reflecting on Milstein's achievement, Leloir once remarked, \"Although he tried, he could not work in Argentina,\" emphasizing the toll of instability on scientific generations. Yet, despite the challenges, Argentina continues to produce first-class researchers, underscoring the enduring influence of Houssay's legacy."
                      : 'Reflexionando sobre el logro de Milstein, Leloir comentó una vez: "Aunque lo intentó, no pudo trabajar en Argentina", enfatizando el costo de la inestabilidad en las generaciones científicas. Sin embargo, a pesar de los desafíos, Argentina continúa produciendo investigadores de primera clase, subrayando la influencia duradera del legado de Houssay.'}
                  </p>

                  <p>
                    {language === "en"
                      ? 'The bio-seer concludes with a thought-provoking question: "How can a country hope to win a Nobel Prize when political challenges disrupt its scientific lineages?" This echoes Houssay\'s famous warning that "Argentina is too poor to afford to deprive itself of basic research," highlighting how political turmoil can undermine the pursuit of transformative advancements in biotechnology.'
                      : 'El bio-vidente concluye con una pregunta que invita a la reflexión: "¿Cómo puede un país esperar ganar un Premio Nobel cuando los desafíos políticos interrumpen sus linajes científicos?" Esto hace eco a la famosa advertencia de Houssay de que "Argentina es demasiado pobre para permitirse privarse de la investigación básica", destacando cómo la agitación política puede socavar la búsqueda de avances transformadores en biotecnología.'}
                  </p>

                  <p>
                    {language === "en"
                      ? 'Milstein, too, reflected on the scientific lineage that shaped him, asking, "But where does Houssay come from?"—a profound question that touches on the mystery of how human minds and scientific traditions are constructed. Milstein\'s approach to science was rooted in clarity and innovation. He often described the significance of monoclonal antibodies by comparing them to earlier, less precise methods of antibody isolation, which yielded heterogeneous mixtures. His breakthrough—producing highly specific, uniform antibodies—has since paved the way for next-generation therapies.'
                      : 'Milstein también reflexionó sobre el linaje científico que lo formó, preguntando: "¿Pero de dónde viene Houssay?", una pregunta profunda que toca el misterio de cómo se construyen las mentes humanas y las tradiciones científicas. El enfoque de Milstein hacia la ciencia estaba arraigado en la claridad y la innovación. A menudo describía la importancia de los anticuerpos monoclonales comparándolos con métodos anteriores menos precisos de aislamiento de anticuerpos, que producían mezclas heterogéneas. Su avance —producir anticuerpos altamente específicos y uniformes— ha allanado el camino para las terapias de próxima generación.'}
                  </p>

                  <p>
                    {language === "en"
                      ? "In its own humble way, this bio-seer aims to make structural biology more relatable and thought-provoking, inspired by Milstein's legacy of scientific curiosity and communication."
                      : "A su manera humilde, este bio-vidente pretende hacer que la biología estructural sea más accesible y estimulante, inspirado en el legado de curiosidad científica y comunicación de Milstein."}
                  </p>

                  <div className="mt-6 bg-black/30 rounded-lg border border-purple-500/30 p-4">
                    <h5 className="text-white font-medium mb-2">{language === "en" ? "References" : "Referencias"}</h5>
                    <div className="text-sm space-y-2">
                      <p>
                        <a
                          href="https://www.youtube.com/watch?v=5mCvO1Y_KVk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-300 hover:text-purple-100"
                        >
                          YouTube: Entrevista a César Milstein (1993)
                        </a>
                      </p>
                      <p> Charreau E. [Three Argentine Nobel Prizes]. Medicina (B Aires). 2005;65: 541–544.</p>
                      <p>
                        <a
                          href="https://www.nature.com/immersive/d41586-024-02897-2/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-300 hover:text-purple-100"
                        >
                          Nature Immersive: The human link between Nobel Prize winners
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://pymol.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-300 hover:text-purple-100"
                        >
                          PyMOL - Molecular visualization system
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methodology">
          <Card className="bg-black/20 border-purple-500/20">
            <CardHeader>
              <CardTitle>{t.methodologyTitle}</CardTitle>
              <CardDescription className="text-purple-200">{t.methodologyDescription}</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none text-purple-200">
              <h3 className="text-white font-medium mb-3">
                {language === "en" ? "Public Engagement & Events" : "Participación Pública y Eventos"}
              </h3>
              <p>
                {language === "en"
                  ? "The Molecular Mooring project has been presented at several public science events in Argentina, including:"
                  : "El proyecto Molecular Mooring ha sido presentado en varios eventos científicos públicos en Argentina, incluyendo:"}
              </p>

              <div className="bg-black/30 p-4 rounded-lg my-4 space-y-4">
                <div>
                  <h4 className="text-white font-medium">
                    {language === "en" ? "Night of the Museums 2024" : "Noche de los Museos 2024"}
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <a
                      href="https://c3.jefatura.gob.ar/la-noche-de-los-museos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-100 underline flex items-center"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {language === "en" ? "Official C3 Page" : "Página Oficial C3"}
                    </a>
                    <span className="text-purple-500">•</span>
                    <a
                      href="https://www.argentina.gob.ar/noticias/llega-la-noche-de-los-museos-al-c3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-100 underline flex items-center"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {language === "en" ? "Government Announcement" : "Anuncio Gubernamental"}
                    </a>
                    <span className="text-purple-500">•</span>
                    <a
                      href="https://www.instagram.com/reel/DCXW8Qry8cJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-100 underline flex items-center"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {language === "en" ? "Instagram Reel" : "Reel de Instagram"}
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium">
                    {language === "en" ? "Night of Science 2023" : "Noche de la Ciencia 2023"}
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <a
                      href="https://c3.jefatura.gob.ar/la-noche-de-la-ciencia-argentina/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-100 underline flex items-center"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {language === "en" ? "C3 Event Page" : "Página del Evento C3"}
                    </a>
                    <span className="text-purple-500">•</span>
                    <a
                      href="https://www.conicet.gov.ar/el-conicet-participo-de-la-primera-edicion-de-la-noche-de-la-ciencia-argentina/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-100 underline flex items-center"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {language === "en" ? "CONICET Article" : "Artículo de CONICET"}
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium">
                    {language === "en" ? "Night of the Museums 2023" : "Noche de los Museos 2023"}
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <a
                      href="https://www.instagram.com/reel/Cxp4FNELE8r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-100 underline flex items-center"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {language === "en" ? "Instagram Reel" : "Reel de Instagram"}
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-white font-medium mt-6 mb-3">
                {language === "en" ? "Technical Approach" : "Enfoque Técnico"}
              </h3>
              <p>
                {language === "en"
                  ? "The project uses AlphaFold v2.0 through the Google Colab platform to generate protein structure predictions from participant names, followed by visualization and interpretation through clairvoyant metaphors."
                  : "El proyecto utiliza AlphaFold v2.0 a través de la plataforma Google Colab para generar predicciones de estructura de proteínas a partir de nombres de participantes, seguido de visualización e interpretación a través de metáforas clarividentes."}
              </p>

              <p>
                {language === "en"
                  ? "This approach introduces a novel protocol that merges structural biology with familiar metaphors, making complex scientific concepts more accessible to the public. The enthusiastic engagement observed during these events underscores the potential of interactive science communication to spark curiosity and foster a deeper connection with molecular science."
                  : "Este enfoque introduce un protocolo novedoso que fusiona la biología estructural con metáforas familiares, haciendo que conceptos científicos complejos sean más accesibles para el público. La participación entusiasta observada durante estos eventos subraya el potencial de la comunicación científica interactiva para despertar la curiosidad y fomentar una conexión más profunda con la ciencia molecular."}
              </p>

              <h3 className="text-white font-medium mt-6 mb-3">
                {language === "en" ? "Research Impact & Significance" : "Impacto e Importancia de la Investigación"}
              </h3>
              <p>
                {language === "en"
                  ? "Protein structure interpretation remains a specialized skill among structural biologists, crucial for identifying functional mechanisms and key molecular properties. While AI-driven tools can predict structures, they still lack the contextual and historical knowledge necessary for meaningful narrative interpretation and interactive protein design."
                  : "La interpretación de la estructura de proteínas sigue siendo una habilidad especializada entre los biólogos estructurales, crucial para identificar mecanismos funcionales y propiedades moleculares clave. Si bien las herramientas impulsadas por IA pueden predecir estructuras, todavía carecen del conocimiento contextual e histórico necesario para la interpretación narrativa significativa y el diseño interactivo de proteínas."}
              </p>

              <p>
                {language === "en"
                  ? "Advances in Molecular Property Prediction (MPP) and Protein Property Prediction (PPP), along with platforms such as ProteinGPT, aim to bridge this gap. Beyond annotated protein datasets, AI models may also benefit from human-centered analogies, leveraging insights from social dynamics to improve deep-learning applications in protein interaction analysis and facilitating protein design."
                  : "Los avances en Predicción de Propiedades Moleculares (MPP) y Predicción de Propiedades de Proteínas (PPP), junto con plataformas como ProteinGPT, tienen como objetivo cerrar esta brecha. Más allá de los conjuntos de datos de proteínas anotados, los modelos de IA también pueden beneficiarse de analogías centradas en el ser humano, aprovechando conocimientos de la dinámica social para mejorar las aplicaciones de aprendizaje profundo en el análisis de interacción de proteínas y facilitar el diseño de proteínas."}
              </p>

              <p>
                {language === "en"
                  ? "Public engagement plays a fundamental role in fostering trust in scientific research, particularly as molecular science increasingly intersects with biopharmaceuticals, vaccine design, and diagnostics. Decentralized science (DeSci) initiatives further support this engagement, promoting community-driven approaches to funding and conducting research."
                  : "La participación pública juega un papel fundamental en fomentar la confianza en la investigación científica, particularmente a medida que la ciencia molecular se cruza cada vez más con biofarmacéuticos, diseño de vacunas y diagnósticos. Las iniciativas de ciencia descentralizada (DeSci) apoyan aún más esta participación, promoviendo enfoques impulsados por la comunidad para financiar y realizar investigaciones."}
              </p>

              <p>
                {language === "en"
                  ? "This is particularly relevant in developing countries, where scientific outreach is crucial for fostering awareness and participation. The proposed approach empowers individuals to contribute directly to research developments, creating a sense of ownership and shared purpose. As science becomes more decentralized, public involvement will be key in shaping research priorities and accelerating progress for both local and global communities."
                  : "Esto es particularmente relevante en países en desarrollo, donde la divulgación científica es crucial para fomentar la conciencia y la participación. El enfoque propuesto empodera a los individuos para contribuir directamente a los desarrollos de investigación, creando un sentido de propiedad y propósito compartido. A medida que la ciencia se vuelve más descentralizada, la participación pública será clave para dar forma a las prioridades de investigación y acelerar el progreso tanto para las comunidades locales como globales."}
              </p>

              <div className="bg-purple-900/30 p-4 rounded-lg mt-6">
                <h4 className="text-white">
                  {language === "en"
                    ? "Future Research Directions & Enhancements"
                    : "Direcciones Futuras de Investigación y Mejoras"}
                </h4>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-black/20 p-3 rounded-lg">
                    <h5 className="font-medium text-white mb-2">
                      {language === "en" ? "3D-Printed Models" : "Modelos Impresos en 3D"}
                    </h5>
                    <p className="text-sm">
                      {language === "en"
                        ? "Create physical representations of molecular interactions as souvenirs for participants."
                        : "Crear representaciones físicas de interacciones moleculares como recuerdos para los participantes."}
                    </p>
                  </div>

                  <div className="bg-black/20 p-3 rounded-lg">
                    <h5 className="font-medium text-white mb-2">
                      {language === "en" ? "Expanded Metaphorical Frameworks" : "Marcos Metafóricos Expandidos"}
                    </h5>
                    <p className="text-sm">
                      {language === "en"
                        ? "Develop intuitive analogies (e.g., relationships, teamwork) to interpret interactions."
                        : "Desarrollar analogías intuitivas (ej., relaciones, trabajo en equipo) para interpretar interacciones."}
                    </p>
                  </div>

                  <div className="bg-black/20 p-3 rounded-lg">
                    <h5 className="font-medium text-white mb-2">
                      {language === "en" ? "Mobile Applications" : "Aplicaciones Móviles"}
                    </h5>
                    <p className="text-sm">
                      {language === "en"
                        ? "Increase accessibility by offering a mobile-friendly version of the tool."
                        : "Aumentar la accesibilidad ofreciendo una versión móvil de la herramienta."}
                    </p>
                  </div>

                  <div className="bg-black/20 p-3 rounded-lg">
                    <h5 className="font-medium text-white mb-2">
                      {language === "en" ? "Binding Affinity Prediction" : "Predicción de Afinidad de Unión"}
                    </h5>
                    <p className="text-sm">
                      {language === "en"
                        ? "Estimate the strength of molecular interactions using docking scores."
                        : "Estimar la fuerza de las interacciones moleculares utilizando puntuaciones de acoplamiento."}
                    </p>
                  </div>

                  <div className="bg-black/20 p-3 rounded-lg md:col-span-2">
                    <h5 className="font-medium text-white mb-2">
                      {language === "en"
                        ? "Comparison with Known Complexes & Function Prediction"
                        : "Comparación con Complejos Conocidos y Predicción de Función"}
                    </h5>
                    <p className="text-sm">
                      {language === "en"
                        ? "Use AI (e.g., Foldseek Search Server) to identify similar structures and predict biological functions."
                        : "Usar IA (ej., Foldseek Search Server) para identificar estructuras similares y predecir funciones biológicas."}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

