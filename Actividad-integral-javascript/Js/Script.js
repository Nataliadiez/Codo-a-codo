let seccion = document.querySelector("#section")
//seccion.style.visibility="hidden"

let btnComprarTickets = document.querySelector("#button-tickets")


const comprarTickets = () => {

    seccion.innerHTML = `
    <div class="container" id="contenedor-comprar-tickets">
        <div class="row">
            <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                <div class="card-group">
                    <div class="card">
                        <div class="card-body border border-2 border-primary mr-1">
                            <h4 class="card-title text-center">Estudiante</h4>
                            <p class="card-text text-center">Tienen un descuento</p>
                            <p class="card-title text-center fw-bold">80%</p>
                            <p class="card-text text-center"><small class"text-muted">* presentar documentación</small></p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body border border-2 border-success mr-1">
                            <h4 class="card-title text-center">Trainee</h4>
                            <p class="card-text text-center fs-6">Tienen un descuento</p>
                            <p class="card-title text-center fw-bold">50%</p>
                            <p class="card-text text-center"><small class"text-muted">* presentar documentación</small></p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body border border-2 border-warning mr-1">
                            <h4 class="card-title text-center">Junior</h4>
                            <p class="card-text text-center fs-6">Tienen un descuento</p>
                            <p class="card-title text-center fw-bold">15%</p>
                            <p class="card-text text-center"><small class"text-muted">* presentar documentación</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col text-uppercase text-center">
                <small>Venta</small>
                <h2>Valor de ticket $200</h2>
            </div>
        </div>
        <div class="row">
            <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                <form>
                    <div class="form-row">
                    <div class="d-flex mb-3">
                        <div class="form-group col-12 col-md-6">
                            <input type="text" class="form-control" placeholder="Nombre"></input>
                        </div> 

                        <div class="form-group col-12 col-md-6">
                            <input type="text" class="form-control mr-2" placeholder="Apellido"></input>
                        </div> 
                    </div>
                        <div class="form-group col-12 col-md-12 mb-3">
                            <input type="email" class="form-control" placeholder="Correo"></input>
                        </div> 
                    <div class="d-flex mb-4">
                        <div class="form-group col-12 col-md-6">
                            <label class="mb-2" for="cantidadEntrada">Cantidad</label>
                            <input id="cantidadEntrada" type="text" class="form-control" placeholder="cantidad"></input>
                        </div> 

                        <div class="form-group col-12 col-md-6">
                            <label class="mb-2" for="">Categoria</label>
                            <select class="form-select" id="inputState">
                                    <option value = "estudiante" selected>Estudiante</option>
                                    <option value = "trainee">Trainee</option>
                                    <option value = "junior">Junior</option>
                                </select>
                        </div> 
                    </div> 

                    </div>
                    <div class="form-row">
                        <div class="form-group col">
                            <div id="totalCompra" class="alert alert-primary" role="alert">
                                Total a pagar: $
                            </div>
                        </div>
                    </div>
                    
                        <div class="form-row d-flex">
                            <div class="form-group col">
                                <button type="reset" class="btn btn-codo btn-block">Borrar</button>
                            </div>
                            <div class="form-group col">
                                <button type="button" id="botonCalcular" class="btn btn-codo btn-block" 
                                data-bs-toggle="modal" data-bs-target="#exampleModal">Resumen</button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    </div>

        <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ticket N° </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary">Confirmar compra</button>
        </div>
        </div>
    </div>
    </div>
    `;
    document.querySelector("#botonCalcular").addEventListener("click", () => {
       let inputs = document.querySelectorAll("input");
       let descuento = document.querySelector("#inputState").value; 
       let cantidadEntrada = document.querySelector("#cantidadEntrada").value
       

       let comprador = {
           nombre: inputs[0].value, 
           apellido: inputs[1].value,
           correo: inputs[2].value,
           cantidad: inputs[3].value
       }

       calcularValor(descuento, cantidadEntrada)
    })
};

const calcularValor = (descuento, cantidadEntrada) => {
    crearNumTicket(numAleatorio)
    
    let resultado = 0
    let alertTotalCompra = document.querySelector("#totalCompra")
    let numTicket = document.querySelector("#exampleModalLabel")
    for (let i= 0; i < 8; i++) {
        numTicket.innerHTML += numAleatorio
    }
    
    //faltaban 28 minutos de clase
    
    

    if(descuento === "estudiante"){
        resultado = (cantidadEntrada * 200) * 0.2
    } else if (descuento === "trainee") {
        resultado = (cantidadEntrada * 200) * 0.5
    } else if (descuento === "junior") {
        resultado = (cantidadEntrada * 200) * 0.85
    }

    alertTotalCompra.innerHTML= `Total a pagar: $${resultado}`
    
}


const crearNumTicket = () => {
    let numAleatorio = Math.floor(Math.random() * (1 - 100)) + 1;
    return numAleatorio
    
}
