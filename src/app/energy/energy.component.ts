import { Component } from '@angular/core';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent {

  items: any[] = [];

  addItem() {
    this.items.push({
      nome: '',
      quantidade: null,
      tempo: null
    });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  clearList() {
    this.items = [];
  }

  calculate() {
    let totalTempo = 0;
    for (let item of this.items) {
      totalTempo += item.quantidade * item.tempo;
    }
    this.totalTempo = totalTempo;
  }

  get totalTempo(): number {
    return this._totalTempo;
  }

  set totalTempo(value: number) {
    this._totalTempo = value;
  }

  private _totalTempo: number = 0;

}
