import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: any = [];
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(private miServicio: ExperienciaService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: ['', []],
      idPersona: ['', []],
      //cada uno de estos es un FORM CONTROL
      job: ['', [Validators.required]],
      company: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required/*, Validators.pattern('https?://.+')*/]]
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosExperiencia().subscribe(dataRecibida => {
      console.log(dataRecibida);
      this.experiencia = dataRecibida;
    })
  }

  // este método está linkeado por data binding al botón de Editar en el html (para cargar el formulario cargado)
  mostrarDatosExperiencia(item: Experiencia) {
    this.form.get("id")?.setValue(item.id);
    this.form.get("idPersona")?.setValue(item.idPersona);
    this.form.get("job")?.setValue(item.job);
    this.form.get("company")?.setValue(item.company);
    this.form.get("start")?.setValue(item.start);
    this.form.get("end")?.setValue(item.end);
  }

  public eliminarExperiencia(experiencia: Experiencia) {
    // aca se borra del back
    this.miServicio.eliminarExperiencia(experiencia.id).subscribe(data => {
      // acá se borra del front
      this.experiencia.splice(this.experiencia.indexOf(experiencia), 1);
    }, error => {
      alert("Se produjo un error, consulte al administrador")
    });
  }


  public guardarExperiencia() {
    if (this.form.valid) {
      let experienciaEditar = new Experiencia(this.form.controls["id"].value, this.form.controls["job"].value, this.form.controls["company"].value,
        this.form.controls["start"].value, this.form.controls["end"].value,this.form.controls["idPersona"].value);
      this.miServicio.editarDatosExperiencia(experienciaEditar).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        this.experiencia = experienciaEditar;
        //deja el form control en blanco luego de guardar)
        this.form.reset();
        //para cerrar el modal usamos las propiedades del DOM
        document.getElementById("cerrarModalExperiencia")?.click();
        window.location.reload();
      },
        //si no se pudo editar, sale este mensaje de error
        error => {
          alert("Ups no se pudo actualizar. Por favor, intente nuevamente o contacte al administrador");
        });
    }
    else {
      this.form.markAllAsTouched();
      alert("Hay campos no válidos");
    }
  }

//  CREAR Experiencia
public crearExperiencia(experienciaCrear: Experiencia) {
  if (this.form.valid) {
    let id = this.form.controls["id"].value;
    let idPersona = 1;
    let job = this.form.controls["job"].value;
    let company = this.form.controls["company"].value;
    let start = this.form.controls["start"].value;
    let end = this.form.controls["end"].value;
    let experienciaCrear = new Experiencia(id, job, company, start, end,idPersona);
    this.miServicio.editarDatosExperiencia(experienciaCrear).subscribe(data => {
      // FALTA modificar el encabezado con los nuevos datos.
      this.experiencia = experienciaCrear;
      this.form.reset();
      document.getElementById("cerrarModalCrearExperiencia")?.click();
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
  //Propiedades

  get job() {
    return this.form.get("job");
  }

  get company() {
    return this.form.get("company");
  }

  get start() {
    return this.form.get("start");
  }

  get end() {
    return this.form.get("end");
  }
}
function msg(msg: any, any: any) {
  throw new Error('Function not implemented.');
}