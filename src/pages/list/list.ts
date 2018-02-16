import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccuWeatherApi } from '../../providers/services-accuweather-api/services-accuweather-api';
import { City } from '../../providers/city/city';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class WeatherPage {
  items: Array<{ title: string, note: string, icon: string }>;
  // Weather Data For Search
  latitude: number;
  longitude: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, protected accuweather: AccuWeatherApi, ) {
    setTimeout(()=>{
    if(this.city.equals(new City('','',0)))
        this.getWeather();
    },1000);
  }
  get time(): Date {
    return new Date();
  }
  getWeather():void{
    this.accuweather.city_connect( AccuWeatherApi.latitude , AccuWeatherApi.longitude );
  }
  get city():City{
    return this.accuweather.getCity();
  }
}
