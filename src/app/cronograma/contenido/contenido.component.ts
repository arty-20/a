import { Component, OnInit, Input} from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  @Input() cronograma;
  constructor() { 
  }

  ngOnInit() { 
  } 

}
