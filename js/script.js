//traer los elementos ID en const
// generar numero aleatorio
//generar addeventListener
//generar temporizador 5 segundos
//cuando termine la cuenta atras, se evaluara el número
// usar setTimeout o  setInterval
//crear boton de reset



/*let addNumber;
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

*/
let time = 5
let userNumber = 0


const randomNumber = () => Math.floor(Math.random () * 3) + 1;
//numero aleatorio entre dos numeros. 

const userInput = document.getElementById("userInput");
const result    = document.getElementById("result");

userInput.addEventListener("change", () => {
  userNumber = userInput.value

})

function startGame () {
  //meter la promesa
  countDown()
  const mysteryNumber = new Promise (resolve => {
    setTimeout(() =>{
      resolve(randomNumber())
    }, 6000)
    return mysteryNumber
  })
}


function countDown() {
  setInterval (() =>{
    if (time >= 0) {
      countDown.innerText = `Va a explotar en ${time} seg`
      time--
    }
  }, 1000)
  
}
//hacer cuenta atras. Primero pensar que hay que usar el setInterval.
//luego usar un condicional para que siempre que sea mayor que 0 le reste 1 segundo.

startGame().then ( number => {
  let mensaje = ""
  if ( userNumbernumber === number){
    result.innerHTML = `<p> El numero del usuario es ${userNumber} y el de la maquina es ${number}.Por tanto has salvado el mundo</p>`
  }else{
    mensaje = `<p> El numero del usuario es ${userNumber}y el de la maquina es ${number}. Por tanto el mundo ha sido destruido</p>`
  }
  result.innerHTML = mensaje
}) 
  

restart.addEventListener ("click", function (){
  location.reload()
})
  
