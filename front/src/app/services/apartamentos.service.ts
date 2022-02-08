import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartamentosService {

  constructor(private httpClient: HttpClient) { 
  }

  createApartamento(apartamento: any){
    return this.httpClient.post("http://localhost:3000/apartamentos/",apartamento,{headers:{"Content-Type":"application/json"}})
  }

}
