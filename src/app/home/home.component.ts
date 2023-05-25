import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient, private router: Router) { }

  listaEventos: any = [
    {
      id_evento: 1,
      nome: "Festa Av. Angélica",
      data: "02/04/2023",
      horario: "22:00 - 06:00",
      local: "Av. Angélica, 2565 - Bela Vista, São Paulo - SP, 01227-200",
      imagem: "https://i.pinimg.com/736x/6f/47/ce/6f47cefb1dac4b8337b4028286240d37.jpg",
      preco: 200
    },
    { 
      id_evento: 2,
      nome: "Festa Av. Paulista",
      data: "02/04/2023",
      horario: "22:30 - 05:00",
      local: "Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200",
      imagem: "https://diskbebidasbh.com.br/wp-content/uploads/2017/04/7-expectativas-do-publico-para-um-evento-575x380.jpg",
      preco: 150
    },
    { 
      id_evento: 3,
      nome: "Festa Rua Augusta",
      data: "02/04/2023",
      horario: "23:00 - 08:00",
      local: "R. Augusta, 773 - Consolação, São Paulo - SP, 01305-100",
      imagem: "https://i.pinimg.com/736x/6f/47/ce/6f47cefb1dac4b8337b4028286240d37.jpg",
      preco: 400
    }
  ]

  processar_compra(id_evento: number) {
    const body = { id_evento: id_evento };
    return this.http.post('http://localhost:3000/ingressos/processar_compra', body).subscribe(
        (res: any) => {
          if(res.status == 200){
            alert(res.msg);
            this.router.navigate(['/login']);
          } else {
            alert(res.msg);
          }
        },
        (err) => {
          alert("Erro. Tente novamente mais tarde!");
        }
      );
  }

}
