import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private value = new BehaviorSubject<string>('HELLO');
  readValue$ = this.value.asObservable();
  constructor() { }

  getInitialValue() {
    return this.value.value;
  }

  changeValue(data: string) {
    this.value.next(data);
  }
}
