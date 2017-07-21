import { Component, OnInit } from '@angular/core';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-geocache-list',
  templateUrl: './user-geocache-list.component.html',
  styleUrls: ['./user-geocache-list.component.css'],
  providers: [ GeocacheService ]
})
export class UserGeocacheListComponent implements OnInit {

  geocaches: FirebaseListObservable<any[]> = null;

  constructor(private geocacheService: GeocacheService) { }

  ngOnInit() {
    this.geocaches = this.geocacheService.getGeocaches();
  }
  deleteGeocache(selectedGeocache: Geocache) {

    this.geocacheService.deleteGeocache(selectedGeocache);
    alert("worked");

  }

}
