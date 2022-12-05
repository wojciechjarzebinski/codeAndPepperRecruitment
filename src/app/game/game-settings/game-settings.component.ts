import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import {
  CharacterSelectionType,
  CharacterType,
  GameCharacterAttributes,
} from 'src/app/shared/models/game.enums';
import { GameCommand } from 'src/app/store/game.command';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent {
  public characterType: string = CharacterType.peoples;
  public attributesArr: string[] =
    GameCharacterAttributes[CharacterType.peoples];
  public characterSelectionType: string = CharacterSelectionType.random;
  public gameCharacterAttrValue: string = this.attributesArr[0];

  constructor(private command: GameCommand) {}

  public changeCharacterType(event: MatRadioChange) {
    this.attributesArr = GameCharacterAttributes[event.value as CharacterType];
    this.gameCharacterAttrValue = this.attributesArr[0];
    this.command.setCharacterType(event.value);
    this.changeGameCharacterAttributes();
  }

  public changeSelectionCharacterType(event: MatRadioChange) {
    this.command.setCharacterSelectionType(event.value);
  }

  public changeGameCharacterAttributes() {
    this.command.setCharacterGameAttribute(this.gameCharacterAttrValue);
  }
}
