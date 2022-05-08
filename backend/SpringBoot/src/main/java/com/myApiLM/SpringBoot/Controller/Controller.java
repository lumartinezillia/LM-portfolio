package com.myApiLM.SpringBoot.Controller;

import com.myApiLM.SpringBoot.Model.Persona;
import com.myApiLM.SpringBoot.Service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    PersonaService personaService;

    @PostMapping("/persona")
    public void crearPersona(@RequestBody Persona persona) {
        personaService.crearPersona(persona);
    }
        
    @DeleteMapping("/persona/{id}")
    public void borrarPersona(@PathVariable Long id) {
        personaService.borrarPersona(id);
    }

    @GetMapping("/persona/saludar/{nombre}")
    public String saludar(@PathVariable String nombre) {
        return "Bienvenidos putos y " + nombre;
    }

    @GetMapping("/persona/saludar")
    public String saludar(@RequestParam String nombre, @RequestParam String apellido) {
        return "Bienvenidos al capo de " + nombre + "" + apellido;
    }


}
