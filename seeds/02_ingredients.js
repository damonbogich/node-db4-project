
exports.seed = async function(knex) {
  const ingredients = [
    { id: 1, ingredient_name: "sauce" },
    { id: 2, ingredient_name: "cheese"},
    { id: 3, ingredient_name: "dough" },
    { id: 4, ingredient_name: "eggs"},
    { id: 5, ingredient_name: "bacon" }
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("ingredients").truncate();

  return knex("ingredients").insert(ingredients);
};
