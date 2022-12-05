import { Component } from '@angular/core';

import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PlayersForm } from './welcome.interfaces';
import { GameCommand } from '../../../store/game.command';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  constructor(private router: Router, private command: GameCommand) {}

  public playersForm: FormGroup = new FormGroup<PlayersForm>({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    secondName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  public goToGame() {
    const { firstName, secondName } = this.playersForm.value;
    this.command.setPlayersName(firstName, secondName);
    setTimeout(() => {
      this.router.navigate(['/game']);
    }, 100);
  }
}
