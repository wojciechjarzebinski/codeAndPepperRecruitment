/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { ForObjectPipe } from '../../shared/pipe/for-object.pipe';

import { GameCharacterComponent } from './game-character.component';

describe('GameCharacterComponent', () => {
  let component: GameCharacterComponent;
  let fixture: ComponentFixture<GameCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
      ],
      declarations: [GameCharacterComponent, ForObjectPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
