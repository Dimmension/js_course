/*
Задание 1. Работа с функциями
Напишите функцию isPrime, которая принимает число в качестве аргумента и возвращает true, если число простое, и false в противном случае.
Вызовите функцию для чисел от 2 до 20 и выведите результат в консоль для каждого числа.
*/

function isPrime(num) {
    if (num <= 1){
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  }
  
for (let i = 2; i <= 20; i++) {
    console.log(`${i} - ${isPrime(i)}`);
}