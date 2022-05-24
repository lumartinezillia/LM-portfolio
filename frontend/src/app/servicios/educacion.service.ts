import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url: string = "http://localhost:8080/educacion";
  constructor(private httpService: HttpClient) { }

  obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.httpService.get<Educacion[]>(this.url + "/1");
  }

  editarDatosEducacion(educacion: Educacion): Observable<any> {
    return this.httpService.put(this.url, educacion);
  }

  eliminarEducacion(id: number): Observable<any> {
    return this.httpService.delete(this.url + "/" + id);
  }


}
