export interface Product {
  id: string;
  title: string;
  categoryId: string;
  price: number;
  images: string[];
  rating: number;
  reviewCount: number;
  condition: 'novo' | 'usado';
  location: string;
  specs: Record<string, string | number>;
  sellerId: string;
  stock: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export interface Seller {
  id: string;
  name: string;
  verified: boolean;
  location: string;
  rating: number;
  reviewCount: number;
}

export interface Storage {
  id: string;
  title: string;
  city: string;
  uf: string;
  areaM2: number;
  heightM: number;
  volumeM3: number;
  features: string[];
  pricePerMonth: number;
  images: string[];
  available: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface StorageReservation {
  storageId: string;
  startDate: string;
  endDate: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface Filters {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  condition: string[];
  location: string;
  inStock: boolean;
}