import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CreditCard, TrendingUp, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';
import { formatPrice } from '../utils/formatters';
import { Button } from '../components/ui/Button';

export const FinancingPage: React.FC = () => {
  const { items } = useCart();
  const [financingForm, setFinancingForm] = useState({
    downPayment: 0,
    interestRate: 1.5,
    termMonths: 24,
    name: '',
    email: '',
    phone: '',
    cpf: '',
    income: ''
  });

  const cartProducts = items.map(item => {
    const product = products.find(p => p.id === item.productId);
    return product ? { ...product, cartQuantity: item.quantity } : null;
  }).filter(Boolean);

  const totalAmount = cartProducts.reduce(
    (sum, product) => sum + (product!.price * product!.cartQuantity), 
    0
  );

  const financingCalculation = useMemo(() => {
    const principal = totalAmount - financingForm.downPayment;
    const monthlyRate = financingForm.interestRate / 100;
    
    if (principal <= 0 || monthlyRate <= 0 || financingForm.termMonths <= 0) {
      return {
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0
      };
    }

    // Cálculo usando fórmula de juros compostos (Price)
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, financingForm.termMonths)) / 
                          (Math.pow(1 + monthlyRate, financingForm.termMonths) - 1);
    
    const totalPayment = monthlyPayment * financingForm.termMonths + financingForm.downPayment;
    const totalInterest = totalPayment - totalAmount;

    return {
      monthlyPayment,
      totalPayment,
      totalInterest
    };
  }, [totalAmount, financingForm.downPayment, financingForm.interestRate, financingForm.termMonths]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitação de financiamento enviada! Nossa equipe entrará em contato em até 24 horas.');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-8 h-8 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Carrinho vazio
            </h1>
            <p className="text-gray-600 mb-8">
              Adicione implementos ao seu carrinho para simular um financiamento.
            </p>
            <Link to="/produtos">
              <Button size="lg">
                Ver implementos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/carrinho" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors mb-4">
            <ArrowLeft className="w-5 h-5" />
            Voltar ao carrinho
          </Link>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Financiamento de Implementos
          </h1>
          <p className="text-gray-600 mt-2">
            Simule e solicite financiamento para seus implementos com as melhores condições do mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Financing Form */}
          <div className="space-y-6">
            {/* Cart Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Implementos para Financiar
              </h2>
              
              <div className="space-y-3 mb-4">
                {cartProducts.map(product => {
                  if (!product) return null;
                  
                  return (
                    <div key={product.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">
                          {product.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          Qtd: {product.cartQuantity} × {formatPrice(product.price)}
                        </p>
                        <p className="text-sm font-medium text-blue-700">
                          {formatPrice(product.price * product.cartQuantity)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Montante Total</span>
                  <span className="text-lg font-bold text-blue-700">
                    {formatPrice(totalAmount)}
                  </span>
                </div>
              </div>
            </div>

            {/* Financing Parameters */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Parâmetros do Financiamento
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entrada (R$)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max={totalAmount}
                    value={financingForm.downPayment}
                    onChange={(e) => setFinancingForm({
                      ...financingForm, 
                      downPayment: Number(e.target.value)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Máximo: {formatPrice(totalAmount)}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Taxa de Juros (% ao mês)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    max="10"
                    step="0.1"
                    value={financingForm.interestRate}
                    onChange={(e) => setFinancingForm({
                      ...financingForm, 
                      interestRate: Number(e.target.value)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prazo de Pagamento (meses)
                  </label>
                  <select
                    value={financingForm.termMonths}
                    onChange={(e) => setFinancingForm({
                      ...financingForm, 
                      termMonths: Number(e.target.value)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={12}>12 meses</option>
                    <option value={18}>18 meses</option>
                    <option value={24}>24 meses</option>
                    <option value={36}>36 meses</option>
                    <option value={48}>48 meses</option>
                    <option value={60}>60 meses</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Dados Pessoais
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    value={financingForm.name}
                    onChange={(e) => setFinancingForm({...financingForm, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CPF
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="000.000.000-00"
                    value={financingForm.cpf}
                    onChange={(e) => setFinancingForm({...financingForm, cpf: e.target.value})}
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
                    value={financingForm.email}
                    onChange={(e) => setFinancingForm({...financingForm, email: e.target.value})}
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
                    value={financingForm.phone}
                    onChange={(e) => setFinancingForm({...financingForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Renda mensal (R$)
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={financingForm.income}
                    onChange={(e) => setFinancingForm({...financingForm, income: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Solicitar Financiamento
                </Button>
              </form>
            </div>
          </div>

          {/* Financing Results */}
          <div className="space-y-6">
            {/* Calculator Results */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6 text-blue-700" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Simulação de Financiamento
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Montante para Financiamento</div>
                  <div className="text-2xl font-bold text-blue-700">
                    {formatPrice(totalAmount - financingForm.downPayment)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Taxa de Juros</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {financingForm.interestRate}% a.m.
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Prazo de Pagamento</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {financingForm.termMonths} meses
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Valor da Parcela</div>
                  <div className="text-2xl font-bold text-green-700">
                    {formatPrice(financingCalculation.monthlyPayment)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {financingForm.termMonths} parcelas de {formatPrice(financingCalculation.monthlyPayment)}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Valor dos implementos</span>
                    <span className="font-medium">{formatPrice(totalAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Entrada</span>
                    <span className="font-medium">{formatPrice(financingForm.downPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total de juros</span>
                    <span className="font-medium text-red-600">{formatPrice(financingCalculation.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2">
                    <span className="text-lg font-semibold text-gray-900">Total a pagar</span>
                    <span className="text-lg font-bold text-blue-700">
                      {formatPrice(financingCalculation.totalPayment)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Vantagens do Financiamento
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Taxas competitivas</div>
                    <div className="text-sm text-gray-600">
                      As melhores taxas do mercado para implementos
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calculator className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Parcelas flexíveis</div>
                    <div className="text-sm text-gray-600">
                      Escolha o prazo que melhor se adapta ao seu fluxo de caixa
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Aprovação rápida</div>
                    <div className="text-sm text-gray-600">
                      Análise de crédito em até 24 horas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-semibold text-yellow-800 mb-2">
                Informações Importantes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Esta é uma simulação. Valores podem variar na análise final.</li>
                <li>• Sujeito à aprovação de crédito.</li>
                <li>• Taxa de juros pode variar conforme perfil do cliente.</li>
                <li>• Documentação completa será solicitada para aprovação.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};