"use strict";
const currencyList = [
    { name: "USD", amount: 100 },
    { name: "EUR", amount: 200 },
    { name: "JPY", amount: 300 },
];
class Currency {
    constructor({ name, amount }) {
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
class Button {
    constructor({ id, text, btnRef, classes, onClick }) {
        this.id = id;
        this.text = text;
        this.btnRef = btnRef;
        this.classes = classes;
        this.onClick = onClick;
    }
}
class Game {
    constructor(currencies) {
        this.currencies = [];
        currencies.forEach((args) => {
            this.currencies.push(new Currency(args));
        });
    }
}
const newGame = new Game(currencyList);
