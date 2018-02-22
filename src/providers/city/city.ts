import { Injectable } from '@angular/core';
import { Weather } from '../weather/weather';
import { Temperature } from '../temperature/temperature';

@Injectable()
export class City   {
  EnglishName:string;
  LocalizedName:string;
  Key:number;
  Weather:Weather;
  tmp:Temperature= new Temperature(0,'',0);

  constructor( engName:string , localName:string , key:number ) {
    this.EnglishName = engName;
    this.LocalizedName = localName;
    this.Key = key;
    this.Weather = new Weather();
    this.Weather.setMaximumTemperature(this.tmp);
    this.Weather.setMinimumTemperature(this.tmp);
  }

  setWeather(weather:Weather):void{
    this.Weather = weather;
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
