export class Persona {
    id: number;
    fullName: string;
    position: string;
    ubication: string;
    aboutMe: string;
    image: string;
    mail: string;

    constructor(id: number, fullName: string, position: string, ubication: string, aboutMe: string, image: string, mail: string) {
        this.id = id;
        this.fullName = fullName;
        this.position = position;
        this.ubication = ubication;
        this.aboutMe = aboutMe;
        this.image = image;
        this.mail = mail;
    }
}