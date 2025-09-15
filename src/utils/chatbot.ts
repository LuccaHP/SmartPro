// src/utils/chatbot.ts
import { products } from "../data/products";
import { storageSpaces } from "../data/storage";

export interface ChatResult {
  type: 'product' | 'storage';
  id: string;
  title: string;
  description: string;
}

export interface ChatResponse {
  text: string;
  results: ChatResult[];
}

export function respond(message: string): ChatResponse {
  const text = message.toLowerCase();
  const results: ChatResult[] = [];

  products.forEach((p) => {
    const words = p.title.toLowerCase().split(" ");
    if (words.some((w) => text.includes(w))) {
      results.push({
        type: 'product',
        id: p.id,
        title: p.title,
        description: `R$ ${p.price.toFixed(2)} | ${p.location} | Condição: ${p.condition}`
      });
    }
  });

  storageSpaces.forEach((s) => {
    const words = s.title.toLowerCase().split(" ");
    if (words.some((w) => text.includes(w))) {
      results.push({
        type: 'storage',
        id: s.id,
        title: s.title,
        description: `${s.city}/${s.uf}, ${s.areaM2} m² | R$ ${s.pricePerMonth.toFixed(2)}/mês`
      });
    }
  });

  if (results.length > 0) {
    return {
      text: "Encontrei:",
      results
    };
  }

  return {
    text: "Não achei nada com esse nome. Pergunte por outro produto ou armazém :)",
    results: []
  };
}
