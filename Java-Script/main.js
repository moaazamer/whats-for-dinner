var instructionsBtn = document.getElementById("instructionsBtn");
var ingredientsBtn = document.getElementById("ingredientsBtn");
var nutritionBtn = document.getElementById("nutritionBtn"); 
var chefTipsBtn = document.getElementById("chefTipsBtn");
var ingredientsPanel = document.getElementById("ingredientsPanel");
var instructionsPanel = document.getElementById("instructionsPanel");
var nutritionPanel = document.getElementById("nutritionPanel")
var chefTipsPanel = document.getElementById("chefTipsPanel")
var tabButtons= document.querySelectorAll(".tabBtn");
function setActiveTab(selectedButton){
    for(var i=0; i<tabButtons.length;i++){
        tabButtons[i].classList.remove("active")
        
    }
    selectedButton.classList.add("active")
}
function showInstructions() {
    ingredientsPanel.hidden = true;
    instructionsPanel.hidden = false;
    chefTipsPanel.hidden = true;
    nutritionPanel.hidden = true;
    setActiveTab(instructionsBtn)

}
function showIngredients()
{
    instructionsPanel.hidden = true;
     ingredientsPanel.hidden = false;
     nutritionPanel.hidden= true
     chefTipsPanel.hidden=true
     setActiveTab(ingredientsBtn)

}
function showNutrition(){
     instructionsPanel.hidden = true;
     ingredientsPanel.hidden = true;
     nutritionPanel.hidden= false
     chefTipsPanel.hidden=true
     setActiveTab(nutritionBtn)

}
function showChefTips(){
     instructionsPanel.hidden = true;
     ingredientsPanel.hidden = true;
     nutritionPanel.hidden= true;
     chefTipsPanel.hidden=false;
     setActiveTab(chefTipsBtn)

}
instructionsBtn.addEventListener("click", showInstructions);
ingredientsBtn.addEventListener("click", showIngredients );
nutritionBtn.addEventListener("click" ,showNutrition);
chefTipsBtn.addEventListener("click" ,showChefTips);



var meals=[
     {  name: "Pad Thai",
    description:"Popular Thai stir-fried noodles with shrimp and peanuts",
    image:"./images/photo-1633504581786-316c8002b1b9.avif",
    difficulty:"Easy",
    cuisine:"Asian",
    rating:4.6,
    reviews:300,
    prepTime:20,
    cookTime:30,
    servings:4,
    ingredients: [
        "2 potatoes, cubed",
        "2 carrots, sliced",
        "400ml coconutMilk"
    ],
    instructions: [
        "Wash and cut the vegetables.",
        "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
        "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
        "Add scrambled eggs and bean sprouts. Toss everything together.",

    ],
    nutrition: {
        calories:380,
        protein:14,
        carbohydrates:48,
        fat:16,
        fiber:12,
        sodium:480,
    },
    chefTips: [
        "Don't oversoak noodles or they'll be mushy",
        "Cook on high heat for authentic wok flavor",
        "Balance sweet, sour, and salty flavors",
        "Prepare all ingredients before starting to cook",]

    },
      {name: "Pasta",
    description:"Popular Thai stir-fried noodles with shrimp and peanuts",
    image:"./images/photo-1546069901-eacef0df6022.avif",
    difficulty:"Easy",
    cuisine:"Asian",
    rating:4.6,
    reviews:300,
    prepTime:20,
    cookTime:30,
    servings:4,
    ingredients: [
        "200g Pasta",
        "2 carrots, sliced",
        "400ml coconutMilk"
    ],
    instructions: [
        "Wash and cut the vegetables.",
        "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
        "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
        "Add scrambled eggs and bean sprouts. Toss everything together.",

    ],
   nutrition: {
        calories:380,
        protein:14,
        carbohydrates:48,
        fat:16,
        fiber:12,
        sodium:480,
    },
    
    chefTips: [
        "Don't oversoak noodles or they'll be mushy",
        "Cook on high heat for authentic wok flavor",
        "Balance sweet, sour, and salty flavors",
        "Prepare all ingredients before starting to cook",]

    } ,
    { name: "Shrimp Scampi",
    description:"Popular Thai stir-fried noodles with shrimp and peanuts",
    image:"./images/photo-1574894709920-11b28e7367e3.avif",
    difficulty:"Easy",
    cuisine:"Asian",
    rating:4.6,
    reviews:300,
    prepTime:20,
    cookTime:30,
    servings:4,
    ingredients: [
        "2 potatoes, cubed",
        "2 carrots, sliced",
        "400ml coconutMilk"
    ],
    instructions: [
        "Wash and cut the vegetables.",
        "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
        "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
        "Add scrambled eggs and bean sprouts. Toss everything together.",

    ],
    nutrition: {
        calories:380,
        protein:14,
        carbohydrates:48,
        fat:16,
        fiber:12,
        sodium:480,
    
    },
    chefTips: [
        "Don't oversoak noodles or they'll be mushy",
        "Cook on high heat for authentic wok flavor",
        "Balance sweet, sour, and salty flavors",
        "Prepare all ingredients before starting to cook",

    ]


    

}


];
// console.log(meals.length)
// console.log(meals[2].name)
// console.log(meals[1].nutrition.protein)
var mealTitle=document.querySelector(".mealDetailsLeft h2");
var mealDescription=document.querySelector(".mealDetailsLeft p")
var mealImage=document.querySelector(".leftHero img")
var mealDifficulty=document.querySelector(".sE")
var mealCuisine=document.querySelector(".sA")
var mealRating=document.querySelector(".mealRating span")
var mealReviews=document.querySelector(".mealRating span:last-child")
var mealPrepTime=document.querySelector(".prepTime p:last-child")
var mealCookTime=document.querySelector(".cookTime p:last-child")
var mealServings=document.querySelector(".servings p:last-child")
var ingredientsList=document.querySelector("#ingredientsPanel ol")
var nutritionValues=document.querySelectorAll("#nutritionGrid .nutritionValue")
var preparationNotice=document.querySelector(".preparationNotice");
var chefTipsContainer=document.querySelector("#chefTips");
var tipTemplate=document.querySelector("#chefTips .tip").cloneNode(true);
var instructionsList=document.querySelector("#instructionsPanel ol")

