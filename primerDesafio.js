let primero;
let segundo;
let tercero;
let cuarto;
let admins = ["alberto", "pedro", "juan"];

do{
    primero = Math.floor ((Math.random() * 9));
    segundo = Math.floor ((Math.random() * 9));
    tercero = Math.floor ((Math.random() * 9));
    cuarto = Math.floor ((Math.random() * 9));
} while (primero == segundo || primero == tercero || primero == cuarto || segundo == tercero || segundo == cuarto || tercero == cuarto);

const diegoUserPin1 = [primero];
const diegoUserPin2 = [segundo];
const diegoUserPin3 = [tercero];
const diegoUserPin4 = [cuarto];

const diegoUserPin = diegoUserPin1 + diegoUserPin2 + diegoUserPin3 + diegoUserPin4;

let respuesta = (prompt ("desea obtener un pin?"));

if (respuesta == "no"){
    document.write ("oh, lo siento");
} else if (respuesta == "si"){
    let darPin = (prompt ("su PIN es " + diegoUserPin + ". Elija nombre de usuario" ));

    if (darPin == "diego"){
        let userPin = (prompt ("reingrese su PIN"));
        
            if (userPin === diegoUserPin){
                document.write ("bienvenido diego");

            } else {
                for ( let i = 0; i < admins.length; i++) {
                    document.write ("contáctese con el administrador " + admins[i] + "<br>");
                    }
            }
        }else {
            for ( let i = 0; i < admins.length; i++) {
                document.write ("contáctese con el administrador " + admins[i] + "<br>");
                }
    }

}    else{
    for ( let i = 0; i < admins.length; i++) {
        document.write ("contáctese con el administrador " + admins[i] + "<br>");
        }
}