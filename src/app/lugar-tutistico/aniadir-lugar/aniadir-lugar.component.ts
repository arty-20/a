import { Component, OnInit, Input } from '@angular/core';
import {LugarService} from '../../lugar.service'

@Component({
  selector: 'app-aniadir-lugar',
  templateUrl: './aniadir-lugar.component.html',
  styleUrls: ['./aniadir-lugar.component.css']
})
export class AniadirLugarComponent implements OnInit {
  @Input() lugar;
  lugarActual;
  constructor(private lugarService:LugarService) { 
    this.lugarActual={
      nombreLugar: '',
      descripcionLugar: '',
      ubicacionLugar: ''
    }
  }
  aniadirLugar(lugarActual){
    this.lugarService.addLugar(lugarActual);
    location.reload();

  }

  ngOnInit() {
  }

}
