import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroEventosComponent } from './eventos/cadastro-eventos/cadastro-eventos.component';
import { DetalheEventoComponent } from './eventos/detalhe-evento/detalhe-evento.component';
import { MeusEventosComponent } from './eventos/meus-eventos/meus-eventos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginUsuarioComponent},
  {path: 'cadastro-eventos', component: CadastroEventosComponent},
  {path: 'detalhe-evento', component: DetalheEventoComponent},
  {path: 'meus-eventos', component: MeusEventosComponent},
  {path: 'meus-ingressos', component: MeusEventosComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]

})

export class AppRoutingModule { }
