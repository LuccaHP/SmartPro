import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Shield, Plus, Minus, ShoppingCart, CreditCard } from 'lucide-react';
import { products } from '../data/products';
import { sellers } from '../data/sellers';
import { categories } from '../data/categories';
import { formatPrice, formatInstallment } from '../utils/formatters';
import { Rating } from '../components/ui/Rating';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/product/ProductCard';
import { useCart } from '../contexts/CartContext';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const { addItem } = useCart();

  const product = products.find(p => p.id === id);
  const seller = product ? sellers.find(s => s.id === product.sellerId) : null;
  const category = product ? categories.find(c => c.id === product.categoryId) : null;

  if (!product || !seller) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Implemento não encontrado</h1>
          <Link to="/produtos">
            <Button>Voltar aos implementos</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product.id, quantity);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-700">Início</Link>
          <span>/</span>
          <Link to="/produtos" className="hover:text-blue-700">Implementos</Link>
          {category && (
            <>
              <span>/</span>
              <Link to={`/produtos?categoria=${category.id}`} className="hover:text-blue-700">
                {category.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.title}
                className="w-full h-96 object-cover rounded-xl shadow-sm"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={product.condition === 'novo' ? 'success' : 'warning'}>
                  {product.condition === 'novo' ? 'Novo' : 'Usado'}
                </Badge>
                {product.stock <= 5 && product.stock > 0 && (
                  <Badge variant="error">
                    Últimas {product.stock} unidades
                  </Badge>
                )}
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {product.title}
              </h1>
              
              <Rating rating={product.rating} reviewCount={product.reviewCount} size="lg" />
            </div>

            {/* Price */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-700 mb-2">
                {formatPrice(product.price)}
              </div>
              <div className="text-gray-600">
                {formatInstallment(product.price)}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantidade
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.stock} disponíveis
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Adicionar ao carrinho
                </Button>
                <Button variant="secondary" className="flex-1">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Comprar agora
                </Button>
              </div>
            </div>

            {/* Seller Info */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">
                    {seller.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{seller.name}</span>
                    {seller.verified && (
                      <Shield className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-3 h-3" />
                    <span>{seller.location}</span>
                  </div>
                </div>
              </div>
              
              <Rating rating={seller.rating} reviewCount={seller.reviewCount} size="sm" />
              
              <Button variant="outline" className="w-full mt-4">
                Entrar em contato
              </Button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Especificações Técnicas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                <span className="text-gray-600">{key}</span>
                <span className="font-medium text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Produtos Relacionados
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};