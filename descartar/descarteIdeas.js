
/*


function saludar () {
    alert("Bienvenidos a CineTrivia");
    alert("En esta trivia de cine , Tienes 5 vidas");
    alert("Cada respuesta correcta sumara 100");
    alert("Cada respuesta incorrecta restara 50 puntos y  una vida");
    alert("Comenzaremos desde el Nivel 1")
    alert("Tu Primer objetivo es juntar 1000")
    alert("Comenzemos! Mucha suerte")
}

function reglas () {
    alert("repasemos!")
    alert("En esta trivia de cine , Tienes 5 vidas");
    alert("Cada respuesta correcta sumara 100");
    alert("Cada respuesta incorrecta restara 50 puntos y  una vida");
    alert("Comenzaremos desde el Nivel 1")
    alert("Tu Primer objetivo es juntar 100")
    alert("Continuemos!")
}

saludar()


let vidas = 5
let puntaje = 0 
let Correcta = 100
let incorrecta = 50
let sumar = (puntaje + Correcta)
let restar = (puntaje -incorrecta)

function respuestaCorrecta() {
    alert("Respuesta Correcta!");
    puntaje += Correcta;
    alert("Tu puntaje es " + puntaje);
}

function respuestaIncorrecta() {
    alert("Tu respuesta es Incorrecta");
    puntaje -= incorrecta;
    vidas--; 
    alert("Tu puntaje es " + puntaje);
}


let pregunta1=prompt("Cual de estas peliculas no esta dirigida por Martin Scorsese ? \n opciones : \na) Taxi Driver \nB) Perros de la calle \nc) La isla siniestra ")

if(pregunta1=="b" || pregunta1=="B" || pregunta1=="perros de la calle" || pregunta1=="Perros De La Calle" || pregunta1 == "PERROS DE LA CALLE"){

   respuestaCorrecta() 

}else {
    alert("respuesta incorrecta")
    respuestaIncorrecta()
}

let pregunta2=prompt("En que año se estreno la primera pelicula de Volver al futuro ? \n opciones : \na)1985 \nB)1983 \nc)1995")

if(pregunta2=="a" || pregunta1=="A" || pregunta1=="1985"){

   respuestaCorrecta()

}else {
    alert("respuesta incorrecta")
    respuestaIncorrecta ()
}

let pregunta3=prompt("Que actor interpreto ? \n opciones : \na)1985 \nB)1983 \nc)1995")

if(pregunta3=="a" || pregunta1=="A" || pregunta1=="1985"){

   respuestaCorrecta()

}else {
    alert("respuesta incorrecta")
    respuestaIncorrecta ()
}

*/






//codigo de chat gpt //


function saludar () {
    alert("Bienvenidos a CineTrivia");
    alert("En esta trivia de cine , Tienes 5 vidas");
    alert("Cada respuesta correcta sumara 100 Puntos");
    alert("Cada respuesta incorrecta restara 50 Puntos y  una vida");
    alert("Comenzaremos desde el Nivel 1")
    alert("Tu Primer objetivo es juntar 1000 Puntos")
    alert("Comenzemos! Mucha suerte")
}

function reglas () {
    alert("repasemos!")
    alert("En esta trivia de cine , Tienes 5 vidas");
    alert("Cada respuesta correcta sumara 100");
    alert("Cada respuesta incorrecta restara 50 puntos y  una vida");
    alert("Comenzaremos desde el Nivel 1")
    alert("Tu Primer objetivo es juntar 100")
    alert("Continuemos!")
}

saludar()


let vidas = 5;
let puntaje = 0;
const Correcta = 100;
const incorrecta = 50;

function respuestaCorrecta() {
    alert("Respuesta Correcta!");
    puntaje += Correcta;
    alert("Tu puntaje es " + puntaje);
}

function respuestaIncorrecta() {
    alert("Tu respuesta es Incorrecta");
    puntaje -= incorrecta;
    vidas--;
    alert("Tu puntaje es " + puntaje);
}

const preguntas = [
    {
        pregunta: "Cual de estas películas no está dirigida por Martin Scorsese?",
        opciones: ["a) Taxi Driver", "b) Perros de la calle", "c) La isla siniestra"],
        respuestaCorrecta: "b"
    },
    {
        pregunta: "En que año se estreno la primera pelicula de Volver al futuro ?",
        opciones: ["a)1985", "b)1983", "c)1987"],
        respuestaCorrecta: "a"
    },
    {
        pregunta: "Leonardo Dicaprio a ganado solo una vez el premio Oscar a mejor actor . Por que pelicula fue ?",
        opciones: ["a)Titanic","b)El lobo de Wall Street", "c)El renacido"],
        respuestaCorrecta: "c"
        
    },
    {
        pregunta: "Como se llama el personaje que interpreta Leonardo Dicaprio en la pelicula Atrapame Si puedes",
        opciones: ["a)Frank Abagnale Jr","b)Hank Parker", "c)Tony Kukoc"],
        respuestaCorrecta: "a"
        
    }


    // Agrega más preguntas aquí
];

// Ciclo for para hacer preguntas
for (let i = 0; i < preguntas.length; i++) {
    const pregunta = preguntas[i];
    const respuestaUsuario = prompt(pregunta.pregunta + "\n" + pregunta.opciones.join("\n"));

    if (respuestaUsuario.toLowerCase() === pregunta.respuestaCorrecta) {
        respuestaCorrecta();
    } else {
        alert("Respuesta incorrecta");
        respuestaIncorrecta();
    }
}