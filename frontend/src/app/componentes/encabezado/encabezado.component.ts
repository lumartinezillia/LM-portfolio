import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona!: Persona;
  usuarioAutenticado: boolean = true;
  form!: FormGroup;
  datosLogin: any;


  constructor(private miServicio: PersonaService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      ubication: ['', [Validators.required]],
      image: ['', [Validators.required/*, Validators.pattern('https?://.+')*/]],
      aboutMe: ['', [Validators.required]],
      mail: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data => {
      console.log(data);
      this.persona = data;
    });
  }


  guardarEncabezado() {
    if (this.form.valid) {
      let personaEditar = new Persona(this.persona.id, this.form.controls["fullName"].value, this.form.controls["position"].value,
        this.form.controls["ubication"].value, this.form.controls["aboutMe"].value, this.form.controls["image"].value, this.form.controls["mail"].value);
      this.miServicio.editarDatosPersona(personaEditar).subscribe(data => {
        this.persona = personaEditar;
        this.form.reset();
        //para cerrar el modal usamos las propiedades del DOM
        document.getElementById("cerrarModalEncabezado")?.click();
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

  mostrarDatosEncabezado() {
    this.form.get("fullName")?.setValue(this.persona.fullName);
    this.form.get("position")?.setValue(this.persona.position);
    this.form.get("ubication")?.setValue(this.persona.ubication);
    this.form.get("image")?.setValue(this.persona.image);
    this.form.get("aboutMe")?.setValue(this.persona.aboutMe);
    this.form.get("mail")?.setValue(this.persona.mail);
  }

  //Propiedades

  get fullName() {
    return this.form.get("fullName");
  }

  get position() {
    return this.form.get("position");
  }

  get ubication() {
    return this.form.get("ubication");
  }

  get image() {
    return this.form.get("image");
  }

  get aboutMe() {
    return this.form.get("aboutMe");
  }
  get mail() {
    return this.form.get("mail");
  }
}
function msg(msg: any, any: any) {
  throw new Error('Function not implemented.');
}



