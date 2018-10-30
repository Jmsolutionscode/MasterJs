'use strict'

//Bucle While

var year = 2018;


while(year != 1991)
{
    //Ejecuta esto
    console.log("Estamos en el año: " + year)
    if(year=2000){
        break;
    }
     year--;
}

//Do While
var years = 30;
do{
    alert("Solo cuando sea diferente a 25, el numero es : " + years);
    years--;
}
while
(
    years > 25
)