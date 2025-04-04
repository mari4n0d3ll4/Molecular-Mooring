import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coffee, Users, Mail, Twitter } from "lucide-react"

export function DonationSection({ language = "en" }) {
  const content = {
    en: {
      title: "Support the Project",
      description: "Help us continue developing educational resources and community outreach",
      contactTitle: "Contact Us",
      contactText: "Get in touch for collaborations, questions, or to schedule a session",
      sessionsTitle: "In-Person Sessions & BioSeer Training",
      sessionsText:
        "We offer workshops, demonstrations, and training on interpreting protein structures and communicating science through metaphor for schools, museums, and community centers",
      emailButton: "Send Email",
      upcomingEvents: "Upcoming Events",
      stayAlert: "Stay alert for our next public science events in Argentina",
      followCibion: "Follow CIBION on X",
      donationTitle: "Molecular Offering",
      donationText:
        "Your energetic contribution helps stabilize our research bonds and catalyze new scientific reactions",
      donationButton: "Support with Tecito",
    },
    es: {
      title: "Apoya el Proyecto",
      description: "Ayúdanos a seguir desarrollando recursos educativos y divulgación comunitaria",
      contactTitle: "Contáctanos",
      contactText: "Ponte en contacto para colaboraciones, preguntas o para programar una sesión",
      sessionsTitle: "Sesiones Presenciales y Entrenamiento BioSeer",
      sessionsText:
        "Ofrecemos talleres, demostraciones y entrenamiento en interpretación de estructuras de proteínas y comunicación científica a través de metáforas para escuelas, museos y centros comunitarios",
      emailButton: "Enviar Email",
      upcomingEvents: "Próximos Eventos",
      stayAlert: "Mantente alerta para nuestros próximos eventos científicos públicos en Argentina",
      followCibion: "Sigue a CIBION en X",
      donationTitle: "Ofrenda Molecular",
      donationText:
        "Tu contribución energética ayuda a estabilizar nuestros enlaces de investigación y catalizar nuevas reacciones científicas",
      donationButton: "Apoyar con Tecito",
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

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-black/20 border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-400" />
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
              <a href="mailto:thebioseer@gmail.com?subject=Molecular%20Mooring%20Sessions">
                <Mail className="h-4 w-4 mr-2" />
                {t.emailButton}
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
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              asChild
            >
              <a href="mailto:thebioseer@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                {t.emailButton}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-black/30 border border-purple-500/20 rounded-lg p-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">{t.upcomingEvents}</h3>
            <p className="text-purple-200 mt-2">{t.stayAlert}</p>
          </div>
          <Button variant="outline" className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30" asChild>
            <a href="https://x.com/cibionconicet" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4 mr-2" />
              {t.followCibion}
            </a>
          </Button>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/30 max-w-md mx-auto backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
            <Coffee className="h-5 w-5 text-purple-400" />
            {t.donationTitle}
          </CardTitle>
          <CardDescription className="text-purple-200">{t.donationText}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-900/30"
            asChild
          >
            <a href="https://tecito.app/alemao" target="_blank" rel="noopener noreferrer">
              {t.donationButton}
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

