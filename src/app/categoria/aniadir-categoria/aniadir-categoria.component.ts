import { Component, OnInit, Input} from '@angular/core';
import {CategoriaService} from '../../categoria.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-aniadir-categoria',
  templateUrl: './aniadir-categoria.component.html',
  styleUrls: ['./aniadir-categoria.component.css']
})
export class AniadirCategoriaComponent implements OnInit {
  @Input() cronograma;
  categoriaActual;
  constructor(private categoriaServ: CategoriaService) {
    this.categoriaActual={
      nombreCat: '',
      descripcionCat: ''
    };
  } 
  agregarCategoria(categoriaActual){
    this.categoriaServ.addCategoria(categoriaActual);
    location.reload();
  }
  fechaActual():number{
    return Date.now();
  }

  ngOnInit() {
  }

}
