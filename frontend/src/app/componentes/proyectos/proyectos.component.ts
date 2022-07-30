import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/entidades/proyecto';
import { ProyectoService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: any = [];
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(private miServicio: ProyectoService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: ['', []],
      idPersona: ['', []],
      project: ['', [Validators.required]],
      technologies: ['', [Validators.required]],
      year: ['', [Validators.required/*, Validators.pattern('https?://.+')*/]]
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosProyecto().subscribe(dataRecibida => {
      console.log(dataRecibida);
      this.proyecto = dataRecibida;
    })
  }

  public eliminarProyecto(proyecto: Proyecto) {
    //alert(item.id);
    // aca se borra del back
    this.miServicio.eliminarProyecto(proyecto.id).subscribe(data => {
      // acá se borra del front
      this.proyecto.splice(this.proyecto.indexOf(proyecto), 1);
    }, error => {
      alert("Se produjo un error, consulte al administrador")
    });
  }
  
  mostrarDatosProyectos(item: Proyecto) {
    this.form.get("id")?.setValue(item.id);
    this.form.get("idPersona")?.setValue(item.idPersona);
    this.form.get("project")?.setValue(item.project);
    this.form.get("technologies")?.setValue(item.technologies);
    this.form.get("year")?.setValue(item.year);

  }

  guardarProyectos() {
    if (this.form.valid) {
      let proyectoEditar = new Proyecto(this.form.controls["id"].value,this.form.controls["proyect"].value, this.form.controls["technologies"].value,
        this.form.controls["year"].value, this.form.controls["idPersona"].value);
      this.miServicio.editarDatosProyecto(proyectoEditar).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        this.proyecto = proyectoEditar;
        this.form.reset();
        document.getElementById("cerrarModalProyectos")?.click();
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

  //  CREAR PROYECTOS
  public crearProyecto(proyectoCrear: Proyecto) {
    this.form.reset();
    if (this.form.valid) {
      let id = this.form.controls["id"].value;
      let idPersona = 1;
      let project = this.form.controls["project"].value;
      let technologies = this.form.controls["technologies"].value;
      let year = this.form.controls["year"].value;
      let proyectoCrear = new Proyecto(id, project, technologies, year,  idPersona);
      this.miServicio.editarDatosProyecto(proyectoCrear).subscribe(data => {
        this.proyecto = proyectoCrear;
        this.form.reset();
        document.getElementById("cerrarModalCrearProyecto")?.click();
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