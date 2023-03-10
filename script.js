// JS для сайта 

// Задание 7

function gameSeasons() {
    let monthNumber = Number(prompt(`Введите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится`));

    if (monthNumber < 0  || monthNumber > 13) {
        alert(`Такого месяца не существует`);
    } else if (monthNumber == 12  || monthNumber == 1 || monthNumber == 2) {
        alert(`зима`);
    } else if (monthNumber == 3  || monthNumber == 4 || monthNumber == 5) {
        alert(`весна`);
    } else if (monthNumber == 6  || monthNumber == 7 || monthNumber == 8) {
        alert(`лето`);
    } else if (monthNumber == 9  || monthNumber == 10 || monthNumber == 11) {
        alert(`осень`);
    }
}

// Задание 11

function gameWords() {
    let fruitsArr =  ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruitsArr = fruitsArr.sort(() => Math.random() - 0.5);
    alert (fruitsArr)
    let firstAsk = (prompt('Назови первй элемент списка'));
    firstAsk = firstAsk.toLocaleLowerCase();
    let secondAsk = (prompt('Назови второй элемент списка'));
    secondAsk = secondAsk.toLocaleLowerCase();
    if (firstAsk == fruitsArr[0] && secondAsk == fruitsArr[6]) {
        alert('Правильно!');
    } else if (firstAsk === fruitsArr[0]) {
        alert('Вы были близки к победе!');
    } else if (secondAsk === fruitsArr[6]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Неверно');
    }
}

// выводит только неверно (подскажите как исправить)



