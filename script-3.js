//JS-3

// Задание 1

let hello = 0;

while (hello < 2) {
    console.log(`Привет`);
    hello++;
}


// Задание 2

let numbers = 1; 

while (numbers <= 5 ) {
    console.log(numbers);
    numbers++;
}

// Задание 3

let numbersSecond = 7;

while (numbersSecond <= 22) {
    console.log(numbersSecond);
    numbersSecond++;
}

// Задание 4

const obj = {
	'Коля': '200',
	'Вася': '300',
	'Петя': '400'
};

 for (let salary in obj){

   console.log(`${salary} — зарплата ${obj[salary]} долларов`);

}

// Задание 5

for (let n = 1000, num = 0; n > 50; num++) {
    n /= 2;
        alert( n );
}

// Задание 6
 
for (let friday = 5; friday <= 31; friday++) {
    friday += 7;
    alert(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`)    
}