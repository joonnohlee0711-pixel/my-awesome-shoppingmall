"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-foreground">
            MAISON
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#story" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
              브랜드 스토리
            </Link>
            <Link href="#values" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
              핵심 가치
            </Link>
            <Link href="#team" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
              팀 소개
            </Link>
            <Link href="#contact" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
              문의하기
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button type="button" className="p-2 hover:bg-muted transition-colors" aria-label="장바구니">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="md:hidden p-2 hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 토글"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link 
                href="#story" 
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                브랜드 스토리
              </Link>
              <Link 
                href="#values" 
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                핵심 가치
              </Link>
              <Link 
                href="#team" 
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                팀 소개
              </Link>
              <Link 
                href="#contact" 
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
