import React from 'react';
import { X } from 'lucide-react';
import { categories } from '../../data/categories';
import { Filters } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { Button } from '../ui/Button';

interface FiltersPanelProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

export const FiltersPanel: React.FC<FiltersPanelProps> = ({
  filters,
  onFiltersChange,
  onClose,
  isMobile = false
}) => {
  const handleCategoryChange = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter(id => id !== categoryId)
      : [...filters.categories, categoryId];
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleConditionChange = (condition: string) => {
    const newConditions = filters.condition.includes(condition)
      ? filters.condition.filter(c => c !== condition)
      : [...filters.condition, condition];
    
    onFiltersChange({ ...filters, condition: newConditions });
  };

  const handlePriceChange = (index: number, value: number) => {
    const newRange: [number, number] = [...filters.priceRange];
    newRange[index] = value;
    onFiltersChange({ ...filters, priceRange: newRange });
  };

  const clearFilters = () => {
    onFiltersChange({
      categories: [],
      priceRange: [0, 500000],
      brands: [],
      condition: [],
      location: '',
      inStock: false
    });
  };

  const content = (
    <div className="space-y-6">
      {isMobile && (
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Filtros</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Categories */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Categorias</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                className="rounded border-gray-300 text-blue-700 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{category.name}</span>
              <span className="text-xs text-gray-500">({category.productCount})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Preço</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceRange[0] || ''}
              onChange={(e) => handlePriceChange(0, Number(e.target.value) || 0)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-500">até</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.priceRange[1] || ''}
              onChange={(e) => handlePriceChange(1, Number(e.target.value) || 500000)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-xs text-gray-500">
            {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
          </div>
        </div>
      </div>

      {/* Condition */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Estado</h3>
        <div className="space-y-2">
          {['novo', 'usado'].map(condition => (
            <label key={condition} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.condition.includes(condition)}
                onChange={() => handleConditionChange(condition)}
                className="rounded border-gray-300 text-blue-700 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 capitalize">{condition}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Stock */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => onFiltersChange({ ...filters, inStock: e.target.checked })}
            className="rounded border-gray-300 text-blue-700 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Apenas em estoque</span>
        </label>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Limpar filtros
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl">
          <div className="h-full overflow-y-auto p-6">
            {content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {content}
    </div>
  );
};