import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Geocache } from '../geocache.model';
import { GeocacheService } from '../geocache.service';
import { GoogleLocationApiService } from '../google-location-api.service'
import { FirebaseObjectObservable } from 'angularfire2/database';
import { googMapKey } from '../api-keys';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-geocache-detail',
  templateUrl: './geocache-detail.component.html',
  styleUrls: ['./geocache-detail.component.scss'],
  providers: [GeocacheService, GoogleLocationApiService]
})
export class GeocacheDetailComponent implements OnInit {
  geocacheId: string;
    geocacheToDisplay;
    geocacheStorage;
    coord;

    constructor(private route: ActivatedRoute,
      private location: Location,
      private geocacheService: GeocacheService,
      private googleLocationApi: GoogleLocationApiService,
      private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // The fat arrow => notation does not set a local copy of this. Therefore, this still refers to AlbumDetailComponent not ngOnInit().
    this.route.params.forEach((urlParameters) => {
       this.geocacheId = urlParameters['id'];
     });
     this.geocacheToDisplay = this.geocacheService.getGeocacheById(this.geocacheId);
      this.geocacheStorage = this.googleLocationApi.getAddress(this.geocacheId).subscribe(response => {
        this.geocacheStorage = response.json().address;

         this.coord = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?q="+this.geocacheStorage+"&key="+googMapKey);
        console.log(this.coord);
      }
    )}


    //
    //
    // }


  //   .subscribe(response => {
  //     var lat = response.json().results[0].geometry.location.lat;
  //     var lng = response.json().results[0].geometry.location.lng;
  //     var location = lat + " " + lng;
  //     var formattedAddress = response.json().results[0].formatted_address;
  //     console.log(response.json().results[0]);
  //     var newGeocache: Geocache = new Geocache(creator,geocache,formattedAddress, location);
  //
  //     this.geocacheService.addGeocaches(newGeocache);
  //
  //   }
  // )}


}
