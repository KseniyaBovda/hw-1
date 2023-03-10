// JS-5

// Задание 1 

function lowerValue(first, second) {
    if (first >= second) {
        console.log(second);
    } 
}

lowerValue (8, 4);
lowerValue (6, 6);

// Задание 2

function parityNum() {
    let userNum = prompt(`Введите число`);

    if (userNum % 2 === 0) {
        alert(`Четное число`);
    } else {
        alert(`Нечетное число`);
    }
}

parityNum();

// Задание 3.1

function squaredFirst() {
    let a = Number(prompt(`Введите число`));

    console.log(a ** 2);
}

squaredFirst();

// Задание 3.2

function squaredSecond() {
    let b = Number(prompt(`Введите число`));

    return b ** 2;
}

squaredSecond();

// Задание 4

function yourAge(negative, child, adult ) {
    let question = Number(prompt(`Введите возраст`));

    if (question < 0) {
        alert(negative);

    } else if (question <= 12) {
        alert(child);

    } else if (question > 13) {
        alert(adult);
    } 
}

yourAge(`Вы ввели неправильное значение`, `Привет, друг!`, `Добро пожаловать!` );

// Задание 5

function check() {
    let firstValue = prompt(`Введите первое значение`);
    let secondValue = prompt(`Введите второе значение`);

    if (!isNaN(firstValue) && !isNaN(secondValue)) {
        return alert(firstValue * secondValue);

    } else {
        alert(`Одно или оба значения не являются числом`);
    }
}

check();

// Задание 6

function cube() {
    let askNum = prompt(`Введите число`);

   if (! isNaN(askNum)) {
    return askNum ** 3;

   } else if (isNaN(askNum)) {
    alert(`Переданный параметр не является числом`);
   }  
}

cube();
