/* tslint:disable:no-unused-variable */

import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ErrorService } from './error.service';
import { StarWarsApiService } from './star-wars-api.service';

describe('Service: StarWarsApi', () => {
  let service: StarWarsApiService;
  
  const errorService = {
    logError: () => {},
  }

  const http = {
    get: () => of([]),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: ErrorService, useValue: errorService },
        { provide: HttpClient, useValue: http },
        StarWarsApiService
      ],
    });

    service = TestBed.inject(StarWarsApiService);
  });
  afterEach(() => {
    jest.clearAllMocks();
  })
  it('should be properly Created', () => {
    expect(service).toBeDefined();
  });

  it('getPeoples', () => {
    const spy = jest.spyOn(http, 'get');
    service.getPeoples();

    expect(spy).toHaveBeenCalledWith('https://www.swapi.tech/api/people', {"params": {"limit": 90, "page": 0}});
  });

  it('getPlanets', () => {
    const spy = jest.spyOn(http, 'get');
    service.getPlanets();

    expect(spy).toHaveBeenCalledWith('https://www.swapi.tech/api/planets', {"params": {"limit": 90, "page": 0}});
  });

  it('getStarships', () => {
    const spy = jest.spyOn(http, 'get');
    service.getStarships();

    expect(spy).toHaveBeenCalledWith('https://www.swapi.tech/api/starships', {"params": {"limit": 90, "page": 0}});
  });
});
