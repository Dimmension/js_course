/*
4. Задача: Система онлайн-заказов
Условие:
Создайте классы для системы онлайн-заказов:
Customer — представляет покупателя с именем и email.
Order — представляет заказ и содержит:
Список товаров (объекты класса Product).
Сумму заказа.
Покупателя, оформившего заказ (объект класса Customer).

Создайте класс Product, который имеет свойства:
name — название товара.
price — цена товара.

Класс Order должен иметь методы:
addProduct(product, quantity) — добавляет товар в заказ.
calculateTotal() — рассчитывает итоговую сумму заказа.
printOrder() — выводит информацию о заказе: покупатель, товары, общая стоимость.
Создайте несколько покупателей, товары, оформите несколько заказов и выведите информацию о каждом заказе.
*/

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(customer) {
        this.customer = customer;
        this.products = [];
    }

    addProduct(product, quantity) {
        this.products.push({ product, quantity });
    }

    calculateTotal() {
        return this.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    printOrder() {
        console.log(`Order for: ${this.customer.name}`);
        this.products.forEach(item => {
            console.log(`${item.product.name} ${item.quantity}шт. = ${item.product.price * item.quantity}`);
        });
        console.log(`Total price: ${this.calculateTotal()}`);
    }
}

const customer1 = new Customer('Vadim', 'vadim@mail.com');
const order1 = new Order(customer1);

const product1 = new Product('Surface Pro 9', 100000);
const product2 = new Product('Surface Keyboard', 20000);

order1.addProduct(product1, 1);
order1.addProduct(product2, 2);

order1.printOrder();
