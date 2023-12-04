# Visão Geral da Aplicação

## Design e Tecnologias Utilizadas

A aplicação foi projetada seguindo os princípios do design SOLID para garantir facilidade de manutenção, desacoplamento e extensibilidade. Foram aplicados conceitos como inversão de dependências e injeção de dependências para facilitar a troca de banco de dados e garantir um código mais modular.

### Tecnologias Principais

- **Node.js e Express:** A aplicação foi desenvolvida em Node.js utilizando o framework Express para a construção de APIs RESTful de forma eficiente e flexível.

- **MongoDB e Mongoose:** O banco de dados NoSQL MongoDB foi escolhido, e o Mongoose foi utilizado como ORM para facilitar a modelagem de entidades e operações no banco de dados.

- **TypeScript:** TypeScript foi adotado para garantir type safety no código, tornando-o mais robusto e evitando erros comuns.

- **Zod:** A biblioteca Zod foi utilizada para validação de entrada, garantindo a integridade dos dados.

- **ESLint e Prettier:** ESLint foi configurado para manter a consistência e qualidade do código, enquanto o Prettier foi utilizado para garantir uma formatação uniforme.

- **Jest:** Testes unitários foram escritos utilizando a biblioteca Jest para garantir a qualidade e confiabilidade do código.

# Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar a navegação e compreensão do código. Abaixo estão as respostas às perguntas específicas do teste:

## Parte 1: Configuração do Projeto

A configuração do projeto consiste em uma aplicação Node.js usando o framework Expressa, a configuração inicial se encontra no arquivo `src/server.ts`. O banco de dados MongoDB é utilizado com o Mongoose como ODM (Object Document Mapper).

## Parte 2: Modelagem e CRUD

Para a modelagem e operações CRUD da entidade "Produto", foram criados os seguintes arquivos:

### Arquivo `db/mongoose.ts`

Responsável pela configuração da conexão com o MongoDB. Utiliza o Mongoose como ODM para interagir com o banco de dados.

### Arquivo `models/product.ts`

Define o modelo "Product" para representar os documentos na coleção de produtos no MongoDB. O modelo possui campos para `name`, `description` e `price`.

Com a configuração da conexão e a definição do modelo, agora estamos prontos para implementar as operações CRUD nas rotas.

## Parte 3: Consultas Avançadas

Para atender a consultas avançadas, foi implementada uma única rota `GET /products/search` que aceita os parâmetros de consulta:

- `page` (número da página, padrão 1)
- `minPrice` (preço mínimo opcional)
- `maxPrice` (preço máximo opcional)
- `keyword` (palavra-chave na descrição, opcional)

A lógica para essa busca é realizada no `SearchProductsUseCase` e `ProductRepository`. A rota usa o `SearchProductsUseCase` para executar a busca e retorna a lista de produtos formatada.

```
// Exemplo de chamada:
GET /products/search?page=1&minPrice=20&maxPrice=50&keyword=laptop
```

## Parte 4: Testes

Para testar as funcionalidades da aplicação, foram implementados testes unitários utilizando a biblioteca Jest. Foram escolhidas duas rotas principais para serem testadas:

**Devido ao design da aplicação não foi possível testar alguns casos de erro, já que usamos o zod para validar o body da requisição logo na etapa inicial de iteração (controller) e para o teste unitário seria mais apropriado testar os use cases que são responsáveis pelas regras de negócios**

1. **Rota de Criação de Produto:**

   - Verifica se a rota de criação de produto retorna o status HTTP 201 (Created) ao adicionar um novo produto com dados válidos.
   - Garante que a rota retorna o status HTTP 400 (Bad Request) ao tentar criar um produto com dados inválidos.

2. **Rota de Listagem de Produtos:**
   - Confirma se a rota de listagem de produtos retorna o status HTTP 200 (OK) ao requisitar todos os produtos.
   - Certifica-se de que a rota retorna a lista correta de produtos, considerando a quantidade de produtos esperada.

Esses testes são essenciais para garantir a integridade e o funcionamento adequado das funcionalidades críticas da aplicação, proporcionando uma maior confiança e robustez ao código implementado.

## Documentação das Rotas

A seguir, são apresentadas as rotas disponíveis na aplicação, juntamente com uma breve descrição de suas funcionalidades.

### Rota: `/products/create`

- **Método HTTP:** POST
- **Descrição:** Cria um novo produto com base nos dados fornecidos.
- **Parâmetros de Requisição:**
  - `name` (string): Nome do produto.
  - `description` (string): Descrição do produto.
  - `price` (number): Preço do produto.
- **Exemplo de Chamada:**

  ```
  POST /products/create
  Content-Type: application/json

  {
    "name": "Nome do Produto",
    "description": "Descrição do Produto",
    "price": 99.99
  }
  ```

### Rota: `/products`

- **Método HTTP:** GET
- **Descrição:** Retorna a lista de todos os produtos cadastrados.
- **Exemplo de Chamada:**

  ```http
  GET /products
  ```

### Rota: `/products/find/{id}`

- **Método HTTP:** GET
- **Descrição:** Retorna os detalhes de um produto específico com base no ID.
- **Parâmetros de Requisição:**
  - `id` (string): ID único do produto.
- **Exemplo de Chamada:**

  ```
  GET /products/find/656bdd0a7e7c025befd0fef0
  ```

### Rota: `/products/search`

- **Método HTTP:** GET
- **Descrição:** Realiza uma busca avançada por produtos com base em critérios como preço mínimo, preço máximo e palavra-chave na descrição.
- **Parâmetros de Requisição:**
  - `page` (number): Página da lista a ser retornada.
  - `minPrice` (number, opcional): Preço mínimo para filtrar os produtos.
  - `maxPrice` (number, opcional): Preço máximo para filtrar os produtos.
  - `keyword` (string, opcional): Palavra-chave para busca na descrição dos produtos.
- **Exemplo de Chamada:**

  ```
  GET /products/search?page=1&minPrice=20&maxPrice=50&keyword=laptop
  ```

### Rota: `/products/update/{id}`

- **Método HTTP:** PUT
- **Descrição:** Atualiza os detalhes de um produto específico com base no ID.
- **Parâmetros de Requisição:**
  - `id` (string, formato do Mongoose): ID único do produto a ser atualizado.
  - `name` (string): Nome do produto.
  - `description` (string): Descrição do produto.
  - `price` (number): Preço do produto.
- **Exemplo de Chamada:**

  ```
  PUT /products/update/656bdd0a7e7c025befd0fef0
  Content-Type: application/json

  {
   "name": "Novo Nome do Produto",
   "description": "Nova Descrição do Produto",
   "price": 129.99
  }
  ```

### Rota: `/products/delete/{id}`

- **Método HTTP:** DELETE
- **Descrição:** Exclui um produto específico com base no ID.
- **Parâmetros de Requisição:**
  - `id` (string, formato do Mongoose): ID único do produto a ser atualizado.
- **Exemplo de Chamada:**

  ```
  DELETE /products/delete/656bdd0a7e7c025befd0fef0
  ```
