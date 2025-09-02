import { Product } from '../types';
import boiadeiroImage from './img/boiadeiro.jpeg';
import conjuntoBoiadeiroImage from './img/conjunto_boiadeiro.jpeg';
import bitremBoiadeiroImage from './img/bitrem_boiadeiro.jpeg';
import semirreboqueBoiadeiroImage from './img/semirreboque.jpeg';
import semirreboqueBoiadeiroImage2 from './img/semirreboque1pav.jpeg';

export const products: Product[] = [
  {
    id: '1',
    title: 'Boiadeira Galego',
    categoryId: 'categoria-1',
    price: 100000.00,
    images: [
      boiadeiroImage
    ],
    rating: 4.8,
    reviewCount: 35,
    condition: 'usado',
    location: 'Campo Grande, MS',
    specs: {
      'Ano': '2020',
      'Comprimento': '18 metros',
      'Capacidade': '35 cabeças de gado',
      'Divisórias': 'Móveis ajustáveis',
      'Ventilação': 'Natural e forçada',
      'Piso': 'Antiderrapante',
      'Aplicação': 'Transporte de gado bovino'
    },
    sellerId: '10',
    stock: 1,
    featured: true
  },
  {
    id: '2',
    title: 'Conjunto Boiadeiro 1 Pavimento Galego',
    categoryId: 'categoria-2',
    price: 220000.00,
    images: [
      conjuntoBoiadeiroImage
    ],
    rating: 4.6,
    reviewCount: 22,
    condition: 'usado',
    location: 'Campo Grande, MS',
    specs: {
      'Ano': '2021',
      'Comprimento': '15 metros',
      'Capacidade': '28 cabeças de gado',
      'Pavimentos': '1',
      'Divisórias': 'Ajustáveis',
      'Ventilação': 'Natural e forçada',
      'Piso': 'Antiderrapante',
      'Aplicação': 'Transporte de gado bovino'
    },
    sellerId: '10',
    stock: 1
  },
  {
    id: '3',
    title: 'Bitrem Boiadeiro 2 Pavimentos Galego',
    categoryId: 'categoria-2',
    price: 1000000.00,
    images: [
      bitremBoiadeiroImage
    ],
    rating: 4.7,
    reviewCount: 16,
    condition: 'novo',
    location: 'Campo Grande, MS',
    specs: {
      'Ano': '2023',
      'Comprimento': '28 metros',
      'Capacidade': '60 cabeças de gado',
      'Pavimentos': '2',
      'Divisórias': 'Reforçadas e ajustáveis',
      'Ventilação': 'Crossflow com exaustores',
      'Piso': 'Aço antiderrapante',
      'Aplicação': 'Longas distâncias'
    },
    sellerId: '10',
    stock: 2,
    featured: true
  },
  {
    id: '4',
    title: 'Semirreboque Boiadeira Galego 2 Pavimentos',
    categoryId: 'categoria-2',
    price: 500000.00,
    images: [
      semirreboqueBoiadeiroImage
    ],
    rating: 4.5,
    reviewCount: 11,
    condition: 'novo',
    location: 'Campo Grande, MS',
    specs: {
      'Ano': '2022',
      'Comprimento': '19 metros',
      'Capacidade': '45 cabeças de gado',
      'Pavimentos': '2',
      'Divisórias': 'Módulos removíveis',
      'Ventilação': 'Forçada com dutos',
      'Piso': 'Madeira naval antiderrapante',
      'Aplicação': 'Transporte interestadual'
    },
    sellerId: '10',
    stock: 1
  },
  {
    id: '5',
    title: 'Semirreboque Boiadeiro Galego',
    categoryId: 'categoria-2',
    price: 250000.00,
    images: [
      semirreboqueBoiadeiroImage2
    ],
    rating: 4.4,
    reviewCount: 14,
    condition: 'usado',
    location: 'Campo Grande, MS',
    specs: {
      'Ano': '2020',
      'Comprimento': '18 metros',
      'Capacidade': '32 cabeças de gado',
      'Pavimentos': '1',
      'Divisórias': 'Ajustáveis',
      'Ventilação': 'Natural e forçada',
      'Piso': 'Antiderrapante',
      'Aplicação': 'Transporte regional'
    },
    sellerId: '10',
    stock: 1
  }
];