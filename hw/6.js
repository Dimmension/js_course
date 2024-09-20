/*
6. Математические выражения
Условие:
Создайте класс Expression, представляющий математическое выражение с двумя числами и операцией (например, сложение или умножение). Этот класс должен содержать методы:
evaluate() — возвращает результат выражения.
toString() — возвращает строковое представление выражения, например, "3 + 5 = 8".

Создайте подклассы для различных математических операций:
Addition для сложения.
Subtraction для вычитания.
Multiplication для умножения.
Division для деления (с проверкой деления на ноль).
Создайте несколько объектов выражений и выведите результаты их вычислений.

Ожидаемый результат:
Каждый объект правильно вычисляет математическое выражение.
Метод toString() корректно выводит информацию в формате "a op b = result".
*/

class Expression {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    evaluate() {
        throw new Error('Override this!');
    }

    toString() {
        throw new Error('Override this!');
    }
}

class Addition extends Expression {
    evaluate() {
        return this.a + this.b;
    }

    toString() {
        return `${this.a} + ${this.b} = ${this.evaluate()}`;
    }
}

class Subtraction extends Expression {
    evaluate() {
        return this.a - this.b;
    }

    toString() {
        return `${this.a} - ${this.b} = ${this.evaluate()}`;
    }
}

class Multiplication extends Expression {
    evaluate() {
        return this.a * this.b;
    }

    toString() {
        return `${this.a} * ${this.b} = ${this.evaluate()}`;
    }
}

class Division extends Expression {
    evaluate() {
        if (this.b === 0) {
            throw new Error('Division by zero!');
        }
        return this.a / this.b;
    }

    toString() {
        return `${this.a} / ${this.b} = ${this.evaluate()}`;
    }
}

const addition = new Addition(3, 5);
console.log(addition.toString());

const subtraction = new Subtraction(4, 2);
console.log(subtraction.toString());

const multiplication = new Multiplication(2, 2);
console.log(multiplication.toString());

const division = new Division(16, 4);
console.log(division.toString());
