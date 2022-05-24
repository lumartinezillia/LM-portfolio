
package com.myApiLM.SpringBoot.Service;

import com.myApiLM.SpringBoot.Model.Experiencia;
import com.myApiLM.SpringBoot.Repository.ExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienciaService {
    @Autowired
    ExperienciaRepository experienciaRepository;
    
    public List<Experiencia> obtenerRegistrosExperiencia(Long idPersona){
        return experienciaRepository.findByIdPersona(idPersona);
    }    
    
    public void eliminarExperiencia(Long id){
        experienciaRepository.deleteById(id);
    }
    public void modificarExperiencia(Experiencia experiencia) {
        experienciaRepository.save(experiencia);
    }
}
