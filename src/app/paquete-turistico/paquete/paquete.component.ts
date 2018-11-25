import { Component, OnInit } from '@angular/core';
import { PaqueteService } from '../../paquete.service';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {
  titulos:string [];
  paquetes;
  categorias;
  cronogramas;
  lugares;
  constructor(private paqueteServicio:PaqueteService) { 
    this.paqueteServicio.getPaquete().subscribe(data =>{
      this.paquetes=data; 
    });
    this.paqueteServicio.getCategoria().subscribe(data =>{
      this.categorias=data; 
    });
    this.paqueteServicio.getCronograma().subscribe(data =>{
      this.cronogramas=data; 
    });
    this.paqueteServicio.getLugar().subscribe(data =>{
      this.lugares=data; 
    });
    this.titulos=this.getTitulos();
  }
  getTitulos():string[]{
    return ['Nombre','Descripcion','Costo','Estado','Cupo minimo','Palabra Clave',
            'Fecha Inicio','Fecha Fin','Fecha Inicio Venta','Fecha Fin Venta '
            ,'Categoria','Lugar','Cronograma'];
  }

  ngOnInit() {
  }

}
