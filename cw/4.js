/*
Задание 4. Циклы и массивы
Создайте массив строк, представляющих имена студентов: ["Анна", "Иван", "Мария", "Алексей", "Екатерина"].
Используя цикл, выведите в консоль сообщение для каждого студента: "Студент {имя}, ваш порядковый номер: {индекс}".
Напишите функцию findLongestName, которая находит самое длинное имя в массиве студентов и возвращает его.
*/

const students = ['Анна', 'Иван', 'Мария', 'Алексей', 'Екатерина'];

function findLongestName(names) {
    let longestName = '';
    names.forEach(name => {
      if (name.length > longestName.length) {
        longestName = name;
      }
    });
    return longestName;
}

students.forEach((student, index) => {
  console.log(`Студент ${student}, ваш порядковый номер: ${index + 1}`);
});

console.log(`Longest name is: ${findLongestName(students)}`);