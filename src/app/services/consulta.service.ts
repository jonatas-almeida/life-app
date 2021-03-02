import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../interfaces/Consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  baseUrl = 'http://localhost:3000/consulta';

  constructor(private http: HttpClient) { }

  //Método Get
  getAllConsultas():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  //Método Post
  postConsulta(consulta: Consulta){
    return this.http.post(`${this.baseUrl}`, consulta);
  }

}
