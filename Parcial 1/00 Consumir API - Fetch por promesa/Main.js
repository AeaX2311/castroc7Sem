
function hacerPeticion() {
    var contenido = document.querySelector('#formulario');

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        contenido.innerHTML = `
            <h3>Hola! Soy ${data.results['0'].name.first} ${data.results['0'].name.last}</h3><br/>
            <img src="${data.results['0'].picture.large}" width="180px" class="img-fluid rounded-circle"><br/><br/>
            <h5>Te presento algunos de mis datos:</h5>
            <p>Tengo ${data.results['0'].dob.age} años, vivo en ${data.results['0'].location.city} y mi telefono es ${data.results['0'].phone}</p>
            <p>Puedes contactarme a traves del correo: <i>${data.results['0'].email}<i/></p>
        `
    })
} 