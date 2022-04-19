type Name = string;
type Amount = number;
type CurrencyItem = { name: Name; amount: Amount };
type CurrencyList = { name: Name; amount: Amount }[];

interface ICurrency {
  name: Name;
  amount: Amount;
}

const currencyList: CurrencyList = [
  { name: "USD", amount: 100 },
  { name: "EUR", amount: 200 },
  { name: "JPY", amount: 300 },
];

class Currency implements ICurrency {
  name = "";
  amount = 0;

  constructor({ name, amount }: ICurrency) {
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

class Button {
  private btnRef: HTMLButtonElement;
  private id;
  private text;
  private classes: string = "";
  constructor(id: string, text: string) {
    this.id = id;
    this.text = text;

    this.btnRef = document.createElement("button");
    this.btnRef.id = this.id;
    this.btnRef.textContent = this.text;
    document.body.appendChild(this.btnRef);
  }
  set setClasses(classes: string) {
    this.classes = classes;
  }
  get getClasses(): string {
    return this.classes;
  }
  public addClass(name: string): void {
    if (this.classes === "") {
      this.classes += `${name}`;
      this.btnRef.classList.add(name);
    } else {
      this.classes += ` ${name}`;
      this.btnRef.classList.add(name);
    }
  }
}

const btn = new Button("btn", "Click me");
btn.addClass("btn");

class Game {
  private currencies: Currency[] = [];

  constructor(currencies: CurrencyItem[]) {
    currencies.forEach((args) => {
      this.currencies.push(new Currency(args));
    });
  }
}

const newGame = new Game(currencyList);
