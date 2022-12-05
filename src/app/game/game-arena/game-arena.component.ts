import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isRandomGame, mapResultFromState } from 'src/app/shared/utils';
import { DataI } from 'src/app/store/game-data/game-data.interface';
import { GameQuery } from 'src/app/store/game.query';
import { sample } from 'lodash';
import { GameCommand } from 'src/app/store/game.command';
import { CharacterDetails } from 'src/app/shared/models/game.interface';

@Component({
  selector: 'app-game-arena',
  templateUrl: './game-arena.component.html',
  styleUrls: ['./game-arena.component.scss'],
})
export class GameArenaComponent implements OnInit {
  public result$!: Observable<string>;
  public isRandomGame$!: Observable<boolean>;
  public characterGameAttribute$!: Observable<string>;
  public possibleCharacters$!: Observable<DataI<any>[]>;
  public firstPlayerName$!: Observable<string>;
  public secondPlayerName$!: Observable<string>;
  public firstPlayerCharacter$!: Observable<CharacterDetails>;
  public secoundPlayerCharacter$!: Observable<CharacterDetails>;

  public selectedPlayer1!: DataI<any>;
  public selectedPlayer2!: DataI<any>;

  constructor(private query: GameQuery, private command: GameCommand) {}

  ngOnInit() {
    this.initObservables();
  }

  public triggerRandonGame() {
    this.possibleCharacters$.pipe(take(1)).subscribe((values) => {
      const value1 = sample(values) as DataI<any>;
      const value2 = sample(values) as DataI<any>;
      this.command.runGameRound(value1, value2);
    });
  }

  public triggerManualGame() {
    this.command.runGameRound(this.selectedPlayer1, this.selectedPlayer2);
  }

  private initObservables() {
    this.result$ = this.query.getGameState().pipe(map(mapResultFromState));
    this.firstPlayerName$ = this.query.getFirstPlayerName();
    this.secondPlayerName$ = this.query.getSecondPlayerName();
    this.isRandomGame$ = this.query
      .getCharacterSelectionType()
      .pipe(map(isRandomGame));
    this.characterGameAttribute$ = this.query.getCharacterGameAttribute();
    this.possibleCharacters$ = this.query.getPossibleCharacters();
    this.firstPlayerCharacter$ = this.query.getFirstPlayerCharacter();
    this.secoundPlayerCharacter$ = this.query.getSecondPlayerCharacter();
  }
}
