import { Injectable } from '@angular/core';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GeocacheService {

  geocaches: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.geocaches = database.list('geocaches');
  }
  getGeocaches(){
    return this.geocaches;
  }

  addGeocaches(newGeocache: Geocache) {
    this.geocaches.push(newGeocache);
  }
  getGeocacheById(geocacheId: string){
    return this.database.object('geocaches/' + geocacheId);
  }
  updateGeocache(localUpdatedGeocache){
    var geocacheEntryInFirebase = this.getGeocacheById(localUpdatedGeocache.$key);
    geocacheEntryInFirebase.update({geocache: localUpdatedGeocache.geocache, address: localUpdatedGeocache.address, gps: localUpdatedGeocache.gps, creator: localUpdatedGeocache.creator});
  }
deleteGeocache(localUpdatedGeocacheToDelete) {
  var geocacheEntryInFirebase = this.getGeocacheById(localUpdatedGeocacheToDelete.$key);
  geocacheEntryInFirebase.remove();
}

}
