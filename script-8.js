//JS-8

// Задание 1

function myFunc(numbers, callback) {
    return callback(numbers);
}

function sum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

function mult(numbers) {
   return numbers.reduce((acc, cur) => acc * cur, 1);
}

console.log(myFunc([3, 4, 1, 9],sum));
console.log(myFunc([3, 4, 1, 9],mult));


// Задание 2 

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function getSortedArrayObj() {
    return users.sort((a,b) => a.age - b.age)
}

console.log(getSortedArrayObj(users));

// Задание 3

const arr = [1, '4', 9, 'two'];

function each(arr, callback){
    return callback(arr);
}

function reversArr() {
    return arr.reverse();
}

function toNumberArr() {
    return arr.join().split(',').filter(Number).sort();
}   

console.log(each(arr,reversArr));
console.log(each(arr,toNumberArr));

// Задание 4 

function sayDate() {
    console.log(new Date(Date.now()));
}

function timer() {
    const id = setInterval(sayDate, 3000);

    setTimeout(() => {
        clearInterval(id);
        console.log('30 секунд прошло');
    }, 30000)
}

timer();

// Задание 5

function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);
