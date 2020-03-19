
exports.up = function(knex) {
  return knex.schema 
  .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128)
      .unique()
      .notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128)
      .unique()
      .notNullable();
  })
  .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
      tbl.string('steps', 256)
      .notNullable();
  })
  .createTable('recipes_ingredients', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
      tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
      tbl.float('ingredient_quantity')
      .notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("recipes")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("instructions")
      .dropTableIfExists("recipes_ingredients");
  };
