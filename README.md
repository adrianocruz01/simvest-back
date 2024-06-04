# Simulador de Investimentos

## Descrição
Este projeto é um simulador de investimentos na bolsa de valores, permitindo que os usuários comprem e vendam ações fictícias e acompanhem seu portfólio ao longo do tempo. O backend é construído usando NestJS, Prisma ORM e PostgreSQL.

## Funcionalidades
- Registro e autenticação de usuários
- Compra e venda de ações
- Visualização de portfólio
- Histórico de transações
- Integração com a API Alpha Vantage para obter preços de ações em tempo real

## Tecnologias Utilizadas
- **Node.js**
- **NestJS**
- **Prisma ORM**
- **PostgreSQL**
- **Axios** (para integração com API externa)
- **JWT** (para autenticação)

## Estrutura do Projeto
```
backend/
│
├── prisma/
│ ├── schema.prisma # Esquema do Prisma
│ └── migrations/ # Migrações do banco de dados
│
├── .env.example # Exemplo de arquivo de variáveis de ambiente
├── package.json
├── README.md
└── tsconfig.json
```


## Configuração do Ambiente de Desenvolvimento
### Pré-requisitos
- Node.js v14 ou superior
- PostgreSQL

### Passos para Configuração
1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/adrianocruz01/simvest-back.git
   cd simvest.back
   ```
2. **Instale as Dependências:**
   ```bash
   npm install
   ```
3. **Configure as Variáveis de Ambiente:**
   Renomeie o arquivo `.env.example` para `.env` e preencha com suas configurações:
   ```
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/seu_banco_de_dados
   JWT_SECRET=sua_chave_secreta
   ALPHA_VANTAGE_API_KEY=sua_api_key_alpha_vantage
   ```
4. **Execute as Migrações do Prisma:**
   ```bash
   npm run seed
   ```
5. **Inicie o Servidor:**
   ```bash
   npm run start:dev
   ```

## Uso
### Endpoints Principais, vamos criar eles futuramente, ou então nem sejam eles...
- `POST /auth/register` - Registro de novos usuários
- `POST /auth/login` - Login de usuários
- `GET /portfolio` - Visualizar portfólio do usuário
- `POST /transactions/buy` - Comprar ações
- `POST /transactions/sell` - Vender ações
- `GET /stocks/price` - Consultar preço de ações

## Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Adicione todos os aquivos no git (`git add .`)
4. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
5. Push para a branch (`git push origin feature/nova-feature`)
6. Abra um Pull Request
