import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any;
  constructor(private miServicioPortfolio: EducacionService) { }

  ngOnInit(): void {
    this.miServicioPortfolio.obtenerDatosEducacion().subscribe(data => {
      this.educacion = data["education"];
    })

  }

}
