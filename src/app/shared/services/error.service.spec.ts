/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorService } from './error.service';

describe('Service: Error', () => {
  let service: ErrorService;

  const snackBar = {
    open: () => jest.fn(),
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatSnackBar,
          useValue: snackBar,
        },
        ErrorService
      ],
    });

    service = TestBed.inject(ErrorService);
  });

  it('should be properly Created', () => {
    expect(service).toBeDefined();
  });

  it('logError', () => {
    const spy = jest.spyOn(snackBar, 'open');

    service.logError('Error')
    expect(spy).toHaveBeenCalled();
  })
});
