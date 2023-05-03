export class SistemaAutentificacion {
    static login(usuario,clave){ //Fucnion statica porque se ejecutara una vez
        return usuario.autenticable(clave);
    }
}