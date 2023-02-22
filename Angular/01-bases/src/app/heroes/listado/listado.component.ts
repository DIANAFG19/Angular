import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Iron Man', 'Capitan America', 'Hulk', 'Mujer Maravilla', 'Ant Man', 'Thor'];
  heroesBorrados: string[] = [];

  borrarHeroe () {
    console.log("Borrando héroe...");
    let borrado = this.heroes.shift() || '';
    this.insertarHeroeBorrado(borrado);
  }

  insertarHeroeBorrado (borrado: string) {
    this.heroesBorrados.push(borrado);
  }

  

}
