import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Package2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../contexts/CartContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/produtos?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const totalItems = getTotalItems();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-blue-700">
            <Package2 className="w-8 h-8" />
            <span className="text-xl font-bold">Implementos</span>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar caminhões, carretas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <Button type="submit" className="ml-2">
              Buscar
            </Button>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/produtos" className="text-gray-700 hover:text-blue-700 transition-colors">
              Veículos
            </Link>
            <Link to="/armazenagem" className="text-gray-700 hover:text-blue-700 transition-colors">
              Pátios
            </Link>
            <Link to="/ajuda" className="text-gray-700 hover:text-blue-700 transition-colors">
              Ajuda
            </Link>
            <Link to="/carrinho" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-700 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden py-3 border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar caminhões, carretas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </form>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 space-y-2">
            <Link
              to="/produtos"
              className="block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Veículos
            </Link>
            <Link
              to="/armazenagem"
              className="block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pátios
            </Link>
            <Link
              to="/ajuda"
              className="block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Ajuda
            </Link>
            <Link
              to="/carrinho"
              className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="w-5 h-5" />
              Carrinho ({totalItems})
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};