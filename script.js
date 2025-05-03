// script.js

const recipes = [
  // Breakfast Recipes
  {
    name: "Poha",
    category: "Breakfast",
    ingredients: ["Flattened rice", "Onion", "Mustard seeds", "Green chili", "Coriander"],
    steps: ["Rinse poha", "Temper with mustard seeds and onions", "Mix and steam"]
  },
  {
    name: "Upma",
    category: "Breakfast",
    ingredients: ["Semolina", "Onion", "Mustard seeds", "Curry leaves", "Water"],
    steps: ["Roast semolina", "Cook veggies and spices", "Add water and semolina"]
  },
  {
    name: "Idli",
    category: "Breakfast",
    ingredients: ["Idli batter", "Salt"],
    steps: ["Pour batter into moulds", "Steam for 10 minutes"]
  },
  {
    name: "Dosa",
    category: "Breakfast",
    ingredients: ["Dosa batter", "Oil", "Salt"],
    steps: ["Heat tawa", "Spread batter", "Cook until golden"]
  },
  {
    name: "Aloo Paratha",
    category: "Breakfast",
    ingredients: ["Wheat flour", "Boiled potatoes", "Spices"],
    steps: ["Stuff dough with aloo", "Roll and fry"]
  },
  {
    name: "Besan Chilla",
    category: "Breakfast",
    ingredients: ["Besan", "Onion", "Tomato", "Spices"],
    steps: ["Make batter", "Pour on tawa", "Cook both sides"]
  },
  {
    name: "Thepla",
    category: "Breakfast",
    ingredients: ["Wheat flour", "Methi", "Spices"],
    steps: ["Knead dough", "Roll and cook"]
  },
  {
    name: "Moong Dal Chilla",
    category: "Breakfast",
    ingredients: ["Soaked moong dal", "Spices", "Vegetables"],
    steps: ["Grind dal", "Make batter", "Cook on tawa"]
  },

  // Lunch Recipes
  {
    name: "Rajma Chawal",
    category: "Lunch",
    ingredients: ["Rajma", "Onion", "Tomato", "Spices"],
    steps: ["Pressure cook rajma", "Make gravy", "Mix and simmer"]
  },
  {
    name: "Chole Bhature",
    category: "Lunch",
    ingredients: ["Chole", "Spices", "Flour for bhature"],
    steps: ["Cook chole", "Fry bhature"]
  },
  {
    name: "Palak Paneer",
    category: "Lunch",
    ingredients: ["Spinach", "Paneer", "Cream", "Spices"],
    steps: ["Blanch spinach", "Grind", "Cook with paneer"]
  },
  {
    name: "Baingan Bharta",
    category: "Lunch",
    ingredients: ["Brinjal", "Onion", "Tomato", "Spices"],
    steps: ["Roast brinjal", "Mash and cook with spices"]
  },
  {
    name: "Kadhi Pakora",
    category: "Lunch",
    ingredients: ["Curd", "Besan", "Pakora", "Spices"],
    steps: ["Make kadhi", "Add pakora", "Simmer"]
  },
  {
    name: "Mix Veg",
    category: "Lunch",
    ingredients: ["Carrot", "Beans", "Potato", "Spices"],
    steps: ["Chop veggies", "Cook with masala"]
  },
  {
    name: "Paneer Butter Masala",
    category: "Lunch",
    ingredients: ["Paneer", "Butter", "Tomato puree", "Spices"],
    steps: ["Make gravy", "Add paneer", "Garnish"]
  },
  {
    name: "Aloo Gobi",
    category: "Lunch",
    ingredients: ["Potato", "Cauliflower", "Spices"],
    steps: ["Boil veggies", "Fry with spices"]
  },

  // Dinner Recipes
  {
    name: "Jeera Rice",
    category: "Dinner",
    ingredients: ["Rice", "Cumin", "Ghee"],
    steps: ["Boil rice", "Add jeera tempering"]
  },
  {
    name: "Dal Fry",
    category: "Dinner",
    ingredients: ["Toor dal", "Onion", "Tomato", "Spices"],
    steps: ["Cook dal", "Add tadka"]
  },
  {
    name: "Tawa Paneer",
    category: "Dinner",
    ingredients: ["Paneer", "Capsicum", "Onion", "Spices"],
    steps: ["Saute veggies", "Add paneer and cook"]
  },
  {
    name: "Veg Pulao",
    category: "Dinner",
    ingredients: ["Rice", "Veggies", "Spices"],
    steps: ["Cook all in pressure cooker"]
  },
  {
    name: "Stuffed Capsicum",
    category: "Dinner",
    ingredients: ["Capsicum", "Potato", "Spices"],
    steps: ["Stuff capsicum", "Bake or steam"]
  },
  {
    name: "Methi Thepla",
    category: "Dinner",
    ingredients: ["Wheat flour", "Methi", "Spices"],
    steps: ["Make dough", "Cook on tawa"]
  },

  // Snacks
  {
    name: "Samosa",
    category: "Snacks",
    ingredients: ["Maida", "Potato", "Spices"],
    steps: ["Make filling", "Stuff and fry"]
  },
  {
    name: "Pakora",
    category: "Snacks",
    ingredients: ["Besan", "Vegetables", "Spices"],
    steps: ["Make batter", "Deep fry"]
  },
  {
    name: "Dhokla",
    category: "Snacks",
    ingredients: ["Besan", "Eno", "Spices"],
    steps: ["Make batter", "Steam"]
  },
  {
    name: "Vada Pav",
    category: "Snacks",
    ingredients: ["Pav", "Potato vada", "Chutney"],
    steps: ["Assemble and serve"]
  },
  {
    name: "Bhel Puri",
    category: "Snacks",
    ingredients: ["Puffed rice", "Chutney", "Onion", "Sev"],
    steps: ["Mix and serve"]
  },

  // Drinks
  {
    name: "Masala Chai",
    category: "Drinks",
    ingredients: ["Tea", "Milk", "Spices"],
    steps: ["Boil all ingredients"]
  },
  {
    name: "Lassi",
    category: "Drinks",
    ingredients: ["Curd", "Sugar", "Cardamom"],
    steps: ["Blend and chill"]
  },
  {
    name: "Jaljeera",
    category: "Drinks",
    ingredients: ["Cumin", "Mint", "Lemon"],
    steps: ["Blend and strain"]
  },
  {
    name: "Aam Panna",
    category: "Drinks",
    ingredients: ["Raw mango", "Sugar", "Mint"],
    steps: ["Boil mango", "Blend and chill"]
  },

  // Desserts
  {
    name: "Gulab Jamun",
    category: "Desserts",
    ingredients: ["Khoya", "Sugar syrup"],
    steps: ["Make balls", "Fry and dip in syrup"]
  },
  {
    name: "Halwa",
    category: "Desserts",
    ingredients: ["Suji", "Ghee", "Sugar", "Dry fruits"],
    steps: ["Roast suji", "Add water and sugar"]
  },
  {
    name: "Kheer",
    category: "Desserts",
    ingredients: ["Rice", "Milk", "Sugar", "Cardamom"],
    steps: ["Cook rice in milk", "Add sugar"]
  },
  {
    name: "Rasgulla",
    category: "Desserts",
    ingredients: ["Chenna", "Sugar syrup"],
    steps: ["Make balls", "Boil in syrup"]
  },
  {
    name: "Barfi",
    category: "Desserts",
    ingredients: ["Milk solids", "Sugar"],
    steps: ["Cook together", "Set and cut"]
  }
];

let activeCategory = "All";
const list = document.getElementById("recipe-list");
const searchInput = document.getElementById("search");

function showRecipes() {
  list.innerHTML = "";
  const keyword = searchInput.value.toLowerCase();
  const filtered = recipes.filter(r =>
    (activeCategory === "All" || r.category === activeCategory) &&
    r.name.toLowerCase().includes(keyword)
  );

  filtered.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <h3>${recipe.name}</h3>
      <strong>Ingredients:</strong>
      <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
      <strong>Steps:</strong>
      <ul>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ul>
    `;
    list.appendChild(card);
  });

  if (filtered.length === 0) {
    list.innerHTML = "<p>No recipes found.</p>";
  }
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    activeCategory = tab.dataset.category;
    showRecipes();
  });
});

searchInput.addEventListener("input", showRecipes);
showRecipes();
