package com.celsia.prueba.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "servicios")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Servicio {

    @EmbeddedId
    private ServicioId servicioId;

    @Column(name = "fechaInicio", nullable = false)
    private LocalDate fechaInicio;

    @Column(name = "ultimaFacturacion", nullable = false)
    private LocalDate ultimaFacturacion;

    @Column(name = "ultimoPago", nullable = false)
    private Integer ultimoPago;

    @MapsId("identificacion")
    @JoinColumn(name = "identificacion")
    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnore
    private Cliente cliente;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Servicio servicio = (Servicio) o;
        return Objects.equals(servicioId, servicio.servicioId);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(servicioId);
    }
}
