/* tslint:disable:no-unused-variable */
import { Pipe, PipeTransform } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReplaySubject } from 'rxjs';
import { ForObjectPipe } from '../../shared/pipe/for-object.pipe';
import { GameCommand } from '../../store/game.command';
import { GameQuery } from '../../store/game.query';
import { GameCharacterComponent } from '../game-character/game-character.component';
import { GameArenaComponent } from './game-arena.component';

describe('GameArenaComponent', () => {
  let component: GameArenaComponent;
  let fixture: ComponentFixture<GameArenaComponent>;


  const command = { 
    runGameRound: () => {}
  }

  const query = {
    getGameState: () => new ReplaySubject<any>(1),
    getFirstPlayerName: () => new ReplaySubject<string>(1),
    getSecondPlayerName:  () => new ReplaySubject<string>(1),
    getCharacterSelectionType:  () => new ReplaySubject<any>(1),
    getCharacterGameAttribute:  () => new ReplaySubject<any>(1),
    getPossibleCharacters:  () => new ReplaySubject<any[]>(1),
    getFirstPlayerCharacter:  () => new ReplaySubject<any>(1),
    getSecondPlayerCharacter:  () => new ReplaySubject<any>(1),
  }

  // @Pipe({name: 'forObject'})
  // class MockPipe implements PipeTransform {
  //     transform(value: number): number {
  //         //Do stuff here, if you want
  //         return value;
  //     }
  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSelectModule,
        MatCardModule,
        FormsModule,
        NoopAnimationsModule
      ],
      providers: [
        {
          provide: GameQuery,
          useValue: query,
        },
        {
          provide: GameCommand,
          useValue: command,
        },
      ],
      declarations: [GameArenaComponent, GameCharacterComponent, ForObjectPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
