'use strict'

//Condicional IF
//Si A es igual a B entonces haz algo.
var edad= 71;
var nombre = "Julio Medrano";

/*
 ///Operadores Relacionales
    Mayor: >
    Menor: <
    Mayor o Igual: >=
    Menor o Igual: <=
    Igual: ==
    Distinto: !=

*/
if (edad >=18)//Si pasa esto 
{
    console.log(nombre + " tiene "+ edad+" años, es mayor de edad ");//Ejecuta esto

    if (edad <= 33)
    {
        console.log("Eres millenial");
    }
    else if(edad>=70)
    {
        console.log("Ya no eres millenial");
    }

}
else
{//Es menor de edad
    console.log(nombre+" tiene "+edad+" años, es MENOR de edad");
}

/*
--Operadaores Logicos
AND (Y) : &&
OR (O)  : || 
Negacion : !

*/

//Negacion 
var year = 2028;
if (year != 2016)
{
    console.log("El año no es igual a 2016 realmente es: "+year);
}

//AND

if (year>= 2000 && year <=2020 && year !=2018)
{
    console.log("Estamos en la era actual");
}
else
{
    console.log("Estamos en la era Post-Moderna");
}

//OR
if (year==2008 || (year >= 2018 && year == 2028))
{
    console.log("El año acaba en 8");
}
else
{
    console.log("Año no registrado");
}

