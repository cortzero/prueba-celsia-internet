package com.celsia.prueba.api.service;

import com.celsia.prueba.api.model.Cliente;

import java.util.List;
import java.util.Optional;

public interface ClienteService {

    Cliente createCliente(Cliente cliente);
    void updateCliente(String identificacion, Cliente cliente);
    void deleteCliente(String identificacion);
    Cliente getCliente(String identificacion);
    List<Cliente> getClientes();
}
