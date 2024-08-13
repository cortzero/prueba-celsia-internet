package com.celsia.prueba.api.model;

import java.util.Optional;

public enum NombreServicio {

    INTERNET_200_MB("Internet 200 MB"),
    INTERNET_400_MB("Internet 400 MB"),
    INTERNET_600_MB("Internet 600 MB"),
    DIRECTV_GO("Directv Go"),
    PARAMOUNT("Paramount+"),
    WIN("Win+");

    private String nombre;

    NombreServicio(String nombre) {
        this.nombre = nombre;
    }

    public static Optional<NombreServicio> findByNombre(String nombre) {
        for (NombreServicio nombreServicio : values()) {
            if (nombreServicio.nombre.equalsIgnoreCase(nombre)) {
                return Optional.of(nombreServicio);
            }
        }
        return Optional.empty();
    }

    @Override
    public String toString() {
        return nombre;
    }

}
