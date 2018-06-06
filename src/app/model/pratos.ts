export class Pratos{
 
    public idRestaurante: any;
    public idPrato : number;
    public nomePrato : string;
    public valorPrato : number;

    constructor(p){
        this.idPrato = p.idPrato != null ? p.idPrato : null;
        this.nomePrato = p.nomePrato != null ? p.nomePrato : null;
        this.valorPrato = p.valorPrato != null ? p.valorPrato : null;
        this.idRestaurante = p.idRestaurante != null ? p.idRestaurante : null;
    }
}