import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private snackBar: MatSnackBar) {}

  public logError(errorMsg: string) {
    this.snackBar.open(errorMsg, 'x');
  }
}
