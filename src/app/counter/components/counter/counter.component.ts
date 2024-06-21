import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>
  counter: {{counter}}
  </p>


  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetBy()">Reset</button>
  <!-- <button (click)="decreaseBy()">-1</button> -->
  <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {

  public counter: number = 15;

  increaseBy(value: number) {
      this.counter += value;
  }
  resetBy(){
    this.counter = 15;
  }

}
