import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interfaces';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.components.html'
})

export class MainPageComponent {

  constructor( private dbzService:DbzService ) { }

  get characters():Character[]{
    return [...this.dbzService.characters];
  }


  onDelelteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character:Character ):void {
    this.dbzService.addCharacter( character );
  }

}
