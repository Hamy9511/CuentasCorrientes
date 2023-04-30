//PARA INICIAR ESTE PROYECTO YA QUE  ES POR MOSULOS , USAR EL COMANDO "npm init" en el powershell, esto crea un .json
//Para poder usar los modulos de JS colocar el comando "type" = "module" en el archivo json
import {Cliente} from "./Cliente.js"
import {CuentaCorriente} from "./CuentaCorriente.js"

const cliente = new Cliente ("leonardo", "12345", "24242424");
const cliente2 = new Cliente ("Maria", "242313256", "34535");


const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002" );

cuentaDeLeonardo.depositoEnCuenta(150);
let saldo = cuentaDeLeonardo.verSaldo(); 
console.log("El saldo actual (cuentaLeonardo)" + saldo);
cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria);
let saldoMaria = cuentaDeMaria.verSaldo();
console.log("El Saldo actual (cuentaMaria)" + saldoMaria);
let saldo2 = cuentaDeLeonardo.verSaldo();
console.log("El saldo actual (cuentaLeonardo)" + saldo2);

console.log(CuentaCorriente.cantidadCuentas);
