"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products, categories, Product } from "@/lib/products"
import { Search, SlidersHorizontal, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CollectionPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  // 필터링된 제품 목록
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "전체" || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      
      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchQuery, selectedCategory, priceRange])

  // 가격 포맷팅
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price) + "원"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-foreground text-primary-foreground">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
              Spring/Summer 2026
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium">
              컬렉션
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* 검색 및 필터 */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* 검색 */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="제품 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* 카테고리 선택 */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* 필터 버튼 */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              필터
            </Button>
          </div>

          {/* 가격 필터 */}
          {showFilters && (
            <div className="bg-muted/50 p-6 rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">가격 범위</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-sm text-muted-foreground mb-1 block">
                      최소 가격
                    </label>
                    <Input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                      min={0}
                      step={10000}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm text-muted-foreground mb-1 block">
                      최대 가격
                    </label>
                    <Input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      min={0}
                      step={10000}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </div>
          )}

          {/* 결과 카운트 */}
          <div className="text-sm text-muted-foreground mt-4">
            {filteredProducts.length}개의 제품
          </div>
        </div>

        {/* 제품 그리드 */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-[3/4] relative bg-muted mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/20" />
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium group-hover:underline">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.category}
                  </p>
                  <p className="font-medium">{formatPrice(product.price)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 제품 상세 다이얼로그 */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription>
                  {selectedProduct.category}
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="aspect-[3/4] relative bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/20" />
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-3xl font-medium mb-4">
                      {formatPrice(selectedProduct.price)}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">사이즈</h4>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProduct.sizes.map((size) => (
                        <Button key={size} variant="outline" size="sm">
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">컬러</h4>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProduct.colors.map((color) => (
                        <Button key={color} variant="outline" size="sm">
                          {color}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" size="lg" disabled>
                    구매 기능 준비 중
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
