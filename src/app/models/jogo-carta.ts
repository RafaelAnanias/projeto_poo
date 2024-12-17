import { Jogo } from "./jogo";

export class JogoCarta extends Jogo {
    constructor(
        titulo: string,
        anoPublicacao: number,
        fabricante: string,
        public idadeMinima: number
    ) {
        super(titulo, anoPublicacao, fabricante);
    }

    exibirRegras(): void {
        console.log(`Regras do jogo de carta: ${this.titulo}`);
    }
}
