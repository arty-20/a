import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpServ: HttpClient) {
      console.log('okkkkkk');
    }
  
    getCategoria() {
      return this.httpServ.get('http://localhost:8080/api/categorias');
    }
  
    addCategoria(newCategoria) {
      this.httpServ.post('http://localhost:8080/api/categorias', newCategoria).subscribe(
        data => {
          console.log("Todo Bien!!", data);
          console.log(newCategoria);
          return data;
        },
        error => {
            console.log("Error: ", error);
            console.log(newCategoria)
        }
      );
    } 
}
