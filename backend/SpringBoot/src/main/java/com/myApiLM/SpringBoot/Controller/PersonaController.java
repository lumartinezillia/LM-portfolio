package com.myApiLM.SpringBoot.Controller;

import com.myApiLM.SpringBoot.Model.Persona;
import com.myApiLM.SpringBoot.Service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200/"})
public class PersonaController {

    @Autowired
    PersonaService personaService;

    @GetMapping("/persona/saludar")
    public String saludar(@RequestParam String nombre, @RequestParam String apellido) {
        return "Bienvenidos al capo de " + nombre + "" + apellido;
    }

    @PostMapping("/persona")
    public void crearPersona(@RequestBody Persona persona) {
        personaService.crearPersona(persona);
    }

    @DeleteMapping("/persona/{id}")
    public void borrarPersona(@PathVariable Long id) {
        personaService.borrarPersona(id);
    }

    @GetMapping("/persona/{id}")
    @ResponseBody
    public Persona obtenerPersona(@PathVariable Long id) {
        return personaService.obtenerPersona(id);
    }

    @PutMapping("/persona")
    public void modificarPersona(@RequestBody Persona persona) {
        personaService.modificarPersona(persona);
    }

}
