import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../interfaces/Consulta';
import {ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  baseUrl = 'http://localhost:3000/consulta';
  consultaUrl = 'http://localhost:4200/consulta-details'
  consulta: Consulta;

  constructor(private http: HttpClient, private actRouter: ActivatedRoute) { }

  //Método Get
  getAllConsultas():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  //Método Get para uma consulta em específica
  getConsulta(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  //Método Post
  postConsulta(consulta: Consulta){
    return this.http.post(`${this.baseUrl}`, consulta);
  }

  //Método Put
  putConsulta(consulta: Consulta, id:number){
    return this.http.put(`${this.baseUrl}/${id}`, consulta);
  }

  //Método Delete
  deleteConsulta(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
