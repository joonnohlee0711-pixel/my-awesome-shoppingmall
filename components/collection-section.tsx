import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CollectionSection() {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/collection.jpg"
                alt="MAISON 2024 컬렉??
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
              New Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-tight mb-8">
              2024 S/S
              <br />
              Collection
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              ?�연?�서 ?�감??받�? 2024 �??�름 컬렉?��? 
              ?�기?�인 ?�루?�과 ?�연?�러???�스처�? ?�해 
              ?�안?�면?�도 ?�련???��??�을 ?�안?�니??
            </p>
            <p className="text-primary-foreground/80 leading-relaxed mb-12">
              지??가?�한 ?�재?� ?��?�?초월?�는 ?�자?�이 만나 
              ?�경�??��???모두�??�각?�는 ?�로???�션??기�???
              ?�시?�니??
            </p>

            <a 
              href="/collection" 
              className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-primary-foreground border border-primary-foreground/50 px-8 py-4 hover:bg-primary-foreground hover:text-foreground transition-all"
            >
              컬렉???�러보기
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
