import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-fashion.jpg"
          alt="MAISON 패션 컬렉션"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-6">
          Since 2018
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground leading-tight text-balance mb-8">
          패션의 본질을
          <br />
          담다
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          트렌드를 넘어 시대를 초월하는 스타일을 제안합니다.
          <br className="hidden md:block" />
          지속 가능한 패션의 미래를 함께 만들어갑니다.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#story" 
            className="group flex items-center gap-3 text-sm tracking-widest uppercase text-primary-foreground border border-primary-foreground/50 px-8 py-4 hover:bg-primary-foreground hover:text-foreground transition-all"
          >
            브랜드 스토리
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#collection" 
            className="group flex items-center gap-3 text-sm tracking-widest uppercase text-primary-foreground hover:text-primary-foreground/70 transition-colors"
          >
            컬렉션 보기
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/70">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-primary-foreground/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary-foreground animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
