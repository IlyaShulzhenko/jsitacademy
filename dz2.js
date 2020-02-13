let surname = prompt('Введите вашу фамилию');
while ( !surname ) {
    alert ('Введите данные корректно');
    surname = prompt('Введите вашу фамилию');
}

let name = prompt ('Введите ваше имя');
while ( !name ) {
    alert ('Введите данные корректно');
    name = prompt ('Введите ваше имя');
}

let patronymic = prompt ('Введите ваше отчество');
while ( !patronymic ){
    alert ('Введите данные корректно');
    patronymic = prompt ('Введите ваше отчество');
}

let yearsbirth = prompt ( 'Введите ваш год рождения' );
while ( isNaN (yearsbirth) ) {
    alert ('Введите данные корректно');
    yearsbirth = prompt ( 'Введите ваш год рождения' );
}

let age = 2020 - yearsbirth >= 18? 'совершеннолетний': 'несовершеннолетний';
  
let monthbirth = prompt ('Введите ваш месяц рождения', 'число');
while ( isNaN (monthbirth) || monthbirth>12 || monthbirth<1 )  {
        alert ('Введите данные корректно');
        monthbirth = prompt ('Введите ваш месяц рождения', 'число');
}

let month = 12 - monthbirth;

let years = monthbirth === 1? 2020 - yearsbirth: 2019 - yearsbirth; 
    
let male = prompt ('Введите ваш пол', 'мужской или женский');

let gender
while (!gender) {
    switch ( male.toLowerCase() )  {
        case 'мужской' :
            gender = 'Мужчина';
            break;
        case 'женский' :
            gender = 'Женщина';
            break;
        default:
            alert ('Введите данные корректно');
            male = prompt ('Введите ваш пол', 'мужской или женский');
    }
}

let children = prompt ('Сколько у вас детей');
    if (!children) {
        children = 'нет';
    }

let anketa =`${surname} ${name} ${patronymic}. 
Вы ${gender}.
Вам ${years} лет и ${month} месяцев.
Вы ${age}. 
У вас ${children} детей.` ;

alert (anketa);
  
 
