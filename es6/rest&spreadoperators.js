//just to write less code

//REST operator, capture the list of arguments as a single array,
function addNumbers(...nums) {
  return nums.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

//instead of array, just pass many args with nums
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8));

//used in function arguments when we want to capture a list of arguments.gather together variables

//SPREAD operator - spread variables out

const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];
//want to show the user a list of colors

//defaultColors.concat(userFavoriteColors) //join 2 arrays together into a single array

//flattening out the inner array into the array outside

//benefit of using this syntax....what if i want to add on more color?
const fallColors = ["fire red", "fall orange"];

const colorsArray = [
  "blue",
  ...defaultColors,
  ...userFavoriteColors,
  ...fallColors,
];
console.log(colorsArray);

//we can mix and match rest and spread operators together

function shoppingList(...groceries) {
  if (groceries.indexOf("milk") < 0) {
    return ["milk", ...groceries];
  }
  return groceries;
}

console.log(shoppingList("oranges", "bread"));
