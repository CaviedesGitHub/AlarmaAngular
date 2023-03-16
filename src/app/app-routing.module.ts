import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlarmaComponent } from './add-alarma/add-alarma.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path:"alarmas/adicionar", component:AddAlarmaComponent},
  {path:"alarmas", component:PrincipalComponent},
  {path:"login", component:LoginComponent},
  {path:"", component:LoginComponent},
  {path:"**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
