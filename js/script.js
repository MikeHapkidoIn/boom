//traer los elementos ID en const
// generar numero aleatorio
//generar addeventListener
//generar temporizador 5 segundos
//cuando termine la cuenta atras, se evaluara el número
// usar setTimeout o  setInterval
//crear boton de reset



let addNumber;
let temporizador;
let cuentaAtras = 5;

const userInput = document.getElementById("userInput");
const countDown = document.getElementById("countdown");
const result    = document.getElementById("result");
const restart   = document.getElementById("restart");

userInput.addEventListener("change", function() {
    addNumber = Math.floor(Math.random()*3)+1
    //console.log(addNumber)
})

restart.addEventListener ("click", function (){
    clearInterval(temporizador);
    cuentaAtras = 5;
    addNumber = null
    userInput.value = "";
    countDown.innerText = "",
    result.innerText = ""
})


function startCuentaAtras() {
    cuentaAtras = 5
    countDown.innerText = cuentaAtras
}

