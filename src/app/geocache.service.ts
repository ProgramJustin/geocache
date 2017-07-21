import { Injectable } from '@angular/core';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GeocacheService {

  geocaches: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.geocaches = database.list('geocaches');
  }

}
