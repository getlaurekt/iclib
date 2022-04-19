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

interface IButton {
  id: string;
  text: string;
  btnRef: HTMLButtonElement;
  classes?: string[];
  onClick: (event: Event) => void;
}

class Button implements IButton {
  public id;
  public text;
  public btnRef;
  public classes;
  public onClick;
  constructor({ id, text, btnRef, classes, onClick }: IButton) {
    this.id = id;
    this.text = text;
    this.btnRef = btnRef;
    this.classes = classes;
    this.onClick = onClick;
  }
}

class Game {
  private currencies: Currency[] = [];

  constructor(currencies: CurrencyItem[]) {
    currencies.forEach((args) => {
      this.currencies.push(new Currency(args));
    });
  }
}

const newGame = new Game(currencyList);
