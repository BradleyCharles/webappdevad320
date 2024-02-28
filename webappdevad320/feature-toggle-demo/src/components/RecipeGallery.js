export default function RecipeGallery() {

  const recipe = [
     { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://twoplaidaprons.com/wp-content/uploads/2020/07/spaghetti-carbonara-top-down-view-of-a-nest-of-carbonara-with-an-egg-yolk-500x500.jpg" },
 
     { id: 2, title: "Chicken Alfredo", ingredients: ["Fettuccine", "Chicken", "Cream", "Parmesan"], image: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg" },
 
     { id: 3, title: "Margherita Pizza", ingredients: ["Dough", "Tomatoes", "Mozzarella", "Basil"], image: "https://static01.nyt.com/images/2014/04/09/dining/09JPPIZZA2/09JPPIZZA2-articleLarge-v3.jpg" },
 
     { id: 4, title: "Caesar Salad", ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"], image: "https://cookingwithayeh.com/wp-content/uploads/2023/11/Healthy-Caesar-Salad-Without-Anchovies-SQ-5.jpg" },
 
     { id: 5, title: "Sushi Roll", ingredients: ["Rice", "Nori", "Fish", "Vegetables"], image: "https://www.foodandwine.com/thmb/5m0L19cELC8zqZQGrcfhCTNY5jY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dragon-Roll-FT-RECIPE0223-5e3d0283beee4921980ad7b5597d85a9.jpg" },
 
     { id: 6, title: "Chocolate Chip Cookies", ingredients: ["Flour", "Chocolate Chips", "Butter", "Sugar"], image: "https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg" },
 
     { id: 7, title: "Hawaiian Burger", ingredients: ["Beef Patty", "Pineapple", "Ham", "Cheese"], image: "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/grill-mates/recipes/h/hawaiian_burger_with_grilled_pineapple_800x800.jpg?rev=0c2a2fb789f14c30a7f10403f51432df&vd=20220608T222346Z&hash=8670BA689457593B6A07A292CD114DE6" },
 
     { id: 8, title: "Vegetable Stir-Fry", ingredients: ["Broccoli", "Bell Peppers", "Carrots", "Soy Sauce"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZRkUfrveFnAgNkXzDdxYx0AYDOn_Gw4Jwg&usqp=CAU" },
 
     { id: 9, title: "Caprese Salad", ingredients: ["Tomatoes", "Mozzarella", "Basil", "Balsamic Glaze"], image: "https://whatsgabycooking.com/wp-content/uploads/2023/06/Dinner-Party-__-Traditional-Caprese-1-1200x800-1.jpg" },
 
     { id: 10, title: "Fruit Smoothie", ingredients: ["Banana", "Berries", "Yogurt", "Honey"], image: "https://lilluna.com/wp-content/uploads/2014/02/fruit-smoothie-resize-14.jpg" }
  ];
 
  const recipeList = (
     <ul class="ul">
         {recipe.map(recipe => (
             <li class='list' key={recipe.id}>
                 <div>
                     <h3>{recipe.title}</h3>
                     <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '300px', maxHeight: '200px' }} />
                     <p>Ingredients: {recipe.ingredients.join(", ")}</p>
                 </div>
             </li>
         ))}
     </ul>
  )
  return recipeList
 }