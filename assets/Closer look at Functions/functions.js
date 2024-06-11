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
