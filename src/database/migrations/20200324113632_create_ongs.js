exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
   table.string('id').primary();
   table.string('name').notNullable();
   table.string('email').notNullable();
   table.string('whatsapp').notNullable();
   table.string('city').notNullable();
   table.string('uf', 2).notNullable();
  });
};
//criar a Table

//para deletar a Table sé precisar
exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};


//para executar npx knex migrate:latest
//npx knex menu de codes
//npx knex migrate:latest
//npx knex migrate:rollback
//npx knex migrate:status