import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: any;
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(private miServicio: PersonaService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      ubication: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]]
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data => {
      console.log(data);
      this.persona = data["Persona"];
    });
  }

  guardarEncabezado() {
    if (this.form.valid) {
      //llamar a un servicio para enviar los datos
    }
    else {
      this.form.markAllAsTouched();
      alert("Hay campos no válidos");
    }
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

  get url() {
    return this.form.get("url");
  }
}
