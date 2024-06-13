'use strict';
console.log('========DEFAULT PARAMETERS==========');

const bookings = [];
const createBooking = function (
  flight,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers =  numPassengers || 1;
  // price = price || 199;

  const booking = {
    flight,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

console.log('==HOW PASSING ARGUMENTS WORKS: value vs reference==');
const flight = 'LH234';
const futhi = {
  name: 'Futhi Maseko',
  passport: 234578936475,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LJ999';
  passenger.name = 'Mr ' + passenger.name;

  //   if (passenger.passport === 234578936475) {
  //     alert('Checked in');
  //   } else {
  //     alert('Wrong passport');
  //   }
};
// checkIn(flight, futhi);
console.log(flight);
console.log(futhi);

//Is the same as doing this...
const flightNum = flight;
const passenger = futhi;

//Two functions manipulating the same object can course a problem

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};
newPassport(futhi);
console.log(futhi);

checkIn(flight, futhi);
//NB! In JavaScript we can only pass by value not by reference. Even though it may look like we are passing by reference, it's simply a value containing a memory address.

console.log('==FIRST-CLASS AND HIGHER-ODER FUNCTIONS==');
//FIRST-CLASS FUNCTIONS
//👉 JavaScript treats functions as FIRST-CLASS CITIZENS
//👉 This means that functions are SIMPLY VALUES
//👉 Functions are just another "TYPE" OF OBJECT

//WE CAN DO THE FOLLOWING
//👉Store functions in variable or properties:
//👉Pass functions as arguments to OTHER functions:
//👉Return functions FROM functions
//👉Call methods on functions

//HIGHER-ORDER FUNCTIONS
//👉A function that RECEIVES another function as an argument that RETURNS  a new function, or BOTH
//👉This is only possible because of first-class functions

console.log('==FUNCTIONS ACCEPTING CALLBACK FUNCTIONS==');
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order functions
const transform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transform('JavaScript is the best', upperFirstWord);
transform('JavaScript is the best', oneWord);

//JS uses call backs all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Kalyani', 'Herry', 'FoXx'].forEach(high5);

//NB! Call back functions allows us to perform abstraction, by hiding the details of some code implementation, because we don't really care about that detail. This allows us to think about the problems at a higher or at a more abstract level.

console.log('====FUNCTIONS RETURNING FUNCTIONS=====');
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeter = greet('Namaste');
greeter('Kalyani');
greet('Hey')('Futhi');

console.log('=======THE CALL AND APPLY METHODS=====');
//this allows us to manually set a this key word for a function call.

const saa = {
  airline: 'South African Airways',
  iataCode: 'SA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
saa.book(345, 'Futhi Maseko');
saa.book(345, 'Kalyani Joshi');
console.log(saa);

const emirates = {
  airline: 'Emirate airline',
  iataCode: 'EK',
  bookings: [],
};

const book = saa.book;

//Does not work
// book(23, 'Sarah Mabuza');

//CALL METHOD
book.call(emirates, 234, 'Kwezi Maseko');
console.log(emirates);

const britishAirways = {
  airline: 'British Airways',
  iataCode: 'BA',
  bookings: [],
};
book.call(britishAirways, 789, 'Phumla Mtabane');

//APPLY METHOD
//it takes an array of data, but it's no longer used that much in modern JS.
const flightData = [583, 'FoXx Maseko'];
book.apply(britishAirways, flightData);

//A better way if you want to apply an array of data our new friend spread operator.
book.call(britishAirways, ...flightData);
console.log(britishAirways);

console.log('=============BIND METHOD=============');
//this also allows us to manually set a this key word for a function call. The difference is bind does not immediately call the function. It returns a new function were the this key word is bound. It is set to what ever value we pass into bind. And we can apply partial application, meaning some parts of an arguments or the original function are already applied.

// book.call(emirates, 234, 'Kwezi Maseko');

const bookEK = book.bind(emirates);
const bookBA = book.bind(britishAirways);
const bookSAA = book.bind(saa);

bookEK(234, 'Futhi Maseko');

//Example of partial application
const bookSAA233 = book.bind(saa, 23);
bookSAA233('Minnie Maseko');

//With Event Listeners

saa.planes = 200;
saa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// saa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', saa.buyPlane.bind(saa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.15, 100));

const addVAT = addTax.bind(null, 0.15);
//addVAT = value => value + value * 0.15;

console.log(addVAT(100));
console.log(addVAT(1000));
console.log(addVAT(10000));

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeter = greet('Namaste');
// greeter('Kalyani');
// greet('Hey')('Futhi');

// const taxRate = function (rate = 0.15) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };
const taxRate =
  (rate = 0.15) =>
  (value) =>
    console.log(value + value * rate);
const taxer = taxRate(0.2);
taxer(100);
taxRate(0.3)(10000000);

///////////////////////////////////////
// Coding Challenge

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.


BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

*/
const poll = {
  question: 'What is your favourite programming language?',
  option: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  function() {},
  //This generates [0,0,0,0]
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question} \n ${this.option.join('\n')}\n(write option number)`
      )
    );
    console.log(answer);
    //Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      //Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] });

console.log('=Immediately Invoked Function Expressions=');
//This technique is useful for example on async await

//Data privacy inside the scope, not to be over written by some other parts of the programme or even by external scripts or libraries.

//It is not a future of a JS, it's a pattern which was developed by programmers and every one just followed suite.

//In modern JS are not that used anymore, because if all we want is to create a new scope for data privacy,all we need to do is to create a block{}. Not unless we want to use var.

//let or const, create their own scope inside the block. e.g. {const isPrivate = 23} this can not access console.log(isPrivate) while {var notPrivate = 23} console.log(notPrivate) can access

//We simply create a function and only execute it once

const runOnce = function () {
  console.log('This will run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();
