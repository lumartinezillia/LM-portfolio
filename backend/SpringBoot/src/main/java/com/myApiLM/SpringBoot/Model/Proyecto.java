
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
public class Proyecto {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    long id;
    @Basic
    String project;
    String technologies;
    Integer year;
    Long idPersona;

    public Proyecto() {
    }
        
    public Proyecto(long id, String project, String technologies, Integer year, Long idPersona) {
        this.id = id;
        this.project = project;
        this.technologies = technologies;
        this.year = year;
        this.idPersona = idPersona;
    }


    
 
   
   
}
