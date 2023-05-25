import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  login: FormGroup = new FormGroup({});
  email: string;
  password: string;
  message: string;

  constructor(
      private http: HttpClient, 
      private router: Router,
      private formBuilder: FormBuilder) {
    this.email = '';
    this.password = '';
    this.message = '';
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
      password: ['',[Validators.required, Validators.minLength(1)]]
    });
  }

  submitForm() {
    if (this.login.valid) {
      const body = { email: this.login.get('email')?.value, password: this.login.get('password')?.value };
      return this.http.post('http://localhost:3000/login/validar_login', body).subscribe(
        (res: any) => {
          if(res.status == 200){
            const redirectRoute = res.redirectRoute;
            this.router.navigate([redirectRoute]);
          } else {
            this.message = 'E-mail ou senha inválidos';
          }
        },
        (err) => {
          this.message = JSON.stringify(err);
        }
      );
    } else {
      if (this.login.get('email')?.errors?.['required']) {
        this.message = 'O email é obrigatório';
      } else if (this.login.get('email')?.errors?.['email']) {
        this.message = 'O email não está no formato correto';
      } else if (this.login.get('password')?.errors?.['required']) {
        this.message = 'A senha é obrigatória';
      }
    }

    return false;
  }
}
