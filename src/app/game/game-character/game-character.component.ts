import { Component, Input } from '@angular/core';
import { CharacterDetails } from '../../shared/models/game.interface';

@Component({
  selector: 'app-game-character',
  templateUrl: './game-character.component.html',
  styleUrls: ['./game-character.component.scss'],
})
export class GameCharacterComponent {
  @Input() public playerName!: string | null;
  @Input() public characterData!: CharacterDetails;
}
