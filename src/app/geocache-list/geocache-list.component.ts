import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../geocache.model'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-geocache-list',
  templateUrl: './geocache-list.component.html',
  styleUrls: ['./geocache-list.component.scss'],
  providers: [ GeocacheService ]
})
export class GeocacheListComponent {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private router: Router, private geocacheService: GeocacheService) {}

  ngOnInit(){
    this.geocaches = this.geocacheService.getGeocaches();
  }

  goToDetailPage(clickedGeocache){
    this.router.navigate(['geocaches', clickedGeocache.$key]);
  }

}
