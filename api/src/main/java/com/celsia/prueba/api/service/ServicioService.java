package com.celsia.prueba.api.service;

import com.celsia.prueba.api.model.NombreServicio;
import com.celsia.prueba.api.model.Servicio;

import java.util.List;

public interface ServicioService {

    Servicio createServicio(String clienteId, String nombreServicio, Servicio servicio);
    void updateServicio(String clienteId, String nombreServicio, Servicio servicio);
    void deleteServicio(String clienteId, String nombreServicio);
    Servicio getServicio(String clienteId, String nombreServicio);
    List<Servicio> getServiciosByCliente(String clienteId);
    List<Servicio> getServiciosContratados();
    List<String> getNombreServicios();

}
