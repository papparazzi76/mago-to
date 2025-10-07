import { useEffect, useState } from "react"
import { MagicButton } from "./ui/magic-button"
import { Sparkles, Star, Heart, Diamond, Club } from "lucide-react"
import tonoHero from "@/assets/tono-hero.webp"

const HeroSection = () => {
  const [currentCard, setCurrentCard] = useState(0)
  
  const cardIcons = [
    { icon: Sparkles, color: "text-primary" },
    { icon: Heart, color: "text-red-500" },
    { icon: Diamond, color: "text-blue-500" },
    { icon: Club, color: "text-green-500" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardIcons.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToShows = () => {
    document.getElementById("shows")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={tonoHero}
          alt="El Mago Toño performing magic"
          className="w-full h-full object-contain object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Floating cards decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const IconComponent = cardIcons[i % cardIcons.length].icon
          return (
            <div
              key={i}
              className={`absolute animate-magic-float ${cardIcons[i % cardIcons.length].color}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <IconComponent className="w-6 h-6 opacity-20" />
            </div>
          )
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            {/* Magic greeting */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {cardIcons.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <IconComponent
                      key={index}
                      className={`w-8 h-8 transition-all duration-500 ${
                        index === currentCard 
                          ? `${item.color} scale-125 animate-sparkle` 
                          : "text-muted-foreground scale-100"
                      }`}
                    />
                  )
                })}
              </div>
              <span className="text-lg text-secondary font-medium">¡Prepárate para la magia!</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-magic">El Mago Toño</span>
              <br />
              <span className="text-foreground">Magia que</span>
              <br />
              <span className="text-secondary">Enamora</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Espectáculos de <span className="text-primary font-semibold">magia de cerca</span> y 
              humor que harán de tu evento una experiencia <span className="text-magic">inolvidable</span>. 
              Desde Valladolid para toda España.
            </p>

            {/* Key benefits */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20">
                <Star className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Magia de Cerca</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20">
                <Diamond className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Magia de Salón</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium">Todos los Públicos</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20">
                <Sparkles className="w-5 h-5 text-primary animate-sparkle" />
                <span className="text-sm font-medium">Humor & Diversión</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <MagicButton 
                variant="theatrical" 
                size="xl"
                onClick={scrollToContact}
                className="group"
              >
                <Sparkles className="w-5 h-5 group-hover:animate-sparkle" />
                Contratar Espectáculo
              </MagicButton>
              <MagicButton 
                variant="outline" 
                size="xl"
                onClick={scrollToShows}
              >
                Ver Espectáculos
              </MagicButton>
            </div>

            {/* Social proof */}
            <div className="mt-12 pt-8 border-t border-border/20">
              <p className="text-sm text-muted-foreground mb-4">Confianza de cientos de familias y empresas</p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">500+</div>
                  <div className="text-xs text-muted-foreground">Eventos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">15+</div>
                  <div className="text-xs text-muted-foreground">Años</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-xs text-muted-foreground">Diversión</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full p-1">
          <div className="w-1 h-3 bg-foreground/30 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection