// eslint-disable-next-line semi
"use strict"

// Parašykite funkciją, kuri atspausdintų visą knygų sąrašą 
// (knygos eilės numerį ir pavadinimą. Panaudokite metodą map.

let books = [
{ title: 'Knyga #1', price: 10.25 },
{ title: 'Knyga #2', price: 5.15 },
{ title: 'Knyga #3', price: 7.32 },
{ title: 'Knyga #4', price: 54.01 },
{ title: 'Knyga #5', price: 77.17 },
];

let list = books.map((book, index) => `${index + 1}. ${book.title}`);

// eslint-disable-next-line no-console
console.log(list);

