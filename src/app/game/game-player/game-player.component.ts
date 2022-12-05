import { Component, Input } from '@angular/core';
import { CharacterDetails } from 'src/app/shared/models/game.interface';

@Component({
  selector: 'app-game-player',
  templateUrl: './game-player.component.html',
  styleUrls: ['./game-player.component.scss'],
})
export class GamePlayerComponent {
  @Input() public playerName: string | null = '';
  @Input() public characterData!: CharacterDetails;
}
