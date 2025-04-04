import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CitationsDisclaimer({ language = "en" }) {
  const content = {
    en: {
      title: "",
      description: "",
      disclaimerText:
        "The Bio-Seer's interpretations are metaphorical in nature and should be enjoyed as a creative exploration of the intersection between science and human connection.",
      privacyText:
        "Names entered in this app are not recorded or stored. This site is anonymous and protects your privacy.",
    },
    es: {
      title: "",
      description: "",
      disclaimerText:
        "Las interpretaciones del Bio-Vidente son de naturaleza metafórica y deben disfrutarse como una exploración creativa de la intersección entre ciencia y conexión humana.",
      privacyText:
        "Los nombres ingresados en esta aplicación no se registran ni almacenan. Este sitio es anónimo y protege su privacidad.",
    },
  }

  const t = content[language]

  return (
    <Card className="bg-black/20 border-purple-500/20">
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription className="text-purple-200">{t.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-black/30 rounded border border-purple-500/30">
          <h3 className="text-lg font-semibold text-white mb-2">{language === "en" ? "References" : "Referencias"}</h3>
          <ul className="space-y-2 text-purple-200 text-sm">
            <li>
              <a
                href="https://academic.oup.com/bioinformatics/article/36/1/131/5520951"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-100 underline"
              >
                Wang, J., Youkharibache, P., Zhang, D., Lanczycki, C. J., Geer, R. C., Madej, T., Phan, L., Ward, M.,
                Lu, S., Marchler, G. H., Wang, Y., Bryant, S. H., Geer, L. Y., & Marchler-Bauer, A. (2020). iCn3D, a
                web-based 3D viewer for sharing 1D/2D/3D representations of biomolecular structures. Bioinformatics,
                36(1), 131-135.
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sokrypton/ColabFold"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-100 underline"
              >
                Mirdita M, Schütze K, Moriwaki Y, Heo L, Ovchinnikov S, Steinegger M. ColabFold: Making protein folding
                accessible to all. Nature Methods (2022).
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4 bg-black/30 rounded border border-purple-500/30">
          <p className="text-purple-200">🔒 {t.privacyText}</p>
        </div>
      </CardContent>
    </Card>
  )
}

