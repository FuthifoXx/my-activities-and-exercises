// PRIMITIVE DATA TYPES
console.log('===================numbers=====================');
//1)Number: Floating point numbers👉 Used for decimals and integers
let age = 45;
console.log(age);
console.log(typeof age);

//With decimals:
let x1 = 45.0;
console.log(x1);
console.log(typeof x1);

//Without decimals:
let x2 = 45;
console.log(x2);
console.log(typeof x2);

console.log('===================strings=====================');
//2)String: Sequence of characters 👉 Used for text
// An empty value has nothing to do with undefined. An empty string has both a legal value and type:
let str = '';
console.log(str);
console.log(typeof str);
/////////////////////////
let string = 'FuthiFoXx';
console.log(string);
console.log(typeof string);

//JS evaluates from left to right. Different sequences can produce different results:
let example1 = 16 + 4 + 'volvo';
console.log(example1);
console.log(typeof example1);

let example2 = 'Volvo' + 16 + 4;
console.log(example2);
console.log(typeof example2);
console.log('===================boolean=====================');
//3)Boolean: Logical type that can only be true or false👉 Used for taking decisions
let fullAge = true;
console.log(fullAge);
let lessAge = false;
console.log(lessAge);
console.log(typeof lessAge);
let x3 = 5;
let y = 5;
let z = 6;
let result1 = x3 == y;
let result2 = x3 == z;
console.log(result1);
console.log(result2);
console.log(typeof result1);
console.log('===================undefined=====================');
//4)Undefined: Value taken by a variable that is not yet defined('empty value')
let children;
console.log(children);
console.log(typeof children);

children = 5;
console.log(children);
children = ['Hlengiwe', 'Lwandle', 'Mini', 'Kwezi', 'Sisekelo'];
console.log(children);
console.log('=====================null=======================');
//5)Null: Also means 'empty value'
//6)Symbol: Value that is unique and cannot be changed
console.log('======================BigInt=====================');
//7)Bigint: Larger integers than the Number type can hold
//A BigInt can not have decimals.
let x5 = BigInt('123456789012345678901234567890');
console.log(x5);
console.log(typeof x5);
//You cannot perform math between a BigInt type and a Number type.

console.log('===============OBJECT DATA TYPES=================');

//OBJECT DATA TYPES
console.log('=====================Arrays======================');
//Arrays
const cars = ['Saab', 'Volvo', 'BMW'];
console.log(typeof cars);
const volvo = cars[1];
console.log(volvo);

console.log('====================Objects======================');
//Objects
const child4 = {
  firstName: 'Kwezi',
  lastName: 'Maseko',
  age: 7,
  ayeColor: 'brown',
};
console.log(typeof child4);
console.log(child4);
const firstName = child4.firstName;
console.log(firstName);

console.log('=============COMPARISON OPERATORS===============');
//equal to ==
console.log('======================(==)=====================');
const x = 5;
console.log(x == 5);
console.log(x == 8);
console.log(x == '5');

console.log('======================(===)=====================');
//equal value and equal type ===
console.log(x === 5);
console.log(x === '5');

console.log('======================(!=)=====================');
//not equal =!
console.log(x != 8);

console.log('======================(!==)=====================');
//not equal value or notequal type !==
console.log(x !== 5);
console.log(x !== 8);
console.log(x !== '5');

console.log('======================(>)=====================');
//greater than
console.log(x > 8);

console.log('======================(<)=====================');
//less than
console.log(x < 8);

console.log('======================(>=)=====================');
//greater than or equal to
console.log(x >= 8);

console.log('======================(<=)=====================');
//less than or equal to
console.log(x <= 8);
console.log('====================example====================');
const age5 = 17;
if (age5 < 18) {
  console.log('Too young to buy alcohol');
} else {
  console.log('what would you like buy');
}
console.log('===========Comparing Different Types==========');
//Comparing Different Types
//When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
console.log(2 < 12);
console.log(2 < '12');
console.log(2 < 'john');
console.log(2 == 'john');
console.log('2' < '12');
console.log('2' < '12');
//When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2. To secure a proper result, variables should be converted to the proper type before comparison:
console.log('2' == '12');
// An empty string converts to 0. A non-numeric string converts to NaN which is always false
const age1 = '';
if (isNaN(age1)) {
  console.log('Input is not a number');
} else {
  console.log(age1 < 18 ? 'too young' : 'old enough');
}

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

console.log('=============LOGICAL OPERATORS===============');
//Logical operators are used to determine the logic between variables or values.
const var1 = 6;
const var2 = 3;

//AND &&
console.log(var1 < 10 && var2 > 1);
// OR ||
console.log(var1 == 5 || var2 == 5);
// NOT !
console.log(!(var1 == var2));

console.log('=======CONDITIONAL (ternary) OPERATORS=======');
// contains a conditional operator that assigns a value to a variable based on some condition.
let age6 = 17;
let voteable = age6 < 18 ? console.log('Too young') : console.log('Old enough');

console.log('=======NULLISH COALESCING OPERATOR(??)=======');
//The ?? Operator returns the first argument if it is not Nullish(null or undefined).
//Otherwise it returns the second argument.
let name2 = null;
let text = 'missing';
let result = name2 ?? text;
console.log(result);

console.log('======THE OPTIONAL CHAINING OPERATOR(?.)=====');
//The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
const car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};
console.log(car?.name);

console.log('===================Function===================');
// With functions you can reuse code.

// You can write code that can be used many times.

// You can use the same code with different arguments, to produce different results.

// A JavaScript function is a block of code designed to perform a particular task.

//A JavaScript function is executed when "something" invokes it (calls it).

function multiplication(p1, p2) {
  return p1 * p2;
}
console.log(multiplication(5, 5));

//Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius(80));

//Function calling other functions
//example a function that cuts fruit into pieces and the other that processes fruit into a juice
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(4, 2));

console.log('===================Activity===================');

// • Try running a JavaScript program using Node.js. Refer to the
// presentation - Run JS Program from NODE-1.
// • Write a JavaScript programs to get following solutions using if-else,
// for loop, while loop, switch statements.
// • Program to compare 2 numbers and display the bigger integer.
// • If-else condition can be used here.
// • Assign grade to a student based on the score.
// • Score: 8-10 Grade A
// • Score: 5-<8 Grade B
// • Score: 1-5 Grade C
// • Switch statement can be used here.
// Note: Refer demo code for example
const grade = 8;
if (grade >= 8) {
  console.log('Grade A');
} else if (grade >= 5) {
  console.log('Grade B');
} else if (grade >= 1) {
  console.log('Grade C');
} else {
  console.log('You have failed you exams 💥');
}

//😠😠😠😠😠😠😠 I don't like switch statements

const score = 8;

switch (true) {
  case score >= 8:
    console.log('Grade A');
    break;
  case score >= 5:
    console.log('Grade B');
    break;
  case score >= 1:
    console.log('Grade C');
    break;
  default:
    console.log('You have failed your exams 💥');
    break;
}

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are R0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are R2.79 a kilo.');
    break;
  default:
    console.log(`Sorry, we are out of R{expr}.`);
}

//Calculating a an average between two teams, and check for a winner if one teams average doubles the other teams average.
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(100, 100, 100);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log('No team wins...');
  }
};
checkWinner(scoreDolphins, scoreKoalas);
