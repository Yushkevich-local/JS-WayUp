'use strict';

let city = {
  name: 'Brest',
  country: 'Belarus',
  number: 300000,
  footbal: true 
};

let a = 40,
    b = 70;
console.log(a * b);

let time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;
console.log((speedOfFirst + speedOfSecond) * time);


const randomNumber = Math.floor(Math.random() * 100);
// ELSE IF METHOD
// if (randomNumber < 20) {
//   console.log('randomNumber меньше 20');
// } else if (randomNumber > 50) {
//   console.log('randomNumber больше 50');
// } else {
//   console.log('randomNumber больше 20, и меньше 50');
// }

switch (true) {
  case randomNumber <= 20 :
    console.log('randomNumber меньше 20');
    break;
  case randomNumber >= 50 :
    console.log('randomNumber больше 50');
    break;
  default :
    console.log('randomNumber от 20 до 50');
    break;
}