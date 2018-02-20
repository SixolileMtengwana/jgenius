import { Injectable } from '@angular/core';

@Injectable()
export class LocationCoord {
  longitude: number;
  latitude: number;

  constructor(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
    console.log( this.toString())
  }

  isLocated(): boolean {
    return this.longitude !== undefined && this.latitude !== undefined;
  }

  toString():string{
    return 'Longitude:\t' + this.longitude + '\nLatitude:\t' + this.latitude ;
  }

}
