import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { City } from '../city/city';

@Injectable()
export class AccuWeatherApi {
   static longitude: number;
   static latitude: number;
   cityObj:City = new City('','',0);
  constructor(protected httpClient: HttpClient) {
    this.requestLocation();
  }

  requestLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        AccuWeatherApi.latitude = position.coords.latitude
        AccuWeatherApi.longitude = position.coords.longitude;
        // Creating Instance 
      });
    } //End of If Statement
  }
  //Subscribe to city api
  city_connect(lt: number, ln: number):void {
      this.city(lt, ln).subscribe(
        city => {   
        setTimeout(() => { 
          this.cityObj = new City( city.ParentCity.EnglishName , city.ParentCity.LocalizedName , city.ParentCity.Key );
        },1000);  
        }
      );
  }
  getCity():City{
    return this.cityObj;
  }
  // AccuWeatherApi.latitude,AccuWeatherApi.longitude
  city(lt: number, ln: number): Observable<any> {
    return this.httpClient.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search.json?q=' + lt + ',' + ln + '&apikey=yTtzNGfq3QStJbuMV8x41mxYsXKKhds3') //'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search.json?q='+lt+','+lng+'&apikey=Aj1maGzA6bh5Z49rRaPLVALtcO461Tbv'
  }//Key Aj1maGzA6bh5Z49rRaPLVALtcO461Tbv    //  lpCiYpbt9LBuGwP9cKEXaysZNQsSqc2X // yTtzNGfq3QStJbuMV8x41mxYsXKKhds3
 weather_connect(key:number){
 // End date ===> Friday, 16 Februar, 2018
 }
  weather(key:number):Observable<any>{
    return this.httpClient.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/'+key+'?apikey=Aj1maGzA6bh5Z49rRaPLVALtcO461Tbv&language=en-us&details=true&metric=true');
  }
}
