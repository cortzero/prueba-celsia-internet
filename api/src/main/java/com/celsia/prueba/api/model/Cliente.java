package com.celsia.prueba.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "clientes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cliente {

    @Id
    @Column(name = "identificacion", nullable = false)
    @NotBlank(message = "El número de identificación es obligatorio")
    private String identificacion;

    @Column(name = "nombres", nullable = false)
    @NotBlank(message = "Los nombres son obligatorios")
    private String nombres;

    @Column(name = "apellidos", nullable = false)
    @NotBlank(message = "Los apellidos son obligatorios")
    private String apellidos;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipoIdentificacion", nullable = false)
    @NotNull(message = "Seleccione el tipo de identificación")
    private TipoIdentificacion tipoIdentificacion;

    @Column(name = "fechaNacimiento", nullable = false)
    @NotNull(message = "Seleccione una fecha de nacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "numeroCelular", nullable = false)
    @NotBlank(message = "El número de celular es obligatorio")
    private String numeroCelular;

    @Column(name = "correoElectronico", nullable = false)
    @NotBlank(message = "El correo electrónico es obligatorio")
    private String correoElectronico;

    @OneToMany(mappedBy = "cliente")
    private Set<Servicio> servicios;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cliente cliente = (Cliente) o;
        return Objects.equals(identificacion, cliente.identificacion)
                && Objects.equals(nombres, cliente.nombres)
                && Objects.equals(apellidos, cliente.apellidos);
    }

    @Override
    public int hashCode() {
        return Objects.hash(identificacion, nombres, apellidos);
    }
}
