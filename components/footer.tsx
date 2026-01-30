import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-wide">
              MAISON
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              트렌드를 넘어 시대를 초월하는 스타일을 제안합니다.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Dresses</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tops</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#story" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">브랜드 스토리</a></li>
              <li><a href="#values" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">핵심 가치</a></li>
              <li><a href="#team" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">팀 소개</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">채용 정보</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">고객 센터</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">배송 안내</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">반품 및 교환</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">사이즈 가이드</a></li>
              <li><a href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">문의하기</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2024 MAISON. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">개인정보처리방침</a>
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
