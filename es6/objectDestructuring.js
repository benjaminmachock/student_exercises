const expense = {
  type: "Entertainment",
  amount: 200,
};

//assigning properties off an object
const type = expense.type;
const amount = expense.amount;

// console.log(type);
// console.log(amount);

//ES6...this is not creating an object, the curly braces, i want to declare a new variable called type and i want it to reference the expense.type property.  pulling off the expense object
// const { type } = expense;
// const { amount } = expense;

//pulling properties off an object. does the variable name have to match up to the property name. must be identical. if you try to destructure a property that does not exist...undefined
const { type, amount } = expense;
console.log(type, amount);

//decrease the amount of code we have to write when pulling properties off of an object

//we can use them to pull properties off of objects passed to functions
const myCar = {
  make: "Nissan",
  model: "Xterra",
  year: 2011,
};

// function carSummary(car) {
//   return `The car ${car.model} was built in year ${car.year}.`;
// }

console.log(carSummary(myCar));

function carSummary({ model, year }) {
  return `The car ${model} was built in year ${year}.`;
}
