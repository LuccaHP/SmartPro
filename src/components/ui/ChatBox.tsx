import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { respond } from "../../utils/chatbot";

type Message = {
  author: "user" | "bot";
  text: string;
  typing?: boolean;
};

export function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  // Mensagem inicial com delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        {
          author: "bot",
          text: "Olá! 👋 Estou aqui para te ajudar a encontrar o implemento ou armazém certo. Pode digitar o que procura."
        }
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
        return [...filtered, { author: "bot", text: respond(userInput) }];
      });
    }, 1500); // delay de 1.5s pra resposta aparecer
  }

  return (
    <div className="flex flex-col w-full max-w-3xl h-[80vh] border rounded-lg shadow-md bg-white">
      {/* Área de mensagens */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <AnimatePresence>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg max-w-[75%] whitespace-pre-line ${
                m.author === "user"
                  ? "bg-blue-600 text-white self-end ml-auto"
                  : "bg-gray-100 text-gray-900 self-start"
              }`}
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="flex items-center border-t p-3 bg-gray-50">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Digite sua mensagem..."
          className="flex-1 p-2 rounded-md border focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="ml-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
