function Chofer(datosDelChofer){
    this.apellido = datosDelChofer.apellido;
    this.nombre = datosDelChofer.nombre;
    this.legajo = datosDelChofer.legajo;
    this.turno = datosDelChofer.turno;
    this.cocheEfectivo = datosDelChofer.cocheEfectivo;
}

const choferCoche1TurnoM = {
    apellido: "Alfonso",
    nombre: "Franco",
    legajo: "3100",
    turno: "Mañana",
    cocheEfectivo: 1
}
const chofer1 = new Chofer(choferCoche1TurnoM);

const choferCoche2TurnoM = {
    apellido: "Alfonso",
    nombre: "Franco",
    legajo: "3100",
    turno: "Mañana",
    cocheEfectivo: 2
}
const chofer2 = new Chofer(choferCoche2TurnoM);

const choferCoche3TurnoM = {
    apellido: "Soto",
    nombre: "Ariel",
    legajo: "2939",
    turno: "Mañana",
    cocheEfectivo: 3
}
const chofer3 = new Chofer(choferCoche3TurnoM);

const choferCoche1TurnoT = {
    apellido: "Torrez",
    nombre: "Kevin",
    legajo: "3082",
    turno: "Tarde",
    cocheEfectivo: 1
}
const chofer4 = new Chofer(choferCoche1TurnoT);

const choferCoche2TurnoT = {
    apellido: "Barboza",
    nombre: "Ezequiel",
    legajo: "3005",
    turno: "Tarde",
    cocheEfectivo: 2
}
const chofer5 = new Chofer(choferCoche2TurnoT);

const choferCoche3TurnoT = {
    apellido: "Montesino",
    nombre: "Juan",
    legajo: "2364",
    turno: "Tarde",
    cocheEfectivo: 3
}
const chofer6 = new Chofer(choferCoche3TurnoT);

const choferCoche4TurnoM = {
    apellido: "Pared",
    nombre: "Fabián Andrés",
    legajo: "2936",
    turno: "Mañana",
    cocheEfectivo: 4
}
const chofer7 = new Chofer(choferCoche4TurnoM);

const choferCoche4TurnoT = {
    apellido: "Orue",
    nombre: "Salvador",
    legajo: "2498",
    turno: "Tarde",
    cocheEfectivo: 4
}
const chofer8 = new Chofer(choferCoche4TurnoT);

const choferCoche5TurnoM = {
    apellido: "Guibondot",
    nombre: "Hernán",
    legajo: "2749",
    turno: "Mañana",
    cocheEfectivo: 5
}
const chofer9 = new Chofer(choferCoche5TurnoM);

const choferCoche5TurnoT = {
    apellido: "Rodriguez",
    nombre: "Johnny",
    legajo: "2072",
    turno: "Tarde",
    cocheEfectivo: 5
}
const chofer10 = new Chofer(choferCoche5TurnoT);

function Turno(datosDelTurno){
    this.numero = datosDelTurno.numero;
    this.citacionTM = datosDelTurno.citacionTM;
    this.citacionTT = datosDelTurno.citacionTT;
}

const turno1 = {
    numero: 1,
    citacionTM: "00:20",
    citacionTT: "12:34"
}
const primerTurno = new Turno(turno1);

const turno2 = {
    numero: 2,
    citacionTM: "00:54",
    citacionTT: "12:53"
}
const segundoTurno = new Turno(turno2);

const turno3 = {
    numero: 3,
    citacionTM: "01:33",
    citacionTT: "13:00"
}
const tercerTurno = new Turno(turno3);

const turno4 = {
    numero: 4,
    citacionTM: "02:07",
    citacionTT: "13:20"
}
const cuartoTurno = new Turno(turno4);

const turno5 = {
    numero: 5,
    citacionTM: "02:39",
    citacionTT: "13:25"
}
const quintoTurno = new Turno(turno5);

let listadoDeChoferes = [chofer1, chofer2, chofer3, chofer4, chofer5, chofer6, chofer7, chofer8, chofer9, chofer10];

let listadoDeTurnos = [primerTurno, segundoTurno, tercerTurno, cuartoTurno, quintoTurno];

let diaTanda = ["lunes","martes","miercoles","jueves","viernes"];

let citacion1 = [1,2,3,4,5];
let citacion2 = [2,3,4,5,1];
let citacion3 = [3,4,5,1,2];
let citacion4 = [4,5,1,2,3];
let citacion5 = [5,4,3,2,1];

let citCoches = [citacion1, citacion2, citacion3, citacion4, citacion5];



let infoCoche = (parseInt(prompt ("Informe cual será el primer coche el día lunes")));

let citacionCoches;

let primerCoche = (infoCoche);

function GenerarCitacion (){

            for (let i = 0; i < citCoches.length; i++){
        if ( primerCoche=== i + 1){
            citacionCoches = citCoches[i];
            break;
        }else{
            continue;
        }
}
}
const generar = new GenerarCitacion();

const generador = generar;

/* let citacionLunes; 
let citacionMartes;
let citacionMiercoles;
let citacionJueves;
let citacionViernes; */

function RellenarTurnos(relleno){
    this.chofer = relleno.chofer;
    this.turnoAsignado = relleno.turnoAsignado;
    this.horaCitacion = relleno.horaCitacion;
    }

const asigTurnos1 = {
    chofer: "",
    turnoAsignado: "",
    horaCitacion: "",
}    

let turnoChofer1 = new RellenarTurnos(asigTurnos1);

for (i = 0; i < listadoDeChoferes; i++){
    if (listadoDeChoferes.cocheEfectivo === citacionCoches[0] && listadoDeChoferes.turno === "Mañana" && citacionCoches[0] === i){
        turnoChofer1.chofer = listadoDeChoferes[i].legajo;
        turnoChofer1.turnoAsignado = 1;
        turnoChofer1.horaCitacion = "00:20";
        break;
    } 
    }
document.write (turnoChofer1.horaCitacion);



/* let informarLegajo = (prompt ("cuál es su legajo?"));

for (let i = 0; i<listadoDeChoferes.length; i++){
    if (informarLegajo === listadoDeChoferes[i].legajo){
        let seleccionarDia = (prompt ("Bienvenido " + listadoDeChoferes[i].nombre + " " + listadoDeChoferes[i].apellido + ". Infórmenos día de citación solicitada (lunes, martes, etc)"));
            if (seleccionarDia ==="lunes"){
                document.write (turnoChofer1);
            }
    }
} */





