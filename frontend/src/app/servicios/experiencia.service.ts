import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url: string = "http://localhost:8080/experiencia";

  constructor(private httpService: HttpClient) {}

  obtenerDatosExperiencia(): Observable<any> {
    return this.httpService.get<Experiencia[]>(this.url + "/1");
  }

  editarDatosExperiencia(experiencia: Experiencia): Observable<any> {
    return this.httpService.put(this.url, experiencia);
  }

  eliminarExperiencia(id: number): Observable<any> {
    return this.httpService.delete(this.url + "/" + id);
  }
}
