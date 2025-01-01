import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  private readonly characters: Character[] = [
    {
      name: 'Krilin',
      power: 500
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 9000
    },
  ];

  get characterList(): Character[] {
    return this.characters;
  }

  pushNewCharacter( character: Character ): void {
    this.characters.push( character );
  }
}