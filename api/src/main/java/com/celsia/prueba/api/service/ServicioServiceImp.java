package com.celsia.prueba.api.service;

import com.celsia.prueba.api.exceptions.ClienteNotFoundException;
import com.celsia.prueba.api.exceptions.RegistryAlreadyExistsException;
import com.celsia.prueba.api.exceptions.ServicioNotFoundException;
import com.celsia.prueba.api.model.Cliente;
import com.celsia.prueba.api.model.NombreServicio;
import com.celsia.prueba.api.model.Servicio;
import com.celsia.prueba.api.model.ServicioId;
import com.celsia.prueba.api.repository.ClienteRepository;
import com.celsia.prueba.api.repository.ServicioRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@AllArgsConstructor
public class ServicioServiceImp implements ServicioService {

    private final ServicioRepository servicioRepository;
    private final ClienteRepository clienteRepository;

    @Override
    public Servicio createServicio(String clienteId, String nombreServicio, Servicio servicio) {
        Cliente existingCliente = getExistingCliente(clienteId);
        NombreServicio existingNombreServicio = getExistingNombreServicio(nombreServicio);
        ServicioId servicioId = ServicioId.builder()
                .identificacion(existingCliente.getIdentificacion())
                .nombreServicio(existingNombreServicio)
                .build();
        servicio.setServicioId(servicioId);
        servicio.setCliente(existingCliente);
        if (servicioRepository.existsById(servicio.getServicioId()))
            throw new RegistryAlreadyExistsException();
        return servicioRepository.save(servicio);
    }

    @Override
    public void updateServicio(String clienteId, String nombreServicio, Servicio servicio) {
        Cliente existingCliente = getExistingCliente(clienteId);
        NombreServicio existingNombreServicio = getExistingNombreServicio(nombreServicio);
        Servicio existingServicio = getExistingServicio(existingCliente, existingNombreServicio);

        existingServicio.setFechaInicio(servicio.getFechaInicio());
        existingServicio.setUltimaFacturacion(servicio.getUltimaFacturacion());
        existingServicio.setUltimoPago(servicio.getUltimoPago());
        servicioRepository.save(existingServicio);
    }

    @Override
    public void deleteServicio(String clienteId, String nombreServicio) {
        Cliente existingCliente = getExistingCliente(clienteId);
        NombreServicio existingNombreServicio = getExistingNombreServicio(nombreServicio);
        Servicio existingServicio = getExistingServicio(existingCliente, existingNombreServicio);
        servicioRepository.delete(existingServicio);
    }

    @Override
    public Servicio getServicio(String clienteId, String nombreServicio) {
        Cliente existingCliente = getExistingCliente(clienteId);
        NombreServicio existingNombreServicio = getExistingNombreServicio(nombreServicio);
        return getExistingServicio(existingCliente, existingNombreServicio);
    }

    @Override
    public List<Servicio> getServiciosByCliente(String clienteId) {
        Cliente existingCliente = getExistingCliente(clienteId);
        return servicioRepository.findByIdentificacion(existingCliente.getIdentificacion());
    }

    @Override
    public List<Servicio> getServiciosContratados() {
        return servicioRepository.findAll();
    }

    @Override
    public List<String> getNombreServicios() {
        return Stream.of(NombreServicio.values())
                .map(NombreServicio::toString)
                .toList();
    }

    private Cliente getExistingCliente(String clienteId) {
        return clienteRepository.findById(clienteId)
                .orElseThrow(() -> new ClienteNotFoundException(clienteId));
    }

    private NombreServicio getExistingNombreServicio(String nombreServicio) {
        nombreServicio = nombreServicio.replace("-", " ");
        String finalNombreServicio = nombreServicio;
        return NombreServicio.findByNombre(nombreServicio)
                .orElseThrow(() -> new ServicioNotFoundException(finalNombreServicio));
    }

    private Servicio getExistingServicio(Cliente existingCliente, NombreServicio existingNombreServicio) {
        ServicioId servicioId = ServicioId.builder()
                .identificacion(existingCliente.getIdentificacion())
                .nombreServicio(existingNombreServicio)
                .build();

        return servicioRepository.findById(servicioId)
                .orElseThrow(() -> new IllegalArgumentException("El cliente no ha contratado este servicio."));
    }

}
