export class Restaurante {
    public idRestaurante : number;
    public nomeRestaurante: string;

    constructor(r){
        this.idRestaurante = r.idRestaurante != null ? r.idRestaurante : null;
        this.nomeRestaurante = r.nomeRestaurante != null ? r.nomeRestaurante : null;
    }
}