import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Doctor } from 'src/app/interfaces/Doctor';
import { User } from 'src/app/interfaces/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;
  doctor: Doctor;
  registerForm: FormGroup;
  doctorForm: FormGroup;

  constructor(private userService: UsuarioService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.validation();
    this.validationDoctors();
  }


  validation(){
    this.registerForm=this.fb.group({
      name:['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      user_name:['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['',[Validators.required, Validators.email]],
      telefone:['', Validators.required],
      senha:['',[Validators.required, Validators.minLength(6)]],
      confirm_senha:['',[Validators.required, Validators.minLength(6)]]
    })
  }

  validationDoctors(){
    this.doctorForm = this.fb.group({
      doctor_name: ['Dr. ', [Validators.required, Validators.minLength(4)]],
      doctor_role: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  //Função para cadastrar um usuário
  addUser(){
    if(this.registerForm.valid){
      this.user = Object.assign(this.registerForm.value);

      this.userService.postUser(this.user).subscribe(()=>{
        this.router.navigateByUrl('/login');
        alert("Usuário Cadastrado Com Sucesso!");
      }, error =>{
        const erro = error.error;

        erro.array.forEach(element => {
          switch(element.code) {
            case 'DuplicateUserName':
              alert("Cadastro duplicado!");
              break;

              default:
                alert("Erro no cadastro!");
                break;
          }
        });
        
      })
    }
  }

  //Função para cadastrar um médico
  addDoctors(){
    if(this.doctorForm.valid){

      this.doctor = Object.assign(this.doctorForm.value);

      this.userService.postMed(this.doctor).subscribe(
        () => {
          this.router.navigateByUrl('/login');
          alert("Médico cadastrado com sucesso!");
        }, error => {
          const erro = error.error;

          erro.array.forEach(element => {
            switch(element.code){
              case 'DuplicatedUserName':
                alert("Cadastro duplicado!");
                break;

              default:
                alert("Erro ao tentar cadastrar!");
                break;
            }
          });
        }
      )

    }
  }

}
