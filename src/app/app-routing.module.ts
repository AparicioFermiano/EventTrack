import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginUsuarioComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]

})

export class AppRoutingModule { }
