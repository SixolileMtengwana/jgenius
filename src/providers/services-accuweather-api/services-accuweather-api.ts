import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { City } from '../city/city';
import { LocationCoord } from '../location/location';
import { Weather } from '../weather/weather';
import { Temperature } from '../temperature/temperature';

@Injectable()
export class AccuWeatherApi {
  static location: LocationCoord
  static weathers:Weather[] = [];
  city: City = new City('', '', 0);

  constructor(protected httpClient: HttpClient) {
    this.requestLocation();
  }

  requestLocation() {
    if (AccuWeatherApi.location === undefined || !AccuWeatherApi.location.isLocated()) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          AccuWeatherApi.location = new LocationCoord(position.coords.longitude, position.coords.latitude);
          // Creating Instance - for cleaner code
        });
      }
    }
    //End of If Statement
  }
  //Subscribe to city api
  city_connect(lt: number, ln: number): void {
    this.cityHttpCall(lt, ln).subscribe(
      city => {
        setTimeout(() => {
          if (this.city === undefined || this.city.equals(new City('', '', 0))) {
            this.city = new City(city.ParentCity.EnglishName, city.ParentCity.LocalizedName, city.ParentCity.Key);
            console.log(this.city.toString())
          }
        }, 100);
      }
    );
  }
 weather_connect(key: number) {
    // End date ===> Friday, 16 Februar, 2018
    this.weatherHttpCall(key).subscribe(weather =>{
      setTimeout(() => {
        if( weather !== undefined  ){
          for( let i = 0 ; i < weather.DailyForecasts.length ; i++ ){
            let weatherObj = new Weather();
            weatherObj.setDate(new Date(weather.DailyForecasts[i].Date));
            weatherObj.setMaximumTemperature(new Temperature(weather.DailyForecasts[i].Temperature.Minimum.Value, weather.DailyForecasts[i].Temperature.Minimum.Unit,weather.DailyForecasts[i].Temperature.Minimum.UnitType ));
            weatherObj.setMinimumTemperature(new Temperature(weather.DailyForecasts[i].Temperature.Maximum.Value, weather.DailyForecasts[i].Temperature.Maximum.Unit,weather.DailyForecasts[i].Temperature.Maximum.UnitType ));
            AccuWeatherApi.weathers.push(weatherObj);
          }
          console.log( AccuWeatherApi.weathers);
      this.city.setWeather(AccuWeatherApi.weathers[0]);
        } else{
        }
      }, 1000);
    });
  }
  getCity(): City {
    return this.city;
  }
  // AccuWeatherApi.latitude,AccuWeatherApi.longitude
  cityHttpCall(lt: number, ln: number): Observable<any> {
    return this.httpClient.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search.json?q=' + lt + ',' + ln + '&apikey=yTtzNGfq3QStJbuMV8x41mxYsXKKhds3') //'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search.json?q='+lt+','+lng+'&apikey=Aj1maGzA6bh5Z49rRaPLVALtcO461Tbv'
  }//Key Aj1maGzA6bh5Z49rRaPLVALtcO461Tbv    //  lpCiYpbt9LBuGwP9cKEXaysZNQsSqc2X // yTtzNGfq3QStJbuMV8x41mxYsXKKhds3
 
  weatherHttpCall(key: number): Observable<any> {
    console.log(key);
    return this.httpClient.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + key + '?apikey=Aj1maGzA6bh5Z49rRaPLVALtcO461Tbv&language=en-us&details=true&metric=true');
  }
}
