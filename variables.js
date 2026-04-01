/// Acceso a sistema

// Nombre
let nombre = prompt("Ingrese su nombre: ");

//Edad
let edad = parseInt(prompt("Ingrese su edad: "));

// Contrasenia 
let passw = prompt("Ingrese una contraseña: ");

// Verificacion
if (!nombre) {
    console.log("El nombre no puede estar vacio.")
} else if (edad < 18) {
    console.log("Debe ser mayor de edad (18).");
} else if (edad > 100){
    console.log("No debe ser mayor de (100) anios.");
} else if (passw.length < 6) {
    console.log("Su contraseña debe contener mas de 6 caracteres.");
} else {
    console.log(`Bienvenido ${nombre}, accediendo al sistema...`);

    // Calculo edad
    edad = (edad + 10);

    //Prints 
    console.log(`El usuario ${nombre}, en una decada tendra ${edad} anios de edad.`);
    console.log(`Datos del usuario - Nombre: ${nombre} - Edad: ${edad} - Contraseña: ${passw}`);

}