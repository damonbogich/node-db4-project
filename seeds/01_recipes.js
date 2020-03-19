exports.seed = async function(knex) {
  const recipes = [
    { id: 1, recipe_name: "pizza" },
    { id: 2, recipe_name: "omelet"}
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("recipes").truncate();

  return knex("recipes").insert(recipes);
};
