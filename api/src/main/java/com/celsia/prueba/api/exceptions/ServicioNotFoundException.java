package com.celsia.prueba.api.exceptions;

public class ServicioNotFoundException extends RuntimeException {

    public ServicioNotFoundException(String nombre) {
        super("El servicio con el nombre " + nombre + " no fue encontrado.");
    }
}
