package com.celsia.prueba.api.repository;

import com.celsia.prueba.api.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, String> {
}
