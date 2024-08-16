package com.celsia.prueba.api.controller;

import com.celsia.prueba.api.model.NombreServicio;
import com.celsia.prueba.api.model.Servicio;
import com.celsia.prueba.api.service.ServicioService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/servicios")
@AllArgsConstructor
public class ServicioController {

    private final ServicioService servicioService;

    @PostMapping("/{clienteId}/{nombreServicio}")
    public ResponseEntity<String> createServicio(@PathVariable String clienteId,
                                                 @PathVariable String nombreServicio,
                                                 @Valid @RequestBody Servicio servicio, UriComponentsBuilder ucb) {
        Servicio createdServicio = servicioService.createServicio(clienteId, nombreServicio, servicio);
        URI newServicioLocation = ucb
                .path("/servicios/{clienteId}/{nombreServicio}")
                .buildAndExpand(
                        createdServicio.getServicioId().getIdentificacion(),
                        createdServicio.getServicioId().getNombreServicio())
                .toUri();
        return ResponseEntity.created(newServicioLocation).body("Se registró el servicio contratado por el cliente.");
    }

    @PutMapping("/{clienteId}/{nombreServicio}")
    public ResponseEntity<String> updateServicio(@PathVariable String clienteId,
                                                 @PathVariable String nombreServicio,
                                                 @Valid @RequestBody Servicio servicio) {
        servicioService.updateServicio(clienteId, nombreServicio, servicio);
        return ResponseEntity.ok("Se actualizó la información del servicio contratado por el cliente.");
    }

    @DeleteMapping("/{clienteId}/{nombreServicio}")
    public ResponseEntity<String> deleteServicio(@PathVariable String clienteId, @PathVariable String nombreServicio) {
        servicioService.deleteServicio(clienteId, nombreServicio);
        return ResponseEntity.ok("La información del servicio asociada con el cliente fue eliminada.");
    }

    @GetMapping("/{clienteId}/{nombreServicio}")
    public ResponseEntity<Servicio> getServicio(@PathVariable String clienteId, @PathVariable String nombreServicio) {
        return ResponseEntity.ok(servicioService.getServicio(clienteId, nombreServicio));
    }

    @GetMapping("/{clienteId}")
    public ResponseEntity<List<Servicio>> getServiciosByCliente(@PathVariable String clienteId) {
        return ResponseEntity.ok(servicioService.getServiciosByCliente(clienteId));
    }

    @GetMapping
    public ResponseEntity<List<Servicio>> getServiciosContratados() {
        return ResponseEntity.ok(servicioService.getServiciosContratados());
    }

    @GetMapping("nombres-servicios")
    public ResponseEntity<List<String>> getNombreServicios() {
        return ResponseEntity.ok(servicioService.getNombreServicios());
    }

}
