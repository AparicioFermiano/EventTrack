import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sidebarAberto: boolean = false
  botao: any = {}
  pagina: string = ""
  dadosUsuario: any;

  ngOnInit() {
    this.dadosUsuario = this.loginService.getUsuario()
  }

  constructor(private router: Router, private loginService: LoginService){
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.pagina = val.url
      }
    });
  }

  abrirFecharSidebar = () =>{
    this.botao = document.getElementById('botaoSidebar')
    
    if (this.sidebarAberto === true) {
      this.botao.style.transform = "rotate(0deg)"
      this.sidebarAberto = false;
    }else if(this.sidebarAberto === false){
      this.botao.style.transform = "rotate(-180deg)"
      this.sidebarAberto = true;
    }
  }

  deslogar = () => {
    this.loginService.setUsuario({
      logado: false,
      codigoUsuario: 0
    })
    this.router.navigate(['/'])
    window.location.reload()
  }

}