function displayMeal(selectMeal){
    mealTitle.textContent=selectMeal.name;
    mealDescription.textContent=selectMeal.description
    mealImage.src=selectMeal.image;
    mealDifficulty.textContent=selectMeal.difficulty;
    mealCuisine.textContent=selectMeal.cuisine;
    mealRating.textContent=selectMeal.rating;
    mealReviews.textContent="(" + selectMeal.reviews + " reviews)";
    mealPrepTime.textContent=selectMeal.prepTime + " min"
    mealCookTime.textContent=selectMeal.cookTime + " min"
    mealServings.textContent=selectMeal.servings + " people"
    ingredientsList.textContent= "";
    for(var i=0; i<selectMeal.ingredients.length;i++){
        var ingredientItem=document.createElement("li");
        ingredientItem.textContent=selectMeal.ingredients[i];
        ingredientsList.appendChild(ingredientItem);
    }
    instructionsList.textContent = "";

for (var i = 0; i < selectMeal.instructions.length; i++) {
    var instructionItem = document.createElement("li");
    instructionItem.textContent = selectMeal.instructions[i];
    instructionsList.appendChild(instructionItem);
}
    nutritionValues[0].textContent=selectMeal.nutrition.calories + " Kcal";
    nutritionValues[1].textContent=selectMeal.nutrition.protein + "g";
    nutritionValues[2].textContent=selectMeal.nutrition.carbohydrates + "g";
    nutritionValues[3].textContent = selectMeal.nutrition.fat + "g";
    nutritionValues[4].textContent = selectMeal.nutrition.fiber + "g";
    nutritionValues[5].textContent = selectMeal.nutrition.sodium + "mg";
    var totalTime=selectMeal.prepTime+ selectMeal.cookTime;
    if(totalTime>45){
       preparationNotice.hidden=false;
    }
    else{
       preparationNotice.hidden=true;
    }
    chefTipsContainer.textContent= "";
    for(var i=0; i<selectMeal.chefTips.length; i++){
        var tipItem=tipTemplate.cloneNode(true);
        tipItem.querySelector("p").textContent=selectMeal.chefTips[i]
        chefTipsContainer.appendChild(tipItem);
    }

    

}
var nextMealBtn=document.getElementById("nextMealBtn");
var currentMealIndex= 1;
displayMeal(meals[currentMealIndex])
function showAnotherMeal(){
    if(meals.length<2){
        return;
    }
    var randomIndex=
    Math.floor(Math.random() * meals.length)
    while(randomIndex===currentMealIndex){
        randomIndex=Math.floor(Math.random() *meals.length)
    }
    currentMealIndex=randomIndex;
    displayMeal(meals[currentMealIndex]);
}

displayMeal(meals[currentMealIndex]);
showIngredients();
nextMealBtn.addEventListener("click", showAnotherMeal);
console.log(meals[1].reviews);
console.log(mealPrepTime,meals[1].prepTime)



 


    


    //  console.log(meal.name)   


   



                                                                    