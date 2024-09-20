/*

3. Библиотека
Условие:
Создайте класс Book, который будет представлять книгу с такими свойствами:
title — название книги.
author — автор книги.
pages — количество страниц.

Создайте класс Library, который управляет коллекцией книг. Этот класс должен иметь следующие методы:
addBook(book) — добавляет книгу в библиотеку.
findBooksByAuthor(author) — возвращает все книги данного автора.
listAllBooks() — выводит список всех книг в библиотеке.

Создайте класс LibraryUser, который может:
Брать книгу на время (borrowBook(book)).
Возвращать книгу в библиотеку (returnBook(book)).
Каждый пользователь может одновременно иметь не более 3 книг. Если он пытается взять больше — программа должна выдавать ошибку.

Ожидаемый результат:
Пользователь может брать книги из библиотеки и возвращать их.
Можно искать книги по автору и выводить список всех доступных книг.
Ограничение на количество взятых книг работает корректно.
*/

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }

    listAllBooks() {
        this.books.forEach(book => console.log(`${book.title} ${book.author}`));
    }
}

class LibraryUser {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= 3) {
            console.log('Unable take over 3 books');
        } else {
            this.borrowedBooks.push(book);
            console.log(`${this.name} take: ${book.title}`);
        }
    }

    returnBook(bookTitle) {
        this.borrowedBooks = this.borrowedBooks.filter(book => book.title !== bookTitle);
        console.log(`${this.name} return: ${bookTitle}`);
    }
}

const library = new Library();
const book1 = new Book('Наука самосознания', 'Свами Прабхупада', 100);
const book2 = new Book('Исскуство войны', 'Сунь Цзы', 150);
const book3 = new Book('Атлант расправил плечи', 'Айн Рэнд', 200);
const book4 = new Book('Мертвые души', 'Николай Гоголь', 300)

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const user = new LibraryUser('Vadim');

user.borrowBook(book1);
user.borrowBook(book2);
user.borrowBook(book3);
user.borrowBook(book4);

library.listAllBooks();
