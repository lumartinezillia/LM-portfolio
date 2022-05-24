import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { Educacion } from 'src/app/entidades/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any = [];
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(private miServicio: EducacionService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: ['', []],
      idPersona: ['', []],
      img: ['', [/*Validators.required*/]],
      title: ['', [Validators.required]],
      school: ['', [Validators.required]],
      start: ['', [Validators.required]],
      career: ['', [/*Validators.required*/]],
      end: ['', [Validators.required/*, Validators.pattern('https?://.+')*/]]
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosEducacion().subscribe(dataRecibida => {
      console.log(dataRecibida);
      this.educacion = dataRecibida;
    })
  }

  public eliminarEducacion(educacion: Educacion) {
    //alert(item.id);
    // aca se borra del back
    this.miServicio.eliminarEducacion(educacion.id).subscribe(data => {
      // acá se borra del front
      this.educacion.splice(this.educacion.indexOf(educacion), 1);
    }, error => {
      alert("Se produjo un error, consulte al administrador")
    });
  }

  public mostrarDatosEducacion(item: Educacion) {
    this.form.get("id")?.setValue(item.id);
    this.form.get("img")?.setValue(item.img);
    this.form.get("title")?.setValue(item.title);
    this.form.get("school")?.setValue(item.school);
    this.form.get("start")?.setValue(item.start);
    this.form.get("career")?.setValue(item.career);
    this.form.get("end")?.setValue(item.end);
    this.form.get("idPersona")?.setValue(item.idPersona);
  }

  public guardarEducacion() {
    if (this.form.valid) {
      console.log("ok1");
      let id = this.form.controls["id"].value;
      let idPersona = this.form.controls["idPersona"].value;
      let title = this.form.controls["title"].value;
      let school = this.form.controls["school"].value;
      let start = this.form.controls["start"].value;
      let end = this.form.controls["end"].value;
      let img = this.form.controls["img"].value;
      let career = this.form.controls["career"].value;
      let educacionEditar = new Educacion(id, title, school, img, start, end, career, idPersona);

      this.miServicio.editarDatosEducacion(educacionEditar).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        this.educacion = educacionEditar;
        console.log("ok4");

        this.form.reset();
        console.log("ok2");

        document.getElementById("cerrarModalEducacion")?.click();
        console.log("ok3");
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

  //  CREAR EDUCACION
  public crearEducacion(educacionCrear: Educacion) {
    if (this.form.valid) {
      console.log("ok1");
      let id = this.form.controls["id"].value;
      let idPersona = 1;
      let title = this.form.controls["title"].value;
      let school = this.form.controls["school"].value;
      let start = this.form.controls["start"].value;
      let end = this.form.controls["end"].value;
      let img = this.form.controls["img"].value;
      let career = this.form.controls["career"].value;
      let educacionCrear = new Educacion(id, title, school, img, start, end, career, idPersona);
      console.log("ok2");

      this.miServicio.editarDatosEducacion(educacionCrear).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        console.log("ok3");
        console.log(educacionCrear);

        this.educacion = educacionCrear;
        console.log("ok4");

        this.form.reset();
        document.getElementById("cerrarModalCrearEducacion")?.click();
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
  // en el get va el nombre del form control y en set value el del servicio


  //Propiedades

  get title() {
    return this.form.get("title");
  }

  get school() {
    return this.form.get("school");
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
