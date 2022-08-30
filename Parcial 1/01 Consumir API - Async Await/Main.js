async function btnRandomClick() {
    let dato = await hacerPeticion();

    document.querySelector('#formulario').innerHTML = `
        <h3>Hola! Soy ${dato.results['0'].name.first} ${dato.results['0'].name.last}</h3><br/>
        <img src="${dato.results['0'].picture.large}" width="180px" class="img-fluid rounded-circle"><br/><br/>
        <h5>Te presento algunos de mis datos:</h5>
        <p>Tengo ${dato.results['0'].dob.age} años, vivo en ${dato.results['0'].location.city} y mi telefono es ${dato.results['0'].phone}</p>
        <p>Puedes contactarme a traves del correo: <i>${dato.results['0'].email}<i/></p>
    `
}

async function hacerPeticion() {
    let respuesta = await fetch('https://randomuser.me/api/'); //Consumo de api por medio de la URL
    let datoJson = await respuesta.json();

    return datoJson;
} 