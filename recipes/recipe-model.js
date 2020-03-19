const db = require("../data/db-config");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions

}

function getRecipes() {
     return db("recipes");
}

function getShoppingList(recipe_id) {
    return db("recipes_ingredients as ri")
    .join("recipes as r", "ri.recipe_id", "r.id" )
    .join("ingredients as i", "ri.ingredient_id", "i.id" )
    .select("i.ingredient_name", "ri.ingredient_quantity")
    .where("recipe_id", recipe_id);
}

function getInstructions(recipe_id) {
    return db("instructions as i")
    .join("recipes as r", "i.recipe_id", "r.id")
    .select("r.recipe_name","i.steps")
    .where("recipe_id", recipe_id)
}