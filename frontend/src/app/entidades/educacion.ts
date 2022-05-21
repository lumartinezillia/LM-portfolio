export class Educacion {
  

    id:number;
    title: string;
    school: string;
    start: number;
    end: number;
    img:string;
    career: string;
    idPersona:number;

    constructor (id:number,title:string,school:string, img:string,start:number,end:number, career:string , idPersona:number )
    {
        this.id=id;
        this.title=title;   
        this.school=school;
        this.img=img;
        this.start=start;
        this.end=end;
        this.career=career;
        this.idPersona=idPersona;
    }

}