import { Component, OnInit } from '@angular/core';
import { CronogramaService} from '../../cronograma.service'

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  titles: string [];
  cronogramas;
  constructor(private serviCrono: CronogramaService) {
    this.serviCrono.getCronograma().subscribe(data => {
      this.cronogramas = data;
    });
    this.titles = this.getTitles();
   }

  getTitles():string[] {
    return ['Nombre de la actividad','Hora','Fecha','Detalle'];
  } 

  ngOnInit() {
  }

}
