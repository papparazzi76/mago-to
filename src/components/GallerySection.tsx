import { useState } from "react"
import { Card } from "./ui/card"
import { MagicButton } from "./ui/magic-button"
import { 
  Sparkles, 
  Play, 
  Image as ImageIcon,
  ExternalLink,
  Users,
  Heart,
  Star,
  Camera
} from "lucide-react"
import magicCards from "@/assets/magic-cards.jpg"

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("photos")

  const photos = [
    {
      id: 1,
      src: magicCards,
      alt: "Espectáculo de magia con cartas flotantes y partículas doradas.",
      category: "Magia de Cerca"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1520637836862-4d197d17c818?w=500",
      alt: "El Mago Toño actuando en un evento corporativo en Valladolid.",
      category: "Corporativo"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500",
      alt: "Niños disfrutando de un show de magia infantil en un cumpleaños.",
      category: "Infantil"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500",
      alt: "Actuación de magia y humor en una boda elegante.",
      category: "Bodas"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=500",
      alt: "Magia para una reunión familiar llena de sonrisas.",
      category: "Familiar"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500",
      alt: "Primer plano de un truco de cartas durante un espectáculo de magia de cerca.",
      category: "Magia de Cerca"
    }
  ]

  const videos = [
    {
      id: 1,
      title: "Magia de Cerca - Demo",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500",
      duration: "2:15",
      views: "1.2k"
    },
    {
      id: 2,
      title: "Evento Corporativo Completo",
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500",
      duration: "5:30",
      views: "890"
    },
    {
      id: 3,
      title: "Cumpleaños Infantil Highlights",
      thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500",
      duration: "3:45",
      views: "654"
    }
  ]

  const testimonials = [
    {
      name: "María González",
      event: "Boda en Valladolid",
      text: "Toño hizo que nuestra boda fuera aún más especial. Los invitados no paraban de hablar de su espectáculo.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=60"
    },
    {
      name: "Carlos Rodríguez",
      event: "Evento Corporativo",
      text: "Perfecta combinación de profesionalidad y diversión. Rompió el hielo entre equipos de manera brillante.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60"
    },
    {
      name: "Ana Martín",
      event: "Cumpleaños de mi hijo",
      text: "Los niños estaban hipnotizados. Toño tiene un don especial para conectar con los pequeños.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60"
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Camera className="w-6 h-6 text-primary animate-sparkle" />
              <span className="text-secondary font-medium">Galería & Testimonios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-magic">Momentos Mágicos</span>
              <br />
              <span className="text-foreground">Capturados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubre la magia en acción y lo que dicen las familias y empresas 
              que han vivido la experiencia.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-muted/50 rounded-full p-1 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "photos" 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                Fotos
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "videos" 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Play className="w-4 h-4" />
                Videos
              </button>
              <button
                onClick={() => setActiveTab("testimonials")}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "testimonials" 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Heart className="w-4 h-4" />
                Testimonios
              </button>
            </div>
          </div>

          {/* Photos Tab */}
          {activeTab === "photos" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 animate-fade-in">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs text-secondary mb-1">{photo.category}</div>
                      <div className="text-sm text-foreground font-medium">{photo.alt}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === "videos" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 animate-fade-in">
              {videos.map((video, index) => (
                <Card
                  key={video.id}
                  className="card-magic overflow-hidden group cursor-pointer hover:shadow-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-magic transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{video.views} visualizaciones</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === "testimonials" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 animate-fade-in">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="card-magic p-6 group hover:shadow-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-2 border-t border-border/20">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.event}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <MagicButton 
              variant="theatrical" 
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-sparkle" />
              Crea Tu Momento Mágico
            </MagicButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
