import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-consultas-view',
  templateUrl: './consultas-view.component.html',
  styleUrls: ['./consultas-view.component.scss']
})
export class ConsultasViewComponent implements OnInit {

  constructor(private consultaService: ConsultaService) { }

  consultas: any = [];

  ngOnInit(): void {
    this.getConsultas();
  }

  getConsultas(){
    this.consultaService.getAllConsultas().subscribe(
      response => {
      this.consultas = response.reverse();
    });
  }

}
