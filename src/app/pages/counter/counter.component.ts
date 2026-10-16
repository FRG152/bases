import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
  styleUrl: './counter.styles.css',
})
export class CounterComponent {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
  }
  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => (current -= value));
  }
  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
