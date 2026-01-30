import Image from "next/image"

const team = [
  {
    name: "김서연",
    role: "Creative Director",
    image: "/images/team-1.jpg",
    description: "10년간의 글로벌 패션 하우스 경험을 바탕으로 MAISON의 크리에이티브 방향을 이끌고 있습니다."
  },
  {
    name: "박준혁",
    role: "Head Designer",
    image: "/images/team-2.jpg",
    description: "지속 가능한 소재와 혁신적인 디자인의 조화를 통해 새로운 패션의 가능성을 탐구합니다."
  },
  {
    name: "이하은",
    role: "Brand Director",
    image: "/images/team-3.jpg",
    description: "브랜드의 철학과 가치를 고객에게 전달하며, 진정성 있는 소통을 만들어갑니다."
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Our Team
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
            열정적인 팀
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            MAISON의 비전을 실현하기 위해 각 분야 최고의 전문가들이 함께합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm tracking-widest uppercase text-accent mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
