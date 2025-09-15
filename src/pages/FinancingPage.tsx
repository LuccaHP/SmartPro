import React, { useState, useMemo } from 'react';
import rbcreditoLogo from '../data/img/rbcredito.png';
import { Link } from 'react-router-dom';
import { Calculator, CreditCard, TrendingUp, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';
import { formatPrice } from '../utils/formatters';
import { Button } from '../components/ui/Button';

// Parâmetros fixos da empresa
const FINANCING_PARAMS = {
  interestRate: 1.2, // 1,2% ao mês
  maxTermMonths: 60, // Máximo 60 meses
  minDownPaymentPercent: 20, // Mínimo 20% de entrada
  availableTerms: [12, 18, 24, 36, 48, 60] // Prazos disponíveis
};

export const FinancingPage: React.FC = () => {
  const { items } = useCart();
  const [selectedTerm, setSelectedTerm] = useState(24);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [customerForm, setCustomerForm] = useState({
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

  const downPayment = (totalAmount * downPaymentPercent) / 100;
  const financingAmount = totalAmount - downPayment;

  const financingCalculation = useMemo(() => {
    if (financingAmount <= 0 || selectedTerm <= 0) {
      return {
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0
      };
    }

    // Cálculo usando fórmula Price (juros compostos)
    const monthlyRate = FINANCING_PARAMS.interestRate / 100;
    const monthlyPayment = financingAmount * (monthlyRate * Math.pow(1 + monthlyRate, selectedTerm)) /
      (Math.pow(1 + monthlyRate, selectedTerm) - 1);

    const totalPayment = monthlyPayment * selectedTerm + downPayment;
    const totalInterest = totalPayment - totalAmount;

    return {
      monthlyPayment,
      totalPayment,
      totalInterest
    };
  }, [totalAmount, downPayment, financingAmount, selectedTerm]);

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
          <div className="flex items-center gap-3">
            <img src={rbcreditoLogo} alt="RB Crédito" className="w-24 h-24 object-contain" />
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Financiamento de Implementos 
            </h1>
          </div>
          <p className="text-gray-600 mt-2">
            Simule e solicite financiamento para seus implementos com as condições da nossa empresa.
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

            {/* Financing Options */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Opções de Financiamento
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Percentual de Entrada
                  </label>
                  <select
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={20}>20% - {formatPrice((totalAmount * 20) / 100)}</option>
                    <option value={30}>30% - {formatPrice((totalAmount * 30) / 100)}</option>
                    <option value={40}>40% - {formatPrice((totalAmount * 40) / 100)}</option>
                    <option value={50}>50% - {formatPrice((totalAmount * 50) / 100)}</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    Entrada mínima: {FINANCING_PARAMS.minDownPaymentPercent}%
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prazo de Pagamento
                  </label>
                  <select
                    value={selectedTerm}
                    onChange={(e) => setSelectedTerm(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {FINANCING_PARAMS.availableTerms.map(term => (
                      <option key={term} value={term}>
                        {term} meses
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Taxa de Juros (fixa)</div>
                  <div className="text-lg font-semibold text-blue-700">
                    {FINANCING_PARAMS.interestRate}% ao mês
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Dados para Análise de Crédito
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    value={customerForm.name}
                    onChange={(e) => setCustomerForm({ ...customerForm, name: e.target.value })}
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
                    value={customerForm.cpf}
                    onChange={(e) => setCustomerForm({ ...customerForm, cpf: e.target.value })}
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
                    value={customerForm.email}
                    onChange={(e) => setCustomerForm({ ...customerForm, email: e.target.value })}
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
                    value={customerForm.phone}
                    onChange={(e) => setCustomerForm({ ...customerForm, phone: e.target.value })}
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
                    value={customerForm.income}
                    onChange={(e) => setCustomerForm({ ...customerForm, income: e.target.value })}
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
                    {formatPrice(financingAmount)}
                  </div>
                  <div className="text-sm text-gray-600">
                    Valor total: {formatPrice(totalAmount)} - Entrada: {formatPrice(downPayment)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Taxa de Juros</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {FINANCING_PARAMS.interestRate}% a.m.
                    </div>
                    <div className="text-xs text-gray-500">Taxa fixa da empresa</div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Prazo Selecionado</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {selectedTerm} meses
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Valor da Parcela</div>
                  <div className="text-2xl font-bold text-green-700">
                    {formatPrice(financingCalculation.monthlyPayment)}
                  </div>
                  <div className="text-sm text-gray-600">
                    Total de {selectedTerm} parcelas
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Valor dos implementos</span>
                    <span className="font-medium">{formatPrice(totalAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Entrada ({downPaymentPercent}%)</span>
                    <span className="font-medium">{formatPrice(downPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Montante financiado</span>
                    <span className="font-medium">{formatPrice(financingAmount)}</span>
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

            {/* Company Financing Conditions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Condições da Empresa
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Taxa fixa</div>
                    <div className="text-sm text-gray-600">
                      {FINANCING_PARAMS.interestRate}% ao mês para todos os clientes
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calculator className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Prazos flexíveis</div>
                    <div className="text-sm text-gray-600">
                      De 12 até {FINANCING_PARAMS.maxTermMonths} meses para pagamento
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Entrada mínima</div>
                    <div className="text-sm text-gray-600">
                      {FINANCING_PARAMS.minDownPaymentPercent}% do valor total
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Terms */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Escolha o Prazo de Pagamento
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {FINANCING_PARAMS.availableTerms.map(term => {
                  const tempAmount = totalAmount - (totalAmount * downPaymentPercent) / 100;
                  const monthlyRate = FINANCING_PARAMS.interestRate / 100;
                  const payment = tempAmount * (monthlyRate * Math.pow(1 + monthlyRate, term)) /
                    (Math.pow(1 + monthlyRate, term) - 1);

                  return (
                    <button
                      key={term}
                      onClick={() => setSelectedTerm(term)}
                      className={`p-4 border rounded-lg text-left transition-all ${selectedTerm === term
                        ? 'border-blue-700 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="font-medium text-gray-900">{term} meses</div>
                      <div className="text-sm text-blue-700 font-medium">
                        {formatPrice(payment)}
                      </div>
                      <div className="text-xs text-gray-500">por mês</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-semibold text-yellow-800 mb-2">
                Informações Importantes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Taxa de juros fixa de {FINANCING_PARAMS.interestRate}% ao mês</li>
                <li>• Entrada mínima de {FINANCING_PARAMS.minDownPaymentPercent}% obrigatória</li>
                <li>• Sujeito à aprovação de crédito</li>
                <li>• Análise de crédito em até 24 horas</li>
                <li>• Documentação completa será solicitada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};