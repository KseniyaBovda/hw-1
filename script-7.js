//JS-7

// Задание 1

let str = `изменение регистра`;
console.log(str.toUpperCase());

// Задание 2

const search = ['яблоко', 'груша', 'гриб', 'огурец'];

let regexp = new RegExp(/^гру/);

search.forEach ((el) => {
    if (el.match(regexp)) {
        console.log(el)      
    }
});

// Задание 3

const rounding = 32.58884;

const roundingDown = Math.floor(rounding);
console.log(roundingDown);

const roundingUp = Math.ceil(rounding);
console.log(roundingUp);

const roundingNear = Math.round(rounding);
console.log(roundingNear);

// Задание 4

const numbers = '52, 53, 49, 77, 21, 32';

const arr = numbers.split(',');
let numArr = arr.map(el => Number(el));

max = Math.max.apply(numArr, numArr);
console.log(max);
min = Math.min.apply(numArr, numArr);
console.log(min);


// Задание 5

random = Math.round(Math.random() * 10);

console.log(random);

// Задание 6 

function getRandomArrNumbers(randomNumber) {
    let sixthArray = [];
    let arrLength = Math.floor(randomNumber / 2)
    for (let i = 0; i < arrLength; i++) {
        sixthArray.push(Math.round(Math.random() * randomNumber));
    }
    console.log(sixthArray);
}
getRandomArrNumbers(Number(prompt('Введите любое число')));

// Задание 7 

function getRandomInt(max,min) {
    let non = Math.round(Math.random() * max);
    while (non < min){
        non = Math.round(Math.random() * max);
    } 
   return non;
}
console.log(getRandomInt(15, 6));  

// Задание 8

let today = new Date();

console.log(today);

// Задание 9

let currentDate = new Date();
currentDate.getDate(currentDate.setDate(73));

console.log(currentDate);


// Задание 10 

const date = new Date(2025, 5, 42, 12, 30, 20, 10);

function dateV(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]; 
    let fullDate = 'Дата:' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + days[date.getDay()];
    let time = 'Время:' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
     console.log(fullDate,time);   
}

dateV(date);