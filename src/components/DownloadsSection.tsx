import { Download } from "lucide-react"
import { PokerButton } from "./ui/poker-button"
import cartelMago from "@/assets/cartel-mago-tono.webp"
import cartelHumor from "@/assets/cartel-humor.webp"

const posters = [
  {
    src: cartelMago,
    alt: "Cartel El Mago Toño - De ilusión también se vive",
    downloadUrl: "/downloads/cartel-mago-tono.webp",
    filename: "Cartel_El_Mago_Toño.webp",
  },
  {
    src: cartelHumor,
    alt: "Cartel El Mago Toño - Humor",
    downloadUrl: "/downloads/cartel-humor.webp",
    filename: "Cartel_El_Mago_Toño_Humor.webp",
  },
]

const DownloadsSection = () => {
  return (
    <section id="downloads" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Descargas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descarga los carteles promocionales en alta calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posters.map((poster, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="rounded-xl overflow-hidden shadow-magic border border-border/20">
                <img
                  src={poster.src}
                  alt={poster.alt}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <a
                href={poster.downloadUrl}
                download={poster.filename}
                className="inline-block"
              >
                <PokerButton suit="heart" size="lg">
                  <Download className="w-5 h-5" />
                  Descargar Cartel
                </PokerButton>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DownloadsSection
