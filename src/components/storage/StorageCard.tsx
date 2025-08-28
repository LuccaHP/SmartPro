import React from 'react';
import { MapPin, Home } from 'lucide-react';
import { Storage } from '../../types';
import { formatPrice, formatUnit } from '../../utils/formatters';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface StorageCardProps {
  storage: Storage;
  onReserve: (storageId: string) => void;
}

export const StorageCard: React.FC<StorageCardProps> = ({ storage, onReserve }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="relative">
        <img
          src={storage.images[0]}
          alt={storage.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge variant={storage.available ? 'success' : 'error'}>
            {storage.available ? 'Disponível' : 'Ocupado'}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {storage.title}
        </h3>
        
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{storage.city}, {storage.uf}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <Home className="w-4 h-4 text-gray-400" />
            <span>{formatUnit(storage.areaM2, 'm²')}</span>
          </div>
          <div>
            <span className="text-gray-600">Altura: {formatUnit(storage.heightM, 'm')}</span>
          </div>
          <div className="col-span-2">
            <span className="text-gray-600">Volume: {formatUnit(storage.volumeM3, 'm³')}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {storage.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="default" size="sm">
                {feature}
              </Badge>
            ))}
            {storage.features.length > 3 && (
              <Badge variant="default" size="sm">
                +{storage.features.length - 3} mais
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-700">
              {formatPrice(storage.pricePerMonth)}/mês
            </p>
          </div>
          <Button
            onClick={() => onReserve(storage.id)}
            disabled={!storage.available}
            size="sm"
          >
            {storage.available ? 'Reservar' : 'Indisponível'}
          </Button>
        </div>
      </div>
    </div>
  );
};