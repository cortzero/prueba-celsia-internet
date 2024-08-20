package com.celsia.prueba.api.controller;

import com.celsia.prueba.api.service.TipoIdentificacionService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/tipos-identificacion")
@AllArgsConstructor
public class TipoIdentificacionController {

    private final TipoIdentificacionService service;

    @GetMapping
    public ResponseEntity<Map<String, String>> getTiposIdentificacion() {
        return ResponseEntity.ok(service.getNombresTipoIdentificacion());
    }

}
