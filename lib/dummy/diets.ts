export type MealType = {
  name: string
  category: string
  description: string
  ingredients: string[]
  time: string
  calories: number
  protein: number
  fat: number
  carbs: number
  blog: string
  imgSrc: string
}

export const nutrientsChartData = [
  { name: "Protein", value: 50 },
  { name: "Fat", value: 78 },
  { name: "Carbs", value: 275 },
]

export const partsOfDay = [
  {
    status: "breakfast",
    start: 0,
    end: 11,
  },
  {
    status: "lunch",
    start: 12,
    end: 16,
  },
  {
    status: "snacks",
    start: 17,
    end: 19,
  },
  {
    status: "dinner",
    start: 20,
    end: 23,
  },
] as {
  status: string
  start: number
  end: number
}[]

export const recommendationOptions = [
  {
    title: "daily activity",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-activity.png",
    position: "top",
    info: "1h 30m",
    size: "smaller",
  },
  {
    title: "daily water",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-water.png",
    position: "top",
    info: "8 cups",
    size: "smaller",
  },
  {
    title: "sleep duration",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-sleep.png",
    position: "top",
    info: "7h 30m",
    size: "larger",
  },
  {
    title: "exercises",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-exercise.png",
    position: "top",
    size: "larger",
  },
] as {
  title: string
  imgSrc: string
  position: "top" | "bottom"
  info?: string
  size: "smaller" | "larger"
}[]

export const foodRecommendationOptions = [
  {
    title: "Breakfast",
    category: "breakfast",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-breakfast.png",
    size: "larger",
    bg: "#F9E5E2",
  },
  {
    title: "Lunch",
    category: "lunch",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-lunch.png",
    size: "smaller",
    bg: "#EBF3FF",
  },
  {
    title: "Snacks",
    category: "snacks",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-snacks.png",
    size: "smaller",
    bg: "#F6F0DC",
  },
  {
    title: "Dinner",
    category: "dinner",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-dinner.png",
    size: "smaller",
    bg: "#E0EFE1",
  },
] as {
  title: string
  category: string
  imgSrc: string
  size: "smaller" | "larger"
  bg: string
}[]

