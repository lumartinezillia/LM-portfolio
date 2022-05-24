
package com.myApiLM.SpringBoot.Service;

import com.myApiLM.SpringBoot.Model.Proyecto;
import com.myApiLM.SpringBoot.Repository.ProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectoService {
    @Autowired
    ProyectoRepository proyectoRepository;
    
    public List<Proyecto> obtenerRegistrosProyecto(Long idPersona){
        return proyectoRepository.findByIdPersona(idPersona);
    }    
    
    public void eliminarProyecto(Long id){
        proyectoRepository.deleteById(id);
    }
    public void modificarProyecto(Proyecto proyecto) {
        proyectoRepository.save(proyecto);
    }
}
