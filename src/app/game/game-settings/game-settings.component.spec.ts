/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GameCommand } from '../../store/game.command';
import { GameSettingsComponent } from './game-settings.component';

describe('GameSettingsComponent', () => {
  let component: GameSettingsComponent;
  let fixture: ComponentFixture<GameSettingsComponent>;

  const command = { 
    runGameRound: () => {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatExpansionModule,
        MatRadioModule,
        MatSelectModule,
      ],
      providers: [
        {
          provide: GameCommand,
          useValue: command,
        },
      ],
      declarations: [GameSettingsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
