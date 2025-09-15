import { Storage } from '../types';

export const storageSpaces: Storage[] = [
  {
    id: '1',
    title: 'Pátio Industrial - Zona Norte',
    city: 'São Paulo',
    uf: 'SP',
    areaM2: 2000,
    heightM: 0, // Pátio descoberto
    volumeM3: 0,
    features: ['Acesso 24h', 'Segurança', 'Portaria', 'Vigilância', 'Cerca elétrica'],
    pricePerMonth: 3500.00,
    images: [
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    available: true
  },
  {
    id: '2',
    title: 'Garagem Coberta - Centro',
    city: 'Rio de Janeiro',
    uf: 'RJ',
    areaM2: 150,
    heightM: 4,
    volumeM3: 600,
    features: ['Acesso 8h-18h', 'Segurança', 'Cobertura', 'Iluminação'],
    pricePerMonth: 800.00,
    images: [
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    available: true
  },
  {
    id: '3',
    title: 'Pátio Logístico - Distrito Industrial',
    city: 'Belo Horizonte',
    uf: 'MG',
    areaM2: 5000,
    heightM: 0,
    volumeM3: 0,
    features: ['Acesso 24h', 'Segurança', 'Balança', 'Oficina mecânica', 'Posto de combustível'],
    pricePerMonth: 8500.00,
    images: [
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    available: true
  },
  {
    id: '4',
    title: 'Box Individual Coberto',
    city: 'Curitiba',
    uf: 'PR',
    areaM2: 80,
    heightM: 3.5,
    volumeM3: 280,
    features: ['Acesso 24h', 'Cobertura', 'Energia elétrica'],
    pricePerMonth: 450.00,
    images: [
      'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400'
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
  { name: 'Manaus', uf: 'AM' },
  { name: 'Campinas', uf: 'SP' },
  { name: 'Santos', uf: 'SP' }
];