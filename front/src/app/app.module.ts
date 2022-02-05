import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VoidComponent } from './components/void/void.component';
import { LoginComponent } from './components/login/login.component';
import { ApartamentosComponent } from './components/apartamentos/apartamentos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GestionComponent } from './components/gestion/gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoidComponent,
    LoginComponent,
    ApartamentosComponent,
    NavbarComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
