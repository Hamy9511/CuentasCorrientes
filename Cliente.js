/*Definición de clases*/


export class Cliente  //clase usada para ls datos del cliente
{
    //ATRIBUTOS DE LA CLASE CLEINTE
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = "";
    }

    asignarClave(clave){
        this.#clave = clave;
    }
    autenticable(clave){
        return clave == this.#clave;
        }
    get clave(){
        return this.#clave;
    }
}
