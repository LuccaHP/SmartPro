export function ChatPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 flex justify-center items-center p-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Assistente SmartPro
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Nosso assistente inteligente está sempre disponível para te ajudar a encontrar
            os implementos agrícolas e espaços de armazenagem perfeitos para suas necessidades.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Como usar o assistente
            </h2>
            <div className="text-left space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Clique no ícone do chat</h3>
                  <p className="text-gray-600">
                    Procure pelo ícone redondo azul no canto inferior direito da tela
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Digite sua pergunta</h3>
                  <p className="text-gray-600">
                    Descreva o que você está procurando: "trator", "armazém", "implemento" etc.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Receba recomendações</h3>
                  <p className="text-gray-600">
                    O assistente mostrará produtos e espaços que correspondem à sua busca
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">
              💡 <strong>Dica:</strong> O assistente está disponível em todas as páginas do site!
              Você pode usá-lo a qualquer momento clicando no ícone flutuante.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
