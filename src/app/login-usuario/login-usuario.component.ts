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
  deuErro = {
    verificador: false,
    mensagem: ""
  }

  logar = () => {
    this.deuErro.verificador = false;
    this.deuErro.mensagem = "";
    this.loginService.setUsuario(this.loginUsuario)
    this.router.navigate(['/'])
  }
  
  // validarCamposObrigatorios = () => {
  //   let message = "";

  //   if(this.form.value.email === null || this.form.value.email === ""){
  //     message = "O campo e-mail é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if(this.form.value.senha === null || this.form.value.senha ===""){
  //     message = "O campo senha é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
    
  //   this.deuErro.mensagem = message;
  //   return this.deuErro.verificador;
  // }

  ngOnInit(): void {
    
  }

  constructor(private router: Router, private loginService: LoginService){}

}
