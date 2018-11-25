import { Component, OnInit } from '@angular/core';
import {LugarService} from '../../lugar.service';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  titulos:string [];
  lugares;
  constructor(private lugarServicio:LugarService) { 
    this.lugarServicio.getLugar().subscribe(data =>{
      this.lugares=data; 
    });
    this.titulos=this.getTitulos();
  }
  getTitulos():string[]{
    return ['Nombre','Descripcion','Ubicación'];
  }

  ngOnInit() {
  }

}
