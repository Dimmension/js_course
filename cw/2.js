/*
Задание 2. Работа с массивами
Создайте массив из 10 случайных чисел.
Напишите функцию findMinMax, которая принимает массив и возвращает объект с двумя свойствами: min — минимальное значение в массиве, max — максимальное.
Вызовите функцию для созданного массива и выведите результат в консоль.
*/

const randomArray = [1, 6, 4, 9, 12, 2, 55];

function findMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
    };
}
  
console.log(`Array: ${randomArray}`);
console.log('min/max:', findMinMax(randomArray));
