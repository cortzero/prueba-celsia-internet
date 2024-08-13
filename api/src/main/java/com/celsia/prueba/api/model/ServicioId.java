package com.celsia.prueba.api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Getter
public class ServicioId implements Serializable {

    @ManyToOne
    @JoinColumn(name = "identificacion", referencedColumnName = "identificacion")
    private Cliente cliente;

    @Enumerated(EnumType.STRING)
    @Column(name = "servicio", nullable = false)
    private NombreServicio nombreServicio;

}
