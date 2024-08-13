package com.celsia.prueba.api.repository;

import com.celsia.prueba.api.model.Servicio;
import com.celsia.prueba.api.model.ServicioId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ServicioRepository extends JpaRepository<Servicio, ServicioId> {

    @Query(value = "SELECT s.* FROM servicios s WHERE s.identificacion = ?1", nativeQuery = true)
    List<Servicio> findByIdentificacion(String identificacion);

}
