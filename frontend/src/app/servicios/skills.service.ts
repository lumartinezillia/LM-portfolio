import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../entidades/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  url:string="http://localhost:8080/skill";

  constructor(private httpService: HttpClient) {}

  obtenerDatosSkills(): Observable<any> {
    return this.httpService.get<Skill[]>(this.url + "/1");
  }

  editarDatosSkill(skill: Skill): Observable<any> {
    return this.httpService.put(this.url, skill);
  }

  eliminarSkill(id:number): Observable<any>{
  return this.httpService.delete(this.url+"/"+id);
  }
}
