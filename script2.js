// Написать программу, которая получит от 3х пользователей информацию: возраст, имя, фамилию.

const firstStudent = prompt('Введите ваш возраст, имя и фамилию');
const secondStudent = prompt('Введите ваш возраст, имя и фамилию');
const thirdStudent = prompt('Введите ваш возраст, имя и фамилию');

console.log('**************\n\
\n\
Список студентов зарегистрировавшихся на вебинар:\n\
\n\
1. ' + firstStudent + '\n\
\n\
2. ' + secondStudent + '\n\
\n\
3. ' + thirdStudent + '\n\
\n\
-------------- Средний возраст студента: ' + Math.round((parseInt(firstStudent) + parseInt(secondStudent) + parseInt(thirdStudent)) / 3) + ' лет --------------\n\
\n\
**************');


/*const firstStudent = prompt('Введите ваш возраст, имя и фамилию');
const secondStudent = prompt('Введите ваш возраст, имя и фамилию');
const thirdStudent = prompt('Введите ваш возраст, имя и фамилию');
const averageAge = Math.round((parseInt(firstStudent) + parseInt(secondStudent) + parseInt(thirdStudent)) / 3);

const result = '**************\n\
\n\
Список студентов зарегистрировавшихся на вебинар:\n\
\n\
1. ' + firstStudent + '\n\
\n\
2. ' + secondStudent + '\n\
\n\
3. ' + thirdStudent + '\n\
\n\
-------------- Средний возраст студента: ' + averageAge + ' лет --------------\n\
\n\
**************';

console.log(result);*/


/*const firstStudent = prompt('Введите ваш возраст, имя и фамилию');
const secondStudent = prompt('Введите ваш возраст, имя и фамилию');
const thirdStudent = prompt('Введите ваш возраст, имя и фамилию');
const averageAge = Math.round((parseInt(firstStudent) + parseInt(secondStudent) + parseInt(thirdStudent)) / 3);

const result = `**************

Список студентов зарегистрировавшихся на вебинар:

1. ${firstStudent}

2. ${secondStudent}

3. ${thirdStudent}

-------------- Средний возраст студента: ${averageAge} лет --------------

**************`;

console.log(result);*/