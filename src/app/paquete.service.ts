import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(private httpServ: HttpClient) {
    console.log('okkkkkk');
  }

  getPaquete() {
    return this.httpServ.get('http://localhost:8080/api/paquetes');
  }
  getCategoria() {
    return this.httpServ.get('http://localhost:8080/api/categorias');
  }
  getLugar() {
    return this.httpServ.get('http://localhost:8080/api/lugares');
  }
  getCronograma() {
    return this.httpServ.get('http://localhost:8080/api/cronogramas');
  }

  addpaquete(newPaquete) {
    this.httpServ.post('http://localhost:8080/api/paquetes', newPaquete).subscribe(
      data => {
        console.log("OKKKKKKKK", data);
        console.log(newPaquete);
        return data;
      },
      error => {
          console.log("Error:", error);
          console.log(newPaquete);
      }
    );
  } 
}
