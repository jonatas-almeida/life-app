import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/interfaces/Doctor';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  doctors: Doctor;

  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(){
    this.userService.getAllDoctors().subscribe(
      response => {
        this.doctors = response;
        console.log(response);
      }
    )
  }

}
