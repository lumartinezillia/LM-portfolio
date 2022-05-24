import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidades/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  url:string="http://localhost:8080/proyecto";

  constructor(private httpService:HttpClient) {}

  obtenerDatosProyecto(): Observable<any>{
    return this.httpService.get<Proyecto[]>(this.url + "/1");
  }

  editarDatosProyecto(proyecto: Proyecto): Observable<any> {
    return this.httpService.put(this.url, proyecto);
  }

  eliminarProyecto(id:number): Observable<any>{
  return this.httpService.delete(this.url+"/"+id);
  }
}
