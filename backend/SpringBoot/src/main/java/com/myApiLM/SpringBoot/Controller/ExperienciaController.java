
package com.myApiLM.SpringBoot.Controller;

import com.myApiLM.SpringBoot.Model.Experiencia;
import com.myApiLM.SpringBoot.Service.ExperienciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200/"})
public class ExperienciaController {
   
@Autowired 
ExperienciaService experienciaService;

@GetMapping("/experiencia/{idPersona}")
public List<Experiencia> obtenerRegistrosExperiencia(@PathVariable Long idPersona){
     return experienciaService.obtenerRegistrosExperiencia(idPersona);
 } 

@DeleteMapping("/experiencia/{id}")
public void eliminarExperiencia(@PathVariable Long id){
    experienciaService.eliminarExperiencia(id);
}
@PutMapping("/experiencia")
    public void modificarExperiencia(@RequestBody Experiencia experiencia) {
        experienciaService.modificarExperiencia(experiencia);
    }
    
}
