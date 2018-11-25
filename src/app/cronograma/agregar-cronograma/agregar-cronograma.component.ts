import { Component, OnInit,Input } from '@angular/core';
import {CronogramaService}from '../../cronograma.service';

@Component({
  selector: 'app-agregar-cronograma',
  templateUrl: './agregar-cronograma.component.html',
  styleUrls: ['./agregar-cronograma.component.css']
})
export class AgregarCronogramaComponent implements OnInit {
  @Input() cronograma;
  cronActual;
  constructor(private croService: CronogramaService) {
    this.cronActual={
      nombreCro: '',
      horaCro: '',
      descripcionCro: '',
      fechaCro: ''
    };
  } 
  agregarCronograma(cronActual){
    this.croService.addCronograma(cronActual);
    location.reload();
  }
  ngOnInit() {
  }

}


