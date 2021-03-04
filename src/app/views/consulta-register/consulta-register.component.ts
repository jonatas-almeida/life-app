import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/interfaces/Consulta';
import { Doctor } from 'src/app/interfaces/Doctor';
import { ConsultaService } from 'src/app/services/consulta.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-consulta-register',
  templateUrl: './consulta-register.component.html',
  styleUrls: ['./consulta-register.component.scss']
})
export class ConsultaRegisterComponent implements OnInit {

  registerForm: FormGroup;
  consulta: Consulta;
  doctors: Doctor;

  constructor(private fb: FormBuilder, private consultaService: ConsultaService, private userService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.validation();
    this.getDoctorsName();
  }

  validation(){
    this.registerForm = this.fb.group({
      nome_consulta: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
      medico: ['', Validators.required],
      data: ['', Validators.required],
      status: [true],
      cancelled: [false]
    });
  }

  //Adiciona uma consulta
  addConsulta(){
    this.consulta = Object.assign({}, this.registerForm.value);

    this.consultaService.postConsulta(this.consulta).subscribe(
      (novaConsulta: Consulta) => {
        alert("Consulta cadastrada com sucesso!");
        console.log(novaConsulta);
        this.router.navigateByUrl('/consultas-view');
      }, error => {
        const erro = error.error;

        erro.array.forEach(element => {
          switch(element.code){
            case 'DuplicatedUserName':
              alert("Cadastro duplicado!");
              break;

            default:
              alert("Erro ao tentar cadastrar a consulta");
              break;
          }
        });
      }
    );
  }

  //Lista os nomes dos médicos cadastrados na tag "option" da tag "select"
  getDoctorsName(){
    this.userService.getAllDoctors().subscribe(
      (response) => {
        this.doctors = response;
      }, error => {
        const erro = error.error;
        console.log(erro);
      }
    )
  }

}
