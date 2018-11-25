import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private httpServ: HttpClient) {
    console.log('okkkkkk');
  }

  getLugar() {
    return this.httpServ.get('http://localhost:8080/api/lugares');
  }

  addLugar(newLugar) {
    this.httpServ.post('http://localhost:8080/api/lugares', newLugar).subscribe(
      data => {
        console.log("OKKKKKKKK", data);
        console.log(newLugar);
        return data;
      },
      error => {
          console.log("Error", error);
      }
    );
  } 
}
