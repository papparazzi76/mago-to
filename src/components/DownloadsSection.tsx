import { Download } from "lucide-react"
import { PokerButton } from "./ui/poker-button"
import cartelMago from "@/assets/cartel-mago-tono.webp"

const DownloadsSection = () => {
  return (
    <section id="downloads" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Descargas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descarga el cartel promocional en alta calidad
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-4 max-w-md">
            <div className="rounded-xl overflow-hidden shadow-magic border border-border/20">
              <img
                src={cartelMago}
                alt="Cartel El Mago Toño - De ilusión también se vive"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <a
              href="/downloads/cartel-mago-tono.webp"
              download="Cartel_El_Mago_Toño.webp"
              className="inline-block"
            >
              <PokerButton suit="heart" size="lg">
                <Download className="w-5 h-5" />
                Descargar Cartel
              </PokerButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadsSection
