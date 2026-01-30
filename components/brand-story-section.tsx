import Image from "next/image"

export function BrandStorySection() {
  return (
    <section id="story" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-8">
              시간이 지나도
              <br />
              변하지 않는 가치
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                2018년, 서울 한남동의 작은 아틀리에에서 시작된 MAISON은 
                &apos;진정한 스타일은 시간을 초월한다&apos;는 철학을 바탕으로 
                설립되었습니다.
              </p>
              <p>
                우리는 빠르게 변하는 패션 트렌드 속에서도 변하지 않는 
                본질적인 아름다움을 추구합니다. 엄선된 소재와 장인정신이 
                깃든 제작 과정을 통해, 오래도록 함께할 수 있는 
                옷을 만들어갑니다.
              </p>
              <p>
                지속 가능한 패션을 향한 우리의 여정은 환경을 생각하는 
                소재 선택에서부터 윤리적인 생산 방식까지, 모든 과정에서 
                책임감 있는 선택을 실천합니다.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-4xl md:text-5xl font-medium text-foreground">7+</p>
                <p className="text-sm text-muted-foreground mt-2">Years of Excellence</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl font-medium text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground mt-2">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl font-medium text-foreground">100%</p>
                <p className="text-sm text-muted-foreground mt-2">Sustainable</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/brand-story.jpg"
                alt="MAISON 아틀리에"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
