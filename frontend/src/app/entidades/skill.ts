export class Skill {
    id: number;
    skill: string;
    percentage: number;
    idPersona: number;

    constructor(id: number, skill: string, percentage: number, idPersona: number) {
        this.id = id;
        this.skill = skill;
        this.percentage = percentage;
        this.idPersona = idPersona;
    }
    //pasar los atributos a privados y armar los setters y getters
}