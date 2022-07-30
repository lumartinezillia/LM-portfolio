import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../entidades/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string="https://backendheroku-ap.herokuapp.com/login";

  constructor(private httpService: HttpClient) {
    console.log("El servicio de login está corriendo");
  }

  obtenerDatosLogin(): Observable<Login> {
    return this.httpService.get<Login>(this.url+"/1");
  }

  //se manda la dir al server/db y el objeto que contiene los datos.
  editarDatosLogin(login: Login): Observable<any> {
    return this.httpService.put(this.url, login);
  }

}
