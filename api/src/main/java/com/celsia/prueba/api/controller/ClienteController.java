package com.celsia.prueba.api.controller;

import com.celsia.prueba.api.model.Cliente;
import com.celsia.prueba.api.service.ClienteService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@AllArgsConstructor
public class ClienteController {

    private final ClienteService clienteService;

    @PostMapping
    public ResponseEntity<String> createCliente(@Valid @RequestBody Cliente cliente, UriComponentsBuilder ucb) {
        Cliente createdCliente = clienteService.createCliente(cliente);
        URI newClienteLocation =ucb
                .path("/clientes/{id}")
                .buildAndExpand(createdCliente.getIdentificacion())
                .toUri();
        return ResponseEntity.created(newClienteLocation).body("El cliente fue registrado correctamente.");
    }

    @PutMapping("/{identificacion}")
    public ResponseEntity<String> updateCliente(@Valid @PathVariable String identificacion, @RequestBody Cliente updateCliente) {
        clienteService.updateCliente(identificacion, updateCliente);
        return ResponseEntity.ok("La información del cliente fue actualizada.");
    }

    @DeleteMapping("/{identificacion}")
    public ResponseEntity<String> deleteCliente(@PathVariable String identificacion) {
        clienteService.deleteCliente(identificacion);
        return ResponseEntity.ok("El cliente fue eliminado correctamente.");
    }

    @GetMapping("/{identificacion}")
    public ResponseEntity<Cliente> getCliente(@PathVariable String identificacion) {
        return ResponseEntity.ok(clienteService.getCliente(identificacion));
    }

    @GetMapping
    public ResponseEntity<List<Cliente>> getClientes() {
        return ResponseEntity.ok(clienteService.getClientes());
    }

}
