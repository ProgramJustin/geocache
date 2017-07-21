import { TestBed, inject } from '@angular/core/testing';

import { GoogleLocationApiService } from './google-location-api.service';

describe('GoogleLocationApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleLocationApiService]
    });
  });

  it('should be created', inject([GoogleLocationApiService], (service: GoogleLocationApiService) => {
    expect(service).toBeTruthy();
  }));
});
