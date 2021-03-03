import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  baseUrl = 'http://localhost:3000/usuario'

  constructor(private http: HttpClient) { }

  postUser(model:any){
    return this.http.post(`${this.baseUrl}`, model)
  }
}
