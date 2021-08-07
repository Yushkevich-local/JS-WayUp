'use strict';


//Задание 1
for (let i = 10; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}


//Задание 2
const meObject = {
  firstName: 'Kiryl',
  lastName: 'Yushkeich',
  age: 19,
  animal: true
}


//Задание 3
const array = [
  'я в Симбирск,',
  'в трактире.',
  'с утра',
  'В ту же ночь',
  'Я остановился',
  'для закупки', 
  'что и было поручено Савельичу.',
  'приехал,',
  'где должен был',
  'нужных вещей',
  'отправился по лавкам',
  'пробыть сутки',
  'Савельич'
]

array[7] = 'приехал';
array[9] = 'нужных вещей,'


const result = `${array[3]} ${array[7]} ${array[0]} ${array[8]} ${array[11]} ${array[5]} ${array[9]} ${array[6]} ${array[4]} ${array[1]} ${array[12]} ${array[2]} ${array[10]}`;
console.log(result);


//Задание 4
function showNames(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}
showNames(meObject.firstName, meObject.lastName);


//Задание 5
let num = 21; 
while(num <= 67) {
  if (num % 2 != 0) {
    console.log(num);
  }
  num++;
}

