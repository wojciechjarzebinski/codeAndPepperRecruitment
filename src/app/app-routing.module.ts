import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { GameQuard } from './shared/guards/game.guard';

const routes: Routes = [
  {
    path: 'game',
    canActivate: [GameQuard],
    // redirectTo: '',
    loadChildren: () => import('./game/game.module').then((m) => m.GameModule),
  },
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
