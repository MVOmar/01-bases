import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor','Capitan America'];
  heroeBorrado: string = '';

  borrado: boolean = false;

  BorrarHeroe (){
 
   console.log("Borra");    

    this.heroeBorrado = this.heroes.shift() || '';



  }


}


 
  
