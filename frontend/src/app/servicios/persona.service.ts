import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string="https://backendheroku-ap.herokuapp.com/persona";

  constructor(private httpService: HttpClient) {
    console.log("El servicio de persona está corriendo");
  }

  obtenerDatosPersona(): Observable<Persona> {
    return this.httpService.get<Persona>(this.url+"/1");
  }

  //se manda la dir al server/db y el objeto que contiene los datos.
  editarDatosPersona(persona: Persona): Observable<any> {
    return this.httpService.put(this.url, persona);
  }

}
