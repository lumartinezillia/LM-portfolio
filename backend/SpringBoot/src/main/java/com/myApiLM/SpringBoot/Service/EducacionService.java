
package com.myApiLM.SpringBoot.Service;

import com.myApiLM.SpringBoot.Model.Educacion;
import com.myApiLM.SpringBoot.Model.Persona;
import com.myApiLM.SpringBoot.Repository.EducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducacionService {
    @Autowired
    EducacionRepository educacionRepository;
    
    public List<Educacion> obtenerRegistrosEducacion(Long idPersona){
        return educacionRepository.findByIdPersona(idPersona);
    }    
    
    public void eliminarEducacion(Long id){
        educacionRepository.deleteById(id);
    }
    public void modificarEducacion(Educacion educacion) {
        educacionRepository.save(educacion);
    }
}
