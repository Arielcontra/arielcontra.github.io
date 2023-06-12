//FUNCION PARA QUE LA PC ELIJA ALEATORIO
function randomSelect (min, max) {
    return Math.floor(Math.random()*(max - min +1) + min)
}

function choice (move) {
    let result = ""
    if (move == 1) {
        result = "Stone🪨"
    } else if (move == 2) {
        result = "Paper📄"
    } else if (move == 3) {
        result = "Scissor✂️"
    }
    return result

}
let Player = 0
let Pc = 0
let trumps = 0
let losses = 0

while (trumps < 3 && losses < 3){

    //OBTENIENDO LA ELECCION DEL PC
    Pc = randomSelect (1,3)

    //OBTENIENDO LA ELECCION DEL JUGADOR
    Player = prompt("Choose 1 for Stone🪨, 2 for paper📄 or 3 for scissor✂️");

    //alert ("elejiste + jugador")
        alert ("you chose: " + choice (Player));
        alert ("Pc choose: " + choice (Pc));
        
    //COMBATE
    if(Pc == Player) {
        alert ("Draw 🙃")
    } else if (Player == 1 && Pc == 3) { 
        alert ("Won 🥳")
        trumps = trumps + 1
    } else if (Player == 2 && Pc == 1) { 
        alert ("Won 🥳")
        trumps = trumps + 1
    } else if (Player == 3 && Pc == 2) { 
        alert ("Won 🥳")
        trumps = trumps + 1
    } else  { 
        alert ("You lost 😢")
        losses = losses + 1
    }
}

alert ("Won " + trumps  + " times. You lost " + loss  +" times.")