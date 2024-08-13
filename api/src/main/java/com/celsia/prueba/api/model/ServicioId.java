package com.celsia.prueba.api.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Getter
@Builder
public class ServicioId implements Serializable {

    @Column(name = "identificacion")
    private String identificacion;

    @Enumerated(EnumType.STRING)
    @Column(name = "servicio", nullable = false)
    private NombreServicio nombreServicio;

}
