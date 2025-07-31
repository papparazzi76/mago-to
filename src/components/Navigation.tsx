import { useState, useEffect } from "react"
import { MagicButton } from "./ui/magic-button"
import { Menu, X, Sparkles } from "lucide-react"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-magic ${
      isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Sparkles className="w-6 h-6 text-primary animate-sparkle" />
            <span className="text-xl font-bold text-magic">El Mago Toño</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => scrollToSection("shows")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Espectáculos
            </button>
            <button 
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <MagicButton 
              variant="theatrical"
              onClick={() => scrollToSection("contact")}
            >
              Contratar
            </MagicButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/20 p-4">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Sobre Mí
              </button>
              <button 
                onClick={() => scrollToSection("shows")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Espectáculos
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Testimonios
              </button>
              <MagicButton 
                variant="theatrical"
                className="w-full mt-2"
                onClick={() => scrollToSection("contact")}
              >
                Contratar
              </MagicButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation