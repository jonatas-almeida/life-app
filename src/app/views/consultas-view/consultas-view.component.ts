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
  bodyDeletarConsulta: string;

  ngOnInit(): void {
    this.getConsultas();
  }

  excluirConsulta(consulta: Consulta, template: any){
    this.consultas = consulta;
    this.bodyDeletarConsulta = `Tem certeza que deseja deletar a consulta: ${consulta.nome_consulta}`;
  }


  //Pega todas as consultas
  getConsultas(){
    this.consultaService.getAllConsultas().subscribe(
      response => {
      this.consultas = response.reverse();
    });
  }


}
