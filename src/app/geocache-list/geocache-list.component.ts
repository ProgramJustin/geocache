import { Component, Input } from '@angular/core';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../geocache.model'

@Component({
  selector: 'app-geocache-list',
  templateUrl: './geocache-list.component.html',
  styleUrls: ['./geocache-list.component.scss'],
  providers: [ GeocacheService ]
})
export class GeocacheListComponent {
  @Input() childGeocaches;

  constructor(private geocacheService: GeocacheService) { }

  saveGeocache(geocache: string, address: string, gps: string, creator: string) {
    // let newGeocache: Geocache = new Geocache(geocache, address, gps, creator);
    // this.geocacheService.addGeocaches(newGeocache);
    // alert(newGeocache);
  }




}
