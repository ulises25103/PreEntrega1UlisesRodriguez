
/*simulador de calculadora de categoria en el deporte Remo*/

let edad = prompt("ingrese su edad");

while(edad >= 12){
    if(edad <= 16){
        alert("su categoria es menor")
        break
    }else if(edad <= 18){
        alert("su categoria es junior")
        break
    } else if(edad < 23){
        alert("su categoria es sub23")
        break
    }else if(edad >= 23 && edad < 28){
        alert("su categoria es senior")
        break
    } else{
        alert("su categoria es master")
        break
    }
}



