# 🎭 CastMyChar

**CastMyChar** é uma galeria visual de faceclaims (FCs) e playbys (PPs) para personagens de RPG e fanfics.  
Com filtros avançados e responsividade total, você pode encontrar o rosto ideal para o seu personagem com rapidez e estilo.

---

## 🖼️ Demonstração

> 🔗 [Acesse o site online via GitHub Pages](https://stephhoel.github.io/castmychar)

<!--
  Quero implementar:
  - ~~[entender] HMR mais leve e rápido~~
  - ~~Extrair services e utils~~
  - ~~Biome + Tipagem Mais Estrita~~
  - Otimização da Build com Vite
  - Melhor experiência de dev
  - Testes automatizados
  - Lazy loading de imagens
  - Paginação ou infinite scroll
  - Code Splitting via Rotas Dinâmicas
  - Validação e animações com feedback
  - Página de solicitação de inclusão de PP (com todos os campos)
  - Página de solicitação de edição de PP (com nome do pp sem possibilidade de edição + campo para dizer oq precisa ser editado)
-->

---

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- GitHub Pages (deploy)

---

## 📁 Estrutura de Pastas

```bash
castmychar/
├── public/                    # Arquivos públicos (favicon, imagens, etc.)
├── src/
│   ├── assets/                # Imagens e ícones do projeto
│   ├── components/            # Componentes reutilizáveis
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LayoutWrapper.tsx
│   │   ├── filters/
│   │   │   └── Filters.tsx
│   │   ├── actor/
│   │   │   ├── ActorCard.tsx
│   │   │   └── ActorList.tsx
│   ├── data/                  # Dados estáticos em formato TS
│   │   └── actors.ts
│   ├── pages/                 # Páginas
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── router/
│   │   ├── index.tsx          # Define BrowserRouter
│   │   └── routes.ts          # Define rotas
│   ├── types/                 # Tipagens compartilhadas
│   │   └── index.ts
│   ├── index.css              # Estilos globais (Tailwind)
│   ├── vite-env.d.ts
│   └── main.tsx               # Ponto de entrada React
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
````

---

## ✨ Funcionalidades

* 🔍 **Busca por nome**
* 🎚️ **Filtros combináveis** (nacionalidade, cor dos olhos, cor do cabelo, faixa etária etc.)
* 🖼️ **Lista de atores/atrizes com imagem, nome e características**
* 📱 **Totalmente responsivo** (desktop, tablet e mobile)
* 🦶 **Rodapé fixo ou dinâmico**, conforme o conteúdo da página

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/stephhoel/castmychar.git
cd castmychar

# Instale as dependências
npm install
```

---

## 🧪 Desenvolvimento local

```bash
npm run dev
```

Abra `http://localhost:5173` no navegador.

---

## 🛠️ Build para produção

Basta fazer um pull-request para a branch `main`.

---

## 🌐 Deploy no GitHub Pages

> O deploy é feito a partir do **GitHub Actions** sempre que um novo pull-request é feito para a branch `main`.

---

## 📖 Licença

MIT © [Steph Hoel](https://github.com/stephhoel)
