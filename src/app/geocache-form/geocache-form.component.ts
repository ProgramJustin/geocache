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

  saveGeocacheAddress(geo: GeocacheService,address){
    this.googlelocationapi.getGpsCoordinates(address);



  }
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
