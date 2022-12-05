import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlayersForm } from './welcome.interfaces';
import { GameCommand } from 'src/app/store/game.command';

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
