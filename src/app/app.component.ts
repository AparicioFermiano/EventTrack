import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventtrack';
  showHeader: boolean = true;

  dadosUsuario: any

  receberDadosLogin() {
    this.dadosUsuario = this.loginService.getUsuario()
    console.log(this.dadosUsuario);
  }

  ngOnInit(){
    this.dadosUsuario = this.loginService.getUsuario()
    this.receberDadosLogin
  }
  
  // trecho para ocultar o header quando estiver na tela de login
  constructor(private router: Router, private loginService: LoginService){

    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        if(val.url === "/login" || val.url === "/cadastro-usuario"){
          this.showHeader = false;
        }else{
          this.showHeader = true;
        }
      }
    });
  }

}
