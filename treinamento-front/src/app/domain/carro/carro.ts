import { Garagem } from './../garagem/garagem';
import { CarroModule } from './carro.module';

export class Carro {
    id: number;
    fabricante: string;
    versao: string;
    descricao: string;
    cor: string;
    valor: string;
    modelo: string;
    garagem: Garagem;
}
