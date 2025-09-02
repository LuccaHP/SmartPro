import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown, Search } from 'lucide-react';
import { products } from '../data/products';
import galegoImage from '../data/img/galego.jpg';
import { categories } from '../data/categories';
import { ProductCard } from '../components/product/ProductCard';
import { FiltersPanel } from '../components/filters/FiltersPanel';
import { Button } from '../components/ui/Button';
import { Filters } from '../types';

export const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    priceRange: [0, 2000000],
    brands: [],
    condition: [],
    location: '',
    inStock: false
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('categoria');

    if (categoryParam) {
      setFilters(prev => ({ ...prev, categories: [categoryParam] }));
    }
  }, [searchParams]);

  const searchQuery = searchParams.get('q') || '';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Categories
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.categoryId)
      );
    }

    // Price range
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Condition
    if (filters.condition.length > 0) {
      filtered = filtered.filter(product =>
        filters.condition.includes(product.condition)
      );
    }

    // Stock
    if (filters.inStock) {
      filtered = filtered.filter(product => product.stock > 0);
    }

    // Sort
    switch (sortBy) {
      case 'price_asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Mock newest first
        break;
      default:
        // Relevance (featured first)
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const sortOptions = [
    { value: 'relevance', label: 'Relevância' },
    { value: 'price_asc', label: 'Menor preço' },
    { value: 'price_desc', label: 'Maior preço' },
    { value: 'rating', label: 'Melhor avaliados' },
    { value: 'newest', label: 'Mais recentes' }
  ];

  const selectedCategory = categories.find(c => filters.categories.includes(c.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {selectedCategory ? selectedCategory.name : 'Todos os Implementos Galego'}
              </h1>
              {searchQuery && (
                <p className="text-gray-600 mt-1">
                  Resultados para "{searchQuery}"
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="hidden sm:flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-l-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-700 text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-r-lg transition-colors ${viewMode === 'list' ? 'bg-blue-700 text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <span className="hidden sm:inline">Ordenar por:</span>
                  <span>{sortOptions.find(opt => opt.value === sortBy)?.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showSortDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {sortOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowSortDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Filters */}
              <Button
                variant="outline"
                onClick={() => setShowMobileFilters(true)}
                className="sm:hidden"
              >
                <Filter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <p className="text-gray-600">
            {filteredProducts.length} implementos encontrados
          </p>
        </div>


        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            {/* Galego logo above filters */}
            <div className="bg-white rounded-xl shadow-sm p-2 mb-4 flex justify-center items-center">
              <img
                src={galegoImage}
                alt="Implementos Galego"
                className="max-h-25 w-50 object-contain"
              />
            </div>

            <FiltersPanel
              filters={filters}
              onFiltersChange={setFilters}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
              : 'grid-cols-1'
              }`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Nenhum implemento encontrado
                </h3>
                <p className="text-gray-600 mb-6">
                  Tente ajustar os filtros ou buscar por outros termos.
                </p>
                <Button variant="outline" onClick={() => setFilters({
                  categories: [],
                  priceRange: [0, 500000],
                  brands: [],
                  condition: [],
                  location: '',
                  inStock: false
                })}>
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <FiltersPanel
          filters={filters}
          onFiltersChange={setFilters}
          onClose={() => setShowMobileFilters(false)}
          isMobile={true}
        />
      )}
    </div>
  );
};