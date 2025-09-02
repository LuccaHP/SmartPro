import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Star, Shield, Truck, Clock } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';
import * as LucideIcons from 'lucide-react';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const featuredProducts = products.filter(p => p.featured);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/produtos?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Implementos para Caminhões
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Encontre basculantes, tanques, baús, plataformas e todos os implementos para seu caminhão com os melhores preços e qualidade garantida.
            </p>
            
            <form onSubmit={handleSearch} className="flex gap-3 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Buscar basculantes, tanques, baús..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 text-gray-900 text-lg rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
              </div>
              <Button type="submit" size="lg" className="px-8">
                Buscar
              </Button>
            </form>

            <div className="flex flex-wrap gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>Implementos avaliados</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Vendedores verificados</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Implementos certificados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tipos de Implementos
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {categories.map(category => {
              const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Truck;
              
              return (
                <Link
                  key={category.id}
                  to={`/produtos?categoria=${category.id}`}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-center group hover:bg-blue-50"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100">
                    <IconComponent className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.productCount} implementos</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Implementos em Destaque
            </h2>
            <Link to="/produtos" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
              Ver todos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Storage CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Precisa de pátio para seus implementos?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Alugue pátios, garagens e estacionamentos para guardar seus implementos e caminhões com segurança.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-700" />
                    <span className="text-gray-700">Acesso 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-700" />
                    <span className="text-gray-700">Segurança garantida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-700" />
                    <span className="text-gray-700">Acesso para implementos</span>
                  </div>
                </div>
                <Link to="/armazenagem">
                  <Button size="lg" className="px-8">
                    Explorar pátios
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pátio de estacionamento"
                  className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};