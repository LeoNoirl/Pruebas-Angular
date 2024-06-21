import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
  id: uuid(),
  name: '',
  power: 0,
  };

  emitCharacter():void{

    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    // Para limpiar el formulario
    this.character = {id:'', name: '', power: 0}

  }




}
