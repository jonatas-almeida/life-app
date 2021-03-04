import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  baseUrl = 'http://localhost:3000/usuario'
  baseUrlDoc = 'http://localhost:3000/medico'


  constructor(private http: HttpClient) { }

  getAllDoctors():Observable<any>{
    return this.http.get<any>(`${this.baseUrlDoc}`)
  }

  postUser(model:any){
    return this.http.post(`${this.baseUrl}`, model)
  }

  postMed(model: any){
    return this.http.post(`${this.baseUrlDoc}`, model);
  }
}
