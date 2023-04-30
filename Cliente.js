/*Definición de clases*/


export class Cliente  //clase usada para ls datos del cliente
{
    //ATRIBUTOS DE LA CLASE CLEINTE
    nombreCliente;
    dniCliente;
    rutCliente;

    constructor(nombreCliente, dniCliente, rutCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
    }
}
