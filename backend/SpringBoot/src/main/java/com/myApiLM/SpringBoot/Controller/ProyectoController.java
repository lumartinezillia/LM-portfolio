
package com.myApiLM.SpringBoot.Controller;

import com.myApiLM.SpringBoot.Model.Proyecto;
import com.myApiLM.SpringBoot.Service.ProyectoService;
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
public class ProyectoController {
   
@Autowired 
ProyectoService proyectoService;

@GetMapping("/proyecto/{idPersona}")
public List<Proyecto> obtenerRegistrosProyecto(@PathVariable Long idPersona){
     return proyectoService.obtenerRegistrosProyecto(idPersona);
 } 

@DeleteMapping("/proyecto/{id}")
public void eliminarProyecto(@PathVariable Long id){
    proyectoService.eliminarProyecto(id);
}
@PutMapping("/proyecto")
    public void modificarProyecto(@RequestBody Proyecto proyecto) {
        proyectoService.modificarProyecto(proyecto);
    }
    
}
