import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  email: string;
  password: string;
  message: string;

  constructor(private http: HttpClient) {
    this.email = '';
    this.password = '';
    this.message = '';
  }

  async submitForm() {
    const url = 'http://localhost:3000/login';
    const body = { email: this.email, password: this.password };
    const response = await this.http.post(url, body).toPromise();
    console.log(response)
  }
}
