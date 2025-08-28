import { Storage } from '../types';

export const storageSpaces: Storage[] = [
  {
    id: '1',
    title: 'Galpão Industrial - Zona Norte',
    city: 'São Paulo',
    uf: 'SP',
    areaM2: 500,
    heightM: 8,
    volumeM3: 4000,
    features: ['Acesso 24h', 'Segurança', 'Empilhadeira', 'Doca de carga'],
    pricePerMonth: 2500.00,
    images: [
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    available: true
  },
  {
    id: '2',
    title: 'Box Pequeno - Centro',
    city: 'Rio de Janeiro',
    uf: 'RJ',
    areaM2: 25,
    heightM: 3,
    volumeM3: 75,
    features: ['Acesso 8h-18h', 'Segurança', 'Câmeras'],
    pricePerMonth: 180.00,
    images: [
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    available: true
  },
  {
    id: '3',
    title: 'Armazém Coberto - Distrito Industrial',
    city: 'Belo Horizonte',
    uf: 'MG',
    areaM2: 1200,
    heightM: 12,
    volumeM3: 14400,
    features: ['Acesso 24h', 'Segurança', 'Empilhadeira', 'Ponte rolante', 'Escritório'],
    pricePerMonth: 4800.00,
    images: [
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    available: true
  },
  {
    id: '4',
    title: 'Container Modificado',
    city: 'Curitiba',
    uf: 'PR',
    areaM2: 15,
    heightM: 2.8,
    volumeM3: 42,
    features: ['Acesso 24h', 'Resistente à água'],
    pricePerMonth: 120.00,
    images: [
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    available: false
  }
];

export const cities = [
  { name: 'São Paulo', uf: 'SP' },
  { name: 'Rio de Janeiro', uf: 'RJ' },
  { name: 'Belo Horizonte', uf: 'MG' },
  { name: 'Curitiba', uf: 'PR' },
  { name: 'Salvador', uf: 'BA' },
  { name: 'Brasília', uf: 'DF' },
  { name: 'Fortaleza', uf: 'CE' },
  { name: 'Manaus', uf: 'AM' }
];