// Задание 7

function gameSeasons(winter,spring, summer, autumn) {
    let monthNumber = Number(prompt(`Введите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится`));

    if (monthNumber < 0  || monthNumber > 13) {
        alert(`Такого месяца не существует`);
    } else if (monthNumber == 12  || monthNumber == 1 || monthNumber == 2); {
        alert(winter);
    } else if (monthNumber == 3  || monthNumber == 4 || monthNumber == 5); {
        alert(spring);
    } else if (monthNumber == 6  || monthNumber == 7 || monthNumber == 8); {
        alert(summer);
    } else if (monthNumber == 9  || monthNumber == 10 || monthNumber == 11); {
        alert(autumn);
    }
}

gameSeasons(`Зима`, `Весна`, `Лето`, `Осень`);