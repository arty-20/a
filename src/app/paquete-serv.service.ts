import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaqueteServService {

  constructor(private httpServ: HttpClient) {
    console.log('okkkkkk');
  }

  getPackage() {
    return this.httpServ.get('http://localhost:8080/api/paquetes');
  }
  
}
