// src/app/services/jogo.service.ts
import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo';
import { JogoTabuleiro } from '../models/jogo-tabuleiro';
import { JogoCarta } from '../models/jogo-carta';


@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private jogos: Jogo[] = [];

  constructor() {
    // Dados de exemplo
    this.jogos.push(new JogoTabuleiro('Catan', 1995, 'Kosmos', 4));
    this.jogos.push(new JogoCarta('Uno', 1971, 'Mattel', 7));
  }

  getJogos(): Jogo[] {
    return this.jogos;
  }

  addJogo(jogo: Jogo): void {
    this.jogos.push(jogo);
  }

  removeJogo(titulo: string): void {
    this.jogos = this.jogos.filter(j => j.titulo !== titulo);
  }
}
