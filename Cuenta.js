export class Cuenta{
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo){
        if(this.constructor == Cuenta){
            throw new error("No se debe de instanciar la clase cuenta"); //lanza un error y detiene la comliacion del codigo
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo =saldo;
    }
    set cliente(valor){ //para acceder a valores privados
        if(valor instanceof Cliente) //Este cliente viene de la clase Cliente 
        this.#cliente = valor;
    } 

    get cliente() { //obtener nuestro atributo provador
        return this.#cliente;
    }

        depositoEnCuenta(valor) {  
            if (valor > 0) 
                this.#saldo += valor;
            return this.#saldo;
        }

        retirarDeCuenta(valor){ //Lo convertimos en un metodo abstracto
            throw error("Debe de implementar retirarDeCuenta y la comision dentro de la clase"); 
        }
    
        _retirarDeCuenta(valor,comision) {
            valor = valor*(1+comision/100);
            if (valor <= this.#saldo)
                this.#saldo -= valor;
            return this.#saldo;
        }
    
        verSaldo() { 
            return this.#saldo;
        }
    
        transferirParaCuenta(valor,cuentaDestino){ 
            this.retirarDeCuenta(valor);
            cuentaDestino.depositoEnCuenta(valor);
            valor =200;
            valor = valor*1000;
        }
}