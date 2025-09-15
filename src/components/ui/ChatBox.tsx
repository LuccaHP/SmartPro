import { useState, useEffect } from "react";
import { Send, MessageCircle, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { respond, ChatResult } from "../../utils/chatbot";

type Message = {
  author: "user" | "bot";
  text: string;
  typing?: boolean;
  results?: ChatResult[];
};

export function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Mensagem inicial com delay (só quando abrir)
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const timer = setTimeout(() => {
        setMessages([
          {
            author: "bot",
            text: "Olá! 👋 Estou aqui para te ajudar a encontrar o implemento ou armazém certo. Pode digitar o que procura."
          }
        ]);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  function handleSend() {
    if (!input.trim()) return;

    const newMessage: Message = { author: "user", text: input };
    const typingMessage: Message = { author: "bot", text: "Digitando...", typing: true };
    setMessages((prev) => [...prev, newMessage, typingMessage]);

    const userInput = input;
    setInput("");

    setTimeout(() => {
      setMessages((prev) => {
        const filtered = prev.filter((m) => !m.typing);
        const response = respond(userInput);
        return [...filtered, {
          author: "bot",
          text: response.text,
          results: response.results
        }];
      });
    }, 1500); // delay de 1.5s pra resposta aparecer
  }

  function handleResultClick(result: ChatResult) {
    if (result.type === 'product') {
      navigate(`/produtos/${result.id}`);
      setIsOpen(false); // Fecha o chat após navegar
    } else if (result.type === 'storage') {
      navigate('/armazenagem');
      setIsOpen(false); // Fecha o chat após navegar
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ícone flutuante */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        >
          <MessageCircle size={28} />
        </motion.button>
      )}

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-80 h-96 bg-white rounded-lg shadow-2xl border flex flex-col"
          >
            {/* Header do chat */}
            <div className="flex items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-lg">
              <h3 className="font-semibold">Assistente SmartPro</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-700 p-1 rounded"
              >
                <X size={20} />
              </button>
            </div>

            {/* Área de mensagens */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              <AnimatePresence>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-lg text-sm ${m.author === "user"
                        ? "bg-blue-600 text-white ml-8 p-2"
                        : "bg-gray-100 text-gray-900 mr-8"
                      }`}
                  >
                    {m.author === "bot" ? (
                      <div className="p-2">
                        <div className="whitespace-pre-line mb-2">{m.text}</div>
                        {m.results && m.results.length > 0 && (
                          <div className="space-y-2">
                            {m.results.map((result, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleResultClick(result)}
                                className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-medium text-gray-900 group-hover:text-blue-700">
                                      {result.title}
                                    </div>
                                    <div className="text-xs text-gray-600 mt-1">
                                      {result.description}
                                    </div>
                                  </div>
                                  <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-500" />
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="whitespace-pre-line">{m.text}</div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="flex items-center border-t p-3 bg-gray-50 rounded-b-lg">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Digite sua mensagem..."
                className="flex-1 p-2 text-sm rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="ml-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
