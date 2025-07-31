import { Heart, Sparkles, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary animate-sparkle" />
                <span className="text-xl font-bold text-magic">El Mago Toño</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Creando momentos mágicos e inolvidables desde Valladolid. 
                Magia de cerca que conecta corazones y despierta sonrisas.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Más de 15 años creando magia</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Navegación</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection("hero")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Mí
                </button>
                <button 
                  onClick={() => scrollToSection("shows")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Espectáculos
                </button>
                <button 
                  onClick={() => scrollToSection("gallery")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Galería
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Servicios</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Magia Familiar</div>
                <div>Eventos Corporativos</div>
                <div>Fiestas de Cumpleaños</div>
                <div>Bodas y Comuniones</div>
                <div>Eventos Infantiles</div>
                <div>Espectáculo Premium</div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+34 123 456 789</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">contacto@elmagotono.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Valladolid, España</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 pt-8 border-t border-border/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © {currentYear} El Mago Toño. Todos los derechos reservados.
              </div>
              <div className="text-sm text-muted-foreground">
                Hecho con <Heart className="w-4 h-4 text-red-500 inline mx-1" /> para crear magia
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer