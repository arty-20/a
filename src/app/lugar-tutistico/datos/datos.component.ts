import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  @Input() lugar;
  constructor() { }

  ngOnInit() {
  }

}