export const mealRecommendations = [
  {
    name: "Greek Yogurt Parfait",
    category: "breakfast",
    description:
      "Creamy Greek yogurt layered with fresh berries, honey, and granola.",
    ingredients: ["Greek yogurt", "berries", "honey", "granola"],
    time: "10-15mins",
    calories: 298,
    protein: 21,
    fat: 11,
    carbs: 28,
    blog: "https://foolproofliving.com/layered-yogurt-parfait",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/breakfast-1.jpg",
  },
  {
    name: "Avocado Toast",
    category: "breakfast",
    description:
      "Whole grain toast topped with mashed avocado, salt, pepper, and a sprinkle of chili flakes.",
    ingredients: ["grain bread", "avocado", "salt", "pepper", "chili flakes"],
    time: "4-5mins",
    calories: 180,
    protein: 4.2,
    fat: 13.6,
    carbs: 15.5,
    blog: "https://www.loveandlemons.com/avocado-toast-recipe/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/breakfast-2.jpg",
  },
  {
    name: "Oatmeal with Fruits",
    category: "breakfast",
    description:
      "Warm oatmeal topped with banana slices, berries, and a drizzle of maple syrup.",
    ingredients: ["oatmeal", "banana", "berries", "maple syrup"],
    time: "8-10mins",
    calories: 341,
    protein: 22,
    fat: 8,
    carbs: 47,
    blog: "https://www.eatingwell.com/recipe/251317/oatmeal-with-fruit-nuts/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/breakfast-3.jpg",
  },
  {
    name: "Breakfast Burrito",
    category: "breakfast",
    description:
      "A flour tortilla filled with scrambled eggs, cheese, and salsa.",
    ingredients: ["flour tortilla", "eggs", "cheese", "salsa"],
    time: "25-35mins",
    calories: 534,
    protein: 31,
    fat: 36,
    carbs: 29,
    blog: "https://themodernproper.com/breakfast-burritos",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/breakfast-4.jpg",
  },
  {
    name: "Smoothie Bowl",
    category: "breakfast",
    description: "A thick smoothie topped with fresh fruits, nuts, and seeds.",
    ingredients: [
      "banana",
      "berries",
      "spinach",
      "almond milk",
      "nuts",
      "seeds",
    ],
    time: "5-8mins",
    calories: 214,
    protein: 2.8,
    fat: 2.5,
    carbs: 47.5,
    blog: "https://minimalistbaker.com/favorite-smoothie-bowl-5-minutes/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/breakfast-5.jpg",
  },
  {
    name: "Eggs Benedict",
    category: "breakfast",
    description:
      "Poached eggs and ham on an English muffin, topped with hollandaise sauce.",
    ingredients: ["eggs", "ham", "English muffin", "hollandaise sauce"],
    time: "25-30mins",
    calories: 348,
    protein: 16,
    fat: 24,
    carbs: 15,
    blog: "https://tastesbetterfromscratch.com/eggs-benedict-with-homemade-hollandaise-sauce/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/breakfast-6.jpg",
  },
  {
    name: "Pancakes with Maple Syrup",
    category: "breakfast",
    description: "Fluffy pancakes served with butter and maple syrup.",
    ingredients: ["flour", "milk", "eggs", "butter", "maple syrup"],
    time: "20-30mins",
    calories: 445,
    protein: 13,
    fat: 17,
    carbs: 59,
    blog: "https://www.tasteofhome.com/recipes/maple-pancakes/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/breakfast-7.jpg",
  },
  {
    name: "French Toast",
    category: "breakfast",
    description:
      "Slices of bread soaked in a mixture of eggs and milk, then fried and topped with powdered sugar.",
    ingredients: ["bread", "eggs", "milk", "powdered sugar"],
    time: "10-15mins",
    calories: 100,
    protein: 4,
    fat: 3,
    carbs: 11,
    blog: "https://tastesbetterfromscratch.com/classic-french-toast/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/breakfast-8.jpg",
  },
  {
    name: "Bagel with Cream Cheese",
    category: "breakfast",
    description: "Toasted bagel spread with creamy cheese.",
    ingredients: ["bagel", "cream cheese"],
    time: "5-8mins",
    calories: 400,
    protein: 13,
    fat: 11,
    carbs: 57,
    blog: "https://www.melaniecooks.com/bagel-with-cream-cheese/5235/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/breakfast-9.jpg",
  },
  {
    name: "Muffins",
    category: "breakfast",
    description:
      "Freshly baked muffins with a variety of flavors such as blueberry, chocolate chip, or banana nut.",
    ingredients: ["flour", "sugar", "eggs", "butter", "flavorings"],
    time: "25-35mins",
    calories: 519,
    protein: 8,
    fat: 20,
    carbs: 80,
    blog: "https://laneandgreyfare.com/chocolate-chip-blueberry-muffins/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/breakfast-10.jpg",
  },
  {
    name: "Caesar Salad",
    category: "lunch",
    description:
      "Crisp romaine lettuce, croutons, and Parmesan cheese, tossed with Caesar dressing.",
    ingredients: [
      "romaine lettuce",
      "croutons",
      "Parmesan cheese",
      "Caesar dressing",
    ],
    time: "25-35mins",
    calories: 300,
    protein: 4,
    fat: 26,
    carbs: 9,
    blog: "https://natashaskitchen.com/caesar-salad-recipe/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/lunch-1.jpg",
  },
  {
    name: "Grilled Chicken Sandwich",
    category: "lunch",
    description:
      "Grilled chicken breast on a bun with lettuce, tomato, and mayo.",
    ingredients: ["chicken breast", "bun", "lettuce", "tomato", "mayo"],
    time: "15-25mins",
    calories: 410,
    protein: 45,
    fat: 11.5,
    carbs: 29.5,
    blog: "https://www.skinnytaste.com/grilled-chicken-sandwich/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/lunch-2.jpg",
  },
  {
    name: "Vegetable Stir-Fry",
    category: "lunch",
    description:
      "A mix of vegetables stir-fried with soy sauce and served over rice.",
    ingredients: [
      "broccoli",
      "corns",
      "carrots",
      "bell peppers",
      "soy sauce",
      "rice",
    ],
    time: "15-20mins",
    calories: 152,
    protein: 5,
    fat: 4,
    carbs: 27,
    blog: "https://themodernproper.com/vegetable-stir-fry",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/lunch-3.jpg",
  },
  {
    name: "Turkey Wrap",
    category: "lunch",
    description:
      "Sliced turkey, lettuce, tomato, and cheese wrapped in a tortilla.",
    ingredients: ["tortilla", "turkey", "lettuce", "tomato", "cheese"],
    time: "10-15mins",
    calories: 400,
    protein: 24,
    fat: 19,
    carbs: 32,
    blog: "https://www.twopeasandtheirpod.com/turkey-wrap/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/lunch-4.jpg",
  },
  {
    name: "Quinoa Salad",
    category: "lunch",
    description:
      "Quinoa mixed with cucumbers, tomatoes, and feta cheese, dressed with lemon vinaigrette.",
    ingredients: [
      "quinoa",
      "cucumbers",
      "tomatoes",
      "feta cheese",
      "lemon vinaigrette",
    ],
    time: "25-30mins",
    calories: 290,
    protein: 8.8,
    fat: 14,
    carbs: 33,
    blog: "https://www.inspiredtaste.net/38096/quinoa-salad-recipe/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/lunch-5.jpg",
  },
  {
    name: "Spaghetti Carbonara",
    category: "lunch",
    description:
      "Spaghetti tossed with a creamy sauce made from eggs, cheese, pancetta, and pepper.",
    ingredients: ["spaghetti", "eggs", "Parmesan cheese", "pancetta", "pepper"],
    time: "30-40mins",
    calories: 535,
    protein: 22,
    fat: 20,
    carbs: 64,
    blog: "https://damndelicious.net/2014/03/29/spaghetti-carbonara/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/lunch-6.jpg",
  },
  {
    name: "Chicken Caesar Wrap",
    category: "lunch",
    description:
      "Grilled chicken, romaine lettuce, and Caesar dressing wrapped in a tortilla.",
    ingredients: ["tortilla", "chicken", "romaine lettuce", "Caesar dressing"],
    time: "10-15mins",
    calories: 400,
    protein: 27,
    fat: 19,
    carbs: 28,
    blog: "https://www.twopeasandtheirpod.com/chicken-caesar-wrap/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/lunch-7.jpg",
  },
  {
    name: "Caprese Sandwich",
    category: "lunch",
    description:
      "Mozzarella, tomatoes, and basil on ciabatta bread, drizzled with balsamic glaze.",
    ingredients: [
      "ciabatta bread",
      "mozzarella",
      "tomatoes",
      "basil",
      "balsamic glaze",
    ],
    time: "15-20mins",
    calories: 376,
    protein: 17,
    fat: 16,
    carbs: 42,
    blog: "https://www.eatingwell.com/recipe/7944052/caprese-sandwich/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/lunch-8.jpg",
  },
  {
    name: "Tuna Salad",
    category: "lunch",
    description:
      "Tuna mixed with mayo, celery, and onions, served on a bed of lettuce.",
    ingredients: ["tuna", "mayo", "celery", "onions", "lettuce"],
    time: "15-20mins",
    calories: 380,
    protein: 17,
    fat: 11,
    carbs: 19,
    blog: "https://downshiftology.com/recipes/tuna-salad/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/lunch-9.jpg",
  },
  {
    name: "Veggie Burger",
    category: "lunch",
    description:
      "A plant-based burger patty on a bun with lettuce, tomato, and avocado.",
    ingredients: ["veggie patty", "bun", "lettuce", "tomato", "avocado"],
    time: "30-45mins",
    calories: 200,
    protein: 8.3,
    fat: 8,
    carbs: 22.7,
    blog: "https://www.inspiredtaste.net/36554/veggie-burger-recipe/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/lunch-10.jpg",
  },
  {
    name: "Hummus and Veggies",
    category: "snacks",
    description:
      "Creamy hummus served with carrot sticks, cucumber slices, and bell pepper strips.",
    ingredients: ["hummus", "carrots", "cucumber", "bell peppers"],
    time: "15-20mins",
    calories: 89,
    protein: 3,
    fat: 5,
    carbs: 9,
    blog: "https://www.thecookierookie.com/hummus-and-vegetable-board/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/snacks-1.jpg",
  },
  {
    name: "Apple Slices with Peanut Butter",
    category: "snacks",
    description: "Fresh apple slices dipped in creamy peanut butter.",
    ingredients: ["apple", "peanut butter"],
    time: "5mins",
    calories: 282,
    protein: 8.5,
    fat: 16.4,
    carbs: 31.4,
    blog: "https://www.food.com/recipe/apples-and-peanut-butter-apple-slices-218390/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/snacks-2.jpg",
  },
  {
    name: "Cheese and Crackers",
    category: "snacks",
    description: "Assorted cheese slices served with whole grain crackers.",
    ingredients: ["cheese", "crackers", "jam"],
    time: "5-10mins",
    calories: 179,
    protein: 3.8,
    fat: 5.8,
    carbs: 2.34,
    blog: "https://eatwell101.com/low-carb-cheese-crackers-recipe",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/snacks-3.jpg",
  },
  {
    name: "Trail Mix",
    category: "snacks",
    description: "A mix of nuts, dried fruits, and chocolate chips.",
    ingredients: ["nuts", "dried fruits", "chocolate chips"],
    time: "10-15mins",
    calories: 180,
    protein: 4,
    fat: 9,
    carbs: 14,
    blog: "https://www.thehealthymaven.com/how-to-build-a-healthy-trail-mix/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/snacks-4.jpg",
  },
  {
    name: "Yogurt and Granola",
    category: "snacks",
    description: "Creamy yogurt topped with crunchy granola.",
    ingredients: ["yogurt", "granola"],
    time: "8-10mins",
    calories: 300,
    protein: 22,
    fat: 13,
    carbs: 60,
    blog: "https://www.jaroflemons.com/granola-breakfast-bowl/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/snacks-5.jpg",
  },
  {
    name: "Fruit Salad",
    category: "snacks",
    description:
      "A mix of fresh fruits such as strawberries, kiwis, melons, etc",
    ingredients: ["strawberries", "oranges", "kiwis", "apples", "pomegranate"],
    time: "5-10mins",
    calories: 155,
    protein: 2,
    fat: 1,
    carbs: 39,
    blog: "https://www.allrecipes.com/recipe/214947/perfect-summer-fruit-salad/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/snacks-6.jpg",
  },
  {
    name: "Popcorn",
    category: "snacks",
    description: "Lightly salted and buttered popcorn.",
    ingredients: ["popcorn", "salt", "butter"],
    time: "10-15mins",
    calories: 93,
    protein: 3,
    fat: 1.1,
    carbs: 18.6,
    blog: "https://cookieandkate.com/perfect-stovetop-popcorn-recipe/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/snacks-7.jpg",
  },
  {
    name: "Energy Balls",
    category: "snacks",
    description:
      "No-bake energy balls made with oats, peanut butter, and honey.",
    ingredients: ["oats", "peanut butter", "honey"],
    time: "25-40mins",
    calories: 131,
    protein: 4,
    fat: 5,
    carbs: 18,
    blog: "https://www.wellplated.com/energy-balls/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/snacks-8.jpg",
  },
  {
    name: "Veggie Chips",
    category: "snacks",
    description:
      "Crispy baked vegetable chips made from sweet potatoes and black pepper",
    ingredients: ["sweet potatoes", "black pepper", "beets", "kale"],
    time: "15-20mins",
    calories: 99,
    protein: 3,
    fat: 1,
    carbs: 22,
    blog: "https://thebigmansworld.com/oil-free-baked-veggie-chips-paleo-vegan-gluten-free/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/snacks-9.jpg",
  },
  {
    name: "Protein Shake",
    category: "snacks",
    description:
      "A protein-rich shake made with protein powder, milk, and a banana.",
    ingredients: ["vanilla powder", "milk", "banana", "greek yogurt"],
    time: "10-15mins",
    calories: 282,
    protein: 33,
    fat: 8,
    carbs: 23,
    blog: "https://fitfoodiefinds.com/best-protein-shakes/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/snacks-10.jpg",
  },
  {
    name: "Mediterranean Salmon with Roasted Vegetables",
    category: "dinner",
    description:
      "Baked salmon with lemon, herbs, and tomatoes paired with roasted zucchini, peppers, and onions.",
    ingredients: [
      "lemon",
      "herbs",
      "tomatoes",
      "salmon",
      "onion",
      "pepper",
      "zucchini",
    ],
    time: "25-45mins",
    calories: 485,
    protein: 41.1,
    fat: 18.8,
    carbs: 11,
    blog: "https://apriljharris.com/one-pan-salmon-and-mediterranean-vegetables/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/dinner-1.jpg",
  },
  {
    name: "Beef Tacos",
    category: "dinner",
    description: "Ground beef tacos served with lettuce, cheese, and salsa.",
    ingredients: ["ground beef", "taco shells", "lettuce", "cheese", "salsa"],
    time: "25-35mins",
    calories: 293,
    protein: 17,
    fat: 14,
    carbs: 24,
    blog: "https://www.howsweeteats.com/2019/01/ground-beef-tacos/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/dinner-2.jpg",
  },
  {
    name: "Chicken Alfredo",
    category: "dinner",
    description:
      "Fettuccine pasta with creamy Alfredo sauce and grilled chicken.",
    ingredients: ["fettuccine", "Alfredo sauce", "chicken"],
    time: "25-40mins",
    calories: 756,
    protein: 47,
    fat: 42,
    carbs: 46,
    blog: "https://www.budgetbytes.com/chicken-alfredo/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/dinner-3.jpg",
  },
  {
    name: "Vegetarian Chili",
    category: "dinner",
    description:
      "A hearty chili made with beans, tomatoes, and a blend of spices.",
    ingredients: ["beans", "tomatoes", "spices"],
    time: "25-40mins",
    calories: 230,
    protein: 11,
    fat: 6.6,
    carbs: 35,
    blog: "https://cookieandkate.com/vegetarian-chili-recipe/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/dinner-4.jpg",
  },
  {
    name: "Stuffed Bell Peppers",
    category: "dinner",
    description:
      "Bell peppers stuffed with rice, ground beef, and vegetables, baked to perfection.",
    ingredients: ["bell peppers", "rice", "ground beef", "vegetables"],
    time: "40-50mins",
    calories: 454,
    protein: 18,
    fat: 33,
    carbs: 22,
    blog: "https://www.budgetbytes.com/stuffed-bell-peppers/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/dinner-5.jpg",
  },
  {
    name: "Shrimp Scampi",
    category: "dinner",
    description: "Shrimp sautéed in garlic and butter, served over linguine.",
    ingredients: ["shrimp", "garlic", "butter", "linguine"],
    time: "15-20mins",
    calories: 325,
    protein: 40,
    fat: 14,
    carbs: 3,
    blog: "https://cooking.nytimes.com/recipes/9101-classic-shrimp-scampi",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/dinner-6.jpg",
  },
  {
    name: "Creamy Lemon Chicken Piccata",
    category: "dinner",
    description:
      "Grilled chicken marinated in lemon and herbs, served with with pasta and a side of steamed vegetables.",
    ingredients: ["chicken", "lemon", "herbs", "vegetables"],
    time: "50mins",
    calories: 265,
    protein: 37,
    fat: 11,
    carbs: 2,
    blog: "https://www.allrecipes.com/recipe/9011/simple-lemon-herb-chicken/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/dinner-7.jpg",
  },
  {
    name: "Spaghetti Bolognese",
    category: "dinner",
    description: "Spaghetti with a rich and meaty Bolognese sauce.",
    ingredients: [
      "spaghetti",
      "ground beef",
      "tomato sauce",
      "onion",
      "garlic",
    ],
    time: "20-30mins",
    calories: 510,
    protein: 40.9,
    fat: 12.6,
    carbs: 53.2,
    blog: "https://www.recipetineats.com/spaghetti-bolognese/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/dinner-8.jpg",
  },
  {
    name: "Vegetable Lasagna",
    category: "dinner",
    description:
      "Lasagna layered with a variety of vegetables, ricotta cheese, and marinara sauce.",
    ingredients: [
      "lasagna noodles",
      "vegetables",
      "ricotta cheese",
      "marinara sauce",
    ],
    time: "30-40mins",
    calories: 335,
    protein: 19.3,
    fat: 8.5,
    carbs: 42.2,
    blog: "https://cookieandkate.com/best-vegetable-lasagna-recipe/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/dinner-9.jpg",
  },
  {
    name: "Beef Stroganoff",
    category: "dinner",
    description:
      "Tender beef in a creamy mushroom sauce, served over egg noodles.",
    ingredients: ["beef", "mushrooms", "cream", "egg noodles"],
    time: "30-40mins",
    calories: 586,
    protein: 37,
    fat: 44,
    carbs: 9,
    blog: "https://www.recipetineats.com/beef-stroganoff/",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720442441/glucoguide/meals/dinner-10.jpg",
  },
] as MealType[]
