import React, { useState, useMemo } from 'react';
import { MapPin, Calendar, Home, Filter } from 'lucide-react';
import { storageSpaces, cities } from '../data/storage';
import { StorageCard } from '../components/storage/StorageCard';
import { Button } from '../components/ui/Button';
import { formatPrice } from '../utils/formatters';

export const StoragePage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [minArea, setMinArea] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(true);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedStorageId, setSelectedStorageId] = useState('');
  const [reservationForm, setReservationForm] = useState({
    startDate: '',
    endDate: '',
    name: '',
    email: '',
    phone: ''
  });

  const filteredSpaces = useMemo(() => {
    let filtered = [...storageSpaces];

    if (selectedCity) {
      filtered = filtered.filter(space => 
        space.city === selectedCity || space.uf === selectedCity
      );
    }

    if (minArea) {
      filtered = filtered.filter(space => space.areaM2 >= Number(minArea));
    }

    if (maxPrice) {
      filtered = filtered.filter(space => space.pricePerMonth <= Number(maxPrice));
    }

    if (showOnlyAvailable) {
      filtered = filtered.filter(space => space.available);
    }

    return filtered;
  }, [selectedCity, minArea, maxPrice, showOnlyAvailable]);

  const handleReserve = (storageId: string) => {
    setSelectedStorageId(storageId);
    setShowReservationModal(true);
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock reservation
    setShowReservationModal(false);
    alert('Reserva realizada com sucesso! Entraremos em contato em breve.');
    setReservationForm({
      startDate: '',
      endDate: '',
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Espaços de Armazenagem
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Alugue galpões, boxes e containers para guardar seus materiais com segurança, acessibilidade e praticidade.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtros de Busca</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cidade/Estado
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todas as cidades</option>
                {cities.map(city => (
                  <option key={`${city.name}-${city.uf}`} value={city.name}>
                    {city.name}, {city.uf}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Área mínima (m²)
              </label>
              <input
                type="number"
                placeholder="Ex: 50"
                value={minArea}
                onChange={(e) => setMinArea(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preço máximo/mês
              </label>
              <input
                type="number"
                placeholder="Ex: 5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showOnlyAvailable}
                  onChange={(e) => setShowOnlyAvailable(e.target.checked)}
                  className="rounded border-gray-300 text-blue-700 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Apenas disponíveis</span>
              </label>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredSpaces.length} espaços encontrados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpaces.map(storage => (
            <StorageCard
              key={storage.id}
              storage={storage}
              onReserve={handleReserve}
            />
          ))}
        </div>

        {filteredSpaces.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum espaço encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar os filtros de busca.
            </p>
          </div>
        )}
      </div>

      {/* Reservation Modal */}
      {showReservationModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Reservar Espaço
            </h3>
            
            <form onSubmit={handleReservationSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data início
                  </label>
                  <input
                    type="date"
                    required
                    value={reservationForm.startDate}
                    onChange={(e) => setReservationForm({...reservationForm, startDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data fim
                  </label>
                  <input
                    type="date"
                    required
                    value={reservationForm.endDate}
                    onChange={(e) => setReservationForm({...reservationForm, endDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  value={reservationForm.name}
                  onChange={(e) => setReservationForm({...reservationForm, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={reservationForm.email}
                  onChange={(e) => setReservationForm({...reservationForm, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={reservationForm.phone}
                  onChange={(e) => setReservationForm({...reservationForm, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  Confirmar reserva
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowReservationModal(false)}
                  className="flex-1"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};