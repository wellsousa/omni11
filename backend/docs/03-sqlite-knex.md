
Para listar todos os comandos disponiveis voce pode usar:

    npx knex

Para criar uma nova migration use:
    npx knex migrate:make nome_tabela

Você deve criar e definir os campos da tabela na nova migration criada:

exports.up = function(knex) {
  knex.schema.createTable('table_name', (table) =>{
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('uf', 2).notNullable()
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('table_name')
};

Para executar a migration use:

npx knex migrate:latest

Para saber quais migrations foram executadas:

    npx knex migrate:status

Para apagar a última tabela criada pelas migrations:

    npx knex migrate:down

