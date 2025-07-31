// 1.1)

const isDay = true;

if (isDay) {
    document.writeln ('<p style="color: #0d2b04ff;background-color: #aeececff">"Світла тема"</p>');
} else {
    document.writeln ('<p style="color: #e5eaeeff;background-color: #010f0fff">"Темна тема"</p>');
}

// 1.2)

const isOnline = false;

if (!isOnline) {
    alert ("Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет");
}

// 1.3)

const sum = Number(prompt('Введіть суму Вашої покупки'));

if (sum <= 500) {
    alert ('Сума Вашої покупки ' + sum + ' грн.');
} else if (sum > 500 && sum <=800) {
    alert ('Вітаємо, Вам надано знижку 3%, сума Вашої покупки ' + sum * 0.97 + ' грн');
} else {
    alert ('Вітаємо, Вам надано знижку 5%, сума Вашої покупки ' + sum * 0.95 + ' грн');
}

// 2.1)

const dayOfWeak = Number(prompt('Введіть номер дня тижня:'));

switch (dayOfWeak) {
    case 1:
        alert ('Понеділок');
        break;
    case 2:
        alert ('Вівторок');
        break;
    case 3:
        alert ('Середа');
        break;
    case 4:
        alert ('Четвер');
        break;
    case 5:
        alert ("П'ятниця");
        break;
    case 6:
        alert ('Субота');
        break;
    case 7:
        alert ('Неділя');
        break;
    default:
        alert ('Дня тижня з таким номером не існує');
}

