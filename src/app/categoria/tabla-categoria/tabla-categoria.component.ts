import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../../categoria.service';

@Component({
  selector: 'app-tabla-categoria',
  templateUrl: './tabla-categoria.component.html',
  styleUrls: ['./tabla-categoria.component.css']
})
export class TablaCategoriaComponent implements OnInit {
  titles: string [];
  categorias;
  constructor(private serviCategoria: CategoriaService) {
      this.serviCategoria.getCategoria().subscribe(data => {
      this.categorias = data;
    });
    this.titles = this.getTitles();
   }

  getTitles():string[] {
    return ['Nombre de la categoria','Descripcion'];
  }  
  ngOnInit() {
  }

}
