import { Component, OnInit, TemplateRef } from '@angular/core';
import { Consulta } from 'src/app/interfaces/Consulta';
import { ConsultaService } from 'src/app/services/consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-consulta-details',
  templateUrl: './consulta-details.component.html',
  styleUrls: ['./consulta-details.component.scss']
})
export class ConsultaDetailsComponent implements OnInit {

  consulta: any = {};
  doctors: any;
  userId: number;
  editForm: FormGroup;

  constructor(private consultaService: ConsultaService, private usuarioService: UsuarioService, private router: Router, private actRouter: ActivatedRoute, private fb: FormBuilder, private modalService: NgbModal) {

    //Pega o parametro 'id' da url 
    this.actRouter.params.subscribe(params => this.userId = params['id']);
  }

  
  ngOnInit(): void {
    this.getConsulta();
    this.editFormValidation();
    this.getDoctors();
  }


  //Abre o modal
  openModal(content){
    this.modalService.open(content);
  }


  //Validation
  editFormValidation(){
    this.editForm = this.fb.group({
      nome_consulta: ['', [Validators.required, Validators.minLength(5)]],
      medico: ['', Validators.required],
      data: ['', Validators.required],
      status: true,
      cancelled: false
    });
  }


  //Pega os dados da consulta selecionada
  getConsulta(){
    this.consultaService.getConsulta(this.userId).subscribe(
      (response) => {
        this.consulta = response;
      }, error => {
        alert(`Não foi possível exibir as consultas: ${error.error}`);
      }
    )
  }


  //Pega os dados dos médicos e carrega no campo "Médico" do formulário
  getDoctors(){
    this.usuarioService.getAllDoctors().subscribe(
      (response) => {
        this.doctors = response;
      }, error => {
        alert(`Não foi possível exibir os médicos: ${error}`);
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



  //Carrega os dados da consulta nos campos
  editarConsulta(consulta: Consulta, content: any){
    this.openModal(content);
    this.consulta = Object.assign({}, consulta);
    this.editForm.patchValue(this.consulta);
  }

  //Altera um consulta
  editConsulta(){
    if(this.editForm.valid){

      this.consulta = Object.assign({id: this.userId}, this.editForm.value);

      this.consultaService.putConsulta(this.consulta, this.userId).subscribe(
        () => {
          this.getConsulta();
          alert('Consulta alterada com sucesso!');
        }
      )
    }
    else{
      error => {
        const erro = error.error;
        console.log(`Não foi possível alterar a consulta: ${erro}`);
      }
    }
  }

}
