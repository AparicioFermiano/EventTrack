import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { EventosModule } from './eventos/eventos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    EventosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
