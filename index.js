//PARA INICIAR ESTE PROYECTO YA QUE  ES POR MOSULOS , USAR EL COMANDO "npm init" en el powershell, esto crea un .json
//Para poder usar los modulos de JS colocar el comando "type" = "module" en el archivo json
import {Cliente} from "./Cliente.js"
import {CuentaCorriente} from "./Cuentas/CuentaCorriente.js"
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js"
import { Cuenta } from "./Cuentas/Cuenta.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";

const cliente = new Cliente ("leonardo", "12345", "24242424");
const cliente2 = new Cliente ("Maria", "242313256", "34535");


const cuentaCorrienteLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002" );
const cuentaDeAhorroLeonardo = new CuentaAhorro(cliente, "2455", "001", 0);
const cuentaNominaLeonardo = new CuentaNomina(cliente, "4423423", "001", 100);

cuentaNominaLeonardo.depositoEnCuenta(150);
console.log(cuentaNominaLeonardo.verSaldo());
cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());
