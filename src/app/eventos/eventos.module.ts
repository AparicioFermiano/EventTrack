import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { CadastroEventosComponent } from './cadastro-eventos/cadastro-eventos.component';
import { DetalheEventoComponent } from './detalhe-evento/detalhe-evento.component';
import { MeusEventosComponent } from './meus-eventos/meus-eventos.component';



@NgModule({
  declarations: [
    CadastroEventosComponent,
    DetalheEventoComponent,
    MeusEventosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class EventosModule { }
