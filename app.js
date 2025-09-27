alert("Bienvenida persona curiosa");

let nombre = prompt("Perdon, primero los modales ¿como te llamas?");
let edadIngresada = prompt("¿Y que edad tienes?");
edadIngresada = Number(edadIngresada);

//condicional if
if (nombre === "" || nombre === null) {
  alert("NO ingresaste tu nombre, con esa actitud no pasaras.");
}else if (edadIngresada < 18 || edadIngresada === "" || edadIngresada === null) { //COMO DEJO DE REPETIR CODIGO
  alert("Sos menor de edad, no podes pasar");
}else if (edadIngresada === 18 || edadIngresada === "" || edadIngresada === null) {
  alert("Mmm medio justo de edad");
}else {
  alert(`Hola ${nombre} de ${edadIngresada} años`);
}

//ciclo
let tabla = parseInt(prompt("Igual para aprender no hace falta, ¿que tabla de multiplicar queres aprender?"));

for (let i = 1; i <= 10; i++) {
  let resultado = tabla * i;
  if (tabla === "" || tabla === null) {
    alert("Por favor, ingresa un número.")
  } else {
    alert(tabla + ` x ` + i + ` = ` + resultado);
  }
}

const contraseña = "123";
let intentoContra = promptS("Ingrese la contraseña(123)");

while (intentoContra != contraseña){
  intentoContra = prompt("Ingrese la contraseña");
}


//funcion y //objeto

function prenda(nombre, talle, precio){
  this.nombre = nombre;
  this.talle = talle;
  this.precio = precio;
}

//array

const stock = [];
stock.push(prenda1);

console.log(stock);

const prenda1 = new prenda("remera", "negro", "L");
console.log(prenda1);

//EVENTO

const form = document.getElementById("stock");

form.addEventListener("submit", () => {
  const nombre = document.getElementById("nombre").value;
  const talle = document.getElementById("talle").value;
  const precio = document.getElementById("precio").ariaValueMax;
});


//intentar aplicar una funcion con el while para la prox
//probar metodo de busqueda con inventario de kiosco

// CORRECCIONES:  repetí varias veces las validaciones de "" o null, EN LOS IF
//CORRECCIONES: la validación del isNaN conviene hacerla antes del for

//some: se podra hacer un juego del "ahorcado"?

