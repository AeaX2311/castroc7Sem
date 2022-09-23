function hacerPeticion() {
    var datoss;
    fetch("http://localhost:8082")
        .then(res => res.text() )
        .then(datos => console.log(datos)
        )
    //console.log(datoss)
}

//; document.getElementById('lblTexto').text = datos;