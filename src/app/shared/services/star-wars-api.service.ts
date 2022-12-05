import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import {
  API_PEOPLE_URL,
  API_PLANETS_URL,
  API_REQUEST_PARAMS,
  API_STARSHIPS_URL,
} from './api-contstants';
import { CoreDataI } from './api.interface';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getPeoples(): Observable<{ results: CoreDataI[] }> {
    return this.httpClient
      .get<{ results: CoreDataI[] }>(API_PEOPLE_URL, {
        params: API_REQUEST_PARAMS,
      })
      .pipe(catchError((e) => this.handleHttpError(e)));
  }

  public getPlanets(): Observable<{ results: CoreDataI[] }> {
    return this.httpClient
      .get<{ results: CoreDataI[] }>(API_PLANETS_URL, {
        params: API_REQUEST_PARAMS,
      })
      .pipe(catchError((e) => this.handleHttpError(e)));
  }

  public getStarships(): Observable<{ results: CoreDataI[] }> {
    return this.httpClient
      .get<{ results: CoreDataI[] }>(API_STARSHIPS_URL, {
        params: API_REQUEST_PARAMS,
      })
      .pipe(catchError((e) => this.handleHttpError(e)));
  }

  public getCharacterDetails<T>(url: string): Observable<T> {
    return this.httpClient
      .get<T>(url)
      .pipe(catchError((e) => this.handleHttpError(e)));
  }

  private handleHttpError(error: any) {
    this.errorService.logError(error.message);
    return of();
  }
}
