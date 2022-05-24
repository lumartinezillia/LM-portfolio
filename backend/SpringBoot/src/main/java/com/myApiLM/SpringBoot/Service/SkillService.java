package com.myApiLM.SpringBoot.Service;

import com.myApiLM.SpringBoot.Model.Skill;
import com.myApiLM.SpringBoot.Repository.SkillRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillService {

    @Autowired
    SkillRepository skillRepository;

    public List<Skill> obtenerRegistrosSkill(Long idPersona) {
        return skillRepository.findByIdPersona(idPersona);
    }

    public void eliminarSkill(Long id) {
        skillRepository.deleteById(id);
    }

    public void modificarSkill(Skill skill) {
        skillRepository.save(skill);
    }
}
