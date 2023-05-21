import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-eventos',
  templateUrl: './cadastro-eventos.component.html',
  styleUrls: ['./cadastro-eventos.component.css']
})
export class CadastroEventosComponent {
  deuErro = {
    verificador: false,
    mensagem: ""
  }

  cadastrarEvento() {
    this.deuErro.verificador = false;
    this.deuErro.mensagem = "";
  }

  // validarCamposObrigatórios = () => {
  //   let message = "";

  //   if (this.form.value.nome === null || this.form.value.nome === "") {
  //     message = "O campo nome do evento é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.tipo === null || this.form.value.tipo === "") {
  //     message = "O campo tipo de evento é obrigatório!"
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.logradouro === null || this.form.value.logradouro === "") {
  //     message = "O campo logradouro é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.endereco === null || this.form.value.endereco === "") {
  //     message = "O campo endereço é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.numero === null || this.form.value.numero === "") {
  //     message = "O campo número é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.complemento === null || this.form.value.complemento === "") {
  //     message = "O campo complemento é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.descricao === null || this.form.value.descricao === "") {
  //     message = "O campo descrição é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.idadeMin === null || this.form.value.idadeMin === "") {
  //     message = "O campo idade mínima é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.valor === null || this.form.value.valor === "") {
  //     message = "O campo valor do ingresso é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.data === null || this.form.value.data === "") {
  //     message = "O campo data do evento é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.inicio === null || this.form.value.inicio === "") {
  //     message = "O campo horário de início é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.encerramento === null || this.form.value.encerramento === "") {
  //     message = "O campo horário de encerramento é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.responsavel === null || this.form.value.responsavel === "") {
  //     message = "O campo responsável pelo evento é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   else if (this.form.value.observacoes === null || this.form.value.observacoes === "") {
  //     message = "O campo observações é obrigatório!";
  //     this.deuErro.verificador = true;
  //   }
  //   this.deuErro.mensagem = message;
  //   return this.deuErro.verificador;
  // }
}