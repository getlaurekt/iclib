//NOTE: Types for currencies
type Name = string;
type Amount = number;
type CurrencyItem = { name: Name; amount: Amount };
type CurrencyList = { name: Name; amount: Amount }[];

//NOTE: Interface for Currency Class
interface ICurrency {
  name: Name;
  amount: Amount;
}

//NOTE: List of current currencies
const currencyList: CurrencyList = [
  { name: "USD", amount: 100 },
  { name: "EUR", amount: 200 },
  { name: "JPY", amount: 300 },
];

//NOTE: List of current items
type Item = { name: Name; amount: Amount };
type ItemList = { name: Name; amount: Amount }[];

const itemList: ItemList = [{ name: "Wood", amount: 0 }];

//NOTE: Timers
type Tick = 1000;
type Tickrate = number;
type TimerName = string;

//NOTE: Currency class for creating currencies
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

//NOTE: Icon component
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

//NOTE: Button Component
type BtnIcon = "left" | "right";

class Button {
  readonly btnRef: HTMLButtonElement;
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
    /* document.body.appendChild(this.btnRef); */
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

//NOTE: Declaring new instance of Button
const btn = new Button("btn", "Click me");
btn.addClass("btn");
btn.icon("rocket", 20, "right");

/* class Upgrade {
  public name!: string;
  public currency!: CurrencyItem;
  public price!: number;
  public item!: Item;
  public btn!: Button;
  constructor(
    name: string,
    currency: CurrencyItem,
    price: number,
    item: { name: Name; amount: Amount }
  ) {
    this.name = name;
    this.currency = currency;
    this.price = price;
    this.item = item;

    this.btn = new Button(name, name, () => {
      if (this.currency.amount >= this.price) {
        this.currency.amount -= this.price;
        this.item.amount += 1;
      }
    });
  }
}

type ShopList = {
  name: Name;
  currency: typeof currencyList;
  price: Amount;
  item: typeof itemList;
};

class Shop {
  private shopList!: ShopList[];
  private currency!: typeof currencyList;
  private ul!: HTMLUListElement;
  constructor({ name, currency, price, item }: ShopList) {
    this.shopList.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `Buy ${item.name}`;
      li.appendChild(
        new Upgrade(item.name, item.currency, item.price, item.item).btn.btnRef
      );
    });
  }
} */

class Timer {
  private timer!: ReturnType<typeof setInterval>;
  private tick: Tick = 1000;
  private tickrate!: Tickrate;
  private onTick!: Function;
  constructor(tickrate: Tickrate, onTick: Function) {
    this.tickrate = tickrate;
    this.onTick = onTick;

    this.startTimer();
  }
  private startTimer = () => {
    let timer = setInterval(() => {
      this.onTick();
    }, this.tick / this.tickrate);
    this.timer = timer;
  };
  public clearTimer = () => {
    clearInterval(this.timer);
  };
}

const t = new Timer(10, () => {
  console.log("shatan");
});

//NOTE: Game class for controlling all components etc
class Game {
  private currencies: Currency[] = [];

  constructor(currencies: CurrencyItem[]) {
    currencies.forEach((args) => {
      this.currencies.push(new Currency(args));
    });
  }
}

//NOTE: New instance of Game class
const newGame = new Game(currencyList);
