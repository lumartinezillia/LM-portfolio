export class Proyecto {
    id: number;
    project: string;
    technologies: string;
    year: number;
    idPersona: number;

    constructor(id: number, project: string, technologies: string, year: number, idPersona: number) {
        this.id = id;
        this.project = project;
        this.technologies = technologies;
        this.year = year;
        this.idPersona = idPersona;
    }

    //pasar los atributos a privados y armar los setters y getters


}