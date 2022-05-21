
package com.myApiLM.SpringBoot.Model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    long id;
    @Basic
    String fullName;
    String position;
    String ubication;
    String aboutMe;
    String image;
    String mail;

    public Persona() {
    }
        
    public Persona(long id, String fullName, String ubication, String position, String aboutMe, String image, String mail) {
        this.id = id;
        this.fullName = fullName;
        this.ubication = ubication;
        this.position = position;
        this.aboutMe = aboutMe;
        this.image = image;
        this.mail = mail;
    }


    
 
   
   
}
