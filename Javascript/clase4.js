let elemento = document.querySelector("#principal");

// this usas cuando estas adentro del objeto 

let usuario = {
    name: "Natalia",
    edad: 29,
    email: "natalia@gmail.com",
    pass: "pajarito05",
    validar: (e,p) => {
        if(e === usuario.email && p === usuario.pass) {
            return true
        } else {
            return false
        }
    }
}

window.addEventListener("load", function(){

    elemento.innerHTML = `
    <form>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="button" class="btn btn-primary" id="btn">Submit</button>
</form>
    `;

    document.querySelector("#btn").addEventListener("click", () => {
        let email = document.querySelector("#email").value
        let pass = document.querySelector("#password").value
        let entra = usuario.validar(email, pass)
        console.log(entra)
        if (entra) {
            elemento.innerHTML= `
            <h1>Sistema administrativo</h1>
            <p>¡Bienvenido/a ${usuario.name}!</p>
            `
        } else {
            elemento.innerHTML += `
            <div style="visibility: visible;" class="alert alert-danger container-fluid" role="alert" id="div_alerta">
            Usuario o contraseña incorrecto
            </div>
            `
        }
    })

})



let tiempo = setInterval(() => {
//document.querySelector("#div_alerta").style.visibility="hidden"

clearInterval(tiempo)
}, 5000);



// EJERCICIO RESUELTO POR EL PROFE 

/* let elemento = document.getElementById("principal");
// console.log(elemento);
//estructura del objeto 
let usuario ={
    name:"Luis Navas",
    edad:48,
    email:"luis.navas@bue.edu.ar",
    pass:"123456",
    validar:(e,p)=>{
        if(e === usuario.email && p === usuario.pass){
            return true
        }else{
            return false
        }
    }
};
window.addEventListener('load',function(){
    elemento.innerHTML=`
    <form class="col-4">
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button id="btn" type="button" class="btn btn-primary">Ingresar</button>
</form>
    `;
    document.getElementById("btn").addEventListener('click',()=>{
        let email = document.getElementById("email").value
        let pass = document.getElementById("password").value
      
        let entra = usuario.validar(email,pass);
        if(entra){
            // alert('entramos');
            elemento.innerHTML=`
                <h1>Sistema administrativo</h1>
                <p>Bienvenid@ ${usuario.name}</p>
            `;
            // elemento.innerHTML=
            // "<h1>Sisitema administrativo</h1><p>Bienvenid@ "+ usuario.name+ "</p>"
        }else{
            elemento.innerHTML+=`
            <div style="visibility:visible;" id="mensaje" class="alert alert-danger text-center w-75 mt-5" role="alert">
           Usuario o contraseña incorrecto!
          </div>
            `;
            location.reload();
            
        }
        
    })
}) */