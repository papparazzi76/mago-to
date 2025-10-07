import { Card } from "./ui/card"
import { MagicButton } from "./ui/magic-button"
import { 
  Users, 
  Heart, 
  Building, 
  Baby, 
  GraduationCap, 
  Gift,
  Sparkles,
  Clock,
  MapPin,
  Star
} from "lucide-react"

const ShowsSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const shows = [
    {
      title: "Magia Familiar",
      description: "Espectáculos perfectos para reuniones familiares, donde abuelos, padres y niños disfrutan juntos de momentos mágicos únicos.",
      icon: Heart,
      features: ["Todas las edades", "Humor familiar", "Participación grupal", "Recuerdos inolvidables"],
      duration: "~60 min",
      audience: "8-50 personas",
      color: "text-red-500"
    },
    {
      title: "Eventos Corporativos",
      description: "Dinámicas de team building y entretenimiento corporativo que rompen el hielo y crean vínculos entre equipos.",
      icon: Building,
      features: ["Team building", "Networking", "Ambiente distendido", "Profesional"],
      duration: "~60 min",
      audience: "20-200 personas",
      color: "text-blue-500"
    },
    {
      title: "Fiestas de Cumpleaños",
      description: "Celebraciones mágicas que convierten cualquier cumpleaños en una fiesta única, adaptándome a la edad del protagonista.",
      icon: Gift,
      features: ["Cumpleañero protagonista", "Sorpresas personalizadas", "Diversión asegurada", "Fotos memorables"],
      duration: "~60 min",
      audience: "10-40 personas",
      color: "text-yellow-500"
    },
    {
      title: "Comuniones y Bodas",
      description: "Momentos especiales que requieren entretenimiento elegante. Magia que complementa perfectamente estas celebraciones.",
      icon: GraduationCap,
      features: ["Elegancia y clase", "Entretenimiento entre platos", "Adaptable al protocolo", "Momentos únicos"],
      duration: "~60 min",
      audience: "Variable",
      color: "text-purple-500"
    },
    {
      title: "Eventos Infantiles",
      description: "Espectáculos diseñados especialmente para los más pequeños, con magia adaptada, humor infantil y mucha participación.",
      icon: Baby,
      features: ["Lenguaje infantil", "Trucos visuales", "Participación activa", "Aprendizaje divertido"],
      duration: "~60 min",
      audience: "15-30 niños",
      color: "text-green-500"
    },
    {
      title: "Espectáculo Premium",
      description: "La experiencia completa de magia de cerca con múltiples rutinas, humor sofisticado y momentos absolutamente asombrosos.",
      icon: Star,
      features: ["Repertorio completo", "Múltiples rutinas", "Interacción premium", "Experiencia VIP"],
      duration: "~60 min",
      audience: "Variable",
      color: "text-primary"
    }
  ]

  return (
    <section id="shows" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary animate-sparkle" />
              <span className="text-secondary font-medium">Tipos de Espectáculos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-magic">Magia Adaptada</span>
              <br />
              <span className="text-foreground">a Cada Ocasión</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada evento es único y merece un espectáculo personalizado. 
              Descubre cómo puedo hacer de tu celebración algo verdaderamente especial.
            </p>
          </div>

          {/* Shows grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {shows.map((show, index) => {
              const IconComponent = show.icon
              return (
                <Card 
                  key={index} 
                  className="card-magic p-6 group hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    {/* Icon and title */}
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full bg-gradient-to-br from-background to-muted group-hover:shadow-md transition-all duration-300`}>
                        <IconComponent className={`w-6 h-6 ${show.color} group-hover:animate-bounce`} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-magic transition-colors">
                        {show.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {show.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>Duración: {show.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-secondary" />
                        <span>Audiencia: {show.audience}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {show.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" 
                               style={{animationDelay: `${featureIndex * 0.2}s`}}></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Coverage info */}
          <div className="bg-gradient-to-r from-card to-muted/50 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">Área de Cobertura</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Basado en <span className="text-primary font-semibold">Valladolid</span>, me desplazo 
              por toda <span className="text-secondary font-semibold">Castilla y León</span> y otras provincias. 
              ¡Consulta disponibilidad para tu ubicación!
            </p>
            <MagicButton 
              variant="theatrical" 
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-sparkle" />
              Consultar Disponibilidad
            </MagicButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowsSection