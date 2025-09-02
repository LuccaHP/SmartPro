import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Caçamba Basculante 15m³ - Scania R 450',
    categoryId: 'basculantes-cacambas',
    price: 285000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.8,
    reviewCount: 27,
    condition: 'usado',
    location: 'São Paulo, SP',
    specs: {
      'Ano': '2019',
      'Quilometragem': '450.000 km',
      'Capacidade': '15 m³',
      'Material': 'Aço carbono',
      'Sistema hidráulico': 'Dupla ação',
      'Aplicação': 'Grãos e minérios'
    },
    sellerId: '1',
    stock: 1,
    featured: true
  },
  {
    id: '2',
    title: 'Tanque Combustível 30.000L - Mercedes Atego',
    categoryId: 'tanques',
    price: 195000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.6,
    reviewCount: 18,
    condition: 'usado',
    location: 'Campinas, SP',
    specs: {
      'Ano': '2020',
      'Capacidade': '30.000 litros',
      'Material': 'Aço inox 304',
      'Compartimentos': '4 compartimentos',
      'Bomba': 'Elétrica 12V',
      'Certificação': 'INMETRO'
    },
    sellerId: '2',
    stock: 1,
    featured: true
  },
  {
    id: '3',
    title: 'Baú Frigorífico 8m - Volvo VM 270',
    categoryId: 'furgoes-baus',
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
      'Comprimento': '8 metros',
      'Isolamento': 'Poliuretano 80mm',
      'Temperatura': '-18°C a +25°C',
      'Equipamento frio': 'Carrier Xarios 600',
      'Portas': 'Traseira dupla'
    },
    sellerId: '3',
    stock: 1
  },
  {
    id: '4',
    title: 'Carreta Sider 3 Eixos - Librelato',
    categoryId: 'sider',
    price: 120000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.7,
    reviewCount: 22,
    condition: 'usado',
    location: 'Curitiba, PR',
    specs: {
      'Ano': '2021',
      'Comprimento': '14 metros',
      'Eixos': '3 eixos',
      'Capacidade': '27 toneladas',
      'Laterais': 'Abertura total',
      'Material': 'Lona vinílica'
    },
    sellerId: '4',
    stock: 1,
    featured: true
  },
  {
    id: '5',
    title: 'Plataforma Guincho 15 Ton - Ford Cargo',
    categoryId: 'plataformas',
    price: 145000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.4,
    reviewCount: 15,
    condition: 'usado',
    location: 'Santos, SP',
    specs: {
      'Ano': '2019',
      'Capacidade': '15 toneladas',
      'Comprimento plataforma': '6 metros',
      'Guincho': 'Hidráulico',
      'Rampa': 'Alumínio antiderrapante',
      'Aplicação': 'Resgate e remoção'
    },
    sellerId: '5',
    stock: 2
  },
  {
    id: '6',
    title: 'Cegonha 2 Andares - Iveco Stralis',
    categoryId: 'cegonhas',
    price: 320000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.9,
    reviewCount: 12,
    condition: 'usado',
    location: 'São Paulo, SP',
    specs: {
      'Ano': '2020',
      'Capacidade': '9 veículos',
      'Andares': '2 andares',
      'Comprimento': '18 metros',
      'Sistema': 'Hidráulico',
      'Aplicação': 'Transporte de veículos'
    },
    sellerId: '1',
    stock: 1,
    featured: true
  },
  {
    id: '7',
    title: 'Graneleiro 45m³ - Carreta 3 Eixos',
    categoryId: 'graneleiros',
    price: 95000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.3,
    reviewCount: 28,
    condition: 'usado',
    location: 'Goiânia, GO',
    specs: {
      'Ano': '2018',
      'Capacidade': '45 m³',
      'Eixos': '3 eixos',
      'Descarga': 'Pneumática',
      'Material': 'Alumínio',
      'Aplicação': 'Grãos e cereais'
    },
    sellerId: '6',
    stock: 1
  },
  {
    id: '8',
    title: 'Cesto Aéreo 14m - Iveco Daily',
    categoryId: 'cestos-aereos',
    price: 185000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.6,
    reviewCount: 19,
    condition: 'usado',
    location: 'Belo Horizonte, MG',
    specs: {
      'Ano': '2019',
      'Altura máxima': '14 metros',
      'Capacidade cesto': '200 kg',
      'Rotação': '360°',
      'Estabilizadores': '4 pontos',
      'Aplicação': 'Redes elétricas'
    },
    sellerId: '7',
    stock: 1
  },
  {
    id: '9',
    title: 'Baú Seco 12m - Volkswagen Constellation',
    categoryId: 'furgoes-baus',
    price: 175000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.4,
    reviewCount: 31,
    condition: 'usado',
    location: 'Porto Alegre, RS',
    specs: {
      'Ano': '2020',
      'Comprimento': '12 metros',
      'Volume': '76 m³',
      'Portas': 'Traseira e lateral',
      'Piso': 'Compensado naval',
      'Aplicação': 'Carga seca geral'
    },
    sellerId: '8',
    stock: 1
  },
  {
    id: '10',
    title: 'Tanque Químico 25.000L - DAF XF',
    categoryId: 'tanques',
    price: 245000.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.7,
    reviewCount: 14,
    condition: 'usado',
    location: 'Salvador, BA',
    specs: {
      'Ano': '2021',
      'Capacidade': '25.000 litros',
      'Material': 'Aço inox 316L',
      'Aquecimento': 'Serpentina vapor',
      'Isolamento': 'Térmico',
      'Aplicação': 'Produtos químicos'
    },
    sellerId: '9',
    stock: 1
  }
];