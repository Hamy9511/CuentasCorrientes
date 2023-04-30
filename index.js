//PARA INICIAR ESTE PROYECTO YA QUE  ES POR MOSULOS , USAR EL COMANDO "npm init" en el powershell, esto crea un .json
//Para poder usar los modulos de JS colocar el comando "type" = "module" en el archivo json
import {Cliente} from "./Cliente.js"
import {CuentaCorriente} from "./CuentaCorriente.js"

const cliente = new Cliente ();
cliente.nombreCliente = "Leonardo";
cliente.dniCliente = "12234242";
cliente.rutCliente = "2324";

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero ="1";
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;

const cliente2 = new Cliente ();
cliente2.nombreCliente = "Maria";
cliente2.dniCliente = "353353";
cliente2.rutCliente = "3534534";

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero ="2";
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

//cuentaDeLeonardo.#saldo = 10;

cuentaDeLeonardo.depositoEnCuenta(150);
let saldo = cuentaDeLeonardo.verSaldo(); 
console.log("El saldo actual (cuentaLeonardo)" + saldo);

cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria);

let saldoMaria = cuentaDeMaria.verSaldo();

console.log("El Saldo actual (cuentaMaria)" + saldoMaria);

let saldo2 = cuentaDeLeonardo.verSaldo();
console.log("El saldo actual (cuentaLeonardo)" + saldo2);