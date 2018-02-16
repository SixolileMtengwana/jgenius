import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccuWeatherApi } from '../providers/services-accuweather-api/services-accuweather-api';
import { Weather } from '../providers/weather/weather';
import { HttpClientModule } from '@angular/common/http';
import { City } from '../providers/city/city';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WeatherPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   AccuWeatherApi,
    Weather,
    City
  ]
})
export class AppModule {}
