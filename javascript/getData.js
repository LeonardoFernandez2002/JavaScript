fetch( '../json/stock.json')
    .then((resp) => resp.json())
    .then( stock =>{
        stock.forEach(post => {
            console.log(JSON.stringify(post ))
        });
    })

const API = "../json/stock.json";

export const getData = async() => {
    const response = await fetch(API);
    const data = await response.json()
    console.log(data)
    return data;
}


// const div1 = document.createElement('div');
// div1.classList.add('producto');
// div1.innerHTML = `
// <img class="img-catalogo_productos" src=${producto.img} alt="">
// <h3>${producto.nombre}</h3>
// <p class="precioProducto">Precio: $${producto.Precio}</p>
// <button id="${producto.id}" class="boton-agregar">Agregar al Carrito</button>