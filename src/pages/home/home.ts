import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccuWeatherApi } from '../../providers/services-accuweather-api/services-accuweather-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,protected accuweather: AccuWeatherApi) {
    accuweather.requestLocation();
  }
}
