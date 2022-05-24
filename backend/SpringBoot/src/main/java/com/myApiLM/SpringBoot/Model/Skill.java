package com.myApiLM.SpringBoot.Model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @Basic
    String skill;
    Integer percentage;
    Long idPersona;

    public Skill() {
    }

    public Skill(long id, String skill, Integer percentage, Long idPersona) {
        this.id = id;
        this.skill = skill;
        this.percentage = percentage;
        this.idPersona = idPersona;
    }

}
