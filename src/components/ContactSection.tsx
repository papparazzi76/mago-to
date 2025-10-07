import { useState } from "react"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { MagicButton } from "./ui/magic-button"
import { useToast } from "@/hooks/use-toast"
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Calendar,
  Users,
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react"

const ContactSection = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    location: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto para crear tu evento mágico.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        location: "",
        message: ""
      })
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="w-6 h-6 text-primary animate-bounce" />
              <span className="text-secondary font-medium">Contratación</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-magic">Hagamos Magia</span>
              <br />
              <span className="text-foreground">Juntos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ¿Listo para crear momentos inolvidables? Cuéntame sobre tu evento 
              y diseñaremos juntos la experiencia perfecta.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-magic p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Solicita tu Presupuesto
                  </h3>
                  <p className="text-muted-foreground">
                    Completa el formulario y te enviaré una propuesta personalizada.
                  </p>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Teléfono</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Tu número de teléfono"
                    className="transition-all duration-300 focus:shadow-glow"
                  />
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Tipo de Evento *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md transition-all duration-300 focus:shadow-glow focus:border-primary"
                    >
                      <option value="">Selecciona tipo de evento</option>
                      <option value="cumpleanos">Cumpleaños</option>
                      <option value="boda">Boda</option>
                      <option value="comunion">Comunión</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="familiar">Reunión Familiar</option>
                      <option value="infantil">Fiesta Infantil</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Fecha del Evento</label>
                    <Input
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Número de Invitados</label>
                    <Input
                      name="guestCount"
                      type="number"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      placeholder="Ej: 25"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Ubicación</label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Ciudad, provincia"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Cuéntame sobre tu evento</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe tu evento, horarios preferidos, cualquier detalle especial..."
                    className="min-h-[120px] transition-all duration-300 focus:shadow-glow"
                  />
                </div>

                <MagicButton
                  type="submit"
                  variant="theatrical"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:animate-bounce" />
                      Solicitar Presupuesto
                    </>
                  )}
                </MagicButton>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="card-magic p-6">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Teléfono</div>
                      <div className="font-medium text-foreground">629 82 02 12</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium text-foreground">contacto@elmagotono.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Ubicación</div>
                      <div className="font-medium text-foreground">Valladolid, Castilla y León</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Availability */}
              <Card className="card-magic p-6">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Disponibilidad
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lunes - Viernes</span>
                    <span className="font-medium text-foreground">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sábados</span>
                    <span className="font-medium text-foreground">10:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Domingos</span>
                    <span className="font-medium text-foreground">12:00 - 20:00</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <CheckCircle className="w-4 h-4" />
                    <span>Respuesta garantizada en 24h</span>
                  </div>
                </div>
              </Card>

              {/* Quick Tips */}
              <Card className="card-magic p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary animate-sparkle" />
                  Tips para tu Evento
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-pulse"></div>
                    <span className="text-muted-foreground">
                      Reserva con 2-4 semanas de antelación para fechas especiales
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-pulse" style={{animationDelay: "0.2s"}}></div>
                    <span className="text-muted-foreground">
                      El espectáculo se adapta al espacio y número de invitados
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-pulse" style={{animationDelay: "0.4s"}}></div>
                    <span className="text-muted-foreground">
                      Incluyo todo el material necesario para el espectáculo
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection