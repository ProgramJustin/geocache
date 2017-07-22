import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Geocache } from './geocache.model';
import { GeocacheService } from './geocache.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GoogleLocationApiService {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private http: Http, private geocacheService: GeocacheService) {}

  getGpsCoordinates(address) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+geoKey).subscribe(response => {

    var lat = response.json().results[0].geometry.location.lat;
    var lng = response.json().results[0].geometry.location.lng;
    var location = lat + " " + lng;
    console.log(response.json().results[0].formatted_address);
    var newGeocache: Geocache = new Geocache(lat, lng, lng, lng);

    // this.geocaches.push(newGeocache);
    console.log(newGeocache);





  });
}

}
