"use client"

import React from "react"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
            MAISON의 소식을
            <br />
            가장 먼저 받아보세요
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            새로운 컬렉션 출시, 특별한 프로모션, 그리고 브랜드의 
            이야기를 뉴스레터를 통해 전해드립니다.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Check className="h-5 w-5 text-accent-foreground" />
              </div>
              <span>구독해 주셔서 감사합니다!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-4 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                required
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-primary-foreground hover:bg-foreground/90 transition-colors"
              >
                <span className="text-sm tracking-widest uppercase">구독하기</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-6">
            구독 신청 시 개인정보 처리방침에 동의하는 것으로 간주됩니다.
          </p>
        </div>
      </div>
    </section>
  )
}
