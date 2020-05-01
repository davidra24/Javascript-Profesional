import { isCaseClause } from 'typescript';

//Observer recibe actualizaciones de la información
interface Observer {
  update: (data: any) => void;
}

//Subject que suscribe a los observadores
interface Subject {
  subscibe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement = document.querySelector('#value');
    el.addEventListener('input', () => {
      this.notify(el.value);
    });
  }

  subscibe(observer: Observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex((obs) => {
      return obs === observer;
    });
    this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class PriceDisplay implements Observer {
  private element: HTMLElement;

  constructor() {
    this.element = document.querySelector('#price');
  }
  update(data: any) {
    this.element.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

///Se suscribe al observador
value.subscibe(display);

/// Se desuscribe del observador
setTimeout(() => {
  value.unsubscribe(display);
}, 5000);
