/*
Дополнительное задание
Создайте функцию reverseString, которая принимает строку и возвращает ее в перевернутом виде.
Напишите функцию, которая принимает строку и возвращает ее, удалив все гласные буквы.
*/

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  console.log("Перевернутая строка:", reverseString("Hello"));
  
  function removeVowels(str) {
    return str.replace(/[аеёиоуыэюяaeiou]/gi, "");
  }
  
  console.log(
    "Строка без гласных:",
    removeVowels("Это предложение без гласных")
  );