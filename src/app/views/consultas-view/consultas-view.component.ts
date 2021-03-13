import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/interfaces/Consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-consultas-view',
  templateUrl: './consultas-view.component.html',
  styleUrls: ['./consultas-view.component.scss']
})
export class ConsultasViewComponent implements OnInit {

  constructor(private consultaService: ConsultaService, private router: Router) { }

  consultas: Consulta;
  consultaName: string;
  searchResult: any;
  bodyDeletarConsulta: string;


  ngOnInit(): void {
    this.getConsultas();
  }


  //Pega todas as consultas
  getConsultas(){
    this.consultaService.getAllConsultas().subscribe(
      response => {
      this.consultas = response.reverse();
    });
  }



}
