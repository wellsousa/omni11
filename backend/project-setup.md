
criar o package:

npm init -y

instalar o microframework express:

npm install express

instalar o pacote nodemon apenas no ambiente de desenvolvimento:

npm install nodemon -D

criar um script para o nodemon ser executado pelo npm:

"scripts": {
    "start": "nodemon index.js"
}

instalar o query builder knex:

npm install knex --save

instalar o banco de dados portatil sqlite:

npm install sqlite3

criar o arquivo de configuração do knex:

npx knex init

criar as migrations das tabelas:

npx knex migrate:make create_ongs
npx knex migrate:make create_incidents


Instalação do modulo CORS:

npm install cors

Para instalar todas as dependencias contidas no projeto:

npm install