import { Component } from '@angular/core';

interface Item {
  name: string;
  time: number;
}

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent {
  items: Item[] = [];

  addItem() {
    this.items.push({ name: 'Novo Item', time: 1 });
  }

  removeItem() {
    this.items.pop();
  }

  clearList() {
    this.items = [];
  }

  calculate() {
    const total = this.items.reduce((acc, item) => {
      return acc + item.time;
    }, 0);
    alert(`Total de tempo de uso: ${total} anos`);
  }
}
