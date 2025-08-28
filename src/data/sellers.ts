import { Seller } from '../types';

export const sellers: Seller[] = [
  {
    id: '1',
    name: 'Ferragens Central',
    verified: true,
    location: 'São Paulo, SP',
    rating: 4.7,
    reviewCount: 1243
  },
  {
    id: '2',
    name: 'Equipamentos Silva',
    verified: true,
    location: 'Rio de Janeiro, RJ',
    rating: 4.8,
    reviewCount: 567
  },
  {
    id: '3',
    name: 'EPI Total',
    verified: true,
    location: 'Belo Horizonte, MG',
    rating: 4.5,
    reviewCount: 890
  },
  {
    id: '4',
    name: 'Máquinas & Equipamentos Ltda',
    verified: true,
    location: 'Curitiba, PR',
    rating: 4.9,
    reviewCount: 234
  },
  {
    id: '5',
    name: 'Materiais Nordeste',
    verified: false,
    location: 'Salvador, BA',
    rating: 4.3,
    reviewCount: 456
  }
];