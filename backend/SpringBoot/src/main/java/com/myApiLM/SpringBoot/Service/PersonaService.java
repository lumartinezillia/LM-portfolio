package com.myApiLM.SpringBoot.Service;

import com.myApiLM.SpringBoot.Model.Persona;
import com.myApiLM.SpringBoot.Repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PersonaService implements IPersonaService {

    @Autowired
    PersonaRepository personaRepository;
    
    @Override
    public void crearPersona(Persona persona) {
        personaRepository.save(persona);
    }

    @Override
    public void borrarPersona(Long id) {
        personaRepository.deleteById(id);
    }
    
    @Override
    public List<Persona> listarPersonas() {
        return personaRepository.findAll();
    }

    @Override
        public void modificarPersona(Long id) {
       
    }

    @Override
    public Persona buscarPersonaPorId(Long id) {
       personaRepository.findById(id);
        return null;
    }
}
