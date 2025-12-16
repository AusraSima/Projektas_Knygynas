// eslint-disable-next-line semi
"use strict"

// Parašykite funkciją, kuri į duoto knygų masyvo galą pridėtų knygą.
// Pvz. 'Knyga #6', kaina 2,75. Panaudokite metodą push().

let books = [
{ title: 'Knyga #1', price: 10.25 },
{ title: 'Knyga #2', price: 5.15 },
{ title: 'Knyga #3', price: 7.32 },
{ title: 'Knyga #4', price: 54.01 },
{ title: 'Knyga #5', price: 77.17 },
];


let itemToAdd = {title: 'Knyga #6', price: 2.75};

books => books.push(itemToAdd) ;

// eslint-disable-next-line no-console
console.log(books);