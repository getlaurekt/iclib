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

class Icon {
  readonly iconRef!: HTMLSpanElement;
  private name: string;
  private size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;

    this.iconRef = document.createElement("span");
    this.iconRef.classList.add("icon");
    this.iconRef.style.fontSize = `${this.size}px`;
    this.iconRef.textContent = this.name;
  }
  set setName(name: string) {
    this.name = name;
    this.iconRef.textContent = this.name;
  }
  get getName(): string {
    return this.name;
  }
}

type BtnIcon = "left" | "right";

class Button {
  private btnRef: HTMLButtonElement;
  private id;
  private text;
  private classes: string = "";
  private onClick: Function;
  private isIcon: boolean = false;
  private iconClass!: Icon;
  constructor(id: string, text: string, onClick?: Function) {
    this.id = id;
    this.text = text;
    this.onClick = onClick as Function;

    this.btnRef = document.createElement("button");
    this.btnRef.id = this.id;
    this.btnRef.textContent = this.text;
    if (onClick !== undefined) {
      this.btnRef.onclick = () => {
        this.onClick();
      };
    }
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
  public icon(name: string, size: number, side: BtnIcon): void {
    if (!this.isIcon) {
      this.isIcon = true;
      this.iconClass = new Icon(name, size);
      if (side === "left") {
        this.btnRef.insertBefore(
          this.iconClass.iconRef,
          this.btnRef.firstChild
        );
      } else if (side === "right") {
        this.btnRef.appendChild(this.iconClass.iconRef);
      }
    }
    this.iconClass.setName = name;
  }
}

const btn = new Button("btn", "Click me");
btn.addClass("btn");
btn.icon("rocket", 20, "right");

class Game {
  private currencies: Currency[] = [];

  constructor(currencies: CurrencyItem[]) {
    currencies.forEach((args) => {
      this.currencies.push(new Currency(args));
    });
  }
}

const newGame = new Game(currencyList);
