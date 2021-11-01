// Arreglos

let elemento = document.querySelector("#principal")

let mascotas = [];
// object {propietario,nombre,especie,raza,edad,peso,imagen,tipoConsulta}
//mascotas[1] = "Loro"
//mascotas[0] = "perro"
//mascotas.push("Gallo") // agrega el elemento al final del array
//mascotas.unshift("Comadreja") // agrega el elemento al comienzo del array



mascotas.forEach(m => {
    elemento.innerHTML += `<h2>${m}<h2>`
});

const agregarMascotas = () => {
    
    let datos = document.querySelectorAll("input");
    let consulta;
/* 
    if(datos[7].checked) {
        consulta = "Consulta"
    } else {
        consulta = "Urgencia"
    } */

    let mascota = {
        propietario: datos[0].value,
        nombre: datos[1].value,
        especie: datos[2].value,
        raza: datos[3].value,
        edad: datos[4].value,
        peso: datos[5].value,
        imagen: datos[6].value,
        tipoConsulta: (datos[7].checked ? consulta = "Consulta": consulta = "Urgencia")// con ternario
    }

    mascotas.unshift(mascota);
    console.log(mascotas)
    mostrarMascotas();
}

// function crearForm(){} ES5

const crearForm = () => {
    elemento.innerHTML=`
    <form class="col-4" id="formulario-vet">
        <div class="mb-3">
            <label for="propietario" class="form-label">Propietario</label>
            <input type="text" class="form-control" id="propietario">
        </div>

        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre">
        </div>

        <div class="mb-3">
            <label for="especie" class="form-label">Especie</label>
            <input type="text" class="form-control" id="especie">
        </div>

        <div class="mb-3">
            <label for="raza" class="form-label">Raza</label>
            <input type="text" class="form-control" id="raza">
        </div>

        <div class="mb-3">
            <label for="edad" class="form-label">Edad</label>
            <input type="text" class="form-control" id="edad">
        </div>

        <div class="mb-3">
            <label for="peso" class="form-label">Peso</label>
            <input type="text" class="form-control" id="peso">
        </div>

        <div class="mb-3">
            <label for="imagen" class="form-label">Imagen</label>
            <input type="text" class="form-control" id="imagen">
        </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Consulta">
            <label class="form-check-label" for="Consulta">
                Consulta
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Urgencia" checked>
            <label class="form-check-label" for="Urgencia">
                Urgencia
            </label>
        </div>

        <button type="button" id="btn" class="btn btn-primary">Agregar datos</button>
    </form>
    `

    document.querySelector("#btn").addEventListener("click", agregarMascotas)
}


crearForm();

const mostrarMascotas = () => {
    mascotas.forEach((m, index) => {
        elemento.innerHTML = "";
        elemento.innerHTML += `
        <a href="#" class="btn btn-primary" onClick="crearForm()">Agregar otra mascota</a>
        <div class="col-12">
            <div class="card col-4" style="width: 18rem;">
                <img src="${m.imagen}" class="card-img-top" alt="Mascota">
                <div class="card-body">
                    <h5 class="card-title">${m.nombre}</h5>
                    <p class="card-text">Propietario: ${m.propietario}</p>
                    <p class="card-text">Raza: ${m.raza}</p>
                    <p class="card-text">Edad: ${m.edad}</p>
                    <p class="card-text">Peso: ${m.peso}</p>
                    <p class="card-text">Tipo de consulta: ${m.tipoConsulta}</p>
                </div>
            </div>
        <div>
        `
    })
    
}
