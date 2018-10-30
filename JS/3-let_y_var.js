'use strict'

//Puebas con Let y var 

//Prubas con Var
var numero = 40;
console.log(numero); // valor 40
if (true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); // valor 50

//Prueba con Let

var texto = "Curso MasterJS";
console.log(texto); // Curso MasterJS

if (true){
    let texto="El curso va bien";
    console.log(texto); // el curso va bien
}

console.log(texto); //curso