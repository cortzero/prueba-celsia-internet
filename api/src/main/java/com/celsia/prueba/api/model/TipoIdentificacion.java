package com.celsia.prueba.api.model;

import java.util.HashMap;
import java.util.Map;

public enum TipoIdentificacion {

    CEDULA("Cédula de ciudadania"),
    TARJETA_IDENTIDAD("Tarjeta de identidad"),
    CEDULA_EXTRANJERIA("Cédula de extranjeria"),
    REGISTRO_CIVIL("Registro civil");

    private String tipo;

    TipoIdentificacion(String tipo) {
        this.tipo = tipo;
    }

    public static Map<String, String> getNombresDeTipos() {
        Map<String, String> nombres = new HashMap<>();
        for (TipoIdentificacion tipoIdentificacion : values()) {
            nombres.put(tipoIdentificacion.toString(), tipoIdentificacion.tipo);
        }
        return nombres;
    }

}
