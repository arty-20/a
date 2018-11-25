import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos-paquete',
  templateUrl: './datos-paquete.component.html',
  styleUrls: ['./datos-paquete.component.css']
})
export class DatosPaqueteComponent implements OnInit {
  @Input() paquete;
  constructor() { }

  ngOnInit() {
  }

}
