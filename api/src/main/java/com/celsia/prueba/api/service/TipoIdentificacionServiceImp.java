package com.celsia.prueba.api.service;

import com.celsia.prueba.api.model.TipoIdentificacion;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class TipoIdentificacionServiceImp implements TipoIdentificacionService {

    @Override
    public Map<String, String> getNombresTipoIdentificacion() {
        return TipoIdentificacion.getNombresDeTipos();
    }

}
