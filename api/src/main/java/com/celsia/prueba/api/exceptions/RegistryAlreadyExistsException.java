package com.celsia.prueba.api.exceptions;

public class RegistryAlreadyExistsException extends RuntimeException {

    public RegistryAlreadyExistsException() {
        super("El registro ya existe.");
    }
}
