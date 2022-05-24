package com.myApiLM.SpringBoot.Service;

import com.myApiLM.SpringBoot.Model.Persona;
import java.util.List;

public interface IPersonaService {

    public void crearPersona(Persona persona);

    public void borrarPersona(Long id);

    public List<Persona> listarPersonas();

    public void modificarPersona(Persona persona);

    public Persona obtenerPersona(Long id);
}
