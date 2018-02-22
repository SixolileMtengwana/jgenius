import { Injectable } from '@angular/core';
import { Temperature } from '../temperature/temperature';

@Injectable()
export class Weather {
  date: Date;
  minimum: Temperature;
  maximum: Temperature;

  constructor() {

  }

  setDate(date: Date): void {
    this.date = date;
  }

  setMinimumTemperature(minimum: Temperature): void {
    this.minimum = minimum;
  }

  setMaximumTemperature(maximum: Temperature): void {
    this.maximum = maximum;
  }

}
