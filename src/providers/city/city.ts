import { Injectable } from '@angular/core';

@Injectable()
export class City   {
  engName:string;
  localName:string;
  key:number;

  constructor( engName:string , localName:string , key:number ) {
    this.engName = engName;
    this.localName = localName;
    this.key = key;
  }

  toString():string{
    return 'Key: ' + this.key +
           '\nEnglish Name: ' + this.engName +
           '\nLocal Name: ' + this.localName;
  }
 equals(city:City):boolean{
   return this.engName === city.engName && this.localName === city.localName && this.key === city.key 
 }

}
