let numeroAzar = Math.floor(Math.random()*100) + 1
console.log(numeroAzar)

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById("mensaje")

function chequearResultado() {

    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100'
    }else if(numeroIngresado == numeroAzar){
        mensaje.textContent = 'Felicidades!! Has adivinado el número secreto'
    }else if(numeroIngresado > numeroAzar){
        mensaje.textContent = 'El número ingresado es mayor que el número secreto'
    }else{
        mensaje.textContent = 'El número ingresado es menor que el número secreto'
    }
}