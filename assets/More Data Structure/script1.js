'use strict';
//he "use strict" directive enables JavaScript's strict mode. JavaScript's strict mode was introduced in ECMAScript 5. It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.

//NB! I wrote the assignment from bottom up, because I did not want to be unable to see my data at the top.

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    time = 'within 1hr',
    address,
    starterIndex = 0,
    mainIndex = 1,
  }) {
    console.log(
      `Oder received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} ,${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
console.log('=======================DOM====================');

console.log('Example of window.document', window.document);
console.log('Example of document.body', document.body);
console.log('Example of document.body.children', document.body.children);
console.log(
  'Element with ID entry-form',
  document.getElementById('entry-form')
);
console.log(
  'Element with className entry-form',
  document.getElementsByClassName('entry-form')
);
console.log('=============Working with Arrays==============');
//When ever we call a method on a string, JS will automatically behind the scene, convert a string primitive into an object with the same content. then it is on that object the methods will be called, once done, convert it back into a regular primitive string. The process is called boxing.
//example
let aka = 'FoXx';
console.log(new String(aka));
console.log(typeof new String(aka));
console.log(typeof new String(aka).slice(1));

const names = 'Gladman Mfanafuthi(FoXx) Maseko';
const airline = 'SAA Air Africa';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[3]);
console.log(plane[2]);

console.log(airline.length);
console.log(plane.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Africa'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(names.slice(0, names.indexOf(' '))); //like our names on a portal
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(names.slice(names.lastIndexOf(' ') + 1)); //lastNames on a portal

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😁');
  } else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('11E');

//fix capitalization
const capitalizePassengerName = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};
capitalizePassengerName('mFaNaFuThI');
capitalizePassengerName('gLaDmAn');
capitalizePassengerName('mAsEkO');
capitalizePassengerName('mAsEkO');

//Comparing strings
const ComparingStr = function (wrongStr, rightStr) {
  const fixed = wrongStr.toLowerCase().trim();
  console.log(fixed === rightStr);
};
ComparingStr('  fUtHifoX@g.com \n', 'futhifox@g.com');

//Replacing
const priceUS = '299,000$';
const priceSA = priceUS.replace('$', 'R').replace(',', '.');
console.log(priceSA);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

//Booleans
const plane1 = 'Airbus A32neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log("it's a part of new Airbus fleet");
} else {
  console.log('Not the part of a new Airbus fleet');
}

//Practice exercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log("You're not allowed on board");
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Bot some snacks and a gun for protection');

//Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Mfanafuthi Maseko'.split(' '));
const [firstName1, lastName1] = 'Mfanafuthi Maseko'.split(' ');
const newName = ['Mr. ', firstName1, lastName1.toUpperCase()];
console.log(newName.join(' '));

//Capitalize
const capitalizeName = function (name) {
  const names = name.split(' ');
  let newNames = [];
  for (const n of names) {
    // newNames.push(n[0].toUpperCase() + n.slice(1));
    newNames.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(newNames.join(' '));
};

capitalizeName('mfanafuthi gladman maseko');
capitalizeName('kalyani joshi');

//Padding
const message = 'go to gate 23';
console.log(message.padStart(20, '+'));
console.log(message.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last4 = str.slice(-4);
  return last4.padStart(str.length, '*');
};
console.log(maskCreditCard(456545477400147));
console.log;

//Repeat
const message2 = 'Bad weather.. all Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(7);
planesInLine(10);

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'💟'.repeat(i + 1)}`);
  }
});

///////////////////////////////////////
console.log('==========String Methods Practice============');

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  console.log(
    `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
      '_',
      ' '
    )} ${from.slice(0, 3).toUpperCase()} ${to
      .slice(0, 3)
      .toUpperCase()} to (${time.replace(':', 'h')})`.padStart(36, ' ')
  );
}
console.log('======================Maps====================');
// //Is a data structure we can use to map values to keys
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Fourways,Johannesburg');
// rest.set(2, 'Cape town');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 13;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// console.log(rest.delete(2));
// //rest.clear()

// const arr4 = [1, 2];
// rest.set(arr4, 'Test');
// rest.set(document.querySelector('h1'), 'heading 1');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr4));

// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎊'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// //Convert map to array
// console.log([...question]);
// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

console.log('======================Sets====================');
// //Unique values
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pasta',
// ]);
// console.log(new Set('Futhi'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// console.log(ordersSet.add('Bread'));
// console.log(ordersSet.add('Bread'));
// console.log(ordersSet.delete('Bread'));
// // console.log(ordersSet.clear);
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //example
// const staff = ['waiter', 'manager', 'waiter', 'chef', 'chef', 'waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(staff).size);
// console.log(new Set('futhifoxmaseko').size);

// console.log('==Looping Objects: Object Keys, Values and Entries==');
// //Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property VALUES
// const values = Object.values(openingHours);
// console.log(values);
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries)
//   console.log(`On ${day} we are open at ${open} and closed at ${close}`);
console.log('===============Optional Chaining===============');
// //WITHOUT Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// // console.log(restaurant.openingHours.mon.open);

// //WITH Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [{ name: 'Futhi', email: 'hello@futhi.com' }];
// //const users = []
// //WITHOUT Optional Chaining
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');
// //WITH Optional Chaining
// console.log(users[0]?.name ?? 'User array empty');

console.log('=====================For of loop===============');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

// console.log('===========Logical Assignment Operator=========');
// const rest1 = {
//   name: 'Caprivi',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'Pizza Hut',
//   owner: 'Mr FoXx',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// //OR assignment operator
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //Nullish assignment operator, just in case the value is 0 or ''
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //AND assignment operator, used in variable currently truth
// // rest1.owner = rest1.owner && '<ANONYMOUS>'
// // rest2.owner = rest2.owner && '<ANONYMOUS>'
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
console.log('===========Short Circuiting(&& and ||)=========');
console.log('||||||OR||||||');
// //Use ANY data type, return ANY data type, short-circuiting
// //if first operant is truthy on on the || mediately returns
// console.log(2 || 'fox');
// console.log('' || 'futhi');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('?????Nullish?????');
// //Nullish: null and undefined (NOT 0 of '')
// const guests = restaurant.numGuests ?? 10;
// console.log(guests);

// console.log('&&&&&AND&&&&&&');
// console.log(0 && 'Futhi');
// console.log(7 && 'Futhi');

// console.log('Hello' && 23 && null && 'Fox');
// //Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'onion');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onion');
console.log('=================Rest Operator==================');
// //1)Destructuring
// //SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //Objects
// const { sat, ...weekdays1 } = restaurant.openingHours;
// console.log(weekdays1);

// //2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(2, 3, 5, 6);
// add(2, 3, 5, 6, 7, 8);

// const x = [23, 2, 6, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'spinach', 'onion', 'olives');
// restaurant.orderPizza('mushrooms');

console.log('=================Spread Operator==================');
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);

// console.log(...goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'lasagna'];
// console.log(newMenu);
// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Futhi';
// const letters = [...str, '', 'F.'];
// console.log(letters);
// console.log(...str);

//// Real-world example
// const ingredients = [
// prompt('lets make pasta! Ingredient1?'),
// prompt('ingredient 2?'),
// prompt('ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //Objects
// const newREstaurant = { foundedIn: 1998, ...restaurant, founder: 'FuthiFox' };
// console.log(newREstaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Splendito JHB';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
console.log('===============Destructuring Objects===============');
// restaurant.orderDelivery({
//   time: '22h00',
//   address: '4080 Madonsela str Motloung sec.',
//   starterIndex: 2,
//   mainIndex: 2,
// });
// restaurant.orderDelivery({
//   address: '4080 Madonsela str Motloung sec.',

//   mainIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //renaming variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Add, rename vars and assign efault values;
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let d = 111;
// let e = 999;
// const obj = { d: 23, e: 7, c: 14 };
// ({ d, e } = obj);
// console.log(d, e);

// //Nested objects
// const {
//   fri: { open: o, close: cl },
// } = openingHours;
// console.log(o, cl);

console.log('==============Destructuring Arrays==============');
////Destructuring Arrays
//// Is a way of breaking or unpacking a complex data structure down into a smaller data structure e.g. variable.
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

////swapping variables around
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// //using destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive to return a value from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
