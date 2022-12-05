import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { APP_EFFECTS, APP_FEATURE_KEY, APP_REDUCERS } from './store/app.state';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CommonModule } from '@angular/common';

const MATERIAL_MODULES = [
  MatExpansionModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
];
@NgModule({
  declarations: [AppComponent, WelcomeComponent, NotFoundComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
          strictStateSerializability: false,
          strictActionSerializability: false,
        },
      }
    ),
    StoreModule.forFeature(APP_FEATURE_KEY, APP_REDUCERS),
    EffectsModule.forRoot(APP_EFFECTS),
    StoreDevtoolsModule.instrument({
      name: 'c&pGame',
      maxAge: 100,
    }),
    ...MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
