import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';
import { formatPrice } from '../utils/formatters';
import { Button } from '../components/ui/Button';

export const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCart();

  const cartProducts = items.map(item => {
    const product = products.find(p => p.id === item.productId);
    return product ? { ...product, cartQuantity: item.quantity } : null;
  }).filter(Boolean);

  const subtotal = cartProducts.reduce(
    (sum, product) => sum + (product!.price * product!.cartQuantity), 
    0
  );
  
  const shipping = 25.00; // Mock shipping
  const shipping = 500.00; // Mock shipping for vehicles
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-8 h-8 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-gray-600 mb-8">
              Explore nossos veículos e adicione itens ao seu carrinho.
            </p>
            <Link to="/produtos">
              <Button size="lg">
                Ver veículos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Carrinho de Compras
          </h1>
          <Button variant="ghost" onClick={clearCart}>
            Limpar carrinho
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartProducts.map(product => {
              if (!product) return null;
              
              return (
                <div key={product.id} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex gap-4">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <Link 
                        to={`/produtos/${product.id}`}
                        className="font-medium text-gray-900 hover:text-blue-700 transition-colors"
                      >
                        {product.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">{product.location}</p>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(product.id, product.cartQuantity - 1)}
                              className="p-1 hover:bg-gray-100 transition-colors"
                              disabled={product.cartQuantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 py-1 font-medium">{product.cartQuantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, product.cartQuantity + 1)}
                              className="p-1 hover:bg-gray-100 transition-colors"
                              disabled={product.cartQuantity >= product.stock}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeItem(product.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-xl font-bold text-blue-700">
                            {formatPrice(product.price * product.cartQuantity)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {formatPrice(product.price)} cada
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Resumo do Pedido
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span className="font-medium">{formatPrice(shipping)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-blue-700">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link to="/checkout" className="block">
                  <Button className="w-full">
                    Finalizar pedido
                  </Button>
                </Link>
                <Link to="/produtos">
                  <Button variant="outline" className="w-full">
                    Ver mais veículos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {filteredProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Veículos Relacionados
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.slice(0, 4).map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};