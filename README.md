# Implementos de Transporte - Marketplace

Uma plataforma moderna para compra e venda de implementos de transporte, com foco em caminhões, carretas, implementos rodoviários e sistema integrado de aluguel de pátios de estacionamento.

## 🚀 Funcionalidades

### Marketplace
- **Catálogo de veículos** com filtros avançados por marca, modelo, ano
- **Páginas de veículo** detalhadas com especificações técnicas
- **Carrinho de compras** com persistência local
- **Sistema de checkout** completo
- **Avaliações e reviews** de veículos e vendedores

### Estacionamento
- **Aluguel de pátios** (estacionamentos, pátios cobertos, garagens)
- **Filtros de localização** e especificações
- **Sistema de reservas** com formulário de contato
- **Calculadora de custos** mensal

### Design & UX
- **Design responsivo** mobile-first
- **Paleta de cores azul/branco** profissional
- **Micro-interações** e animações suaves
- **Acessibilidade** WCAG AA compliant
- **Localização pt-BR** completa

## 🛠️ Tecnologias

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Roteamento**: React Router DOM
- **Estado**: React Context API
- **Ícones**: Lucide React
- **Build**: Vite
- **Testes**: Vitest
- **Formatação**: ESLint

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (Button, Badge, Rating)
│   ├── layout/         # Layout (Header, Footer)
│   ├── product/        # Componentes de veículo
│   ├── storage/        # Componentes de estacionamento
│   └── filters/        # Filtros e busca
├── pages/              # Páginas da aplicação
├── contexts/           # Contextos React (Carrinho)
├── data/               # Dados mock (veículos, vendedores, etc.)
├── types/              # Tipos TypeScript
└── utils/              # Utilitários e formatadores
```

## 🎨 Personalização

### Cores
As cores principais estão definidas no arquivo `tailwind.config.js` e podem ser facilmente alteradas:

- **Primary Blue**: `#1976D2` (blue-700)
- **Dark Blue**: `#0D47A1` (blue-900)  
- **Light Blue**: `#E3F2FD` (blue-50)
- **White**: `#FFFFFF`
- **Text Gray**: `#4B5563` (gray-600)

### Dados Mock
Os dados de exemplo estão organizados em:

- `src/data/products.ts` - Veículos do marketplace
- `src/data/categories.ts` - Categorias de veículos
- `src/data/sellers.ts` - Vendedores verificados
- `src/data/storage.ts` - Pátios de estacionamento

### Formatação
Os formatadores estão em `src/utils/formatters.ts`:

- **Moeda**: formatPrice() - formato brasileiro (BRL)
- **Parcelamento**: formatInstallment() - cálculo automático
- **Números**: formatNumber() - separadores pt-BR
- **Unidades**: formatUnit() - métricas (km, anos, toneladas)

## 🚀 Como executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Build para produção**:
   ```bash
   npm run build
   ```

4. **Executar testes**:
   ```bash
   npm run test
   ```

## 📱 Responsividade

- **Mobile**: < 640px (design mobile-first)
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## ♿ Acessibilidade

- Navegação por teclado completa
- Elementos focáveis com indicadores visuais
- Contraste adequado (WCAG AA)
- Textos alternativos em imagens
- Labels apropriados em formulários
- Estrutura semântica HTML5

## 🔧 Próximos Passos

Para transformar este projeto em uma aplicação real:

1. **Backend**: Integrar com API REST ou GraphQL
2. **Banco de dados**: PostgreSQL + Prisma/Supabase
3. **Autenticação**: Sistema de login/registro
4. **Pagamentos**: Integração Stripe/PagSeguro
5. **Upload**: Sistema de upload de imagens
6. **Deploy**: Vercel, Netlify ou similar
7. **SEO**: Meta tags dinâmicas, sitemap
8. **Analytics**: Google Analytics, Hotjar

## 📧 Suporte

Para dúvidas sobre implementação ou customização, entre em contato:
- **E-mail**: contato@implementostransporte.com.br
- **Telefone**: (11) 9999-9999