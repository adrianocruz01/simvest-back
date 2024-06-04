# Passo a Passo da criação do projeto

## Primeiros passos

Vou descrever aqui os passos que eu fiz para dar inicio ao projeto, você não precisa seguir eles caso for dar continuidade ou queira fazer uma contribuição.

Clonar o repositório

```
git clone https://github.com/adrianocruz01/SimVest-Backend.git
```

iniciar o projeto no git (porque no github so veio o Readme)

```
npm init -y
```

## Instalar dependencias do prisma

Prisma: O Prisma é uma biblioteca que conecta nosso sistema com o banco de dados.

```
npm install @prisma/client
npm install --save-dev prisma
```

Vou baixar outras dependencias que vamos usar durante o código:

```
npm install @nestjs/config @nestjs/jwt @nestjs/passport bcryptjs passport passport-jwt
```

Iniciando prisma:

```
npx prisma init
```
Quando você rodar esse comando, ele vai criar um .env e um .gitignore, dai da pra você adicionar mais algum arquivo que não queira que suba para o github.

## Criando o Banco de Dados

Criando container no docker

```
docker run --name simvest -e POSTGRES_PASSWORD=119005 -d -p 5432:5432 postgres
```

Ajustei o .env com a configuração do banco:

```
DATABASE_URL=postgresql://postgres:minha_senha@localhost:5432/meu_banco_de_dados
```

Após criar o banco de dados e organizar o env, eu solto o comando que roda as migrations apontando para o banco que meu env esta configurado:

```
npx prisma migrate dev --name init
```

A partir de então, você ja tem um banco configurado, e consegue acessar pelo DBeaver ou Beekeeper, ou qualquer outra plataforma de acesso.