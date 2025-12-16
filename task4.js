// eslint-disable-next-line semi
"use strict"

// Parašykite funkciją, kuri išvestų paskutinės knygos pavadinimą ir kainą.

let books = [
{ title: 'Knyga #1', price: 10.25 },
{ title: 'Knyga #2', price: 5.15 },
{ title: 'Knyga #3', price: 7.32 },
{ title: 'Knyga #4', price: 54.01 },
{ title: 'Knyga #5', price: 77.17 },
];

let lastBook = (books) => books[books.length-1];

// eslint-disable-next-line no-console
console.log(lastBook(books));