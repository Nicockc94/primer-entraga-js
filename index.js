//Este algoritmo te permite seleccionar un curso y las cuotas a abonar por mes e incluso sumarle un regargo
//el 



function saludar(){
   alert("Bienvenido a NicoDERhouse!")
   alert("Una plataforma de estudio donde podes pagar los cursos en hasta seis(6) cuotas sin interes ")
   alert("Mi nombre es Nicolas y te voy a estar ayudando a inscribirte a al curso de Front end!")
   alert("Primero quiero saber como te llamas")
}

//Precios de los Cursos 

saludar()
let html = 30000;
let javascrip = 60000;
let reactJs = 120000;

nombre = prompt("Ingresa tu Nombre:");
apellido = prompt("Ingresa tu Apellido:");

precio = 0;

alert("Perfecto " + nombre + " Vamos a elegir tu curso");

productoElejido = prompt("Elije tu primer curso! :\n1) HTML y CSS \n2) JAVASCRIPT \n3) REAC JS");

if (productoElejido === "1" || productoElejido === "HTML" || productoElejido === "html") {
    precio = html;
    alert("Perfecto el curso de HTML + CSS tiene un valor de $" + precio + " Pesos");
} else if (productoElejido === "2" || productoElejido === "JAVASCRIPT" || productoElejido === "javascript") {
    precio = javascrip;
    alert("Perfecto el curso de javascript tiene un valor de $" + precio + " Pesos");
} else if (productoElejido === "3" || productoElejido === "REAC JS" || productoElejido === "react js") {
    precio = reactJs;
    alert("Perfecto el curso de React JS tiene un valor de $" + precio + " Pesos");
}else {
       alert("Ingreso incorrecto")
} 


cuotas = prompt("Ingrese cantidad de Cuotas:\n a) Tres(3) cuotas sin interés \n b) Seis(6) cuotas sin interés \n c) Doce(12) cuotas");

if (cuotas === "a" || cuotas === "tres" ||cuotas=="3" ) {
    precioFinal = precio / 3;
    alert("El curso tendrá un valor de tres(3) cuotas de " + precioFinal + " cada una !");
}else if 
    (cuotas === "b" || cuotas === "seis" || cuotas=="6"  ) {
        precioFinal = precio / 6;
        alert("El curso tendrá un valor de seis(6) cuotas de " + precioFinal + " cada una !");

}else if (cuotas === "c" || cuotas === "doce"|| cuotas=="12"){
    
    
    precioFinal= precio / 12 ;
    recargo=precio / 10 ;
    precioConRecargo = precioFinal+recargo
 
    alert("El pago del curso tendra un aumento del 10% por ser en 12 cuotas!")
    alert("El curso tendrá un valor de doce(12) cuotas de " + precioConRecargo+ " cada una !")
}

alert ("gracias por comprar nuestro curso , en agradecimiento tenemos un premio para vos")
let intentos = 3;
let numeroElegido;

do {
    numeroElegido = (prompt("Elige un número del 1 al 5:"));
    intentos--;

    if (numeroElegido == 3) {
        alert("¡Has ganado un descuento del 20%! Tu código es AEF54D.");
        break;
    } else if (intentos > 0) {
        alert("ups no era. Te quedan " + intentos + " intentos");
    } else {
        alert("La proxima sera con un poco de suerte , Gracias por participar");
    }
} while (intentos > 0);

alert("Saludos y hasta la proxima!")






