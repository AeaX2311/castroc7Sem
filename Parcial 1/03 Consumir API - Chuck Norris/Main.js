async function hacerPeticion() {
    var nombre = document.getElementById("lblNombre").value;
    var apellido = document.getElementById("lblApellido").value;

    if(nombre === "") nombre = "Chuck";
    if(apellido === "") apellido = "Norris";

    var response = await fetch(`http://api.icndb.com/jokes/random?firstName=${nombre}&lastName=${apellido}`, { 
        method: "GET"
    });

    var data = await response.json();    
    var contenido = document.querySelector('#formulario');

    contenido.innerHTML = `
        <p>Chiste para ${nombre} ${apellido}: ${data.value.joke}</p>
    `
}