import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  listaEventos: any = [
    {
      nome: "Festa Av. Angélica",
      data: "02/04/2023",
      horario: "22:00 - 06:00",
      local: "Av. Angélica, 2565 - Bela Vista, São Paulo - SP, 01227-200",
      imagem: "https://i.pinimg.com/736x/6f/47/ce/6f47cefb1dac4b8337b4028286240d37.jpg",
      preco: 200
    },
    {
      nome: "Festa Av. Paulista",
      data: "02/04/2023",
      horario: "22:30 - 05:00",
      local: "Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200",
      imagem: "https://diskbebidasbh.com.br/wp-content/uploads/2017/04/7-expectativas-do-publico-para-um-evento-575x380.jpg",
      preco: 150
    },
    {
      nome: "Festa Rua Augusta",
      data: "02/04/2023",
      horario: "23:00 - 08:00",
      local: "R. Augusta, 773 - Consolação, São Paulo - SP, 01305-100",
      imagem: "https://i.pinimg.com/736x/6f/47/ce/6f47cefb1dac4b8337b4028286240d37.jpg",
      preco: 400
    }
  ]

}
