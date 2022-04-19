type Name = string;
type Amount = number;
type CurrencyList = { name: Name; amount: Amount }[];

interface Currency {
  name: Name;
  amount: Amount;
}

const currencyList: CurrencyList = [
  { name: "USD", amount: 100 },
  { name: "EUR", amount: 200 },
  { name: "JPY", amount: 300 },
];

class Currency implements Currency {
  name = "";
  amount = 0;

  constructor(name: Name, amount: Amount) {
    this.name = name;
    this.amount = amount;
  }
  set setCurrency(amount: Amount) {
    this.amount = amount;
  }
  get getCurrency(): Amount {
    return this.amount;
  }
}

class Game {
  private currencies: Currency[] = [];

  constructor(object: { name: Name; amount: Amount }[]) {
    object.forEach((element) => {
      this.currencies.push(new Currency(element.name, element.amount));
    });
  }
}

const newGame = new Game(currencyList);
