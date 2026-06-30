# Nintendo Switch 2 Store - Case Técnico

### Este projeto é uma simulação de e-commerce focada no lançamento do Nintendo Switch 2, desenvolvida originalmente como parte de um desafio técnico para Desenvolvedor Front-End Júnior.

---

## Evolução Pós-Feedback (Entrevista Técnica)
Após a realização da entrevista técnica, o projeto passou por um ciclo completo de code review e refatoração com base nos feedbacks recebidos. Foram implementadas melhorias significativas em experiência do usuário, fidelidade visual e arquitetura de deploy:

- **Galeria Dinâmica de Imagens:** Cada jogo agora conta com uma galeria de capturas de tela exclusivas na sua página de detalhes.
- **Imersão Visual (Fundo Personalizado):** O plano de fundo da página de detalhes do produto adapta-se dinamicamente usando a arte e a identidade visual do jogo selecionado.
- **Máscaras de Input no Checkout:** Implementação de máscaras de formatação em tempo real para os campos de **CPF, Telefone e Cartão de Crédito**, garantindo maior consistência dos dados e melhor UX.
- **Deploy 100% Online e Distribuído:** A aplicação foi migrada do ambiente local para uma infraestrutura real de produção:
  - **Front-end:** Hospedado na **Vercel** com suporte a reescrita de rotas para Single Page Applications (evitando erros de 404 no refresh).
  - **Back-end (API):** Banco de dados JSON simulado hospedado e rodando de forma estável no **Render**.

---

## Links do Projeto

- **Live Demo (Front-end):** [https://nintendo-switch-2-store.vercel.app](https://nintendo-switch-2-store.vercel.app)
- **API REST (Back-end):** Hospedado no Render

---

## Tecnologias Utilizadas

- **React + Vite:** Ferramental moderno para desenvolvimento SPA rápido, leve e otimizado.
- **TypeScript:** Tipagem estática estrita para maior segurança, autocomplete e facilidade na manutenção do código.
- **Styled Components:** Estilização baseada em componentes com suporte a temas globais e propriedades dinâmicas (essencial para o fundo personalizado).
- **React Router Dom:** Gerenciamento avançado de rotas internas (Home, Categorias, Produto).
- **JSON Server:** Simulação completa de uma API REST com persistência de dados.
- **ESLint:** Padronização, boas práticas e consistência na qualidade do código.

---

## Funcionalidades Principais

- **Página Inicial:** Banners promocionais em carrossel e vitrines segmentadas dinamicamente (Promoções e Novidades).
- **Catálogo Inteligente:** Listagem completa de jogos com filtragem dinâmica por categorias e gêneros.
- **Detalhes Imersivos do Produto:** Galeria de mídias, descrição detalhada, carregamento de background temático e preços formatados no padrão monetário `pt-BR`.
- **Carrinho de Compras:** Gerenciamento completo de estado (adicionar, remover, atualizar quantidades) com cálculo automático de totais.
- **Checkout Validado:** Formulário de finalização de compra com validações impeditivas, feedback visual de erro e máscaras de digitação.
- **Responsividade Total:** Layout fluido e adaptável para qualquer tamanho de tela (Mobile, Tablet e Desktop) utilizando CSS Grid e Flexbox.

---

## Desenvolvolvedor
- **George Brooks**
