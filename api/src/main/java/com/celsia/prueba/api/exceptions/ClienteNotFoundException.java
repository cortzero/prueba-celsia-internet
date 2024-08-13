package com.celsia.prueba.api.exceptions;

public class ClienteNotFoundException extends RuntimeException {

    public ClienteNotFoundException(String idntificacion) {
        super("El cliente con la identificacion " + idntificacion + " no fue encontrado");
    }
}
