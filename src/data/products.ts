import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Furadeira de Impacto Bosch GSB 550 RE',
    categoryId: 'ferramentas',
    price: 189.90,
    images: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.5,
    reviewCount: 127,
    condition: 'novo',
    location: 'São Paulo, SP',
    specs: {
      'Potência': '550W',
      'Voltagem': '220V',
      'Peso': '1.8kg',
      'Capacidade do mandril': '13mm'
    },
    sellerId: '1',
    stock: 15,
    featured: true
  },
  {
    id: '2',
    title: 'Betoneira 400 Litros Motomil',
    categoryId: 'equipamentos-pesados',
    price: 1299.00,
    images: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.8,
    reviewCount: 84,
    condition: 'novo',
    location: 'Rio de Janeiro, RJ',
    specs: {
      'Capacidade': '400L',
      'Motor': '2HP',
      'Voltagem': '220V',
      'Peso': '95kg'
    },
    sellerId: '2',
    stock: 3,
    featured: true
  },
  {
    id: '3',
    title: 'Capacete de Segurança CA 31469',
    categoryId: 'epi',
    price: 24.90,
    images: [
      'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.2,
    reviewCount: 356,
    condition: 'novo',
    location: 'Belo Horizonte, MG',
    specs: {
      'Material': 'Polietileno',
      'Cores disponíveis': 'Branco, Amarelo, Azul',
      'Certificação': 'CA 31469',
      'Peso': '350g'
    },
    sellerId: '3',
    stock: 250
  },
  {
    id: '4',
    title: 'Martelo de Unha Stanley 25mm',
    categoryId: 'ferramentas',
    price: 45.00,
    images: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.7,
    reviewCount: 89,
    condition: 'novo',
    location: 'Porto Alegre, RS',
    specs: {
      'Peso da cabeça': '25mm',
      'Cabo': 'Fibra de vidro',
      'Comprimento': '33cm',
      'Peso total': '680g'
    },
    sellerId: '1',
    stock: 45
  },
  {
    id: '5',
    title: 'Escavadeira Hidráulica CAT 320D2',
    categoryId: 'equipamentos-pesados',
    price: 450000.00,
    images: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.9,
    reviewCount: 12,
    condition: 'usado',
    location: 'Curitiba, PR',
    specs: {
      'Ano': '2018',
      'Horas': '4500h',
      'Peso operacional': '20.5 toneladas',
      'Potência do motor': '122kW'
    },
    sellerId: '4',
    stock: 1
  },
  {
    id: '6',
    title: 'Cimento Portland CP-II-E-32',
    categoryId: 'materiais',
    price: 28.50,
    images: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.4,
    reviewCount: 203,
    condition: 'novo',
    location: 'Salvador, BA',
    specs: {
      'Peso': '50kg',
      'Tipo': 'CP-II-E-32',
      'Validade': '90 dias',
      'Resistência': '32 MPa'
    },
    sellerId: '5',
    stock: 500
  }
];