package com.celsia.prueba.api.service;

import com.celsia.prueba.api.exceptions.ClienteNotFoundException;
import com.celsia.prueba.api.exceptions.RegistryAlreadyExistsException;
import com.celsia.prueba.api.model.Cliente;
import com.celsia.prueba.api.repository.ClienteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ClienteServiceImp implements ClienteService {

    private final ClienteRepository clienteRepository;

    @Override
    public Cliente createCliente(Cliente cliente) {
        if (clienteRepository.existsById(cliente.getIdentificacion()))
            throw new RegistryAlreadyExistsException();
        return clienteRepository.save(cliente);
    }

    @Override
    public void updateCliente(String identificacion, Cliente cliente) {
        Cliente existingCliente = clienteRepository.findById(identificacion)
                .orElseThrow(() -> new ClienteNotFoundException(identificacion));
        existingCliente.setNombres(cliente.getNombres());
        existingCliente.setApellidos(cliente.getApellidos());
        existingCliente.setTipoIdentificacion(cliente.getTipoIdentificacion());
        existingCliente.setFechaNacimiento(cliente.getFechaNacimiento());
        existingCliente.setNumeroCelular(cliente.getNumeroCelular());
        existingCliente.setCorreoElectronico(cliente.getCorreoElectronico());
        clienteRepository.save(existingCliente);
    }

    @Override
    public void deleteCliente(String identificacion) {
        if (!clienteRepository.existsById(identificacion))
            throw new ClienteNotFoundException(identificacion);
        clienteRepository.deleteById(identificacion);
    }

    @Override
    public Cliente getCliente(String identificacion) {
        return clienteRepository.findById(identificacion)
                .orElseThrow(() -> new ClienteNotFoundException(identificacion));
    }

    @Override
    public List<Cliente> getClientes() {
        return clienteRepository.findAll();
    }

}
