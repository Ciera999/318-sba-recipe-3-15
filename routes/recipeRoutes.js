const express = require('express');
const router = express.Router();
const fs = require('fs');
const recipes = require('../data/recipes.json');

router.get('/', (req, res) => {
  res.render('index', { recipes });
});

router.get('/:id', (req, res) => {
  const recipe = recipes.find(recipe => recipe.id === parseInt(req.params.id));
  if (!recipe) return res.status(404).send('Recipe not found');
  res.send(recipe);
});

router.post('/', (req, res) => {
  const newRecipe = req.body;
  newRecipe.id = recipes.length + 1;
  recipes.push(newRecipe);
  fs.writeFileSync('./data/recipes.json', JSON.stringify(recipes));
  res.redirect('/recipes');
});

router.delete('/:id', (req, res) => {
  const recipeIndex = recipes.findIndex(recipe => recipe.id === parseInt(req.params.id));
  if (recipeIndex === -1) return res.status(404).send('Recipe not found');
  recipes.splice(recipeIndex, 1);
  fs.writeFileSync('./data/recipes.json', JSON.stringify(recipes));
  res.send('Recipe deleted successfully');
});

module.exports = router;