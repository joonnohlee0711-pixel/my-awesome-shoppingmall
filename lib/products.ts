export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "리넨 블렌드 셔츠",
    category: "상의",
    price: 89000,
    image: "/images/product-1.jpg",
    description: "자연스러운 실루엣의 리넨 블렌드 셔츠입니다. 통기성이 뛰어나 여름철에 시원하게 착용할 수 있습니다.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["화이트", "베이지", "네이비"]
  },
  {
    id: 2,
    name: "와이드 코튼 팬츠",
    category: "하의",
    price: 125000,
    image: "/images/product-2.jpg",
    description: "편안한 착용감의 와이드 핏 코튼 팬츠입니다. 고급스러운 소재감이 돋보입니다.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["블랙", "그레이", "베이지"]
  },
  {
    id: 3,
    name: "실크 블렌드 블라우스",
    category: "상의",
    price: 145000,
    image: "/images/product-3.jpg",
    description: "부드러운 실크 블렌드 소재의 우아한 블라우스입니다. 다양한 스타일링이 가능합니다.",
    sizes: ["S", "M", "L"],
    colors: ["아이보리", "블러쉬 핑크", "블랙"]
  },
  {
    id: 4,
    name: "미니멀 트렌치 코트",
    category: "아우터",
    price: 285000,
    image: "/images/product-4.jpg",
    description: "클래식한 디자인의 트렌치 코트입니다. 계절 전환기에 완벽한 아이템입니다.",
    sizes: ["S", "M", "L"],
    colors: ["베이지", "블랙"]
  },
  {
    id: 5,
    name: "오가닉 코튼 티셔츠",
    category: "상의",
    price: 45000,
    image: "/images/product-5.jpg",
    description: "100% 오가닉 코튼으로 제작된 베이직 티셔츠입니다. 피부에 자극이 없어 편안합니다.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["화이트", "블랙", "그레이", "네이비"]
  },
  {
    id: 6,
    name: "플리츠 미디 스커트",
    category: "하의",
    price: 98000,
    image: "/images/product-6.jpg",
    description: "우아한 플리츠 디테일의 미디 스커트입니다. 여성스러운 실루엣이 돋보입니다.",
    sizes: ["S", "M", "L"],
    colors: ["블랙", "베이지", "올리브"]
  },
  {
    id: 7,
    name: "오버사이즈 니트 가디건",
    category: "아우터",
    price: 165000,
    image: "/images/product-7.jpg",
    description: "부드러운 촉감의 오버사이즈 니트 가디건입니다. 레이어링에 완벽합니다.",
    sizes: ["Free"],
    colors: ["크림", "차콜", "카키"]
  },
  {
    id: 8,
    name: "스트레이트 데님 팬츠",
    category: "하의",
    price: 135000,
    image: "/images/product-8.jpg",
    description: "클래식한 스트레이트 핏의 데님 팬츠입니다. 시즌리스하게 활용 가능합니다.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["라이트 블루", "미디엄 블루", "다크 블루"]
  },
  {
    id: 9,
    name: "린넨 원피스",
    category: "원피스",
    price: 175000,
    image: "/images/product-9.jpg",
    description: "시원한 린넨 소재의 원피스입니다. 여름철 데일리룩에 완벽합니다.",
    sizes: ["S", "M", "L"],
    colors: ["화이트", "베이지", "스카이 블루"]
  },
  {
    id: 10,
    name: "크롭 재킷",
    category: "아우터",
    price: 195000,
    image: "/images/product-10.jpg",
    description: "모던한 크롭 길이의 재킷입니다. 다양한 스타일링이 가능합니다.",
    sizes: ["S", "M", "L"],
    colors: ["블랙", "화이트"]
  },
  {
    id: 11,
    name: "슬림 핏 슬랙스",
    category: "하의",
    price: 118000,
    image: "/images/product-11.jpg",
    description: "세련된 슬림 핏의 슬랙스입니다. 오피스룩에 완벽합니다.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["블랙", "그레이", "네이비"]
  },
  {
    id: 12,
    name: "캐시미어 블렌드 스웨터",
    category: "상의",
    price: 225000,
    image: "/images/product-12.jpg",
    description: "고급스러운 캐시미어 블렌드 스웨터입니다. 부드러운 촉감이 뛰어납니다.",
    sizes: ["S", "M", "L"],
    colors: ["카멜", "그레이", "네이비"]
  }
];

export const categories = ["전체", "상의", "하의", "아우터", "원피스"];
