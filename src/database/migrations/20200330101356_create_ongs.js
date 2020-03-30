//metodo up é quem cria a tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('whatsapp').notNullable()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()
  })
};

//metodo down é para caso ocorra algum problema, oque sera feito, normalmente apaga-la
exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};
