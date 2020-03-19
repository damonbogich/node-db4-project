
exports.seed = async function(knex) {
  const recipes_ingredients = [
    { id: 1, recipe_id: 1, ingredient_id: 1, ingredient_quantity: 8.5 },
    { id: 2, recipe_id: 1, ingredient_id: 2, ingredient_quantity: 1.1 },
    { id: 3, recipe_id: 1, ingredient_id: 3, ingredient_quantity: 2.2 },
    { id: 4, recipe_id: 2, ingredient_id: 4, ingredient_quantity: 3.3 },
    { id: 5, recipe_id: 2, ingredient_id: 5, ingredient_quantity: 4.4 },
    { id: 6, recipe_id: 2, ingredient_id: 2, ingredient_quantity: 5.5 },
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("recipes_ingredients").truncate();

  return knex("recipes_ingredients").insert(recipes_ingredients);
};
