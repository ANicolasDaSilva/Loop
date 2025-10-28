function agregarCarrito(producto){
    const stock = JSON.parse(localStorage.getItem("cursos"));
        console.log(stock);
        if(stock === ""){
            const nuevoProducto = producto;
            nuevoProducto.cantidad = 1;
            localStorage.setItem("cursos",JSON.stringify(nuevoProducto));
        }else {
            nuevoProducto.push();
        }
}
