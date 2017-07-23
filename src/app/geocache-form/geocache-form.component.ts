import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GoogleLocationApiService } from '../google-location-api.service';
import { Geocache } from '../geocache.model';
import { GeocacheService } from '../geocache.service';


@Component({
  selector: 'app-geocache-form',
  templateUrl: './geocache-form.component.html',
  styleUrls: ['./geocache-form.component.css'],
  providers: [GoogleLocationApiService, GeocacheService]
})
export class GeocacheFormComponent implements OnInit {

  geocaches: any[]=null;
  noGeocaches: boolean=false;

    constructor(private googlelocationapi: GoogleLocationApiService, private geocacheService: GeocacheService){ }
  ngOnInit() {
  }

  submitForm(geoName: string, address: string, coordinates: string, creator: string) {
    // var newAlbum: Album = new Album(title, artist, description);
    // this.albumService.addAlbum(newAlbum);

      this.googlelocationapi.getGpsCoordinates(address).subscribe(response => {

      var lat = response.json().results[0].geometry.location.lat;
      var lng = response.json().results[0].geometry.location.lng;
      var location = lat + " " + lng;
      console.log(response.json().results[0].formatted_address);
      var newGeocache: Geocache = new Geocache(geoName, address, location, creator);

      this.albumService.addAlbum(newAlbum);

      // this.geocaches.push(newGeocache);
      console.log(newAlbum);

    }
  )}
  getGeocachesAdress(address: string) {

    // this.noGeocaches = false;
    // this.googlelocationapi.getGpsCoordinates(address).subscribe(response => {
    //   if(response.json().geocaches.length > 0)
    // {
    //   this.geocaches = response.json();
    // }
    // else {
    //   this.noGeocaches = true;
    // }
    // });
  }


  }
