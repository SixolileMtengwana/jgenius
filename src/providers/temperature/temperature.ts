import { Injectable } from '@angular/core';

@Injectable()
export class Temperature {

  value:number;
  unit:string;
  type:number;

  constructor(value:number,unit:string,type:number) {
      this.value = value;
      this.unit = unit;
      this.type = type;
  }
  

  toString():string{
    return 'Temparature:\t\t' + this.value +' ' + this.unit; 
  }
}
