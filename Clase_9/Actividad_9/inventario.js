
let inventario = [
    { nombre: "Televisor 4K", codigo: "TV001", cantidad: 10, precio: 300 },
    { nombre: "Auriculares Bluetooth", codigo: "AU002", cantidad: 2, precio: 50 },
    { nombre: "Smartphone", codigo: "SP003", cantidad: 0, precio: 500 },
    { nombre: "Laptop", codigo: "LP004", cantidad: 15, precio: 800 }
];

function verificarStock(event) {
    event.preventDefault();
    inventario.forEach(producto => {
        if (producto.cantidad === 0) {
            console.log(`${producto.nombre}: Producto agotado`);
        } else if (producto.cantidad <= 5) {
            console.log(`${producto.nombre}: Próximo a agotarse`);
        } else {
            console.log(`${producto.nombre}: En stock`);
        }
    });
}

function actualizarStock(event) {
    event.preventDefault();
    let codigo = prompt("Ingrese el código del producto");
    let nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad"));
    let producto = inventario.find(p => p.codigo === codigo);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        console.log(`${producto.nombre} actualizado a ${producto.cantidad} unidades`);
    } else {
        console.log("Error: Producto no encontrado");
    }
}

function agregarProducto(event) {
    event.preventDefault();
    let nuevoProducto = { nombre: "Cámara Digital", codigo: "CA005", cantidad: 8, precio: 250 };
    inventario.push(nuevoProducto);
    console.log("Producto agregado:", nuevoProducto);
}

function eliminarProducto(event) {
    event.preventDefault();
    let codigo = prompt("Ingrese el código del producto a eliminar");
    let index = inventario.findIndex(p => p.codigo === codigo);
    if (index !== -1) {
        let eliminado = inventario.splice(index, 1);
        console.log("Producto eliminado:", eliminado);
    } else {
        console.log("Error: Producto no encontrado");
    }
}

function mostrarInventarioCompleto(event) {
    event.preventDefault();
    inventario.forEach(producto => {
        console.log(`Nombre: ${producto.nombre}, Código: ${producto.codigo}, Cantidad: ${producto.cantidad}`);
        if (producto.cantidad > 5) {
            console.log(`Valor total en stock: ${producto.cantidad * producto.precio}`);
        }
    });
}

function buscarProductoPorNombre(event) {
    event.preventDefault();
    let nombre = prompt("Ingrese el nombre del producto");
    let producto = inventario.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
    if (producto) {
        console.log(`Código: ${producto.codigo}, Cantidad: ${producto.cantidad}`);
    } else {
        console.log("Error: Producto no encontrado");
    }
}

function precioTotalInventario(event) {
    event.preventDefault();
    let total = inventario.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    console.log(`Precio total del inventario: ${total}`);
}

function ordenarInventarioPorPrecio(event) {
    event.preventDefault();
    inventario.sort((a, b) => a.precio - b.precio);
    console.log("Inventario ordenado por precio:", inventario);
}

function hayProductosEnStock(event) {
    event.preventDefault();
    let hayStock = inventario.some(producto => producto.cantidad > 5);
    console.log(hayStock ? "Hay productos en stock" : "No hay productos en stock");
}

function duplicarPrecioProductosEnStock(event) {
    event.preventDefault();
    let nuevosPrecios = inventario
        .filter(producto => producto.cantidad > 5)
        .map(producto => ({
            ...producto,
            precio: producto.precio * 1.2
        }));
    console.log("Productos con precios actualizados:", nuevosPrecios);
}

function reemplazarProducto(event) {
    event.preventDefault();
    let codigo = prompt("Ingrese el código del producto a reemplazar");
    let index = inventario.findIndex(p => p.codigo === codigo);
    if (index !== -1) {
        let nuevoProducto = { nombre: "Reproductor Blu-ray", codigo: "RB006", cantidad: 10, precio: 150 };
        inventario[index] = nuevoProducto;
        console.log("Producto reemplazado:", nuevoProducto);
    } else {
        console.log("Error: Producto no encontrado");
    }
}
