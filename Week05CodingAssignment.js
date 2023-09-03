class Recipe { //This creates as a blueprint for createRecipe
  constructor(name, ingredients, instructions) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  display() { //This displays the recipe information
       return `Name: ${this.name}\nIngredients: ${this.ingredients}\nInstructions: ${this.instructions}`;
  }
}

class RecipeCatalog {
  constructor() {
    this.recipes = []; //This array is used to store the recipes
  }

  createRecipe() {
    // This will create a new recipe by prompting the user for recipe details
    const name = prompt("Enter the recipe name:");
    const ingredients = prompt("Enter the ingredients (comma-separated):");
    const instructions = prompt("Enter the instructions:");

    // This checks to see  if the user provided valid input
    if (name && ingredients && instructions) {
      // This creates a new Recipe object and adds it to the catalog
      const newRecipe = new Recipe(name, ingredients.split(','), instructions);
      this.recipes.push(newRecipe);
      // This alerts the user that the recipe was added
      console.log(`Recipe added: ${newRecipe.name}`);
      alert(`Recipe added: ${newRecipe.name}`);
    } else {
      // This alerts the user if input was invalid
      alert("Invalid input. Please provide valid information.");
    }
  }

  viewRecipes() { //This allows the user to view the recipes that have already been entered
    if (this.recipes.length === 0) {
      // This prompts the user that there are no recipes to view
      console.log("There are no recipes to view.");
      alert("There are no recipes to view.");
      return;
    }

    let recipeList = "Recipes:\n";

    // This creates a list of recipe names for the user to choose from to view
    for (let i = 0; i < this.recipes.length; i++) {
      recipeList += `${i + 1}. ${this.recipes[i].name}\n`;
    }

    // This prompts the user for a recipe number to view
    const recipeNumber = prompt(`${recipeList}\nEnter the number of the recipe to view:`);

    if (recipeNumber && recipeNumber >= 1 && recipeNumber <= this.recipes.length) {
      // This displays the selected recipe
      const selectedRecipe = this.recipes[recipeNumber - 1];
      console.log(selectedRecipe.display());
      alert(selectedRecipe.display());
    } else {
      // This alert the user if their input is invalid
      alert("Invalid selection. Please choose a valid recipe number.");
    }
  }

  deleteRecipe() {
    if (this.recipes.length === 0) {
      // This prompts the user that there a no recipes to view
      console.log("There are no recipes to delete.");
      alert("There are no recipes to delete.");
      return;
    }

    let recipeList = "Recipes to delete:\n";

    // This creates a list of recipe names for the user to choose from to delete
    for (let i = 0; i < this.recipes.length; i++) {
      recipeList += `${i + 1}. ${this.recipes[i].name}\n`;
    }

    // This prompts the user for a recipe number to delete
    const recipeNumber = prompt(`${recipeList}\nEnter the number of the recipe to delete:`);

    if (recipeNumber && recipeNumber >= 1 && recipeNumber <= this.recipes.length) {
      // This deletes the selected recipe and shows the recipe deleted
      const deletedRecipe = this.recipes.splice(recipeNumber - 1, 1)[0];
      console.log(`Recipe deleted: ${deletedRecipe.name}`);
      alert(`Recipe deleted: ${deletedRecipe.name}`);
    } else {
      // This alerts the user if their input is invalid
      alert("Invalid selection. Please choose a valid recipe number.");
    }
  }

  start() { //This starts the menu
    while (true) {
      const choice = prompt("Menu Options:\n1. Create Recipe\n2. View Recipes\n3. Delete Recipe\n4. Quit");

      switch (choice) {
        case "1":
          this.createRecipe();
          break;
        case "2":
          this.viewRecipes();
          break;
        case "3":
          this.deleteRecipe();
          break;
        case "4":
          alert("Goodbye!");
          console.log("Goodbye!");
          return;
        default:
           alert("Invalid choice. Please select a valid option.");
      }
    }
  }
}

const catalog = new RecipeCatalog();
catalog.start(); // This calls the start method to run the program

  