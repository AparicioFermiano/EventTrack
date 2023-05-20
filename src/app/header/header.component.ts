import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sidebarAberto: boolean = false
  botao: any = {}
  pagina: string = ""

  constructor(private router: Router){
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

}
