import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GoogleLocationApiService } from '../google-location-api.service';
import { Geocache } from '../geocache.model';
import { GeocacheService } from '../geocache.service';


@Component({
  selector: 'app-geocache-form',
  templateUrl: './geocache-form.component.html',
  styleUrls: ['./geocache-form.component.scss'],
  providers: [GoogleLocationApiService, GeocacheService]
})
export class GeocacheFormComponent implements OnInit {
  constructor(private googlelocationapi: GoogleLocationApiService, private geocacheService: GeocacheService){ }
  ngOnInit() {
  }

  submitForm(creator: string,geocache: string, address: string) {
    alert(creator);
      this.googlelocationapi.getGpsCoordinates(address).subscribe(response => {
        var lat = response.json().results[0].geometry.location.lat;
        var lng = response.json().results[0].geometry.location.lng;
        var location = lat + " " + lng;
        var formattedAddress = response.json().results[0].formatted_address;
        console.log(response.json().results[0]);
        var newGeocache: Geocache = new Geocache(creator,geocache,formattedAddress, location);

        this.geocacheService.addGeocaches(newGeocache);

      }
    )}
  }
