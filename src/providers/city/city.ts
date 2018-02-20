import { Injectable } from '@angular/core';

@Injectable()
export class City   {
  EnglishName:string;
  LocalizedName:string;
  Key:number;

  constructor( engName:string , localName:string , key:number ) {
    this.EnglishName = engName;
    this.LocalizedName = localName;
    this.Key = key;
  }

  toString():string{
    return 'Key: ' + this.Key +
           '\nEnglish Name: ' + this.EnglishName +
           '\nLocal Name: ' + this.LocalizedName;
  }
 equals(city:City):boolean{
   return this.EnglishName === city.EnglishName && this.LocalizedName === city.LocalizedName && this.Key === city.Key 
 }

}
