import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaDetailsComponent } from './components/consulta-details/consulta-details.component';
import { ConsultaRegisterComponent } from './views/consulta-register/consulta-register.component';
//Components
import { ConsultasViewComponent } from './views/consultas-view/consultas-view.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'consultas-view',
    component: ConsultasViewComponent
  },
  {
    path: 'consulta-register',
    component: ConsultaRegisterComponent
  },
  {
    path: 'consultas-view/:id',
    component: ConsultaDetailsComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
