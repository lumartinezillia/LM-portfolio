
package com.myApiLM.SpringBoot.Controller;

import com.myApiLM.SpringBoot.Model.Skill;
import com.myApiLM.SpringBoot.Service.SkillService;
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
public class SkillController {
   
@Autowired 
SkillService skillService;

@GetMapping("/skill/{idPersona}")
public List<Skill> obtenerRegistrosSkill(@PathVariable Long idPersona){
     return skillService.obtenerRegistrosSkill(idPersona);
 } 

@DeleteMapping("/skill/{id}")
public void eliminarSkill(@PathVariable Long id){
    skillService.eliminarSkill(id);
}
@PutMapping("/skill")
    public void modificarSkill(@RequestBody Skill skill) {
        skillService.modificarSkill(skill);
    }
    
}
