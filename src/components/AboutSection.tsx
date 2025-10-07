import { Card } from "./ui/card"
import { MagicButton } from "./ui/magic-button"
import { Users, Heart, Award, Sparkles } from "lucide-react"
import closeUpMagic from "@/assets/close-up-magic.jpg"

const AboutSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary animate-sparkle" />
              <span className="text-secondary font-medium">Conoce al Artista</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-magic">"El Mago Toño"</span>
              <br />
              <span className="text-foreground">Tu Mago Favorito</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Más de 25 años creando momentos mágicos únicos. Especialista en magia de cerca y magia de salón 
              que combina técnica, humor y cercanía para hacer de cada evento una experiencia memorable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src={closeUpMagic}
                alt="Toño realizando magia de cerca"
                className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-magic transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Personal story */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  La Pasión que se Convirtió en Profesión
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Desde pequeño, los trucos de cartas y la magia de cerca me fascinaron. 
                    Lo que comenzó como un hobby se transformó en mi pasión y, finalmente, 
                    en mi profesión.
                  </p>
                  <p>
                    Cada espectáculo es único porque cada audiencia es especial. Me especializo 
                    en crear momentos de asombro y diversión que conectan con personas de todas 
                    las edades, desde los más pequeños hasta los abuelos.
                  </p>
                  <p>
                    Mi estilo combina técnica depurada, humor natural y mucha cercanía. 
                    Porque la verdadera magia no está solo en el truco, sino en la emoción 
                    que despierta en quienes la viven.
                  </p>
                </div>
              </div>

              {/* Stats/Achievements */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="card-magic p-6 text-center group hover:shadow-glow transition-all duration-300">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3 group-hover:animate-bounce" />
                  <div className="text-2xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Eventos Realizados</div>
                </Card>
                
                <Card className="card-magic p-6 text-center group hover:shadow-glow transition-all duration-300">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-3 group-hover:animate-bounce" />
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Sonrisas Garantizadas</div>
                </Card>
              </div>

              {/* Specialties */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Mi Especialidad</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Magia de cerca íntima y sorprendente</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: "0.2s"}}></div>
                    <span className="text-muted-foreground">Humor adaptado a cada audiencia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: "0.4s"}}></div>
                    <span className="text-muted-foreground">Interacción directa con los invitados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: "0.6s"}}></div>
                    <span className="text-muted-foreground">Adaptación total al tipo de evento</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <MagicButton 
                  variant="theatrical" 
                  size="lg"
                  onClick={scrollToContact}
                  className="group"
                >
                  <Award className="w-5 h-5 group-hover:animate-bounce" />
                  Contrataciones
                </MagicButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
