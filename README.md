# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command


## Rotas e Endpoints

| Methods | Endpoint                                                                  | Responsability                                    |
| ------- | ------------------------------------------------------------------------- | ------------------------------------------------- |
| POST    | [/users]                                   | Cadastro de usuário.                              |
| GET    | [/users]                                   | Lista usuários cadastrados.                              |
| GET    | [/users/:id]                                   | Pegar um usuário.                              |
| PATCH    | [/users/:id]                                   | Atualiza dados do usuário.                              |
| DELETE    | [/users/:id]                                   | Deleta usuário.                              |
-------