import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coffee, Users, Calendar, Mail } from "lucide-react"

export function DonationSection({ language = "en" }) {
  const content = {
    en: {
      title: "Support the Project",
      description: "Help us continue developing educational resources and community outreach",
      donationTitle: "Donate",
      donationText: "Your contribution helps fund materials for science outreach events",
      donationButton: "Support with Tecito",
      sessionsTitle: "In-Person Sessions",
      sessionsText: "We offer workshops and demonstrations for schools, museums, and community centers",
      trainingTitle: "BioSeer Training",
      trainingText: "Learn to interpret protein structures and communicate science through metaphor",
      contactButton: "Contact Us",
      contactTitle: "Contact Information",
      contactText: "Get in touch with us for collaborations, questions, or feedback",
      emailButton: "Send Email",
    },
    es: {
      title: "Apoya el Proyecto",
      description: "Ayúdanos a seguir desarrollando recursos educativos y divulgación comunitaria",
      donationTitle: "Donar",
      donationText: "Tu contribución ayuda a financiar materiales para eventos de divulgación científica",
      donationButton: "Apoyar con Tecito",
      sessionsTitle: "Sesiones Presenciales",
      sessionsText: "Ofrecemos talleres y demostraciones para escuelas, museos y centros comunitarios",
      trainingTitle: "Entrenamiento BioSeer",
      trainingText: "Aprende a interpretar estructuras de proteínas y comunicar ciencia a través de metáforas",
      contactButton: "Contáctanos",
      contactTitle: "Información de Contacto",
      contactText: "Ponte en contacto con nosotros para colaboraciones, preguntas o comentarios",
      emailButton: "Enviar Email",
    },
  }

  const t = content[language]

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          {t.title}
        </h2>
        <p className="text-purple-200/60 mt-2">{t.description}</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-black/20 border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-purple-400" />
              {t.donationTitle}
            </CardTitle>
            <CardDescription className="text-purple-200">{t.donationText}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              asChild
            >
              <a href="https://tecito.app/alemao" target="_blank" rel="noopener noreferrer">
                {t.donationButton}
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/20 border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-400" />
              {t.sessionsTitle}
            </CardTitle>
            <CardDescription className="text-purple-200">{t.sessionsText}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
              asChild
            >
              <a href="mailto:mdellarole@gmail.com?subject=Molecular%20Mooring%20In-Person%20Sessions">
                {t.contactButton}
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/20 border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-400" />
              {t.trainingTitle}
            </CardTitle>
            <CardDescription className="text-purple-200">{t.trainingText}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
              asChild
            >
              <a href="mailto:mdellarole@gmail.com?subject=Molecular%20Mooring%20BioSeer%20Training">
                {t.contactButton}
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/20 border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-purple-400" />
              {t.contactTitle}
            </CardTitle>
            <CardDescription className="text-purple-200">{t.contactText}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
              asChild
            >
              <a href="mailto:mdellarole@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                {t.emailButton}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-black/30 border border-purple-500/20 rounded-lg p-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center">
          {language === "en"
            ? "Open Lab Sessions & Public Events"
            : "Sesiones de Laboratorio Abierto y Eventos Públicos"}
        </h3>
        <p className="text-purple-200 mb-6 text-center">
          {language === "en"
            ? "Molecular Mooring has been featured at various public science events in Argentina. Join us at our next event!"
            : "Molecular Mooring ha sido presentado en varios eventos científicos públicos en Argentina. ¡Únete a nosotros en nuestro próximo evento!"}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://c3.jefatura.gob.ar/la-noche-de-los-museos/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-black/30 rounded-lg border border-purple-500/30 hover:bg-black/40 transition-colors"
          >
            <h4 className="font-semibold text-lg mb-2">
              {language === "en" ? "Night of the Museums" : "Noche de los Museos"}
            </h4>
            <p className="text-sm text-purple-300 mb-4">
              {language === "en"
                ? "An annual cultural event where museums and cultural spaces open their doors to the public at night."
                : "Un evento cultural anual donde museos y espacios culturales abren sus puertas al público por la noche."}
            </p>
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
              >
                {language === "en" ? "Learn More" : "Más Información"}
              </Button>
            </div>
          </a>

          <a
            href="https://c3.jefatura.gob.ar/la-noche-de-la-ciencia-argentina/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-black/30 rounded-lg border border-purple-500/30 hover:bg-black/40 transition-colors"
          >
            <h4 className="font-semibold text-lg mb-2">
              {language === "en" ? "Night of Science" : "Noche de la Ciencia"}
            </h4>
            <p className="text-sm text-purple-300 mb-4">
              {language === "en"
                ? "A special event dedicated to bringing science closer to the public through interactive experiences."
                : "Un evento especial dedicado a acercar la ciencia al público a través de experiencias interactivas."}
            </p>
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
              >
                {language === "en" ? "Learn More" : "Más Información"}
              </Button>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

