import { Component, OnInit, Input} from '@angular/core';
import { PaqueteService } from '../../paquete.service'

@Component({
  selector: 'app-aniadir-paquete',
  templateUrl: './aniadir-paquete.component.html',
  styleUrls: ['./aniadir-paquete.component.css']
})
export class AniadirPaqueteComponent implements OnInit {
  @Input() paquete;
  paqueteActual;
  lugares;
  categorias;
  cronogramas;
  constructor(private paqueteService:PaqueteService) { 
    this.paqueteActual={
      nombrePaquete: '',
      descripcionPaquete: '',
      costoPaquete: '',
      estadoPaquete: '',
      cupoMinPaquete: '',
      idCat: '',
      idLugar: '',
      idCro: '',
      palabraClave: '',
      fechaInicioPaquete:'',
      fechaFinPaquete: '',
      fechaInicioVentaPaquete:'',
      fechaFinVentaPaquete: ''
    }
    this.paqueteService.getLugar().subscribe(data =>{
      this.lugares=data; 
    });
    this.paqueteService.getCategoria().subscribe(data =>{
      this.categorias=data; 
    });
    this.paqueteService.getCronograma().subscribe(data =>{
      this.cronogramas=data; 
    });
  }
  aniadirPaquete(paqueteActual){
    this.paqueteService.addpaquete(paqueteActual);
    // location.reload();

  }
  ngOnInit() {
  }

}
