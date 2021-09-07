import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {
  
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: number) {
    this.messageSource.next(message)
  }
}
