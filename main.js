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
    apellido: "Jimenez",
    nombre: "Leonardo",
    legajo: "2738",
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

let infoCoche = (parseInt(prompt ("Informe cual será el primer coche el día lunes (1 al 5)")));

let citacionLunes;
let citacionMartes;
let citacionMiercoles;
let citacionJueves;
let citacionViernes;


switch (infoCoche){
    case 1:
        citacionLunes = [1,2,3,4,5];
        citacionMartes = [2,3,4,5,1];
        citacionMiercoles = [3,4,5,1,2];
        citacionJueves = [4,5,1,2,3];
        citacionViernes = [5,1,2,3,4];
        break;
    case 2:
        citacionLunes = [2,3,4,5,1];
        citacionMartes = [3,4,5,1,2];
        citacionMiercoles = [4,5,1,2,3];
        citacionJueves = [5,1,2,3,4];
        citacionViernes = [1,2,3,4,5];
        break;
    case 3:
        citacionLunes = [3,4,5,1,2];
        citacionMartes = [4,5,1,2,3];
        citacionMiercoles = [5,1,2,3,4];
        citacionJueves = [1,2,3,4,5];
        citacionViernes = [2,3,4,5,1];
        break;
    case 4:
        citacionLunes = [4,5,1,2,3];
        citacionMartes = [5,1,2,3,4];
        citacionMiercoles = [1,2,3,4,5];
        citacionJueves = [2,3,4,5,1];
        citacionViernes = [3,4,5,1,2];
        break;
    case 5:
        citacionLunes = [5,4,3,2,1];
        citacionMartes = [1,2,3,4,5];
        citacionMiercoles = [2,3,4,5,1];
        citacionJueves = [3,4,5,1,2];
        citacionViernes = [4,5,1,2,3];
}

function RellenarTurnos(relleno){
    this.chofer = relleno.chofer;
    this.horaCitacionLunes = relleno.horaCitacionLunes;
    this.horaCitacionMartes = relleno.horaCitacionMartes;
    this.horaCitacionMiercoles = relleno.horaCitacionMiercoles;
    this.horaCitacionJueves = relleno.horaCitacionJueves;
    this.horaCitacionViernes = relleno.horaCitacionViernes;

    }

const asigTurnos1 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer1 = new RellenarTurnos(asigTurnos1);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[0] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer1.chofer = listadoDeChoferes[i].legajo;
        turnoChofer1.horaCitacionLunes = listadoDeTurnos[0].citacionTM;
        turnoChofer1.horaCitacionMartes = listadoDeTurnos[1].citacionTM;
        turnoChofer1.horaCitacionMiercoles = listadoDeTurnos[2].citacionTM;
        turnoChofer1.horaCitacionJueves = listadoDeTurnos[3].citacionTM;
        turnoChofer1.horaCitacionViernes = listadoDeTurnos[4].citacionTM;
    }
}
const asigTurnos2 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer2 = new RellenarTurnos(asigTurnos2);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[0] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer2.chofer = listadoDeChoferes[i].legajo;
        turnoChofer2.horaCitacionLunes = listadoDeTurnos[0].citacionTT;
        turnoChofer2.horaCitacionMartes = listadoDeTurnos[1].citacionTT;
        turnoChofer2.horaCitacionMiercoles = listadoDeTurnos[2].citacionTT;
        turnoChofer2.horaCitacionJueves = listadoDeTurnos[3].citacionTT;
        turnoChofer2.horaCitacionViernes = listadoDeTurnos[4].citacionTT;
    }
    }
    const asigTurnos3 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
    }

let turnoChofer3 = new RellenarTurnos(asigTurnos3);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[1] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer3.chofer = listadoDeChoferes[i].legajo;
        turnoChofer3.horaCitacionLunes = listadoDeTurnos[1].citacionTM;
        turnoChofer3.horaCitacionMartes = listadoDeTurnos[2].citacionTM;
        turnoChofer3.horaCitacionMiercoles = listadoDeTurnos[3].citacionTM;
        turnoChofer3.horaCitacionJueves = listadoDeTurnos[4].citacionTM;
        turnoChofer3.horaCitacionViernes = listadoDeTurnos[0].citacionTM;
    }
    }
const asigTurnos4 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer4 = new RellenarTurnos(asigTurnos4);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[1] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer4.chofer = listadoDeChoferes[i].legajo;
        turnoChofer4.horaCitacionLunes = listadoDeTurnos[1].citacionTT;
        turnoChofer4.horaCitacionMartes = listadoDeTurnos[2].citacionTT;
        turnoChofer4.horaCitacionMiercoles = listadoDeTurnos[3].citacionTT;
        turnoChofer4.horaCitacionJueves = listadoDeTurnos[4].citacionTT;
        turnoChofer4.horaCitacionViernes = listadoDeTurnos[0].citacionTT;
    }
    }
    const asigTurnos5 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
    }
