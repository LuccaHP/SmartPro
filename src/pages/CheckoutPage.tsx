import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, MapPin } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';
import { formatPrice } from '../utils/formatters';
import { Button } from '../components/ui/Button';

export const CheckoutPage: React.FC = () => {
  const { items } = useCart();
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: ''
    },
    deliveryMethod: 'delivery',
    paymentMethod: 'credit'
  });

  const cartProducts = items.map(item => {
    const product = products.find(p => p.id === item.productId);
    return product ? { ...product, cartQuantity: item.quantity } : null;
  }).filter(Boolean);

  const subtotal = cartProducts.reduce(
    (sum, product) => sum + (product!.price * product!.cartQuantity), 
    0
  );
  
  const shipping = orderForm.deliveryMethod === 'delivery' ? 25.00 : 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock order submission
    alert('Pedido realizado com sucesso! Você receberá um e-mail de confirmação.');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Carrinho vazio
          </h1>
          <Link to="/produtos">
            <Button>Ir às compras</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/carrinho" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors mb-4">
            <ArrowLeft className="w-5 h-5" />
            Voltar ao carrinho
          </Link>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Finalizar Pedido
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Dados Pessoais
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      value={orderForm.name}
                      onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
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
                      value={orderForm.email}
                      onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={orderForm.phone}
                      onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Método de Entrega
                </h2>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="delivery"
                      value="delivery"
                      checked={orderForm.deliveryMethod === 'delivery'}
                      onChange={(e) => setOrderForm({...orderForm, deliveryMethod: e.target.value})}
                      className="text-blue-700 focus:ring-blue-500"
                    />
                    <Truck className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium">Entrega</div>
                      <div className="text-sm text-gray-500">5-10 dias úteis - {formatPrice(25.00)}</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={orderForm.deliveryMethod === 'pickup'}
                      onChange={(e) => setOrderForm({...orderForm, deliveryMethod: e.target.value})}
                      className="text-blue-700 focus:ring-blue-500"
                    />
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium">Retirada</div>
                      <div className="text-sm text-gray-500">Grátis - Retirar na loja</div>
                    </div>
                  </label>
                </div>

                {/* Address Form */}
                {orderForm.deliveryMethod === 'delivery' && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Endereço de Entrega</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CEP
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="00000-000"
                          value={orderForm.address.zipCode}
                          onChange={(e) => setOrderForm({
                            ...orderForm,
                            address: {...orderForm.address, zipCode: e.target.value}
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Rua
                        </label>
                        <input
                          type="text"
                          required
                          value={orderForm.address.street}
                          onChange={(e) => setOrderForm({
                            ...orderForm,
                            address: {...orderForm.address, street: e.target.value}
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Número
                        </label>
                        <input
                          type="text"
                          required
                          value={orderForm.address.number}
                          onChange={(e) => setOrderForm({
                            ...orderForm,
                            address: {...orderForm.address, number: e.target.value}
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Complemento
                        </label>
                        <input
                          type="text"
                          value={orderForm.address.complement}
                          onChange={(e) => setOrderForm({
                            ...orderForm,
                            address: {...orderForm.address, complement: e.target.value}
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bairro
                        </label>
                        <input
                          type="text"
                          required
                          value={orderForm.address.neighborhood}
                          onChange={(e) => setOrderForm({
                            ...orderForm,
                            address: {...orderForm.address, neighborhood: e.target.value}
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cidade
                        </label>
                        <input
                          type="text"
                          required
                          value={orderForm.address.city}
                          onChange={(e) => setOrderForm({
                            ...orderForm,
                            address: {...orderForm.address, city: e.target.value}
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Forma de Pagamento
                </h2>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={orderForm.paymentMethod === 'credit'}
                      onChange={(e) => setOrderForm({...orderForm, paymentMethod: e.target.value})}
                      className="text-blue-700 focus:ring-blue-500"
                    />
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium">Cartão de Crédito</div>
                      <div className="text-sm text-gray-500">Parcelamos em até 12x sem juros</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      checked={orderForm.paymentMethod === 'pix'}
                      onChange={(e) => setOrderForm({...orderForm, paymentMethod: e.target.value})}
                      className="text-blue-700 focus:ring-blue-500"
                    />
                    <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">
                      P
                    </div>
                    <div>
                      <div className="font-medium">PIX</div>
                      <div className="text-sm text-gray-500">5% de desconto à vista</div>
                    </div>
                  </label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Finalizar pedido
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Resumo do Pedido
              </h2>
              
              {/* Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartProducts.map(product => {
                  if (!product) return null;
                  
                  return (
                    <div key={product.id} className="flex gap-3">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {product.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          Qtd: {product.cartQuantity}
                        </p>
                        <p className="text-sm font-medium text-blue-700">
                          {formatPrice(product.price * product.cartQuantity)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Totals */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                {shipping > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frete</span>
                    <span className="font-medium">{formatPrice(shipping)}</span>
                  </div>
                )}
                {orderForm.paymentMethod === 'pix' && (
                  <div className="flex justify-between text-green-600">
                    <span>Desconto PIX (5%)</span>
                    <span>-{formatPrice(subtotal * 0.05)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-blue-700">
                      {formatPrice(orderForm.paymentMethod === 'pix' ? total * 0.95 : total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};