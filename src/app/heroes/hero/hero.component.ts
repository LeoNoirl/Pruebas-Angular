import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Leo';
  public age: number = 18;

  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    //TODO: EN ESPERA
    // throw 'Metodo no implementado'
    this.name = 'Noir';
  }
  changeAge(): void{
    this.age = 29
  }
  resetForm(): void{
    this.name = 'Leo';
    this.age = 18;

    // document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'
  }

}
