/*
Задание 5. Работа с датой и временем
Напишите функцию formatDate, которая принимает объект Date и возвращает строку в формате DD.MM.YYYY HH:MM. Используйте методы объектов даты для форматирования.
Вызовите функцию и выведите текущее время в этом формате.
Напишите функцию, которая вычисляет разницу в днях между двумя датами.
*/

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours() + 3).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}
  
const now = new Date();
console.log('Time now:', formatDate(now));

function getDaysDifference(date1, date2) {
    const diff = Math.abs(date2 - date1);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

const date1 = new Date('2024-10-20');
const date2 = new Date('2024-10-15');
console.log("Day diff:", getDaysDifference(date1, date2));
