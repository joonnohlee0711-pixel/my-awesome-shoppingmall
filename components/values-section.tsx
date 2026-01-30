import { Leaf, Heart, Sparkles, Shield } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "지속 가능성",
    description: "환경을 생각하는 소재 선택과 윤리적 생산 과정을 통해 지구와 함께하는 패션을 실천합니다."
  },
  {
    icon: Heart,
    title: "장인 정신",
    description: "숙련된 장인들의 손끝에서 탄생하는 섬세한 디테일이 MAISON의 정체성을 완성합니다."
  },
  {
    icon: Sparkles,
    title: "시대를 초월하는 디자인",
    description: "트렌드에 흔들리지 않는, 오래도록 사랑받을 수 있는 클래식한 아름다움을 추구합니다."
  },
  {
    icon: Shield,
    title: "품질에 대한 약속",
    description: "엄격한 품질 관리를 통해 고객에게 최상의 제품만을 제공할 것을 약속드립니다."
  }
]

export function ValuesSection() {
  return (
    <section id="values" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Core Values
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
            우리가 믿는 가치
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group bg-card p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <span className="font-serif text-5xl font-light text-muted-foreground/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <value.icon className="h-8 w-8 text-accent mb-6" />
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
