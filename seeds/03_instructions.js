

exports.seed = async function(knex) {
  const instructions = [
    { id: 1, recipe_id: 1, steps: "Step 1: Press out the dough and apply sauce" },
    { id: 2, recipe_id: 1, steps: "Step 2: Add cheese and any other toppings.  Then put in a wood fire oven until cooked." },
    { id: 3, recipe_id: 2, steps: "Step 1: Beat the eggs until they are all one consistent yellow color" },
    { id: 4, recipe_id: 2, steps: "Step 2: Fry the eggs and add in any other ingredients you would like" }
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("instructions").truncate();

  return knex("instructions").insert(instructions);
};
