import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario: any = {
    logado: false,
    codigoUsuario: 0
  }

  setUsuario = (valor: any) => {
    this.usuario = valor
  }

  getUsuario = () => {
    return this.usuario
  }

  constructor() { }
}
