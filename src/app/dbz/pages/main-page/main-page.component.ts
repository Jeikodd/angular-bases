import { Component, inject } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  private readonly _dbzService = inject( DbzService );

  createNewCharacter( character: Character ): void {
    this._dbzService.pushNewCharacter( character );
  }
}
