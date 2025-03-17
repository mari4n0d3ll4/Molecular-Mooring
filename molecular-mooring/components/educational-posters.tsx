import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { translations } from "@/lib/translations"

export function EducationalPosters({ language = "en" }) {
  const t = translations[language]

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          {t.educationalResources}
        </h2>
        <p className="text-purple-200/60 mt-2">{t.exploreBasics}</p>
      </div>

      <Tabs defaultValue="poster1" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="poster1">{t.buildingBlocks}</TabsTrigger>
          <TabsTrigger value="poster2">{t.proteinFolding}</TabsTrigger>
          <TabsTrigger value="poster3">{t.prediction}</TabsTrigger>
        </TabsList>

        <TabsContent value="poster1">
          <Card className="bg-black/20 border-purple-500/20">
            <CardHeader>
              <CardTitle>{t.poster1Title}</CardTitle>
              <CardDescription className="text-purple-200">{t.poster1Description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2010.17.13-x9zebOvgRhCoIxfDwdCRdsTpNVhNom.png"
                alt="Poster showing amino acid structures and properties"
                width={1200}
                height={800}
                className="rounded-lg"
              />
              <div className="prose dark:prose-invert mt-6 text-purple-200">
                <h4 className="text-white">{t.keyConcepts}</h4>
                <ul>
                  <li>
                    {language === "en"
                      ? "20 essential amino acids form the building blocks of proteins"
                      : "20 aminoácidos esenciales forman los bloques de construcción de las proteínas"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Each amino acid has unique chemical properties"
                      : "Cada aminoácido tiene propiedades químicas únicas"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Understanding these properties helps predict protein structure"
                      : "Entender estas propiedades ayuda a predecir la estructura de las proteínas"}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="poster2">
          <Card className="bg-black/20 border-purple-500/20">
            <CardHeader>
              <CardTitle>{t.poster2Title}</CardTitle>
              <CardDescription className="text-purple-200">{t.poster2Description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2010.17.26-BUC4zAW8uuhk2BjVJpe0Rz7y7yguw8.png"
                alt="Poster showing protein folding hierarchy"
                width={1200}
                height={800}
                className="rounded-lg"
              />
              <div className="prose dark:prose-invert mt-6 text-purple-200">
                <h4 className="text-white">{t.structuralHierarchy}</h4>
                <ul>
                  <li>
                    {language === "en"
                      ? "Primary structure: amino acid sequence"
                      : "Estructura primaria: secuencia de aminoácidos"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Secondary structure: local folding patterns"
                      : "Estructura secundaria: patrones de plegamiento local"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Tertiary structure: overall 3D shape"
                      : "Estructura terciaria: forma 3D general"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Quaternary structure: multiple chain interactions"
                      : "Estructura cuaternaria: interacciones de múltiples cadenas"}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="poster3">
          <Card className="bg-black/20 border-purple-500/20">
            <CardHeader>
              <CardTitle>{t.poster3Title}</CardTitle>
              <CardDescription className="text-purple-200">{t.poster3Description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2010.17.35-einGei89Npu32H5oZ9NGXJpMgGASOr.png"
                alt="Poster showing AlphaFold prediction process"
                width={1200}
                height={800}
                className="rounded-lg"
              />
              <div className="prose dark:prose-invert mt-6 text-purple-200">
                <h4 className="text-white">{t.alphafoldColabfold}</h4>
                <ul>
                  <li>
                    {language === "en"
                      ? "State-of-the-art protein structure prediction"
                      : "Predicción de estructura de proteínas de última generación"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Uses multiple sequence alignments"
                      : "Utiliza alineamientos de secuencias múltiples"}
                  </li>
                  <li>
                    {language === "en" ? "Accessible through Google Colab" : "Accesible a través de Google Colab"}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

