import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Scania R 450 6x2 2019',
    categoryId: 'caminhoes',
    price: 285000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1118449/pexels-photo-1118449.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.8,
    reviewCount: 27,
    condition: 'usado',
    location: 'São Paulo, SP',
    specs: {
      'Ano': '2019',
      'Quilometragem': '450.000 km',
      'Motor': 'DC13 450cv',
      'Transmissão': 'Opticruise',
      'Eixos': '6x2',
      'Combustível': 'Diesel S10'
    },
    sellerId: '1',
    stock: 1,
    featured: true
  },
  {
    id: '2',
    title: 'Carreta Graneleira 3 Eixos Librelato',
    categoryId: 'carretas',
    price: 95000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1118449/pexels-photo-1118449.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.6,
    reviewCount: 18,
    condition: 'usado',
    location: 'Campinas, SP',
    specs: {
      'Ano': '2020',
      'Capacidade': '30 toneladas',
      'Eixos': '3 eixos',
      'Comprimento': '14 metros',
      'Material': 'Aço carbono',
      'Freios': 'ABS'
    },
    sellerId: '2',
    stock: 1,
    featured: true
  },
  {
    id: '3',
    title: 'Mercedes-Benz Atego 1719 4x2',
    categoryId: 'caminhoes',
    price: 165000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.5,
    reviewCount: 34,
    condition: 'usado',
    location: 'Rio de Janeiro, RJ',
    specs: {
      'Ano': '2018',
      'Quilometragem': '380.000 km',
      'Motor': 'OM924LA 190cv',
      'Transmissão': 'Manual 6 marchas',
      'Eixos': '4x2',
      'Carroceria': 'Baú frigorífico'
    },
    sellerId: '3',
    stock: 1
  },
  {
    id: '4',
    title: 'Volvo FH 540 6x4 Globetrotter',
    categoryId: 'caminhoes',
    price: 420000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.9,
    reviewCount: 15,
    condition: 'usado',
    location: 'Curitiba, PR',
    specs: {
      'Ano': '2021',
      'Quilometragem': '280.000 km',
      'Motor': 'D13K 540cv',
      'Transmissão': 'I-Shift',
      'Eixos': '6x4',
      'Cabine': 'Globetrotter XL'
    },
    sellerId: '4',
    stock: 1,
    featured: true
  },
  {
    id: '5',
    title: 'Carreta Porta Container 40 pés',
    categoryId: 'carretas',
    price: 75000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1118449/pexels-photo-1118449.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.4,
    reviewCount: 22,
    condition: 'usado',
    location: 'Santos, SP',
    specs: {
      'Ano': '2019',
      'Capacidade': '40 pés',
      'Eixos': '3 eixos',
      'Peso': '6.5 toneladas',
      'Material': 'Aço estrutural',
      'Twist Locks': '8 unidades'
    },
    sellerId: '5',
    stock: 2
  },
  {
    id: '6',
    title: 'Pneu Pirelli 295/80R22.5 Formula Driver II',
    categoryId: 'pecas-componentes',
    price: 890.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.7,
    reviewCount: 156,
    condition: 'novo',
    location: 'São Paulo, SP',
    specs: {
      'Medida': '295/80R22.5',
      'Índice de carga': '152/148',
      'Velocidade máxima': '160 km/h',
      'Aplicação': 'Eixo direcional',
      'Garantia': '12 meses',
      'Marca': 'Pirelli'
    },
    sellerId: '1',
    stock: 48,
    featured: true
  }
];