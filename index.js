"use strict";
const currencyList = [
    { name: "USD", amount: 100 },
    { name: "EUR", amount: 200 },
    { name: "JPY", amount: 300 },
];
class Currency {
    constructor(name, amount) {
        this.name = "";
        this.amount = 0;
        this.name = name;
        this.amount = amount;
    }
    set setCurrency(amount) {
        this.amount = amount;
    }
    get getCurrency() {
        return this.amount;
    }
}
class Game {
    constructor(object) {
        this.currencies = [];
        object.forEach((element) => {
            this.currencies.push(new Currency(element.name, element.amount));
        });
    }
}
const newGame = new Game(currencyList);
