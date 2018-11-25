import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contenido-categoria',
  templateUrl: './contenido-categoria.component.html',
  styleUrls: ['./contenido-categoria.component.css']
})
export class ContenidoCategoriaComponent implements OnInit {
  @Input() categoria;
  constructor() { }

  ngOnInit() {
  }

}
