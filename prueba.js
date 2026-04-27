array = [
    {
        "nombre":"Jorge",
        "ciudad":"Rio Cuarto",
        "edad":26
    },
    {
        "nombre":"Lilen",
        "ciudad":"Buenos Aires",
        "edad":26
    },
    {
        "nombre":"Valentina",
        "ciudad":"Buenos Aires",
        "edad":25
    }
]

for (let i = 0; i < array.length; i++) {
    console.log(array[i].nombre)
    }

function sumarEdades(lista){
    sumador = 0;

     for (let i = 0; i < lista.length; i++) {
        sumador += array[i].edad;
        
    }
    return sumador;

}

function cantidadCiudadPorUsuario(lista, ciudad) {
    let contador = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].ciudad === ciudad) {
            contador += 1;
            
        }
    }
    if (contador > 1){
        return (`Hay ${contador} personas viviendo en ${ciudad}`);
    } else {
        return (`Hay ${contador} persona viviendo en ${ciudad}`);
    }
}

console.log(sumarEdades(array));
console.log(cantidadCiudadPorUsuario(array, 'Rio Cuarto'));
console.log(cantidadCiudadPorUsuario(array, 'Buenos Aires'));
