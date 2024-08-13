package com.celsia.prueba.api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "servicios")
@Data
@AllArgsConstructor
public class Servicio {

    @EmbeddedId
    private ServicioId servicioId;

    @Column(name = "fechaInicio", nullable = false)
    private LocalDate fechaInicio;

    @Column(name = "ultimaFacturacion", nullable = false)
    private LocalDate ultimaFacturacion;

    @Column(name = "ultimoPago", nullable = false)
    private Integer ultimoPago;

    @MapsId("cliente")
    @JoinColumn(name = "identificacion", referencedColumnName = "identificacion")
    @ManyToOne(cascade = CascadeType.MERGE)
    private Cliente cliente;

}
