import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameQuery } from 'src/app/store/game.query';
import { isPlayersDefinded } from '../utils';

@Injectable({ providedIn: 'root' })
export class GameQuard implements CanActivate {
  constructor(private query: GameQuery) {}

  canActivate(): Observable<boolean> {
    return this.query.getGameState().pipe(map(isPlayersDefinded));
  }
}
