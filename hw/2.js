/*
2. Кассовый аппарат
Условие:
Создайте класс Product, который будет представлять товар с характеристиками:
name — название товара.
price — цена товара.

Создайте класс ShoppingCart, который будет представлять корзину покупок. Этот класс должен иметь следующие методы:
addProduct(product, quantity) — добавляет товар в корзину.
removeProduct(product) — удаляет товар из корзины.
getTotalPrice() — возвращает общую стоимость всех товаров в корзине.
checkout() — выводит список всех товаров и общую сумму к оплате, затем очищает корзину.

Создайте несколько объектов класса Product, добавьте их в корзину и рассчитайте итоговую сумму покупок.

Ожидаемый результат:
Можно добавлять и удалять товары из корзины.
Корзина корректно рассчитывает общую стоимость товаров.
Метод checkout() выводит итоговый список покупок и очищает корзину.
*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addProduct(product, quantity) {
        this.cart.push({ product, quantity });
    }

    removeProduct(productName) {
        this.cart = this.cart.filter(item => item.product.name !== productName);
    }

    getTotalPrice() {
        return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    checkout() {
        console.log('Item list:');
        this.cart.forEach(item => {
            console.log(`${item.product.name} ${item.quantity}шт. = ${item.product.price * item.quantity}`);
        });
        console.log(`Total price: ${this.getTotalPrice()}`);
        this.cart = [];
    }
}

const product1 = new Product('Tvorog', 57);
const product2 = new Product('Smetana', 89);

const cart = new ShoppingCart();
cart.addProduct(product1, 2);
cart.addProduct(product2, 1);

console.log(`Total price: ${cart.getTotalPrice()}`);
cart.checkout();
