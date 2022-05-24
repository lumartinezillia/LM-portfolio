
package com.myApiLM.SpringBoot.Repository;

import com.myApiLM.SpringBoot.Model.Proyecto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectoRepository extends JpaRepository<Proyecto, Long>{
    public List<Proyecto> findByIdPersona(Long idPersona);
}
