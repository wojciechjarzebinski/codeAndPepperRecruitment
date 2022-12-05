import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameQuery } from '../../store/game.query';
import { isPlayersDefinded } from '../utils/utils';

@Injectable({ providedIn: 'root' })
export class GameQuard implements CanActivate {
  constructor(private query: GameQuery) {}

  canActivate(): Observable<boolean> {
    return this.query.getGameState().pipe(map(isPlayersDefinded));
  }
}
