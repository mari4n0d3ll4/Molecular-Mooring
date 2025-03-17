import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations } from "@/lib/translations"

export function AboutSection({ language = "en" }) {
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
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">{t.overview}</TabsTrigger>
          <TabsTrigger value="historical">{t.historical}</TabsTrigger>
          <TabsTrigger value="methodology">{t.methodology}</TabsTrigger>
          <TabsTrigger value="research">{t.research}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="bg-black/20 border-purple-500/20">
            <CardHeader>
              <CardTitle>{t.projectOverview}</CardTitle>
              <CardDescription className="text-purple-200">{t.projectDescription}</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none text-purple-200">
              <p>
                {language === "en"
                  ? "Molecular Mooring is an interactive scientific outreach project that combines state-of-the-art protein structure prediction with metaphorical interpretation of human relationships. The project was developed at the "
                  : "Molecular Mooring es un proyecto interactivo de divulgación científica que combina la predicción de estructuras de proteínas de vanguardia con la interpretación metafórica de las relaciones humanas. El proyecto fue desarrollado en el "}
                <a
                  href="https://cibion.conicet.gov.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-100 underline"
                >
                  {language === "en"
                    ? "Centro de Investigaciones en Bionanociencias (CIBION-CONICET)"
                    : "Centro de Investigaciones en Bionanociencias (CIBION-CONICET)"}
                </a>
                {language === "en" ? " in Buenos Aires, Argentina, by the " : " en Buenos Aires, Argentina, por el "}
                <a
                  href="https://sites.google.com/view/vibilab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-100 underline"
                >
                  {language === "en"
                    ? "Virus Biophysics Research Laboratory"
                    : "Laboratorio de Investigación en Biofísica de Virus"}
                </a>
                .
              </p>

              <blockquote className="border-l-4 border-purple-500 pl-4 italic">
                {language === "en"
                  ? '"Engaging the public through state-of-the-art science is crucial for fostering trust and transparency in research, thereby promoting a more democratic scientific landscape. Structural biology, often perceived as abstract, can be made accessible by employing relatable analogies and interactive methods."'
                  : '"Involucrar al público a través de la ciencia de vanguardia es crucial para fomentar la confianza y la transparencia en la investigación, promoviendo así un panorama científico más democrático. La biología estructural, a menudo percibida como abstracta, puede hacerse accesible empleando analogías relacionables y métodos interactivos."'}
              </blockquote>

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
                <a href="https://cibion.conicet.gov.ar" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {language === "en" ? "Visit CIBION-CONICET" : "Visitar CIBION-CONICET"}
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
              <div className="grid md:grid-cols-2 gap-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2009.56.05-lLCighrLnnBF0dEeOZdiTwcbyHo4i8.png"
                  alt="Example prediction showing the relationship between Nobel laureates"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
                <div className="prose dark:prose-invert text-purple-200">
                  <h4 className="text-white">
                    {language === "en" ? "Leloir and Milstein Connection" : "Conexión entre Leloir y Milstein"}
                  </h4>
                  <p>
                    {language === "en"
                      ? "To illustrate the protocol, we applied it to an exemplary case using peptides derived from the names of the Argentinean Nobel laureates Luis Federico Leloir (1970) and César Milstein (1982). After excluding the letters absent from the amino acid code, the sequences LISFEDERICLELIR and CESARMILSTEIN were generated and analyzed using AlphaFold."
                      : "Para ilustrar el protocolo, lo aplicamos a un caso ejemplar utilizando péptidos derivados de los nombres de los premios Nobel argentinos Luis Federico Leloir (1970) y César Milstein (1982). Después de excluir las letras ausentes del código de aminoácidos, se generaron y analizaron las secuencias LISFEDERICLELIR y CESARMILSTEIN utilizando AlphaFold."}
                  </p>
                  <p>
                    <strong className="text-white">
                      {language === "en" ? "Bio-seer Interpretation:" : "Interpretación Bio-vidente:"}
                    </strong>
                    {language === "en"
                      ? ' "This interaction would have been one of great cohesion, trust, and support—a strong and enduring bond between two brilliant scientific minds."'
                      : ' "Esta interacción habría sido de gran cohesión, confianza y apoyo—un vínculo fuerte y duradero entre dos brillantes mentes científicas."'}
                  </p>
                  <p>
                    {language === "en"
                      ? "Both Milstein and Leloir traced their scientific roots to Bernardo Houssay, Argentina's first Nobel laureate in Physiology/Medicine (1947). The predicted structure shows two alpha helices stabilized by hydrophobic interactions (I-L), polar interactions (E-S), and covalent bonds (C-C)."
                      : "Tanto Milstein como Leloir trazaron sus raíces científicas a Bernardo Houssay, el primer premio Nobel de Argentina en Fisiología/Medicina (1947). La estructura predicha muestra dos hélices alfa estabilizadas por interacciones hidrofóbicas (I-L), interacciones polares (E-S) y enlaces covalentes (C-C)."}
                  </p>
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

              <p>
                {language === "en"
                  ? "Expanding this approach—through additions such as 3D-printed models of personalized structures—could further enhance its impact and engagement. By addressing timely questions in molecular biology through direct interaction, this public engagement activity demonstrates the potential to break trust barriers between researchers and society."
                  : "Expandir este enfoque—a través de adiciones como modelos impresos en 3D de estructuras personalizadas—podría mejorar aún más su impacto y participación. Al abordar preguntas oportunas en biología molecular a través de la interacción directa, esta actividad de participación pública demuestra el potencial para romper las barreras de confianza entre investigadores y sociedad."}
              </p>

              <div className="bg-purple-900/30 p-4 rounded-lg mt-4">
                <h4 className="text-white">{language === "en" ? "Future Enhancements" : "Mejoras Futuras"}</h4>
                <ul>
                  <li>
                    {language === "en"
                      ? "3D-printed models of personalized structures"
                      : "Modelos impresos en 3D de estructuras personalizadas"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Integration with AI-driven tools like ProteinGPT"
                      : "Integración con herramientas impulsadas por IA como ProteinGPT"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Expanded metaphorical frameworks for interpretation"
                      : "Marcos metafóricos expandidos para interpretación"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Mobile applications for wider accessibility"
                      : "Aplicaciones móviles para mayor accesibilidad"}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research">
          <Card className="bg-black/20 border-purple-500/20">
            <CardHeader>
              <CardTitle>{t.researchImpact}</CardTitle>
              <CardDescription className="text-purple-200">{t.researchDescription}</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none text-purple-200">
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

              <div className="bg-purple-900/30 p-4 rounded-lg mt-4">
                <h4 className="text-white">
                  {language === "en" ? "Future Research Directions" : "Direcciones Futuras de Investigación"}
                </h4>
                <ul>
                  <li>
                    {language === "en"
                      ? "Integration of AI-driven interpretation with human expertise"
                      : "Integración de interpretación impulsada por IA con experiencia humana"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Development of more sophisticated metaphorical frameworks"
                      : "Desarrollo de marcos metafóricos más sofisticados"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Quantitative assessment of public engagement impact"
                      : "Evaluación cuantitativa del impacto de la participación pública"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Cross-cultural adaptations of the Bio-Seer approach"
                      : "Adaptaciones interculturales del enfoque Bio-Vidente"}
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

