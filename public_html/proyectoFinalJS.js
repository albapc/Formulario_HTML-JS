function mostrarValoracion() {
    var valor = document.getElementById("valoracion").value;
    
    alert("Has valorado con " + valor + " puntos");
}

function mostrarCuenta() {
    var cuenta1 = document.getElementById("cuenta1").value;
    var cuenta2 = document.getElementById("cuenta2").value;
    var cuenta3 = document.getElementById("cuenta3").value;
    var cuenta4 = document.getElementById("cuenta4").value;
    var cuenta5 = document.getElementById("cuenta5").value;
    var cuenta6 = document.getElementById("cuenta6").value;
    
    alert("Le informamos que su cuenta bancaria es: " + cuenta1 + cuenta2 + "-"
            + cuenta3 + "-" + cuenta4 + "-" + cuenta5 + "-" + cuenta6);
}

function mostrarDiaSemana() {
    var fechaIntroducida = document.getElementById("fecha"); //cogemos la fecha escogida
    var date = new Date(fechaIntroducida.value); //creamos un nuevo objeto Date y almacenamos el valor anterior
    var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var diaSemana = date.getDay(); //asigna un valor de 0 a 6 según el día de la semana
    
    alert("La fecha seleccionada en el elemento de fecha es un " + dias[diaSemana]); 
    //compara el valor obtenido con los del array y muestra un día de la semana
}


