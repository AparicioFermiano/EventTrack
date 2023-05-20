import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  mostrarAdm: boolean = false;
  // form!: FormGroup;

  showHide = () => {
    if(this.mostrarAdm === true){
      this.mostrarAdm = false;
    }
    else{
      this.mostrarAdm = true;
    }
  }

  // ngOnInit(): void {
  //   this.form = new FormGroup({
  //     nome: new FormControl (null, {
  //       validators: [
  //         Validators.required,
  //         Validators.pattern("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$"),
  //         Validators.minLength(2),
  //       ]
  //     }),
  //   })
  // }
}
