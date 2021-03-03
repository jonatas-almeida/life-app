import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;
  registerForm: FormGroup;

  constructor(private userService: UsuarioService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.validation();
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


  addUser(){
    if(this.registerForm.valid){
      this.user=Object.assign(this.registerForm.value);

      this.userService.postUser(this.user).subscribe(()=>{
        this.router.navigateByUrl('/login');
        alert("Usuário Cadastrado Com Sucesso!");
      }, error =>{
        console.log(error);
        
      })
      

    }
  }

}
