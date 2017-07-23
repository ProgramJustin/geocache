import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Geocache } from '../geocache.model';
import { GeocacheService } from '../geocache.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-geocache-detail',
  templateUrl: './geocache-detail.component.html',
  styleUrls: ['./geocache-detail.component.scss'],
  providers: [GeocacheService]
})
export class GeocacheDetailComponent implements OnInit {
  geocacheId: string;
    geocacheToDisplay;

    constructor(private route: ActivatedRoute,
      private location: Location,
      private geocacheService: GeocacheService) {}

  ngOnInit() {
    // The fat arrow => notation does not set a local copy of this. Therefore, this still refers to AlbumDetailComponent not ngOnInit().
    this.route.params.forEach((urlParameters) => {
       this.geocacheId = urlParameters['id'];
     });
     this.geocacheToDisplay = this.geocacheService.getGeocacheById(this.geocacheId);
    }

}
