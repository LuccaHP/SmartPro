import React from 'react';
import { Mail, Phone, MessageCircle, Clock, Shield, Truck } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const HelpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Central de Ajuda
          </h1>
          <p className="text-lg text-gray-600">
            Estamos aqui para ajudar você com suas compras e dúvidas.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
            <p className="text-gray-600 mb-4">contato@implementos.com.br</p>
            <Button variant="outline" size="sm">
              Enviar e-mail
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Telefone</h3>
            <p className="text-gray-600 mb-4">(11) 9999-9999</p>
            <Button variant="outline" size="sm">
              Ligar agora
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Chat</h3>
            <p className="text-gray-600 mb-4">Atendimento online</p>
            <Button variant="outline" size="sm">
              Iniciar chat
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perguntas Frequentes
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-blue-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Como funciona a entrega?
                  </h3>
                  <p className="text-gray-600">
                    Trabalhamos com transportadoras parceiras para entregar seus produtos com segurança. 
                    O prazo varia entre 5-10 dias úteis dependendo da sua localização. Você recebe o código 
                    de rastreamento por e-mail assim que o produto for despachado.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Como sei se o vendedor é confiável?
                  </h3>
                  <p className="text-gray-600">
                    Todos os vendedores passam por verificação. Procure pelo selo de verificado e 
                    confira as avaliações de outros compradores. Nossa plataforma oferece proteção 
                    total para suas compras.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Posso cancelar meu pedido?
                  </h3>
                  <p className="text-gray-600">
                    Sim! Você pode cancelar seu pedido gratuitamente em até 24 horas após a compra, 
                    desde que o produto ainda não tenha sido despachado. Entre em contato conosco 
                    o quanto antes.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-6 h-6 text-blue-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Como funciona o aluguel de armazenagem?
                  </h3>
                  <p className="text-gray-600">
                    Nossos espaços de armazenagem são seguros e acessíveis. Você pode reservar 
                    online, fazer uma visita para conhecer o espaço e assinar o contrato. 
                    O pagamento é mensal e você tem acesso liberado 24h por dia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-700 text-white rounded-xl p-8 mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">
            Não encontrou o que procurava?
          </h3>
          <p className="text-blue-100 mb-6">
            Nossa equipe está pronta para ajudar com qualquer dúvida ou problema.
          </p>
          <Button variant="secondary">
            Falar com atendimento
          </Button>
        </div>
      </div>
    </div>
  );
};