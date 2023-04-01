//prompt saludo sus

//let saludoNombre = prompt('Ingrese su nombre');
//alert('Bienvenido ' + saludoNombre)
//no se usa mas el prompt

//objetos

const peluches = [];

const peluche1 = {
    nombre: 'chisyoso',
    tamano: 1,
    stock: true,
    precio: 1
}

const peluche2 = {
    nombre: 'i got a glock in my rari',
    tamano: 2,
    stock: true,
    precio: 2
}

const peluche3 = {
    nombre: 'amogus',
    tamano: 2,
    stock: false,
    precio: 3
}

//array(push)

peluches.push(peluche1);
peluches.push(peluche2);
peluches.push(peluche3);

//metodo-busqueda

function buscarPeluchePorNombre(nombre) {
    return peluches.find(peluche => peluche.nombre === nombre);
}
const pelucheEncontrado = buscarPeluchePorNombre('chisyoso');
console.log(pelucheEncontrado);

//condicion

function sumar() {
    let sum = 0;
    const peluches = [peluche1, peluche2, peluche3];
    for (const peluche of peluches) {
        if (peluche.stock) {
            sum += peluche.precio;
        }
    }
    return sum;
}

//console log

console.log(sumar());

//localstorage

localStorage.setItem('pelucheNombre','chisyoso')

//json

const peluche3Json = JSON.stringify(peluche3);

console.log(peluche3Json);
localStorage.setItem('peluche3Json',peluche3Json)

let infoPeluche3Storage = localStorage.getItem('peluche3Json')
console.log(JSON.parse(infoPeluche3Storage))

//dom

const js1 = document.querySelector('#js1')
js1.innerText = 'js1 modificado'
const h1Subtitulo = document.createElement ('h2')
js1.append(h1Subtitulo)
h1Subtitulo.innerText = 'hola entendi lo que es dom'
const susInsertar = document.querySelector('#susInsertar')

//evento
const eventoSus = document.querySelector('#eventoSus')
function clickFunction(){
    console.log('click')
}
eventoSus.addEventListener('click',clickFunction)
