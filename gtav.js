

//Carrito

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const elementos3 = document.getElementById('lista-3');
const elementos4 = document.getElementById('lista-4');
const lista = document.querySelector('#lista-carrito tbody');
/**donde le doy el valor del a o lo que tenga el vaciar caro. se coloca el id="vaciar-carrito" */
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

//al precionar dentro del bloque se haran las funciones
function cargarEventListeners(){
    /**cargar */
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    elementos3.addEventListener('click', comprarElemento);
    elementos4.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('h5').textContent,
        titulo: elemento.querySelector('h1').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento) 
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 />
        </td>

        <td>
            ${elemento.titulo}
        </td>

        <td>
            ${elemento.precio}
        </td>

        <td>
            <a href="#" class="borrar" data-id="${elemento.id0}">X</a>    
        </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
        
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

//funcion para vaciar los datos del carro
function vaciarCarrito(){
    /**revisa si los elemntos dentro de la lista */
    while(lista.firstChild){
        
        lista.removeChild(lista.firstChild);
    }
    return false;
}