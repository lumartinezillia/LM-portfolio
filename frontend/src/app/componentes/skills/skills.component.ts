import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/entidades/skill';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: any = [];
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(private miServicio: SkillsService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: ['', []],
      idPersona: ['', []],
      skill: ['', [Validators.required]],
      percentage: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosSkills().subscribe(dataRecibida => {
      console.log(dataRecibida);
      this.skill = dataRecibida;
    })
  }


  mostrarDatosSkills(item: Skill) {
    this.form.get("id")?.setValue(item.id);
    this.form.get("idPersona")?.setValue(item.idPersona);
    this.form.get("skill")?.setValue(item.skill);
    this.form.get("percentage")?.setValue(item.percentage);
  }

  public eliminarSkill(skill: Skill) {
    //alert(item.id);
    // aca se borra del back
    this.miServicio.eliminarSkill(skill.id).subscribe(data => {
      // acá se borra del front
      this.skill.splice(this.skill.indexOf(skill), 1);
    }, error => {
      alert("Se produjo un error, consulte al administrador")
    });
  }

  guardarSkills() {
    if (this.form.valid) {
      let skillEditar = new Skill(this.form.controls["id"].value, this.form.controls["skill"].value, this.form.controls["percentage"].value,
        this.form.controls["idPersona"].value);
      this.miServicio.editarDatosSkill(skillEditar).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        this.skill = skillEditar;
        this.form.reset();
        document.getElementById("cerrarModalSkills")?.click();
        window.location.reload();
      },
        error => {
          alert("Ups no se pudo actiualizar. Por favor, intente nuevamente o contacte al administrador");
        });
    }
    else {
      this.form.markAllAsTouched();
      alert("Hay campos no válidos");
    }
  }

  //  CREAR SKILLS
  public crearSkill(skillCrear: Skill) {
    if (this.form.valid) {
      this.form.reset();
      let id = this.form.controls["id"].value;
      let idPersona = 1;
      let skill = this.form.controls["skill"].value;
      let percentage = this.form.controls["percentage"].value;
      let skillCrear = new Skill(id, skill, percentage, idPersona);
      this.miServicio.editarDatosSkill(skillCrear).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        console.log(skillCrear);
        this.skill = skillCrear;
        this.form.reset();
        document.getElementById("cerrarModalCrearSkill")?.click();
        window.location.reload();
      },
        error => {
          alert("Ups no se pudo actiualizar. Por favor, intente nuevamente o contacte al administrador");
        });
    }
    else {
      this.form.markAllAsTouched();
      alert("Hay campos no válidos");
    }
  }
}