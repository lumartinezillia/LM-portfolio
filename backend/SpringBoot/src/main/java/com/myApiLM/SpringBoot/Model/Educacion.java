package com.myApiLM.SpringBoot.Model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Getter  @Setter
@Entity
public class Educacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Basic
    String school;
    String title;
    String img;
    String career;
    Integer start;
    Integer end;
    Long idPersona;

    public Educacion(Long id, String school, String title, String img, String career, Integer start, Integer end, Long idPersona) {
        this.id = id;
        this.school = school;
        this.title = title;
        this.img = img;
        this.career = career;
        this.start = start;
        this.end = end;
        this.idPersona = idPersona;
    }

    public Educacion() {
    }

    
}
