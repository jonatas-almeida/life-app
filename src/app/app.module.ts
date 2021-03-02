//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ListaConsultasComponent } from './components/lista-consultas/lista-consultas.component';
import { AdicionarConsultaComponent } from './components/adicionar-consulta/adicionar-consulta.component';
import { ConsultasViewComponent } from './views/consultas-view/consultas-view.component';
import { ConsultaRegisterComponent } from './views/consulta-register/consulta-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListaConsultasComponent,
    AdicionarConsultaComponent,
    ConsultasViewComponent,
    ConsultaRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
