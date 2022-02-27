import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from 'src/app/servicios/mi-portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion:any;
  constructor(private miServicioPortfolio:MiPortfolioService) { }

  ngOnInit(): void {
    this.miServicioPortfolio.obtenerDatosEducacion().subscribe( data => {
      this.educacion=data["education"];
    })

  }

}
