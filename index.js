//FUNCION PARA QUE LA PC ELIJA ALEATORIO
function aleatorio (min, max) {
    return Math.floor(Math.random()*(max - min +1) + min)
}
function eleccion (jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra🪨"
    } else if (jugada == 2) {
        resultado = "Papel📄"
    } else if (jugada == 3) {
        resultado = "Tijera✂️"
    } else {
        resultado = "Opcion incorrecta😡"
    }
    return resultado

}
let Jugador = 0
let Pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){

    //OBTENIENDO LA ELECCION DEL PC
    Pc = aleatorio (1,3)

    //OBTENIENDO LA ELECCION DEL JUGADOR
    Jugador = prompt("Elije 1 para Piedra🪨, 2 para papel📄 o 3 para tijera✂️");

    //alert ("elejiste + jugador")
        alert ("Elejiste " + eleccion (Jugador));
        alert ("Pc elije: " + eleccion (Pc));
        
    //COMBATE
    if(Pc == Jugador) {
        alert ("Empate🙃")
    } else if (Jugador == 1 && Pc == 3) { 
        alert ("Ganaste 🥳")
        triunfos = triunfos + 1
    } else if (Jugador == 2 && Pc == 1) { 
        alert ("Ganaste 🥳")
        triunfos = triunfos + 1
    } else if (Jugador == 3 && Pc == 2) { 
        alert ("Ganaste 🥳")
        triunfos = triunfos + 1
    } else  { 
        alert ("Perdiste 😢")
        perdidas = perdidas + 1
    }
}

alert ("Ganaste " + triunfos + " veces. Perdiste " + perdidas +" veces.")
