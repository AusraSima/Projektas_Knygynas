// eslint-disable-next-line semi
"use strict"

// Parašykite funkciją, kuri apskaičiuotų 25 % nuolaidą knygoms, 
// kurių kaina didesnė nei 10 eurų ir atspausdintų.

function countPrice(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].price;
    }
    return sum;
}

let books = [
    { title: 'Knyga #1', price: 10.25 },
    { title: 'Knyga #2', price: 5.15 },
    { title: 'Knyga #3', price: 7.32 },
    { title: 'Knyga #4', price: 54.01 },
    { title: 'Knyga #5', price: 77.17 },
];

let sum = countPrice(books);

// eslint-disable-next-line no-console
console.log(sum.toFixed(2));