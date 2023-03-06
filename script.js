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

