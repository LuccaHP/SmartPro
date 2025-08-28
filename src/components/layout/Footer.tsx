import React from 'react';
import { Link } from 'react-router-dom';
import { Package2, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Package2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Implementos</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Marketplace de implementos para construção civil e aluguel de espaços de armazenagem.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navegação</h3>
            <div className="space-y-2 text-sm">
              <Link to="/produtos" className="block text-gray-300 hover:text-white transition-colors">
                Produtos
              </Link>
              <Link to="/armazenagem" className="block text-gray-300 hover:text-white transition-colors">
                Armazenagem
              </Link>
              <Link to="/sobre" className="block text-gray-300 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link to="/ajuda" className="block text-gray-300 hover:text-white transition-colors">
                Ajuda
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categorias</h3>
            <div className="space-y-2 text-sm">
              <Link to="/produtos?categoria=ferramentas" className="block text-gray-300 hover:text-white transition-colors">
                Ferramentas
              </Link>
              <Link to="/produtos?categoria=equipamentos-pesados" className="block text-gray-300 hover:text-white transition-colors">
                Equipamentos Pesados
              </Link>
              <Link to="/produtos?categoria=epi" className="block text-gray-300 hover:text-white transition-colors">
                EPI
              </Link>
              <Link to="/produtos?categoria=materiais" className="block text-gray-300 hover:text-white transition-colors">
                Materiais
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@implementos.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2025 Implementos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};