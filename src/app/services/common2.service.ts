import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Common2Service {
  value = signal<string>('HELLO');

  getInitialValue() {
    return this.value();
  }

  changeValue(data: string) {
    this.value.set(data);
  }
}
