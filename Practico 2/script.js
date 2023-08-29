let txtRonda = document.getElementById("ronda");
let ronda = 0;
let ganador = document.getElementById("ganador");
let txtPuntosUsuario = document.getElementById("puntosUsuario");
let txtPuntosPC = document.getElementById("puntosPC");
let puntosUsuario = 0;
let puntosPC = 0;
let bloquePC = document.getElementById("bloquePC");
let bloqueUsuario = document.getElementById("bloqueUsuario");
let bloques = document.querySelectorAll("article");
let botones = document.querySelectorAll(".botones-accion");
let btnVolverJugar = document.getElementById("btnVolverJugar");

    // Solicita el nombre del usuario mediante un prompt
let nombre = prompt("Escribe tu nombre");

// Verifica que se haya ingresado un nombre
while (!nombre) {
    nombre = prompt("Tienes que escribir tu nombre para jugar");
}

// Selecciona el elemento con id "usuario" y actualiza su contenido
let elementoUsuario = document.getElementById("usuario");
elementoUsuario.textContent = "Usuario: " + nombre;


botones.forEach((boton) =>{
    boton.addEventListener("click",jugar);
});

btnVolverJugar.addEventListener("click",volverAJugar);

function generarOpcionPC(){
    let opcionPC = Math.floor(Math.random() * 3) + 1;
    let opcionString = "";
    switch(opcionPC){
        case 1:
            opcionString = "Piedra";
            break;
        case 2:
            opcionString = "Papel";
            break;
        case 3:
            opcionString = "Tijera";
            break;
    }
    return opcionString;
}

function darPuntuacion(opcionUsuario,opcionPC){
    let imagenUsuario = document.createElement("img");
    let imagenPC = document.createElement("img");
    switch(opcionUsuario){
        case "Piedra":
            imagenUsuario.src = "imagenes/piedra.jpg";
            if(opcionPC == "Papel"){
                imagenPC.src = "imagenes/papel.jpg";
                puntosPC +=1;
            }else if(opcionPC == "Tijera"){
                imagenPC.src = "imagenes/tijera.jpg";
                puntosUsuario += 1;
            }else{
                imagenPC.src = "imagenes/piedra.jpg";
                imagenPC.style.transform = "rotateY(180deg)";
            }
            break;
        case "Papel":
            imagenUsuario.src = "imagenes/papel.jpg";
            if(opcionPC == "Tijera"){
                imagenPC.src = "imagenes/tijera.jpg";
                puntosPC +=1;
            }else if(opcionPC == "Piedra"){
                imagenPC.src = "imagenes/piedra.jpg";
                imagenPC.style.transform = "rotateY(180deg)";
                puntosUsuario +=1;
            }else{
                imagenPC.src = "imagenes/papel.jpg";
            }
            break;
        case "Tijera":
            imagenUsuario.src = "imagenes/tijera.jpg";
            imagenUsuario.style.transform = "rotateY(180deg)";
            if(opcionPC == "Piedra"){
                imagenPC.src = "imagenes/piedra.jpg";
                imagenPC.style.transform = "rotateY(180deg)";
                puntosPC += 1;
            }else if(opcionPC == "Papel"){
                imagenPC.src = "imagenes/papel.jpg";
                puntosUsuario += 1;
            }else{
                imagenPC.src = "imagenes/tijera.jpg";
            }
            break;
    }
    verificarBloquesImagenes();
    bloquePC.append(imagenPC);
    bloqueUsuario.append(imagenUsuario);
    txtPuntosPC.textContent = "Puntos Maquina: " + puntosPC;
    txtPuntosUsuario.textContent = "Puntos Usuario: " + puntosUsuario;
    verificarGanador();
}
    

function verificarBloquesImagenes(){
    bloques.forEach((bloque) => {
        if(bloque.childElementCount > 1){
            bloque.removeChild(bloque.lastChild);
        }
    })
}

function verificarGanador() {
    if (puntosPC == 5) {
        ganador.textContent = "Uff Man, Lo siento, te ganó una maquina";
        alert("Uff Man, Lo siento, te ganó una maquina");
        botones.forEach((boton) => { boton.disabled = true });
    } else if (puntosUsuario == 5) {
        ganador.textContent = "!!!Ganaste, Rey¡¡¡";
        alert("¡¡¡Ganaste, Rey!!!");
        botones.forEach((boton) => { boton.disabled = true });
    }
}


function volverAJugar(){
    botones.forEach((boton) => {boton.disabled = false});
    ganador.textContent = "";
    ronda = puntosPC = puntosUsuario = 0;
    txtRonda.textContent = "Ronda 0";
    txtPuntosPC.textContent = "Puntos Maquina: 0";
    txtPuntosUsuario.textContent = "Puntos Usuario: 0";
    verificarBloquesImagenes();
}

function jugar(){
    let opcionUsuario = this.textContent; //Obtiene el texto del boton presionado
    let opcionPC = generarOpcionPC();
    ronda += 1;
    txtRonda.textContent = "Ronda " +  ronda;
    darPuntuacion(opcionUsuario,opcionPC);
}




function volverAJugar() {
    botones.forEach((boton) => { boton.disabled = false });
    ganador.textContent = "";
    ronda = puntosPC = puntosUsuario = 0;
    txtRonda.textContent = "Ronda 0";
    txtPuntosPC.textContent = "Puntos Maquina: 0";
    txtPuntosUsuario.textContent = "Puntos Usuario: 0";
    verificarBloquesImagenes();

    // Solicita el nombre del usuario nuevamente mediante un prompt
    var nuevoNombre = prompt("Escribe tu nombre");

    // Verifica que se haya ingresado un nombre
    while (!nuevoNombre) {
        nuevoNombre = prompt("Tienes que escribir tu nombre para jugar");
    }

    // Actualiza el contenido del elemento "usuario" con el nuevo nombre
    elementoUsuario.textContent = "Usuario: " + nuevoNombre;
}

function jugar() {
    let opcionUsuario = this.textContent; // Obtiene el texto del botón presionado
    let opcionPC = generarOpcionPC();
    ronda += 1;
    txtRonda.textContent = "Ronda " + ronda;
    darPuntuacion(opcionUsuario, opcionPC);
}

