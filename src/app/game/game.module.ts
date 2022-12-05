import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { RouterModule, Routes } from '@angular/router';
import { GameArenaComponent } from './game-arena/game-arena.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { GameCharacterComponent } from './game-character/game-character.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForObjectPipe } from '../shared/pipe/for-object.pipe';

const routes: Routes = [{ path: '', component: GameComponent }];

const MATERIAL_MODULES = [
  MatExpansionModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
  ],
  declarations: [
    GameComponent,
    GameArenaComponent,
    GameSettingsComponent,
    GameCharacterComponent,
    ForObjectPipe,
  ],
})
export class GameModule {}
