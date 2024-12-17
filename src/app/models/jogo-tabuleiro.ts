import { Jogo } from "./jogo";


export class JogoTabuleiro extends Jogo {
    constructor(
        titulo: string,
        anoPublicacao: number,
        fabricante: string,
        public numeroJogadores: number
    ) {
        super(titulo, anoPublicacao, fabricante);
    }

    exibirRegras(): void {
        console.log(`Regras do jogo de tabuleiro: ${this.titulo}`);
    }
}
