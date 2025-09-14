// src/utils/chatbot.ts
import { products } from "../data/products";
import { storageSpaces } from "../data/storage";

export function respond(message: string): string {
  const text = message.toLowerCase();
  const results: string[] = [];

  products.forEach((p) => {
    const words = p.title.toLowerCase().split(" ");
    if (words.some((w) => text.includes(w))) {
      results.push(
        `• ${p.title} — R$ ${p.price.toFixed(2)} | ${p.location} | Condição: ${p.condition}`
      );
    }
  });

  storageSpaces.forEach((s) => {
    const words = s.title.toLowerCase().split(" ");
    if (words.some((w) => text.includes(w))) {
      results.push(
        `• ${s.title} — ${s.city}/${s.uf}, ${s.areaM2} m² | R$ ${s.pricePerMonth.toFixed(2)}/mês`
      );
    }
  });

  if (results.length > 0) {
    return `Encontrei:\n\n${results.join("\n")}`;
  }

  return "Não achei nada com esse nome. Pergunte por outro produto ou armazém :)";
}
