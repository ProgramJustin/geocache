import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Geocache } from './geocache.model';
import { GeocacheService } from './geocache.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GoogleLocationApiService {

  constructor(private http: Http, private geocacheService: GeocacheService) { }

}
