import { Component } from '@angular/core';
import { JogoService } from '../../service/jogo.service';
import { JogoTabuleiro } from '../../models/jogo-tabuleiro';
import { JogoCarta } from '../../models/jogo-carta';

@Component({
  selector: 'app-adicionar-jogo',
  templateUrl: './adicionar-jogo.component.html',
  styleUrls: ['./adicionar-jogo.component.css']
})
export class AdicionarJogoComponent {
  jogoTipo: string = 'tabuleiro';
  titulo: string = '';
  anoPublicacao: number = 0;
  fabricante: string = '';
  numeroJogadores: number = 0;
  idadeMinima: number = 0;

  constructor(private jogoService: JogoService) { }

  addJogo(): void {
    if (this.jogoTipo === 'tabuleiro') {
      const novoJogo = new JogoTabuleiro(this.titulo, this.anoPublicacao, this.fabricante, this.numeroJogadores);
      this.jogoService.addJogo(novoJogo);
    } else if (this.jogoTipo === 'carta') {
      const novoJogo = new JogoCarta(this.titulo, this.anoPublicacao, this.fabricante, this.idadeMinima);
      this.jogoService.addJogo(novoJogo);
    }
    // Resetar formulário
    this.titulo = '';
    this.anoPublicacao = 0;
    this.fabricante = '';
    this.numeroJogadores = 0;
    this.idadeMinima = 0;
  }
}
