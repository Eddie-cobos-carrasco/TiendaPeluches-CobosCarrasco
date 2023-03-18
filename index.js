//prompt saludo sus

let saludoNombre = prompt('Ingrese su nombre');
alert('Bienvenido ' + saludoNombre)

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
