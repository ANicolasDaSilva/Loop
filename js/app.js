import { notiBienvenida } from "../js/notis.js";

notiBienvenida();

const contenedorCard = document.getElementById("listProducts");

function crearCard(productos){
  productos.forEach(producto => {
    const nuevoCurso = document.createElement("div");
    nuevoCurso.classList = "card";
    contenedorCard.appendChild(nuevoCurso);
    nuevoCurso.innerHTML = `
      <img src="../img/${producto.id}.jpg">
      <h3>${producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button> Agregar al carrito </button>
    `;
    contenedorCard.appendChild(nuevoCurso);
    contenedorCard.getElementsByTagName("button").addEvenListener("click",()=> agregarCarrito(producto));
  });
}

crearCard(cursos);