let turnoChofer5 = new RellenarTurnos(asigTurnos5);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[2] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer5.chofer = listadoDeChoferes[i].legajo;
        turnoChofer5.horaCitacionLunes = listadoDeTurnos[2].citacionTM;
        turnoChofer5.horaCitacionMartes = listadoDeTurnos[3].citacionTM;
        turnoChofer5.horaCitacionMiercoles = listadoDeTurnos[4].citacionTM;
        turnoChofer5.horaCitacionJueves = listadoDeTurnos[0].citacionTM;
        turnoChofer5.horaCitacionViernes = listadoDeTurnos[1].citacionTM;
    }
    }
const asigTurnos6 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer6 = new RellenarTurnos(asigTurnos6);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[2] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer6.chofer = listadoDeChoferes[i].legajo;
        turnoChofer6.horaCitacionLunes = listadoDeTurnos[2].citacionTT;
        turnoChofer6.horaCitacionMartes = listadoDeTurnos[3].citacionTT;
        turnoChofer6.horaCitacionMiercoles = listadoDeTurnos[4].citacionTT;
        turnoChofer6.horaCitacionJueves = listadoDeTurnos[0].citacionTT;
        turnoChofer6.horaCitacionViernes = listadoDeTurnos[1].citacionTT;
    }
    }
    const asigTurnos7 = {
        chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
    }

let turnoChofer7 = new RellenarTurnos(asigTurnos7);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[3] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer7.chofer = listadoDeChoferes[i].legajo;
        turnoChofer7.horaCitacionLunes = listadoDeTurnos[3].citacionTM;
        turnoChofer7.horaCitacionMartes = listadoDeTurnos[4].citacionTM;
        turnoChofer7.horaCitacionMiercoles = listadoDeTurnos[0].citacionTM;
        turnoChofer7.horaCitacionJueves = listadoDeTurnos[1].citacionTM;
        turnoChofer7.horaCitacionViernes = listadoDeTurnos[2].citacionTM;
    }
    }
const asigTurnos8 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer8 = new RellenarTurnos(asigTurnos8);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[3] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer8.chofer = listadoDeChoferes[i].legajo;
        turnoChofer8.horaCitacionLunes = listadoDeTurnos[3].citacionTT;
        turnoChofer8.horaCitacionMartes = listadoDeTurnos[4].citacionTT;
        turnoChofer8.horaCitacionMiercoles = listadoDeTurnos[0].citacionTT;
        turnoChofer8.horaCitacionJueves = listadoDeTurnos[1].citacionTT;
        turnoChofer8.horaCitacionViernes = listadoDeTurnos[2].citacionTT;
    }
    }
    const asigTurnos9 = {
        chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
    }
let turnoChofer9 = new RellenarTurnos(asigTurnos9);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[4] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer9.chofer = listadoDeChoferes[i].legajo;
        turnoChofer9.horaCitacionLunes = listadoDeTurnos[4].citacionTM;
        turnoChofer9.horaCitacionMartes = listadoDeTurnos[0].citacionTM;
        turnoChofer9.horaCitacionMiercoles = listadoDeTurnos[1].citacionTM;
        turnoChofer9.horaCitacionJueves = listadoDeTurnos[2].citacionTM;
        turnoChofer9.horaCitacionViernes = listadoDeTurnos[3].citacionTM;
    }
    }
const asigTurnos10 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer10 = new RellenarTurnos(asigTurnos10);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[4] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer10.chofer = listadoDeChoferes[i].legajo;
        turnoChofer10.horaCitacionLunes = listadoDeTurnos[4].citacionTT;
        turnoChofer10.horaCitacionMartes = listadoDeTurnos[0].citacionTT;
        turnoChofer10.horaCitacionMiercoles = listadoDeTurnos[1].citacionTT;
        turnoChofer10.horaCitacionJueves = listadoDeTurnos[2].citacionTT;
        turnoChofer10.horaCitacionViernes = listadoDeTurnos[3].citacionTT;
    }
    }

let turnosChoferes = [turnoChofer1, turnoChofer2, turnoChofer3, turnoChofer4, turnoChofer5, turnoChofer6, turnoChofer7, turnoChofer8, turnoChofer9, turnoChofer10 ]

let informarLegajo = (prompt ("cuál es su legajo? Legajos disponibles: 3100 / 3082 / 2738 / 3005 / 2939 / 2364 / 2936 / 2498 / 2749 / 2072"));

for (let i = 0; i<turnosChoferes.length; i++){
    if (informarLegajo === turnosChoferes[i].chofer){
        for (m = 0; m < listadoDeChoferes.length; m++){
            if (informarLegajo === listadoDeChoferes[m].legajo){
        document.write ("Bienvenido " + listadoDeChoferes[m].nombre + " " + listadoDeChoferes[m].apellido + "<br><br>" + "Sus citaciones para esta semana son:" + "<br>" + "Lunes: " + turnosChoferes[i].horaCitacionLunes + "<br>" + "martes: " + turnosChoferes[i].horaCitacionMartes + "<br>" + "Miercoles: " + turnosChoferes[i].horaCitacionMiercoles + "<br>" + "Jueves: " + turnosChoferes[i].horaCitacionJueves + "<br>" + "Viernes: " + turnosChoferes[i].horaCitacionViernes);
    }    
    }
    }
}


