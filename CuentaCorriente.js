import { Cliente } from "./Cliente.js";


export /*Para exportar la clase*/ class CuentaCorriente //Claases usada para lo que va hacer la cuebnta corriente
{
    //ATRIBUTOS DE LA CLASE CUENTACORRIENTE
    #cliente;
    numero;
    #saldo; //Vuelve el atributo privado, quiere decir que solo se declara con la clase.
    agencia;

    //SET Y GET PROTEGEN EL CODIGO DE DAÑOS
    set cliente(valor){ //para acceder a valores privados
        if(valor instanceof Cliente) //Este cliente viene de la clase Cliente 
        this.#cliente = valor;
    } 

    get cliente() { //obtener nuestro atributo provador
        return this.#cliente;
    }
    //CONSTRUCTOR QUE INICIA CUANDO LA INSTANCIA INICIA
    constructor() { //Sirve para que al iniciar esta parte del codigo ya este definido los valores
        this.#cliente = null;
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
    }

    //METODOS DE LAS CLASES
    depositoEnCuenta(valor) {  //Para depositar dinero
        if (valor > 0) //No permite el deposito si es numeor negativo
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) { //Para reitrar dinero
        if (valor <= this.#saldo)//Para que los retiros no den negativo
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() { //Visualizar saldo
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino){ //Funcio que sirve para transferir dinero de una cuenta a otra
        //Valor es un parametro de valor y cuentaDestino es de referencia es decir que el valor no puede ser modificado por la "caja" que esta funcion
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}
