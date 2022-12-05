/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { StarWarsApiService } from './star-wars-api.service';

describe('Service: StarWarsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarWarsApiService],
    });
  });

  it('should ...', inject(
    [StarWarsApiService],
    (service: StarWarsApiService) => {
      expect(service).toBeTruthy();
    }
  ));
});
