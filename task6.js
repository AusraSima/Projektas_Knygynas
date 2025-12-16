// eslint-disable-next-line semi
"use strict"

// Parašykite funkciją, kuri apskaičiuotų 25 % nuolaidą knygoms, 
// kurių kaina didesnė nei 10 eurų ir atspausdintų.

let books = [
    { title: 'Knyga #1', price: 10.25 },
    { title: 'Knyga #2', price: 5.15 },
    { title: 'Knyga #3', price: 7.32 },
    { title: 'Knyga #4', price: 54.01 },
    { title: 'Knyga #5', price: 77.17 },
];

let discounted = books.filter(book => book.price > 10)
.map(book => (book.price * 0.75).toFixed(2));

// eslint-disable-next-line no-console
console.log(discounted);

// document.getElementById("content").innerHTML = `
// !!! Nukainuota !!!<br>
// Nauja kaina: ${discounted} `;