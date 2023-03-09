// JS-3

// Задание 1

let password = 'пароль';
let questionPassword = prompt(`Введите пароль`);

if (password == true) {
    alert(`Пароль введен верно`);
} else {
    alert(`Пароль введен неправильно`);
}

// Задание 2

let c = 0;

if (c > 0 && c < 10) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}

// Задание 3

let d = 10;
let e = 1000;

if (d > 100 || e > 100) {
    alert(`Верно`)
} else {
    alert(`Неверно`)
}

// Задание 4

let a = Number(2);
let b = Number(3);
alert(a + b);

// Задание 5

let monthNumber = prompt(`Введите номер месяца`)

switch (monthNumber) {
    case `1`:
        alert(`зима`);
        break;
    case `2`:
        alert(`зима`);
        break;
    case `3`:
        alert(`весна`);
        break;
    case `4`:
        alert(`весна`);
        break;
    case `5`:
        alert(`весна`);
        break;
    case `6`:
        alert(`лето`);
        break;
    case `7`:
        alert(`лето`);
        break;
    case `8`:
        alert(`лето`);
        break;
    case `9`:
        alert(`осень`);
        break;
    case `10`:
        alert(`осень`);
        break;
    case `11`:
        alert(`осень`);
        break;
    case `12`:
        alert(`зима`);
        break;

    default:
        alert(`Такого месяца не существует!`);
        break;
}


// Задание 7

let userParity = Number(prompt(`Пожалуйста, введите любое число`));
let parity;

parity = (userParity % 2) ? alert(`Число нечетное`) : alert(`Число четное`);


// Задание 8 
let clientOS = Number(prompt(`Введите 0, если вы являетесь пользователем iOS 
Введите 1, если вы являетесь пользователем Android`));

if (clientOS === 0) {
    alert(`Установите версию приложения для iOS по ссылке`);
} else {
    alert(`Установите версию приложения для Android по ссылке`)
}

// Задание 9

let clientDeviceYear = Number(prompt(`Введите год производства вашего устройства`));
clientDeviceYear = 2015;
switch (clientDeviceYear) {
    case (clientDeviceYear < 2015 && clientOS === 0):
        alert(`Установите облегченную версию приложения для Android по ссылке`);
        break;
    case (clientDeviceYear < 2015 && clientOS === 1):
        alert(`Установите облегченную версию приложения для iOS по ссылке`);
        break;
    case (clientDeviceYear >= 2015 && clientOS === 0):
        alert(`Установите версию приложения для Android по ссылке`);
        break;
    case (clientDeviceYear >= 2015 && clientOS === 1):
        alert(`Установите версию приложения для iOS по ссылке`);
    default:
        alert(`Ошибка`)
        break;
}
