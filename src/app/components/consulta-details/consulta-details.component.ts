import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/interfaces/Consulta';
import { ConsultaService } from 'src/app/services/consulta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consulta-details',
  templateUrl: './consulta-details.component.html',
  styleUrls: ['./consulta-details.component.scss']
})
export class ConsultaDetailsComponent implements OnInit {

  consulta: any = {};
  userId: number;

  constructor(private consultaService: ConsultaService, private router: Router, private actRouter: ActivatedRoute) {

    //Pega o parametro 'id' da url 
    this.actRouter.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit(): void {
    this.getConsulta();
  }

  //Pegar uma consulta específica
  getConsulta(){
    this.consultaService.getConsulta(this.userId).subscribe(
      (response) => {
        this.consulta = response;
      }, error => {
        alert(`Não foi possível exibir as consultas: ${error.error}`);
      }
    )
  }

  //Deletar uma consulta
  deleteConsulta(){
     const alert = window.confirm("Você tem certeza que deseja excluir essa consulta?");

     if(alert == true){
      this.consultaService.deleteConsulta(this.userId).subscribe(
        () => {
          window.alert("Consulta deletada com sucesso!");
          this.router.navigateByUrl("/consultas-view");
        }, error => {
          console.log(`Não foi possível deletar a consulta: ${error}`);
        }
      )
     }
  }





  

}
