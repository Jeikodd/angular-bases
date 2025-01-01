import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  exports: [
    MainPageComponent,
  ],
  declarations: [
    MainPageComponent,
    CharactersListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class DbzModule { }
