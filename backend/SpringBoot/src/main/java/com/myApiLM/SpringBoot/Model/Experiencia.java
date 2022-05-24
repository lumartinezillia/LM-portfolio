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
public class Experiencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Basic
    String job;
    String company;
    Integer start;
    Integer end;
    Long idPersona;

    public Experiencia(Long id, String job, String company, Integer start, Integer end, Long idPersona) {
        this.id = id;
        this.job = job;
        this.company = company;
        this.start = start;
        this.end = end;
        this.idPersona = idPersona;
    }

    public Experiencia() {
    }

    
}
