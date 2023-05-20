import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {


  loginUsuario: any = {
    logado: true,
    codigoUsuario: 2
  }

  @Output() passarDadosLogin = new EventEmitter();

  logar = () => {
    this.loginService.setUsuario(this.loginUsuario)
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    
  }

  constructor(private router: Router, private loginService: LoginService){}

}
