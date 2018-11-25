import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {
  constructor(private httpServ: HttpClient) {
    console.log('okkkkkk');
  }

  getCronograma() {
    return this.httpServ.get('http://localhost:8080/api/cronogramas');
  }

  addCronograma(newCrono) {
    this.httpServ.post('http://localhost:8080/api/cronogramas', newCrono).subscribe(
      data => {
        console.log("Todo Bien!!", data);
        console.log(newCrono);
        return data;
      },
      error => {
          console.log("Error: ", error);
          console.log(newCrono)
      }
    );
  } 
}
