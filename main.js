
/*simulador de calculadora de categoria en el deporte Remo*/

let edad = prompt("ingrese su edad");

while(edad <= 12){
    alert("usted no tiene categoria")
    edad = prompt("Ingresa de nuevo")
}

if(edad <= 16){
    alert("su categoria es menor")
}else if(edad <= 18){
    alert("su categoria es junior")
} else if(edad < 23){
    alert("su categoria es sub23")
}else if(edad >= 23 && edad < 28){
    alert("su categoria es senior")
} else{
    alert("su categoria es master")
}



