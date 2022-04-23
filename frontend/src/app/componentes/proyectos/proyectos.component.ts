import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: any;
  constructor(private miServicioPortfolio: ProyectoService) { }

  ngOnInit(): void {
    this.miServicioPortfolio.obtenerDatosProyecto().subscribe(data => {
      this.proyecto = data["proyecto"];
    })
  }
}
