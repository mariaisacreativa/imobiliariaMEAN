import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartamentosComponent } from './components/apartamentos/apartamentos.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VoidComponent } from './components/void/void.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"apartamentos", component: ApartamentosComponent},
  {path:"login", component: LoginComponent},
  {path:"gestion", component: GestionComponent, canActivate:[AuthGuard]},
  {path:"**", component: VoidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
