
/*simulador de calculadora de categoria en el deporte Remo*/
/*Se que la funcion esta por asi decirlo de mas, ya que puedo agregar a los if esos mismos alert, pero queria agregarle una y no sabia cual */
let edad = prompt("ingrese su edad");

function dificultad(edad){
    this.edad = edad
    if (edad <= 16){
        alert ("Un remero será considerado Menor hasta el 31 de diciembre del año en el que cumpla 16. Luego será considerado Junior.")
    } else if(edad <= 18){
        alert ("Son los remeros hasta los 18 años de edad cumplidos hasta el 31 de diciembre del año en curso. Los remeros de esta categoría pueden inscribirse en cualquier categoría superior sin perder la suya. Corren sobre una distancia de 2000m.")
    }else if(edad < 23){
        alert ("Los remeros Sub-23, son los remeros que cumplen 22 años hasta el 31 de diciembre del año en curso. Pueden inscribirse en categorías superiores sin perder la suya.")
    }else if(edad >= 23 && edad < 28){
        alert ("Es la máxima categoría. Reúne a los remeros más experimentados y sus pruebas son las que más puntos aportan al campeonato de clubes. Tanto los Sub-23 como los Seniors corren sobre una distancia de 2000m.")
    }
}

while(edad <= 12){
    alert("usted no tiene categoria")
    edad = prompt("Ingresa de nuevo")
}

if(edad <= 16){
    alert("su categoria es menor")
    dificultad(edad)
}else if(edad <= 18){
    alert("su categoria es junior")
    dificultad(edad)
} else if(edad < 23){
    alert("su categoria es sub23")
    dificultad(edad)
}else if(edad >= 23 && edad < 28){
    alert("su categoria es senior")
    dificultad(edad)
} else{
    alert("su categoria es master")
}



