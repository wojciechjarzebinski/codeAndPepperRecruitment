import { Component, OnInit } from '@angular/core';
import { GameCommand } from '../store/game.command';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private command: GameCommand) {}

  ngOnInit() {
    this.command.fetchInitData();
  }
}
