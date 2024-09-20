/*
Задание 3. Работа с объектами
Создайте объект user, который содержит информацию о пользователе: имя, возраст, email.
Напишите функцию displayUserInfo, которая принимает объект пользователя и выводит его данные в виде строки: "Имя: {name}, Возраст: {age}, Email: {email}".
Добавьте в объект метод greet, который выводит приветственное сообщение, например: "Привет, {name}!".
Вызовите метод для созданного объекта.
*/

const user = {
    name: 'SlavikYD',
    age: 18,
    email: 'slavikyd@example.com',

    greet: function () {
      console.log(`Привет, ${this.name}!`);
    },
};

function displayUserInfo(user) {
    return `Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`;
}

console.log(displayUserInfo(user));
user.greet();