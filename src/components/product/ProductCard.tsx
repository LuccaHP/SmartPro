import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { Rating } from '../ui/Rating';
import { Badge } from '../ui/Badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/produtos/${product.id}`}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
    >
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={product.condition === 'novo' ? 'success' : 'warning'}>
            {product.condition === 'novo' ? 'Novo' : 'Usado'}
          </Badge>
        </div>
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute top-3 right-3">
            <Badge variant="error">
              Últimas {product.stock} unidades
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
          {product.title}
        </h3>
        
        <div className="mb-2">
          <Rating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        </div>
        
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{product.location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-700">
              {formatPrice(product.price)}
            </p>
            <p className="text-xs text-gray-500">
              ou 12x de {formatPrice(product.price / 12)}
            </p>
          </div>
          {product.stock === 0 && (
            <Badge variant="error">Esgotado</Badge>
          )}
        </div>
      </div>
    </Link>
  );
};