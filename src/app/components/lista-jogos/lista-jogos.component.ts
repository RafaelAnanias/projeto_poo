import { Component, OnInit } from '@angular/core';
import { JogoService } from '../../service/jogo.service';
import { Jogo } from '../../models/jogo';

@Component({
  selector: 'app-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.css']
})
export class ListaJogosComponent implements OnInit {
  jogos: Jogo[] = [];

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.jogos = this.jogoService.getJogos();
  }

  removerJogo(titulo: string): void {
    this.jogoService.removeJogo(titulo);
    this.jogos = this.jogoService.getJogos();
  }
}
