import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;
  constructor(private miServicioPortfolio: SkillsService) { }

  ngOnInit(): void {
    this.miServicioPortfolio.obtenerDatosSkills().subscribe(data => {
      this.skills = data["skills"];
    })

  }
}
