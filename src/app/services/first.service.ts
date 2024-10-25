import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  getData(){
    return {
      minValue: 10,
      maxValue:20,
      currency:"USD"
    }
  }

  constructor() { }
}
