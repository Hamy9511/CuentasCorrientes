export class SistemaAutentificacion {
    static login(usuario,clave){ //Fucnion statica porque se ejecutara una vez
        if("autenticable" in usuario && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);
        else 
            return false;
    }
}