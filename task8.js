// eslint-disable-next-line semi
"use strict"

// Analogiškai išrikiuokite knygas pagal pavadinimus, nuo A iki Z. 
// Prieš tai pakoreguokite knygų pavadinimus masyve.
// nuo A iki Z
// nuo Z iki A

let books = [
    { title: 'AKnyga #1', price: 10.25 },
    { title: 'ZKnyga #2', price: 5.15 },
    { title: 'BKnyga #3', price: 7.32 },
    { title: 'GKnyga #4', price: 54.01 },
    { title: 'OKnyga #5', price: 77.17 },
];

books.sort((a, b) => b.title.localeCompare(a.title));

// eslint-disable-next-line no-console
console.log(books);