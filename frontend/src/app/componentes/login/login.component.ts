import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: any;
  usuarioAutenticado: boolean = true;
  formLogin!: FormGroup;
  datosLogin: any;

  constructor(private miServicio: LoginService, private formBuilder: FormBuilder) {  
    this.formLogin = this.formBuilder.group({
    id: ['', [Validators.required]],
    mail: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })}

  ngOnInit(): void {
    this.miServicio.obtenerDatosLogin().subscribe(data => {
      console.log(data);
      this.login = data;
    });
  }


  mostrarDatosLogin() {
    this.formLogin.get("id")?.setValue(this.login.id);
    this.formLogin.get("mail")?.setValue(this.login.mail);
    this.formLogin.get("password")?.setValue(this.login.password);
  }


  guardarLogin() {
    /*if (this.form.valid) {
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
    }*/
  }
  /*
  if (this.formLogin.valid) {
    let datosLogin = new Persona(this.persona.id, this.form.controls["fullName"].value, this.form.controls["position"].value,
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
  }*/ 


}
