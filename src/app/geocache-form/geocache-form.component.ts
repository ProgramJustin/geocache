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

  constructor(private googlelocationapi: GoogleLocationApiService) { }
  ngOnInit() {
  }

  getGeocacheAddress(address){
    var results = this.googlelocationapi.getGpsCoordinates(address);
    console.log(address)
    // alert("The images from " + date + " taken by the " + camera + " camera have been saved to the database.")
  }


  }
