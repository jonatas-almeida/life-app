import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/interfaces/Consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-consulta-register',
  templateUrl: './consulta-register.component.html',
  styleUrls: ['./consulta-register.component.scss']
})
export class ConsultaRegisterComponent implements OnInit {

  registerForm: FormGroup;
  consulta: Consulta;

  constructor(private fb: FormBuilder, private consultaService: ConsultaService, private router: Router) { }

  ngOnInit(): void {
    this.validation();
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

  addConsulta(){
    this.consulta = Object.assign({}, this.registerForm.value);

    this.consultaService.postConsulta(this.consulta).subscribe(
      (novaConsulta: Consulta) => {
        alert("Consulta cadastrada com sucesso!");
        console.log(novaConsulta);
        this.router.navigateByUrl('/consultas-view');
      }, error => {
        console.log(error);
        alert("Não foi possível cadastrar a consulta!");
      }
    );
  }

}
