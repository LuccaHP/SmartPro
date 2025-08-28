export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('pt-BR').format(num);
};

export const formatUnit = (value: number, unit: string): string => {
  return `${formatNumber(value)} ${unit}`;
};

export const formatInstallment = (price: number, installments: number = 12): string => {
  const installmentValue = price / installments;
  return `${installments}x de ${formatPrice(installmentValue)}`;
};

export const generateRating = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  let stars = '★'.repeat(fullStars);
  if (hasHalfStar) stars += '☆';
  stars += '☆'.repeat(5 - Math.ceil(rating));
  
  return stars;
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};