package com.celsia.prueba.api.repository;

import com.celsia.prueba.api.model.Servicio;
import com.celsia.prueba.api.model.ServicioId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicioRepository extends JpaRepository<Servicio, ServicioId> {
}
