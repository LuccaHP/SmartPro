import { Seller } from '../types';

export const sellers: Seller[] = [
  {
    id: '1',
    name: 'Caminhões São Paulo',
    verified: true,
    location: 'São Paulo, SP',
    rating: 4.7,
    reviewCount: 1243
  },
  {
    id: '2',
    name: 'Transportes Silva',
    verified: true,
    location: 'Campinas, SP',
    rating: 4.8,
    reviewCount: 567
  },
  {
    id: '3',
    name: 'Frota Rio',
    verified: true,
    location: 'Rio de Janeiro, RJ',
    rating: 4.5,
    reviewCount: 890
  },
  {
    id: '4',
    name: 'Volvo Trucks Curitiba',
    verified: true,
    location: 'Curitiba, PR',
    rating: 4.9,
    reviewCount: 234
  },
  {
    id: '5',
    name: 'Porto Veículos',
    verified: false,
    location: 'Santos, SP',
    rating: 4.3,
    reviewCount: 456
  }
];