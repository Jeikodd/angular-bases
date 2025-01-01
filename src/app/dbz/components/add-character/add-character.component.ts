import { Component, inject, output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Character } from '../../interfaces/character.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly _snackBarService = inject(MatSnackBar);
  emitNewCharacter = output<Character>();

  characterForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    power: this.fb.control(0, [Validators.required]),
  });

  onNewCharacter(): void {
    const character: Character = {
      name: this.characterForm.controls.name.value,
      power: this.characterForm.controls.power.value,
    } 
    this.emitNewCharacter.emit( character );

    this.characterForm.reset();

    this._snackBarService.open('New character added', 'Dismiss', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
