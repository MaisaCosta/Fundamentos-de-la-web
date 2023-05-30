let pais= "Mexico";
let edad = 16;



if (pais==="USA") {
    if (edad >=21){
        console.log("ya eres mayor en " + pais)
    }
    else {
    let num = 21 - edad;
    console.log("te faltan " + num +" años para ser mayor de edad en " + pais);
}
}
else{
    if (edad>=18){
        console.log("ya eres mayor en " + pais)
    }
    else{
        num=18 -edad;
        console.log("te faltan"+ num +"años para ser mayor de edad en" + "pais");
    }
}