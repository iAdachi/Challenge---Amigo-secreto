// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function rehacerListaFront(){
    // Crear código html para mostrar nombres
    textoListaHtml = "";
    for (var i=0; i<listaNombres.length ; i++){
        textoListaHtml += "<li>" + listaNombres[i] + "</li>"
    }
    document.getElementById("listaAmigos").innerHTML = textoListaHtml;
    return; 
}

// Conexiones al Index ==========================================
function agregarAmigo(){ //Añadir nombre
    let nombre = document.getElementById("amigo").value;

    // verificaciones
    if (nombre == ""){
        alert("Por favor, inserte un nombre.");
    }else if (!isNaN(nombre)){
        alert("No es válido usar números.");
    }else if (listaNombres.includes(nombre)){
        alert("Ese nombre ya existe.");
    }else{
        // Agregar nombre validado a lista
        listaNombres.push(nombre);
        rehacerListaFront(); // Actualizar lista del HTML
    }
    // Limpiar entrada de texto
    document.getElementById("amigo").value = ""; // Limpiar entrada de texto 
    document.getElementById("resultado").innerHTML = ""; // Limpiar linea de ganador
    //console.log(listaNombres);
}

function sortearAmigo(){ // Seleccionar amigo
    if (listaNombres.length > 1){
        let numero = Math.floor(Math.random()*listaNombres.length);
        document.getElementById("resultado").innerHTML = "Se seleccionó a: " + listaNombres[numero];
        //console.log(listaNombres[numero]);
    }else{
        alert("Agregue por lo menos 2 nombres para hacer el sorteo.")
    }
}

// Main ==========================================
let listaNombres = [];
