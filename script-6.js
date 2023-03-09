// JS-6

// Задание 1

const nums = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
	if (nums[i] === 10) {
    break;
  }
}


// Задание 2

const m = [1, 5, 4, 10, 0, 3];

let position = null;

for (let i = 0; i < m.length; i++) {
if (m[i] === 4) {
  position = i;
  break  
}
}

console.log(position); 

// Задание 3

let arr = [1, 2, 3];
let str = arr.join(' ');

console.log(str);

// Задание 4

let arrNum = [];

for (let i = 0; i < 3 ; i++) {
    arrNum[i] = [1,1,1];
    for (let j = 0; j < 3; j++) {
    arrNum[j] = [1,1,1];
    for (let q = 0; q < 3; q++)
    arrNum[q]  = [1,1,1];
  }
}

console.log(arrNum); 
//  выводит "[Array(3), Array(3), Array(3)]" это правильно?

// Задание 5

const arrN = [1, 1, 1];

arrN.push(2,2,2);
console.log(arrN);

// Задание 6

const arrOnlyNum = [9, 8, 7, 'a', 6, 5];

arrOnlyNum.sort();
arrOnlyNum.pop();

console.log(arrOnlyNum);

// Задание 7

const arrCheck = [9, 8, 7, 6, 5];

let search = arrCheck.includes(Number(prompt('Введите число от 1 до 10')));

if (search === true) {
  alert('Число есть');
} else {
  alert('Числа нет');
}

// Задание 8

const line = 'abcdef';

const lineArr = line.split('');

const lineReverse = lineArr.reverse();

const lineStr = lineReverse.join('');
console.log(lineStr);

// Задание 9

const arrMultid = [[1, 2, 3,],[4, 5, 6]];

arrMultid.flat();
console.log(arrMultid);

// Задание 10 

const arrRan = [1,4,6,8,10];
let i = 0;

while (arrRan[i + 1] !== undefined) {
  console.log(arrRan[i] + arrRan[i + 1]);
  i++;
}



// Задание 11

const tenth = [Math.round(Math.random() * 10)];

console.log(tenth);

// Задание 12
