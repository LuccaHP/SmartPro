import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-blue-700">404</span>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Página não encontrada
        </h1>
        
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto">
              <Home className="w-5 h-5 mr-2" />
              Ir para início
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};