import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Geocache } from './geocache.model';
import { GeocacheService } from './geocache.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GoogleLocationApiService {

  constructor(private http: Http, private geocacheService: GeocacheService) {}

  getGpsCoordinates(address: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+geoKey).subscribe(response => {
    var check = response.json().results[0].geometry.bounds.northeast.lat;
    console.log(check);
  });
}

  getPhysicalAddress(lat:string, lng:string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=" +geoKey);
  }
}
