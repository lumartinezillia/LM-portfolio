export class Experiencia {
    id: number;
    job: string;
    company: string;
    start: number;
    end: number;
    idPersona:number;

    constructor(id: number, job: string, company: string, start: number, end: number, idPersona:number) {
        this.id = id;
        this.job = job;
        this.company = company;
        this.start = start;
        this.end = end;
        this.idPersona=idPersona;
    }

    //pasar los atributos a privados y armar los setters y getters

}